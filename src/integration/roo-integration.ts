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
export function log(level: 'info' | 'warn' | 'error' | 'debug', message: string, data: Record<string, any> = {}): void {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    message,
    ...data
  };
  
  // Color codes for different log levels
  const colors = {
    info: '\x1b[36m', // Cyan
    warn: '\x1b[33m', // Yellow
    error: '\x1b[31m', // Red
    debug: '\x1b[90m', // Gray
    reset: '\x1b[0m'  // Reset
  };
  
  // Format the log message for better console visibility
  const colorCode = colors[level] || colors.reset;
  const levelPadded = level.toUpperCase().padEnd(5, ' ');
  const prefix = `${colorCode}[${timestamp}] [${levelPadded}]${colors.reset}`;
  
  // Format the message
  console.log(`${prefix} ${message}`);
  
  // If there's additional data, print it with indentation
  if (Object.keys(data).length > 0) {
    // Filter out sensitive data and large objects
    const sanitizedData = { ...data };
    delete sanitizedData.stack; // Don't show full stack traces in normal logs
    
    // For errors, show a more concise representation
    if (sanitizedData.error && typeof sanitizedData.error === 'object') {
      sanitizedData.error = sanitizedData.error.message || String(sanitizedData.error);
    }
    
    // Print the data in a readable format
    const dataString = JSON.stringify(sanitizedData, null, 2);
    console.log(`${colors.debug}  └─ ${dataString.replace(/\n/g, '\n     ')}${colors.reset}`);
    
    // If this is an error and we have a stack trace, print it separately
    if (level === 'error' && data.stack) {
      console.log(`${colors.error}  └─ Stack: ${data.stack.split('\n')[0]}${colors.reset}`);
      data.stack.split('\n').slice(1).forEach((line: string) => {
        console.log(`${colors.error}      ${line}${colors.reset}`);
      });
    }
  }
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
    const requestId = Math.random().toString(36).substring(2, 10);
    try {
      // Log request with request ID
      log('info', `[${requestId}] 📥 Executing tool: ${name}`, {
        input: JSON.stringify(input).length > 200
          ? { ...input, _note: "Input truncated for logging" }
          : input
      });
      
      // Validate input
      const validationResult = validateInput(input, schema);
      if (!validationResult.valid) {
        log('error', `[${requestId}] ❌ Validation failed for ${name}`, { errors: validationResult.errors });
        throw new Error(`Validation failed: ${validationResult.errors.join(', ')}`);
      }
      
      // Sanitize input
      const sanitizedInput = sanitizeInput(input);
      log('debug', `[${requestId}] 🔍 Input validated and sanitized`);
      
      // Measure execution time
      const startTime = Date.now();
      const { result, executionTime } = measureExecutionTime(handler, [sanitizedInput, ctx]);
      
      // Log response
      const executionTimeMs = parseFloat(executionTime);
      let performanceIndicator = '🚀'; // Fast
      if (executionTimeMs > 500) performanceIndicator = '⚡'; // Medium
      if (executionTimeMs > 1000) performanceIndicator = '🐢'; // Slow
      
      log('info', `[${requestId}] 📤 Completed ${name} ${performanceIndicator}`, {
        executionTime: `${executionTime}ms`,
        resultSize: JSON.stringify(result).length
      });
      
      // Return result
      return result;
    } catch (error: any) {
      // Log error with more details
      log('error', `[${requestId}] ❌ Error executing ${name}`, {
        error: error.message,
        stack: error.stack,
        input: JSON.stringify(input).length > 200
          ? `${JSON.stringify(input).substring(0, 200)}... (truncated)`
          : input
      });
      
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
    // Log server start with a prominent banner
    console.log('\n' + '='.repeat(80));
    console.log(`\x1b[1m\x1b[36m  MCP SERVER: ${server.name} v${server.version}\x1b[0m`);
    console.log(`\x1b[36m  ${server.description}\x1b[0m`);
    console.log('='.repeat(80) + '\n');
    
    log('info', `🚀 Starting MCP server: ${server.name}`, {
      version: server.version,
      tools: Object.keys(server).length,
      resources: Object.keys(server).length
    });
    
    // Add event listeners for client connections and disconnections
    server.on('connection', (clientId: string) => {
      log('info', `🔌 Client connected: ${clientId}`);
    });
    
    server.on('disconnection', (clientId: string) => {
      log('info', `🔌 Client disconnected: ${clientId}`);
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
  log('info', '🔄 Initialized Roo integration', {
    serverName: server.name,
    serverVersion: server.version
  });
  
  // Add a shutdown hook to log when the server is stopping
  process.on('SIGINT', () => {
    log('info', '🛑 Shutting down server due to SIGINT signal...');
  });
  
  process.on('SIGTERM', () => {
    log('info', '🛑 Shutting down server due to SIGTERM signal...');
  });
  
  return enhancedServer;
}