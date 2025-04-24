# CORS Support in MCP Cloudscape Assistant

This document outlines how Cross-Origin Resource Sharing (CORS) is implemented in both the original and FastMCP versions of the MCP Cloudscape Assistant server.

## What is CORS?

Cross-Origin Resource Sharing (CORS) is a security feature implemented by browsers that restricts web pages from making requests to a different domain than the one that served the original page. CORS is essential for web applications that need to access APIs or resources from different domains.

## CORS in Original Server Implementation

The original server implementation (`src/mcp/server.ts`) has explicit CORS support built into the `handleRequest` method:

```typescript
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
```

This implementation:
- Allows requests from any origin (`*`)
- Supports GET, POST, and OPTIONS methods
- Allows Content-Type, Accept, and Authorization headers
- Caches preflight requests for 24 hours (86400 seconds)
- Properly handles OPTIONS preflight requests

## CORS in FastMCP Implementation

The FastMCP framework (`server-fastmcp.ts`) has built-in CORS support. According to the FastMCP documentation (see `docs/fastmcp-implementation.md`), CORS support is one of the features provided by the framework.

The FastMCP implementation handles CORS automatically when using the SSE transport type. When the server is started with the `transportType: 'sse'` option, the FastMCP framework sets up an HTTP server with appropriate CORS headers.

## Configuring CORS

### Original Server

To modify CORS settings in the original server implementation, edit the `handleRequest` method in `src/mcp/server.ts`:

```typescript
// Example: Restrict to specific origins
res.setHeader('Access-Control-Allow-Origin', 'https://example.com');

// Example: Allow additional methods
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

// Example: Allow additional headers
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Custom-Header');
```

### FastMCP Server

The FastMCP framework handles CORS automatically. If you need to customize CORS settings, you would need to refer to the FastMCP documentation for the specific configuration options available.

## Testing CORS

To test if CORS is properly configured:

1. Start the server (either original or FastMCP version)
2. Create a simple HTML page on a different domain or port
3. Use JavaScript to make a fetch request to the server
4. Check if the request succeeds or if there are CORS errors in the browser console

Example test code:

```html
<!DOCTYPE html>
<html>
<head>
  <title>CORS Test</title>
</head>
<body>
  <h1>CORS Test</h1>
  <button id="testButton">Test CORS</button>
  <pre id="result"></pre>

  <script>
    document.getElementById('testButton').addEventListener('click', async () => {
      try {
        const response = await fetch('http://localhost:3000/sse', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: '1',
            method: 'tools/list',
            params: {}
          })
        });
        
        const data = await response.json();
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
      } catch (error) {
        document.getElementById('result').textContent = 'Error: ' + error.message;
      }
    });
  </script>
</body>
</html>
```

## Conclusion

Both server implementations support CORS, allowing the MCP Cloudscape Assistant to be accessed from web applications hosted on different domains. The original implementation has explicit CORS configuration, while the FastMCP implementation leverages the framework's built-in CORS support.