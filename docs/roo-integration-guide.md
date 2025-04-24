# Roo Integration Guide

This guide explains how to properly connect the Cloudscape Assistant MCP server to Roo. For detailed information about the MCP protocol, see the [MCP Protocol Guide](./mcp-protocol-guide.md).

## Configuration

To connect Roo to the Cloudscape Assistant MCP server, you need to add the server to your Roo configuration. There are two ways to do this:

### Option 1: Manual Configuration in Roo

1. Click on the MCP icon in the Roo sidebar
2. Click "Add Connection"
3. Enter the following details:
   - Name: Cloudscape Assistant
   - URL: http://localhost:3001 (or your custom port if specified)
4. Click "Connect"

### Option 2: Using mcp.json Configuration File (Legacy Format)

Create an `mcp.json` file in your project root with the following content:

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

**Important**: Note the correct spelling of "cloudscape-assistant" with two 's' characters, not three.

### Option 3: Using Modern Connection Format with mcp.json

For a more modern configuration using the `connections` format:

#### For Remote Servers (SSE)

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

#### For Local Servers (stdio)

```json
{
  "connections": [
    {
      "name": "Cloudscape Assistant",
      "type": "stdio",
      "command": "mcp-cloudscape-assistant",
      "args": ["--port", "3001"],
      "env": {},
      "cwd": "${workspaceFolder}",
      "autoConnect": true
    }
  ]
}
```

## Testing the MCP Server

To verify that your MCP server correctly implements the protocol expected by Roo, use the comprehensive test script:

```bash
# Run the comprehensive test script
ts-node test-roo-integration.ts
```

This script tests:
1. SSE connection
2. tools/list endpoint
3. tools/call endpoint
4. resources/list endpoint
5. resources/read endpoint (if resources are available)

The script will also generate example configuration files in different formats:
- `mcp.legacy.json`: Legacy format with `mcpServers`
- `mcp.modern.json`: Modern format with `connections` and `type: "sse"`
- `mcp.stdio.json`: Modern format with `connections` and `type: "stdio"`

You can also run individual tests for specific components:

```bash
# Test just the tools endpoint
ts-node test-tools.ts

# Test just the resources endpoint
ts-node test-resources.ts
```

## Troubleshooting

If you're experiencing connection issues:

1. Ensure the MCP server is running on the specified port (default: 3001)
2. Check for typos in the server name and URL
3. Verify that CORS is properly configured
4. Check that the server is implementing the MCP protocol correctly
5. Run the test scripts to verify the server is working properly
6. Check the server logs for any error messages
7. Verify your mcp.json file is correctly formatted and in the right location
8. Make sure your Roo client supports the configuration format you're using

For more detailed troubleshooting, refer to the [MCP Protocol Guide](./mcp-protocol-guide.md#troubleshooting).

## Understanding the MCP Protocol

The Model Context Protocol (MCP) consists of two main communication channels:

1. **Server-Sent Events (SSE)**: A one-way communication channel from the server to the client
2. **JSON-RPC 2.0**: A request-response protocol for the client to call methods on the server

The protocol defines four standard endpoints:
- `tools/list`: Lists all available tools
- `tools/call`: Calls a specific tool with arguments
- `resources/list`: Lists all available resources
- `resources/read`: Reads a specific resource

For a complete explanation of the protocol, see the [MCP Protocol Guide](./mcp-protocol-guide.md).

## Testing the Connection

After configuring the connection, you should see "Cloudscape Assistant" in your list of available MCP servers in Roo. You can then use the Cloudscape Assistant tools and resources in your Roo conversations.

To verify the connection is working properly:
1. Open Roo
2. Click on the MCP icon in the sidebar
3. Check that "Cloudscape Assistant" is listed and shows as connected
4. Try using one of the tools or resources in a conversation

## Best Practices

1. **Use the Latest Configuration Format**: The `connections` format provides more flexibility and is recommended for new implementations.
2. **Test Thoroughly**: Always run the test scripts before deploying your MCP server.
3. **Provide Clear Documentation**: Document your tools and resources clearly for users.
4. **Handle Errors Gracefully**: Implement proper error handling in your server.
5. **Monitor Performance**: Keep an eye on server performance, especially for resource-intensive tools.