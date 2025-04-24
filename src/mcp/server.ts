/**
 * MCP Server Implementation
 *
 * This is a TypeScript implementation of the MCP server for the Cloudscape component library.
 * It uses Node.js HTTP server to provide a proper server implementation that stays running.
 */

import http from 'http';
import { URL } from 'url';
import { EventEmitter } from 'events';

// Define types for the MCP server
export interface MCPServerOptions {
  name: string;
  description: string;
  version: string;
  port?: number;
  bind?: string;
}

export interface ToolOptions {
  name: string;
  description: string;
  inputSchema: any;
  handler: (input: any, ctx?: any) => any;
}

export interface ResourceOptions {
  uriPattern: string;
  handler: (params: any, ctx?: any) => any;
}

export interface Tool {
  name: string;
  description: string;
  inputSchema: any;
  handler: (input: any, ctx?: any) => any;
}

export interface Resource {
  uriPattern: string;
  handler: (params: any, ctx?: any) => any;
}

// Define request and response types
interface MCPRequest {
  jsonrpc: string;
  id: string;
  method: string;
  params: any;
}

interface MCPResponse {
  jsonrpc: string;
  id: string;
  result?: any;
  error?: {
    code: number;
    message: string;
    data?: any;
  };
}

export class MCPServer extends EventEmitter {
  private _name: string;
  private _description: string;
  private _version: string;
  private port: number;
  private bind: string;
  private tools: Record<string, Tool> = {};
  private resources: Record<string, Resource> = {};
  private httpServer: http.Server | null = null;
  private isRunning: boolean = false;
  private clients: Set<http.ServerResponse> = new Set();
  
  // Public getters for private properties
  get name(): string {
    return this._name;
  }
  
  get description(): string {
    return this._description;
  }
  
  get version(): string {
    return this._version;
  }

  /**
   * Create a new MCP server
   * @param options - Server options
   */
  constructor(options: MCPServerOptions) {
    super();
    this._name = options.name;
    this._description = options.description;
    this._version = options.version;
    this.port = options.port || 3000;
    this.bind = options.bind || '0.0.0.0';
    
    console.log(`Creating MCP server: ${this._name} (${this._version})`);
    console.log(`Description: ${this._description}`);
  }
  
  /**
   * Register a tool
   * @param options - Tool options
   */
  tool(options: ToolOptions): void {
    const { name, description, inputSchema, handler } = options;
    this.tools[name] = { name, description, inputSchema, handler };
    console.log(`Registered tool: ${name}`);
  }
  
  /**
   * Register a resource
   * @param options - Resource options
   */
  resource(options: ResourceOptions): void {
    const { uriPattern, handler } = options;
    this.resources[uriPattern] = { uriPattern, handler };
    console.log(`Registered resource: ${uriPattern}`);
  }
  
  /**
   * Handle HTTP requests
   * @param req - HTTP request
   * @param res - HTTP response
   */
  private async handleRequest(req: http.IncomingMessage, res: http.ServerResponse): Promise<void> {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Max-Age', '86400'); // 24 hours
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }
    
    // Handle SSE connections
    if (req.headers.accept === 'text/event-stream') {
      this.handleSSEConnection(req, res);
      return;
    }
    
    // Handle JSON-RPC requests
    if (req.method === 'POST' && req.headers['content-type']?.includes('application/json')) {
      try {
        // Parse request body
        let body = '';
        for await (const chunk of req) {
          body += chunk.toString();
        }
        
        const request: MCPRequest = JSON.parse(body);
        
        // Validate JSON-RPC request
        if (request.jsonrpc !== '2.0' || !request.id || !request.method) {
          this.sendErrorResponse(res, request.id || '', -32600, 'Invalid Request');
          return;
        }
        
        // Handle request
        await this.handleJSONRPCRequest(request, res);
      } catch (error: any) {
        console.error('Error handling request:', error);
        res.writeHead(500);
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      }
      return;
    }
    
    // Handle other requests
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
  
