# MCP Protocol Guide

This guide explains the Model Context Protocol (MCP) used for connecting Roo to MCP servers, and how to use the test scripts to verify your implementation.

## What is the MCP Protocol?

The Model Context Protocol (MCP) is a standardized protocol for communication between AI assistants like Roo and external servers that provide additional tools and resources. It enables AI assistants to extend their capabilities by accessing external data sources, APIs, and functionality.

## Protocol Components

The MCP protocol consists of two main communication channels:

1. **Server-Sent Events (SSE)**: A one-way communication channel from the server to the client, used for real-time updates and notifications.
2. **JSON-RPC 2.0**: A request-response protocol used by the client to call methods on the server.

### Server-Sent Events (SSE)

SSE is used for the server to push events to the client. The client establishes an SSE connection by making a GET request with the `Accept: text/event-stream` header. The server responds with a stream of events in the following format:

```
data: {"type":"connection","clientId":"client_123","server":"server-name","version":"1.0.0"}

data: {"type":"server_info","name":"server-name","description":"Server description","version":"1.0.0","tools":5,"resources":3}

data: {"type":"heartbeat","clientId":"client_123","timestamp":"2025-04-23T12:34:56.789Z"}
```

Each event is a JSON object with a `type` field that indicates the type of event. Common event types include:

- `connection`: Sent when the client first connects
- `server_info`: Provides information about the server
- `heartbeat`: Sent periodically to keep the connection alive

### JSON-RPC 2.0

JSON-RPC is used for the client to call methods on the server. The client makes a POST request with a JSON-RPC 2.0 request object. The server responds with a JSON-RPC 2.0 response object.

#### Request Format

```json
{
  "jsonrpc": "2.0",
  "id": "request-id",
  "method": "method-name",
  "params": {
    // Method-specific parameters
  }
}
```

#### Response Format

```json
{
  "jsonrpc": "2.0",
  "id": "request-id",
  "result": {
    // Method-specific result
  }
}
```

Or, in case of an error:

```json
{
  "jsonrpc": "2.0",
  "id": "request-id",
  "error": {
    "code": -32603,
    "message": "Error message"
  }
}
```

## MCP Endpoints

The MCP protocol defines the following standard endpoints:

### 1. `tools/list`

Lists all available tools provided by the server.

**Request:**
```json
{
  "jsonrpc": "2.0",
  "id": "1",
  "method": "tools/list",
  "params": {}
}
```

**Response:**
```json
{
  "jsonrpc": "2.0",
  "id": "1",
  "result": {
    "tools": [
      {
        "name": "tool-name",
        "description": "Tool description",
        "inputSchema": {
          // JSON Schema for tool input
        }
      }
    ]
  }
}
```

### 2. `tools/call`

Calls a specific tool with the provided arguments.

**Request:**
```json
{
  "jsonrpc": "2.0",
  "id": "2",
  "method": "tools/call",
  "params": {
    "name": "tool-name",
    "arguments": {
      // Tool-specific arguments
    }
  }
}
```

**Response:**
```json
{
  "jsonrpc": "2.0",
  "id": "2",
  "result": {
    // Tool-specific result
  }
}
```

### 3. `resources/list`

Lists all available resources provided by the server.

**Request:**
```json
{
  "jsonrpc": "2.0",
  "id": "3",
  "method": "resources/list",
  "params": {}
}
```

**Response:**
```json
{
  "jsonrpc": "2.0",
  "id": "3",
  "result": {
    "resources": [
      {
        "uriPattern": "resource://pattern"
      }
    ]
  }
}
```

### 4. `resources/read`

Reads a specific resource.

**Request:**
```json
{
  "jsonrpc": "2.0",
  "id": "4",
  "method": "resources/read",
  "params": {
    "uri": "resource://uri"
  }
}
```

**Response:**
```json
{
  "jsonrpc": "2.0",
  "id": "4",
  "result": {
    // Resource-specific content
  }
}
```

## Configuration Formats

There are two main formats for configuring MCP servers in Roo:

### 1. Legacy Format (`mcpServers`)

