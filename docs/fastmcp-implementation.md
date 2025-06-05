# FastMCP Implementation Guide

This document outlines the implementation of React Design Systems using the FastMCP framework.

## Overview

React Design Systems has been built using the FastMCP framework, which provides a more structured and type-safe approach to building MCP servers. FastMCP offers several advantages:

- Simplified tool and resource definition
- Built-in support for authentication
- Session management
- Image and audio content handling
- Improved logging
- Better error handling
- Support for SSE (Server-Sent Events)
- CORS support
- Progress notifications
- Typed server events
- Prompt argument auto-completion

## Implementation Details

### Server Structure

The MCP server implementation consists of two main files:

1. `src/mcp/server.ts` - Contains the core server implementation with tool and resource definitions
2. `server.ts` - The entry point that creates and starts the server

### Key Components

#### FastMCP Server Creation

The server is created using the `createFastMCPServer` function, which takes server options and returns a configured FastMCP server instance:

```typescript
export function createFastMCPServer(options: {
  name: string;
  description: string;
  version: string;
  port?: number;
  bind?: string;
}) {
  const server = new FastMCP({
    name: options.name,
    version: options.version as `${number}.${number}.${number}`,
  });

  // Register tools and resources
  registerTools(server);
  registerResources(server);

  return server;
}
```

#### Tool Registration

Tools are registered using the `addTool` method, which takes a name, description, parameters schema, and an execute function:

```typescript
server.addTool({
  name: 'tool_name',
  description: 'Tool description',
  parameters: z.object({
    // Parameters schema using Zod
  }),
  execute: async (args, context) => {
    // Tool implementation
    return result;
  },
});
```

#### Resource Registration

Resources are registered using the `addResourceTemplate` method, which takes a URI template, name, MIME type, arguments, and a load function:

```typescript
server.addResourceTemplate({
  uriTemplate: 'uri_template',
  name: 'Resource name',
  mimeType: 'application/json',
  arguments: [
    {
      name: 'arg_name',
      description: 'Argument description',
      required: true,
    },
  ],
  async load(args) {
    // Resource implementation
    return {
      text: JSON.stringify(result),
    };
  },
});
```

### Server Startup

The server can be started in either stdio or SSE mode:

```typescript
// Start in stdio mode
server.start({
  transportType: 'stdio',
});

// Start in SSE mode
server.start({
  transportType: 'sse',
  sse: {
    endpoint: '/sse',
    port: 3001,
  },
});
```

## Differences from Original Implementation

### Tool Definition

#### Original Implementation:

```typescript
server.tool({
  name: 'tool_name',
  description: 'Tool description',
  inputSchema: {
    type: 'object',
    properties: {
      // Properties
    },
    required: ['property'],
  },
  handler: async (input, ctx) => {
    // Handler implementation
    return result;
  },
});
```

#### FastMCP Implementation:

```typescript
server.addTool({
  name: 'tool_name',
  description: 'Tool description',
  parameters: z.object({
    property: z.string(),
  }),
  execute: async (args, context) => {
    // Execute implementation
    return JSON.stringify(result);
  },
});
```

### Resource Definition

#### Original Implementation:

```typescript
server.resource({
  uriPattern: 'uri_pattern/:param',
  handler: async (params, ctx) => {
    // Handler implementation
    return result;
  },
});
```

#### FastMCP Implementation:

```typescript
server.addResourceTemplate({
  uriTemplate: 'uri_template/{param}',
  name: 'Resource name',
  mimeType: 'application/json',
  arguments: [
    {
      name: 'param',
      description: 'Parameter description',
      required: true,
    },
  ],
  async load({ param }) {
    // Load implementation
    return {
      text: JSON.stringify(result),
    };
  },
});
```

## Running the FastMCP Server

### Transport Types

The FastMCP server supports two transport types:

1. **stdio (default)**: Standard input/output transport for local server communication
2. **SSE (Server-Sent Events)**: HTTP-based transport for web applications and remote clients

#### When to Use Each Transport Type

- **stdio**: Use for local development, testing, and when the server is run as a child process
- **SSE**: Use when you need web browser integration, CORS support, or remote client connections