  /**
   * Handle SSE connections
   * @param req - HTTP request
   * @param res - HTTP response
   */
  private handleSSEConnection(req: http.IncomingMessage, res: http.ServerResponse): void {
    // Generate a unique client ID
    const clientId = `client_${Math.random().toString(36).substring(2, 10)}`;
    
    // Set SSE headers
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });
    
    console.log(`\x1b[32m[SSE] Client connected: ${clientId} from ${req.socket.remoteAddress}\x1b[0m`);
    
    // Send initial connection message
    res.write(`data: ${JSON.stringify({
      type: 'connection',
      clientId,
      server: this.name,
      version: this.version
    })}\n\n`);
    
    // Send server information message
    res.write(`data: ${JSON.stringify({
      type: 'server_info',
      name: this.name,
      description: this.description,
      version: this.version,
      tools: Object.keys(this.tools).length,
      resources: Object.keys(this.resources).length
    })}\n\n`);
    
    // Add client to the set
    this.clients.add(res);
    
    // Emit connection event
    this.emit('connection', clientId);
    
    // Handle client disconnect
    req.on('close', () => {
      console.log(`\x1b[33m[SSE] Client disconnected: ${clientId}\x1b[0m`);
      this.clients.delete(res);
      this.emit('disconnection', clientId);
    });
    
    // Keep connection alive with periodic heartbeats
    const heartbeatInterval = setInterval(() => {
      if (!this.clients.has(res)) {
        clearInterval(heartbeatInterval);
        return;
      }
      
      res.write(`data: ${JSON.stringify({
        type: 'heartbeat',
        clientId,
        timestamp: new Date().toISOString()
      })}\n\n`);
    }, 30000); // Send heartbeat every 30 seconds
  }
  
  /**
   * Handle JSON-RPC requests
   * @param request - JSON-RPC request
   * @param res - HTTP response
   */
  private async handleJSONRPCRequest(request: MCPRequest, res: http.ServerResponse): Promise<void> {
    const { method, params, id } = request;
    const requestId = `req_${Math.random().toString(36).substring(2, 10)}`;
    
    console.log(`\x1b[36m[RPC] ${requestId} Received request: ${method}\x1b[0m`);
    
    try {
      let result: any;
      
      // Handle different methods
      switch (method) {
        case 'tools/list':
          console.log(`\x1b[36m[RPC] ${requestId} Listing tools\x1b[0m`);
          result = this.handleListTools();
          break;
          
        case 'tools/call':
          if (!params.name || !params.arguments) {
            console.log(`\x1b[31m[RPC] ${requestId} Invalid params for tools/call\x1b[0m`);
            this.sendErrorResponse(res, id, -32602, 'Invalid params');
            return;
          }
          console.log(`\x1b[36m[RPC] ${requestId} Calling tool: ${params.name}\x1b[0m`);
          result = await this.handleCallTool(params.name, params.arguments);
          break;
          
        case 'resources/list':
          console.log(`\x1b[36m[RPC] ${requestId} Listing resources\x1b[0m`);
          result = this.handleListResources();
          break;
          
        case 'resources/read':
          if (!params.uri) {
            console.log(`\x1b[31m[RPC] ${requestId} Invalid params for resources/read\x1b[0m`);
            this.sendErrorResponse(res, id, -32602, 'Invalid params');
            return;
          }
          console.log(`\x1b[36m[RPC] ${requestId} Reading resource: ${params.uri}\x1b[0m`);
          result = await this.handleReadResource(params.uri);
          break;
          
        default:
          console.log(`\x1b[31m[RPC] ${requestId} Method not found: ${method}\x1b[0m`);
          this.sendErrorResponse(res, id, -32601, 'Method not found');
          return;
      }
      
      // Send successful response
      console.log(`\x1b[32m[RPC] ${requestId} Successfully handled ${method}\x1b[0m`);
      this.sendSuccessResponse(res, id, result);
    } catch (error: any) {
      console.error(`\x1b[31m[RPC] ${requestId} Error handling method ${method}:\x1b[0m`, error);
      this.sendErrorResponse(res, id, -32603, error.message || 'Internal error');
    }
  }
  
  /**
   * Handle list tools request
   * @returns List of tools
   */
  private handleListTools(): any {
    return {
      tools: Object.values(this.tools).map(tool => ({
        name: tool.name,
        description: tool.description,
        inputSchema: tool.inputSchema
      }))
    };
  }
  
  /**
   * Handle call tool request
   * @param name - Tool name
   * @param args - Tool arguments
   * @returns Tool result
   */
  private async handleCallTool(name: string, args: any): Promise<any> {
    const tool = this.tools[name];
    
    if (!tool) {
      console.error(`\x1b[31m[TOOL] Tool not found: ${name}\x1b[0m`);
      throw new Error(`Tool not found: ${name}`);
    }
    
    console.log(`\x1b[35m[TOOL] Executing tool: ${name}\x1b[0m`);
    console.log(`\x1b[90m[TOOL] Arguments: ${JSON.stringify(args).substring(0, 200)}${JSON.stringify(args).length > 200 ? '...' : ''}\x1b[0m`);
    
    const startTime = Date.now();
    
    try {
      const result = await tool.handler(args);
      const executionTime = Date.now() - startTime;
      
      console.log(`\x1b[32m[TOOL] Tool ${name} executed successfully in ${executionTime}ms\x1b[0m`);
      return result;
    } catch (error: any) {
      const executionTime = Date.now() - startTime;
      console.error(`\x1b[31m[TOOL] Error executing tool ${name} after ${executionTime}ms:\x1b[0m`, error);
      throw new Error(`Error executing tool ${name}: ${error.message}`);
    }
  }
  
  /**
   * Handle list resources request
   * @returns List of resources
   */
  private handleListResources(): any {
    return {
      resources: Object.values(this.resources).map(resource => ({
        uriPattern: resource.uriPattern
      }))
    };
  }
  
  /**
   * Handle read resource request
   * @param uri - Resource URI
   * @returns Resource result
   */
  private async handleReadResource(uri: string): Promise<any> {
    // Parse URI to extract parameters
    const params: Record<string, string> = {};
    
    console.log(`\x1b[34m[RESOURCE] Accessing resource: ${uri}\x1b[0m`);
    
    // Find matching resource
    for (const [pattern, resource] of Object.entries(this.resources)) {
      const match = this.matchUriPattern(uri, pattern, params);
      
      if (match) {
        console.log(`\x1b[34m[RESOURCE] Matched pattern: ${pattern}\x1b[0m`);
        console.log(`\x1b[90m[RESOURCE] Extracted params: ${JSON.stringify(params)}\x1b[0m`);
        
        const startTime = Date.now();
        
        try {
          const result = await resource.handler(params);
          const executionTime = Date.now() - startTime;
          
          console.log(`\x1b[32m[RESOURCE] Resource ${uri} handled successfully in ${executionTime}ms\x1b[0m`);
          return result;
        } catch (error: any) {
          const executionTime = Date.now() - startTime;
          console.error(`\x1b[31m[RESOURCE] Error handling resource ${uri} after ${executionTime}ms:\x1b[0m`, error);
          throw new Error(`Error handling resource ${uri}: ${error.message}`);
        }
      }
    }
    
    console.error(`\x1b[31m[RESOURCE] Resource not found: ${uri}\x1b[0m`);
    throw new Error(`Resource not found: ${uri}`);
  }
  
  /**
   * Match URI pattern
   * @param uri - URI to match
   * @param pattern - Pattern to match against
   * @param params - Parameters to extract
   * @returns Whether the URI matches the pattern
   */
  private matchUriPattern(uri: string, pattern: string, params: Record<string, string>): boolean {
    // Convert pattern to regex
    const patternParts = pattern.split('/');
    const uriParts = uri.split('/');
    
    if (patternParts.length !== uriParts.length) {
      return false;
    }
    
    for (let i = 0; i < patternParts.length; i++) {
      const patternPart = patternParts[i];
      const uriPart = uriParts[i];
      
      if (patternPart.startsWith(':')) {
        // Extract parameter
        const paramName = patternPart.substring(1);
        params[paramName] = uriPart;
      } else if (patternPart !== uriPart) {
        return false;
      }
    }
    
    return true;
  }
  
  /**
   * Send success response
   * @param res - HTTP response
   * @param id - Request ID
   * @param result - Result
   */
  private sendSuccessResponse(res: http.ServerResponse, id: string, result: any): void {
    const response: MCPResponse = {
      jsonrpc: '2.0',
      id,
      result
    };
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  }
  
  /**
   * Send error response
   * @param res - HTTP response
   * @param id - Request ID
   * @param code - Error code
   * @param message - Error message
   * @param data - Error data
   */
  private sendErrorResponse(res: http.ServerResponse, id: string, code: number, message: string, data?: any): void {
    const response: MCPResponse = {
      jsonrpc: '2.0',
      id,
      error: {
        code,
        message,
        data
      }
    };
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  }
  
  /**
   * Start the server
   */
  start(): void {
    if (this.isRunning) {
      console.warn('Server is already running');
      return;
    }
    
    try {
      // Create HTTP server
      this.httpServer = http.createServer((req, res) => {
        this.handleRequest(req, res).catch(error => {
          console.error('Unhandled error in request handler:', error);
          res.writeHead(500);
          res.end(JSON.stringify({ error: 'Internal Server Error' }));
        });
      });
      
      // Set up error handler
      this.httpServer.on('error', (error) => {
        console.error('Server error:', error);
        this.isRunning = false;
        this.emit('error', error);
      });
      
      // Start listening
      this.httpServer.listen(this.port, this.bind, () => {
        this.isRunning = true;
        
        // Create a visually distinct server start message
        console.log('\n' + '='.repeat(80));
        console.log(`\x1b[1m\x1b[32m  MCP SERVER STARTED: ${this._name} v${this._version}\x1b[0m`);
        console.log(`\x1b[32m  ${this._description}\x1b[0m`);
        console.log(`\x1b[32m  Listening on ${this.bind}:${this.port}\x1b[0m`);
        console.log('='.repeat(80));
        
        // Log registered tools and resources
        console.log(`\x1b[36m[SERVER] Registered tools (${Object.keys(this.tools).length}): ${Object.keys(this.tools).join(', ')}\x1b[0m`);
        console.log(`\x1b[36m[SERVER] Registered resources (${Object.keys(this.resources).length}): ${Object.keys(this.resources).join(', ')}\x1b[0m`);
        console.log(`\x1b[32m[SERVER] Server started successfully and ready to accept connections\x1b[0m\n`);
        
        this.emit('start');
      });
      
      // Set up signal handlers for graceful shutdown
      process.on('SIGINT', () => this.stop());
      process.on('SIGTERM', () => this.stop());
      
    } catch (error) {
      console.error('Failed to start server:', error);
      this.isRunning = false;
      throw error;
    }
  }
  
  /**
   * Stop the server
   */
  stop(): void {
    if (!this.isRunning || !this.httpServer) {
      console.warn('\x1b[33m[SERVER] Server is not running\x1b[0m');
      return;
    }
    
    try {
      console.log('\n' + '='.repeat(80));
      console.log(`\x1b[1m\x1b[33m  MCP SERVER STOPPING: ${this._name}\x1b[0m`);
      console.log('='.repeat(80));
      
      // Log active connections that will be closed
      console.log(`\x1b[33m[SERVER] Closing ${this.clients.size} active client connections\x1b[0m`);
      
      // Close all SSE connections
      for (const client of this.clients) {
        // Send a shutdown notice to clients before closing
        try {
          client.write(`data: ${JSON.stringify({
            type: 'shutdown',
            message: 'Server is shutting down',
            timestamp: new Date().toISOString()
          })}\n\n`);
          client.end();
        } catch (err) {
          // Ignore errors when trying to write to potentially already closed connections
        }
      }
      this.clients.clear();
      
      // Close HTTP server
      this.httpServer.close(() => {
        console.log(`\x1b[32m[SERVER] HTTP server closed successfully\x1b[0m`);
        this.isRunning = false;
        this.httpServer = null;
        this.emit('stop');
      });
      
      console.log(`\x1b[33m[SERVER] MCP server stopping...\x1b[0m`);
      
    } catch (error) {
      console.error('\x1b[31m[SERVER] Error stopping server:\x1b[0m', error);
      throw error;
    }
  }
  
  /**
   * Check if the server is running
   */
  get running(): boolean {
    return this.isRunning;
  }
}