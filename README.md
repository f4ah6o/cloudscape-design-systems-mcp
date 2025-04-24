# Cloudscape MCP Assistant

A Model Context Protocol (MCP) server that enhances Roo's capabilities with comprehensive AWS Cloudscape Design System support, enabling efficient component discovery, documentation access, and code generation.

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Roo AI Assistant

### Option 1: Install from npm (Recommended)

Install the MCP Cloudscape Assistant globally:

```
npm install -g @agentience/mcp-cloudscape-assistant
```

This installs the pre-built package from npm and makes the `mcp-cloudscape-assistant` command available globally.

### Option 2: Install from Source

If you prefer to build from source:

1. Clone the repository:
```
git clone https://github.com/agentience/mcp-cloudscape-assistant.git
cd mcp-cloudscape-assistant
```

2. Install dependencies:
```
npm install
```

3. Build the package:
```
npm run build
```

4. Optionally, link the package globally:
```
npm link
```

## Setting Up Roo Integration

After installation, you need to connect the MCP server to Roo:

1. Start the MCP server in a terminal:

```
# If installed globally from npm (Option 1)
mcp-cloudscape-assistant

# To specify a custom port
mcp-cloudscape-assistant --port 8080
# or
mcp-cloudscape-assistant -p 8080
# or
PORT=8080 mcp-cloudscape-assistant

# To specify a custom bind address
mcp-cloudscape-assistant --bind 127.0.0.1
# or
mcp-cloudscape-assistant -b 127.0.0.1
# or
BIND=127.0.0.1 mcp-cloudscape-assistant

# To run with SSE transport (recommended for web integration)
TRANSPORT_TYPE=sse mcp-cloudscape-assistant

# If installed from source without npm link (Option 2)
node dist/server.js

# To specify a custom port
node dist/server.js --port 8080
# or
node dist/server.js -p 8080
# or
PORT=8080 node dist/server.js

# To specify a custom bind address
node dist/server.js --bind 127.0.0.1
# or
node dist/server.js -b 127.0.0.1
# or
BIND=127.0.0.1 node dist/server.js

# To run with SSE transport (recommended for web integration)
TRANSPORT_TYPE=sse node dist/server.js
```

2. Verify the server is running - you should see a message indicating the server is listening on the specified port (default: 3000). The server will stay running until manually terminated.

3. In Roo, connect to the MCP server:
   - Click on the MCP icon in the sidebar
   - Click "Add Connection"
   - Enter the following details:
     - Name: Cloudscape Assistant
     - URL: http://localhost:3001 (or your custom port if specified)
   - Click "Connect"

4. Once connected, you'll see "Cloudscape Assistant" in your list of available MCP servers in Roo.

5. You can now use the Cloudscape Assistant tools and resources in your Roo conversations.

## Troubleshooting Roo Integration

If you're experiencing issues connecting the Cloudscape Assistant to Roo, try the following steps:

1. **Use SSE transport**: For the most reliable connection with Roo, use the SSE transport:
   ```
   TRANSPORT_TYPE=sse mcp-cloudscape-assistant
   ```
   Or if using the development version:
   ```
   npm run dev:fastmcp:sse
   ```

2. **Check the server name**: Ensure you're using the correct server name in your configuration. The server name should be `cloudscape-assistant` (with two 's' characters, not three).

3. **Verify the server is running**: Make sure the MCP server is running on the specified port. You can check this by running the test scripts:
   ```
   ts-node test-tools.ts
   ts-node test-resources.ts
   ts-node test-roo-integration.ts
   ```

4. **Check CORS settings**: If you're experiencing CORS issues, make sure your browser allows connections to the server. Note that CORS is only relevant when using SSE transport.

5. **Use the correct URL**: The URL should be `http://localhost:3001` or `http://127.0.0.1:3001` (or your custom port if specified).

6. **Restart the server**: Sometimes restarting the server can resolve connection issues:
   ```
   # Stop the current server (Ctrl+C)
   # Then restart it with SSE transport
   TRANSPORT_TYPE=sse PORT=3001 npm start
   ```

For more detailed troubleshooting information, see the [Roo Integration Guide](docs/roo-integration-guide.md).

## What Problems Does It Solve?

The Cloudscape MCP Assistant addresses several challenges developers face when working with AWS Cloudscape Design System:

- **Component Discovery**: Quickly find the right Cloudscape component for your needs through intuitive search
- **Documentation Access**: Access comprehensive documentation for components directly within Roo
- **Code Generation**: Generate boilerplate code for components and common patterns
- **Property Exploration**: Understand component properties and their relationships
- **Best Practices**: Learn recommended usage patterns and implementation approaches