```json
{
  "mcpServers": {
    "server-name": {
      "url": "http://localhost:3001",
      "disabled": false,
      "alwaysAllow": []
    }
  }
}
```

### 2. Modern Format (`connections`)

```json
{
  "connections": [
    {
      "name": "Server Name",
      "type": "sse",
      "url": "http://localhost:3001",
      "autoConnect": true
    }
  ]
}
```

The modern format supports two connection types:

- **SSE** (`"type": "sse"`): For remote servers that communicate over HTTP
- **stdio** (`"type": "stdio"`): For local servers that communicate over standard input/output

Example of stdio configuration:

```json
{
  "connections": [
    {
      "name": "Server Name",
      "type": "stdio",
      "command": "server-command",
      "args": ["--arg1", "value1"],
      "env": {
        "ENV_VAR": "value"
      },
      "cwd": "${workspaceFolder}",
      "autoConnect": true
    }
  ]
}
```

## Testing MCP Server Implementation

The `test-roo-integration.ts` script tests your MCP server implementation to ensure it correctly implements the MCP protocol. The script tests:

1. SSE connection
2. tools/list endpoint
3. tools/call endpoint
4. resources/list endpoint
5. resources/read endpoint (if resources are available)

### Running the Test

```bash
# Make sure the MCP server is running
npm start

# In another terminal, run the test script
npx ts-node test-roo-integration.ts
```

The test script will:

1. Connect to the server using SSE
2. Request the list of available tools
3. Attempt to call the first available tool
4. Request the list of available resources
5. Attempt to read the first available resource
6. Generate example configuration files

### Generated Configuration Files

The test script generates three example configuration files:

- `mcp.legacy.json`: Legacy format with `mcpServers`
- `mcp.modern.json`: Modern format with `connections` and `type: "sse"`
- `mcp.stdio.json`: Modern format with `connections` and `type: "stdio"`

Choose the appropriate configuration file based on your Roo client's requirements, rename it to `mcp.json`, and place it in your project root.

## Recommended Testing Frameworks

For more comprehensive testing of your MCP server implementation, consider using one of these testing frameworks:

1. **Jest**: A full-featured testing framework with built-in assertions, mocking, and code coverage.
   ```bash
   npm install --save-dev jest @types/jest ts-jest
   ```

2. **Mocha + Chai**: A flexible testing framework with a rich assertion library.
   ```bash
   npm install --save-dev mocha chai @types/mocha @types/chai
   ```

3. **AVA**: A test runner for Node.js with concurrent test execution.
   ```bash
   npm install --save-dev ava
   ```

## Best Practices for MCP Server Implementation

1. **Error Handling**: Properly handle errors and return appropriate JSON-RPC error responses.
2. **Validation**: Validate input parameters against the tool's input schema.
3. **Documentation**: Provide clear descriptions for tools and resources.
4. **Security**: Implement proper security measures, such as input sanitization and authentication if needed.
5. **Performance**: Optimize tool and resource handlers for performance.
6. **Logging**: Implement comprehensive logging for debugging and monitoring.
7. **Heartbeats**: Send periodic heartbeat events to keep SSE connections alive.
8. **Graceful Shutdown**: Handle server shutdown gracefully, closing all client connections.

## Troubleshooting

If you encounter issues with your MCP server implementation:

1. **Check SSE Connection**: Ensure your server correctly implements the SSE protocol with proper headers and event format.
2. **Validate JSON-RPC Responses**: Verify that your JSON-RPC responses follow the 2.0 specification.
3. **Check CORS Headers**: If your server is accessed from a different origin, ensure proper CORS headers are set.
4. **Inspect Network Traffic**: Use browser developer tools or tools like Wireshark to inspect the network traffic.
5. **Enable Verbose Logging**: Increase the logging level in your server to get more detailed information.
6. **Test Individual Endpoints**: Use tools like curl or Postman to test individual endpoints.

## Resources

- [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification)
- [Server-Sent Events (SSE) Specification](https://html.spec.whatwg.org/multipage/server-sent-events.html)
- [MDN Web Docs: Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)