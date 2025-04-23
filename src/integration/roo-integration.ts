/**
 * Roo Integration Module
 *
 * This module handles the integration between the Cloudscape MCP Server and Roo.
 * It provides enhanced error handling, logging, and performance optimizations.
 */

// Import required modules
import { MCPServer, Tool, Resource } from '../mcp/server';

/**
 * Validate input parameters for MCP tools
 * @param input - Input parameters
 * @param schema - Input schema
 * @returns Validation result
 */
export function validateInput(input: any, schema: any): { valid: boolean; errors: string[] } {
  const result = {
    valid: true,
    errors: [] as string[]
  };
  
  // Check required fields
  if (schema.required) {
    for (const field of schema.required) {
      if (input[field] === undefined) {
        result.valid = false;
        result.errors.push(`Missing required field: ${field}`);
      }
    }
  }
  
  // Check field types
  if (schema.properties) {
    for (const [field, fieldSchema] of Object.entries(schema.properties)) {
      if (input[field] !== undefined) {
        // Check type
        if ((fieldSchema as any).type === 'string' && typeof input[field] !== 'string') {
          result.valid = false;
          result.errors.push(`Field ${field} must be a string`);
        } else if ((fieldSchema as any).type === 'number' && typeof input[field] !== 'number') {
          result.valid = false;
          result.errors.push(`Field ${field} must be a number`);
        } else if ((fieldSchema as any).type === 'boolean' && typeof input[field] !== 'boolean') {
          result.valid = false;
          result.errors.push(`Field ${field} must be a boolean`);
        } else if ((fieldSchema as any).type === 'object' && (typeof input[field] !== 'object' || Array.isArray(input[field]))) {
          result.valid = false;
          result.errors.push(`Field ${field} must be an object`);
        } else if ((fieldSchema as any).type === 'array' && !Array.isArray(input[field])) {
          result.valid = false;
          result.errors.push(`Field ${field} must be an array`);
        }
        
        // Check enum values
        if ((fieldSchema as any).enum && !(fieldSchema as any).enum.includes(input[field])) {
          result.valid = false;
          result.errors.push(`Field ${field} must be one of: ${(fieldSchema as any).enum.join(', ')}`);
        }
      }
    }
  }
  
  return result;
}

/**
 * Sanitize input to prevent security issues
 * @param input - Input parameters
 * @returns Sanitized input
 */
export function sanitizeInput(input: any): any {
  const sanitized: any = {};
  
  for (const [key, value] of Object.entries(input)) {
    if (typeof value === 'string') {
      // Sanitize strings to prevent injection attacks
      sanitized[key] = value.replace(/[;<>&]/g, '');
    } else if (typeof value === 'object' && value !== null) {
      // Recursively sanitize objects
      sanitized[key] = sanitizeInput(value);
    } else {
      // Pass through other types
      sanitized[key] = value;
    }
  }
  
  return sanitized;
}

/**
 * Log MCP server activity
 * @param level - Log level (info, warn, error)
 * @param message - Log message
 * @param data - Additional data
 */
export function log(level: 'info' | 'warn' | 'error', message: string, data: Record<string, any> = {}): void {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    message,
    ...data
  };
  
  // In a production environment, this would write to a log file or service
  console.log(JSON.stringify(logEntry));
}

/**
 * Measure execution time of a function
 * @param fn - Function to measure
 * @param args - Function arguments
 * @returns Result and execution time
 */
export function measureExecutionTime<T>(fn: (...args: any[]) => T, args: any[]): { result: T; executionTime: string } {
  const startTime = Date.now();
  const result = fn(...args);
  const endTime = Date.now();
  const executionTime = (endTime - startTime).toFixed(2);
  
  return {
    result,
    executionTime
  };
}

/**
 * Create a wrapped handler with validation, sanitization, logging, and performance measurement
 * @param handler - Original handler function
 * @param schema - Input schema
 * @param name - Handler name
 * @returns Wrapped handler
 */
function createWrappedHandler(handler: (input: any, ctx?: any) => any, schema: any, name: string): (input: any, ctx?: any) => any {
  return function(input: any, ctx?: any): any {
    try {
      // Log request
      log('info', `Executing ${name}`, { input });
      
      // Validate input
      const validationResult = validateInput(input, schema);
      if (!validationResult.valid) {
        log('error', `Validation failed for ${name}`, { errors: validationResult.errors });
        throw new Error(`Validation failed: ${validationResult.errors.join(', ')}`);
      }
      
      // Sanitize input
      const sanitizedInput = sanitizeInput(input);
      
      // Measure execution time
      const { result, executionTime } = measureExecutionTime(handler, [sanitizedInput, ctx]);
      
      // Log response
      log('info', `Completed ${name}`, { executionTime });
      
      // Return result
      return result;
    } catch (error: any) {
      // Log error
      log('error', `Error executing ${name}`, { error: error.message, stack: error.stack });
      
      // Rethrow error
      throw error;
    }
  };
}

/**
 * Wrap an MCP server with enhanced functionality
 * @param server - MCP server instance
 * @returns Enhanced MCP server
 */
function enhanceMCPServer(server: MCPServer): MCPServer {
  // Store original methods
  const originalTool = server.tool.bind(server);
  const originalResource = server.resource.bind(server);
  const originalStart = server.start.bind(server);
  
  // Override tool method
  server.tool = function(options: any): void {
    const { name, description, inputSchema, handler } = options;
    
    // Create wrapped handler
    const wrappedHandler = createWrappedHandler(handler, inputSchema, name);
    
    // Register tool with original method
    return originalTool({
      name,
      description,
      inputSchema,
      handler: wrappedHandler
    });
  };
  
  // Override resource method
  server.resource = function(options: any): void {
    const { uriPattern, handler } = options;
    
    // Create wrapped handler
    const wrappedHandler = createWrappedHandler(handler, {}, uriPattern);
    
    // Register resource with original method
    return originalResource({
      uriPattern,
      handler: wrappedHandler
    });
  };
  
  // Override start method
  server.start = function(): void {
    // Log server start
    log('info', `Starting MCP server: ${server.name}`, {
      version: server.version,
      tools: Object.keys(server.tools),
      resources: Object.keys(server.resources)
    });
    
    // Call original start method
    return originalStart();
  };
  
  return server;
}

/**
 * Initialize the Roo integration
 * @param server - MCP server instance
 * @returns Enhanced MCP server
 */
export function initializeRooIntegration(server: MCPServer): MCPServer {
  // Enhance MCP server with validation, logging, and performance measurement
  const enhancedServer = enhanceMCPServer(server);
  
  // Log initialization
  log('info', 'Initialized Roo integration', {
    serverName: server.name,
    serverVersion: server.version
  });
  
  return enhancedServer;
}