## How It Works

The Cloudscape MCP Assistant serves as a bridge between Roo and the AWS Cloudscape Design System by:

1. Providing a searchable registry of all Cloudscape components with metadata
2. Offering tools to generate code snippets for components and common patterns
3. Delivering comprehensive documentation and examples
4. Enabling property exploration to understand component capabilities
5. Optimizing the development workflow through Roo integration

## Available MCP Tools

### search_components

Search for Cloudscape components based on query, category, and tags.

```javascript
{
  "query": "table",
  "category": "display",
  "tags": ["data", "grid"],
  "limit": 5
}
```

### get_component_details

Get detailed information about a specific component.

```javascript
{
  "componentId": "table"
}
```

### generate_component_code

Generate code for a component with specified props, children, and event handlers.

```javascript
{
  "componentId": "button",
  "props": {
    "variant": "primary",
    "disabled": false
  },
  "children": "Submit",
  "eventHandlers": {
    "onClick": "() => console.log('Button clicked')"
  }
}
```

### generate_pattern_code

Generate code for a common Cloudscape pattern with customizations.

```javascript
{
  "patternId": "data-table",
  "customizations": {
    "columnDefinitions": [
      {
        "id": "name",
        "header": "Name",
        "cell": "item => item.name"
      },
      {
        "id": "type",
        "header": "Type",
        "cell": "item => item.type"
      }
    ],
    "items": "items"
  }
}
```

### setup

Get setup instructions for the frontend-code mode.

```javascript
{}
```

### get_component_examples

Get usage examples for a component.

```javascript
{
  "componentId": "table",
  "type": "basic",
  "limit": 3
}
```

## Available MCP Resources

The Cloudscape MCP Server provides the following resources:

- `cloudscape://components/{componentId}`: Get component details
- `cloudscape://categories/{categoryId}`: Get category details
- `cloudscape://patterns/{patternId}`: Get pattern details
- `cloudscape://examples/{exampleId}`: Get example details
- `cloudscape://properties/{componentId}/{propertyId}`: Get property details

## Development

For information on developing or contributing to the Cloudscape MCP Assistant, please see [DEVELOPMENT.md](DEVELOPMENT.md).

## Automatic Connection with mcp.json

You can automate the connection between Roo AI Assistant and the Cloudscape MCP Assistant by creating an `mcp.json` file in your project root. This allows Roo to automatically discover and connect to the MCP server without manual setup.

### mcp.json Examples

#### For Local MCP Servers

If you want Roo to automatically start and connect to a local instance of the MCP server, create an `mcp.json` file in your project root with the following content:

```json
{
  "connections": [
    {
      "name": "Cloudscape Assistant",
      "type": "stdio",
      "command": "mcp-cloudscape-assistant",
      "args": ["--port", "3000"],
      "env": {},
      "cwd": "${workspaceFolder}",
      "autoConnect": true
    }
  ]
}
```

#### For Remote MCP Servers

If you want to connect to a remotely running MCP server (for example, on another machine or in a cloud environment), use the following format:

```json
{
  "connections": [
    {
      "name": "Cloudscape Assistant",
      "type": "sse",
      "url": "http://remote-server-address:3001",
      "autoConnect": true
    }
  ]
}
```

**Important**: When connecting to a remote server, make sure it's running with SSE transport enabled:

```bash
TRANSPORT_TYPE=sse mcp-cloudscape-assistant
```

### Configuration Options

#### Common Options
- `name`: The display name for the MCP server in Roo
- `autoConnect`: Whether to automatically connect to the server when Roo starts

#### Local Server Options (type: "stdio")
- `type`: Connection type (use "stdio" for local servers)
- `command`: The command to start the MCP server
- `args`: Command line arguments for the server
- `env`: Environment variables to set when starting the server
- `cwd`: Working directory for the server (${workspaceFolder} refers to your project root)

#### Remote Server Options (type: "sse")
- `type`: Connection type (use "sse" for remote servers)
- `url`: The URL of the remote MCP server
- `headers`: (Optional) HTTP headers to include in the request to the remote server

**Note**: When using the "sse" connection type, the server must be running with SSE transport enabled (`TRANSPORT_TYPE=sse`).

With these configurations, Roo will automatically connect to the Cloudscape MCP Assistant when you open your project, whether it's running locally or remotely.

## License

MIT