### Running with stdio Transport (Default)

To run the MCP server with the default stdio transport:

```bash
npm run dev
```

### Running with SSE Transport

To run the MCP server with SSE transport:

```bash
npm run dev:sse
```

Or using the command-line argument:

```bash
npm run dev -- --transport sse
```

This will start an HTTP server on the configured port (default: 3001) with the SSE endpoint at `/sse`.

### Command-line Arguments

The server supports the following command-line arguments:

- `--transport` or `-t`: Transport type (`stdio` or `sse`), defaults to `stdio`
- `--port` or `-p`: Port for SSE transport, defaults to 3001
- `--bind` or `-b`: Bind address for SSE transport, defaults to 0.0.0.0

You can add a dedicated script to your `package.json` for running with SSE transport:

```json
"scripts": {
  "dev:sse": "nodemon --exec ts-node server.ts --transport sse"
}
```

Then you can simply run:

```bash
npm run dev:sse
```

### Verifying SSE Transport

To verify that the server is running with SSE transport:

1. Start the server with SSE transport:
   ```bash
   npm run dev:sse
   ```

2. Run the test script:
   ```bash
   npx ts-node test-roo-integration.ts
   ```

3. Check the console output for successful SSE connection messages

## Benefits of FastMCP

1. **Type Safety**: Better TypeScript integration with schema validation
2. **Simplified API**: More intuitive API for defining tools and resources
3. **Enhanced Features**: Built-in support for authentication, sessions, and content types
4. **Better Error Handling**: Improved error reporting and handling
5. **Logging**: Built-in logging capabilities
6. **SSE Support**: Native support for Server-Sent Events
7. **Maintainability**: Cleaner code structure and separation of concerns

## CORS Support

The FastMCP framework provides built-in CORS (Cross-Origin Resource Sharing) support, which is essential for web applications that need to access the MCP server from different domains.

### How CORS Works in FastMCP

When using the SSE transport type, FastMCP automatically sets up an HTTP server with appropriate CORS headers. This allows web applications hosted on different domains to communicate with the MCP server.

### CORS and SSE Transport

CORS support is only available when using the SSE transport type. The stdio transport does not involve HTTP requests, so CORS is not applicable.

When running with SSE transport:
- CORS headers are automatically added to HTTP responses
- Preflight OPTIONS requests are handled correctly
- Web applications can access the MCP server from different origins

For detailed information about CORS support in both the original and FastMCP implementations, refer to the [CORS Support Documentation](./cors-support.md).

## Future Enhancements

1. **Authentication**: Implement authentication for secure access
2. **Session Management**: Utilize session capabilities for stateful interactions
3. **Progress Notifications**: Add progress reporting for long-running operations
4. **Prompt Templates**: Implement prompt templates for standardized interactions
5. **Testing**: Add comprehensive tests for the FastMCP implementation
6. **Custom CORS Configuration**: Add support for customizing CORS settings

## Configuring Roo to Connect via SSE

After setting up the server with SSE transport, you need to configure Roo to connect to it:

### Option 1: Using the Modern Connection Format

Create an `mcp.json` file with the following content:

```json
{
  "connections": [
    {
      "name": "Cloudscape Assistant",
      "type": "sse",
      "url": "http://127.0.0.1:3001",
      "autoConnect": true
    }
  ]
}
```

Make sure the port matches the one configured in your server (default is 3001).

### Option 2: Using the Legacy Format

Create an `mcp.json` file with the following content:

```json
{
  "mcpServers": {
    "cloudscape-assistant": {
      "url": "http://127.0.0.1:3001",
      "disabled": false,
      "alwaysAllow": []
    }
  }
}
```

For more detailed information about configuring Roo, refer to the [Roo Integration Guide](./roo-integration-guide.md).

## Troubleshooting SSE Connection

If you're having issues with the SSE connection:

1. Verify the server is running with SSE transport by checking for the message "Starting server with SSE transport" in the console
2. Ensure the port is not already in use by another application
3. Check that the URL in your Roo configuration matches the server's address and port
4. Verify that CORS is properly configured if connecting from a web application
5. Run the test script to verify the server is working properly: `npx ts-node test-roo-integration.ts`