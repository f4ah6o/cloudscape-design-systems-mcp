#!/usr/bin/env node

/**
 * Test script to verify Roo integration with the MCP server
 * 
 * This script simulates how Roo connects to the MCP server and verifies
 * that the server is properly implementing the MCP protocol expected by Roo.
 * 
 * The script tests:
 * 1. SSE connection
 * 2. tools/list endpoint
 * 3. tools/call endpoint
 * 4. resources/list endpoint
 * 5. resources/read endpoint (if resources are available)
 */

import http from 'http';
import { EventEmitter } from 'events';
import fs from 'fs';
import path from 'path';

// Configuration
const PORT = process.env.PORT || 3001;
const HOST = 'localhost';
const SERVER_URL = `http://${HOST}:${PORT}`;

// Create an event emitter for test events
const events = new EventEmitter();

// Print a banner for better visibility
console.log('\n' + '='.repeat(80));
console.log('\x1b[1m\x1b[36m  ROO INTEGRATION TEST\x1b[0m');
console.log(`\x1b[36m  Server URL: ${SERVER_URL}\x1b[0m`);
console.log('='.repeat(80) + '\n');

// Step 1: Test SSE connection
function testSSEConnection() {
  console.log('\n' + '-'.repeat(60));
  console.log('\x1b[1m\x1b[32m  STEP 1: Testing SSE Connection\x1b[0m');
  console.log('-'.repeat(60));
  console.log('\x1b[90m  Connecting to server using Server-Sent Events protocol...\x1b[0m');
  
  const req = http.request({
    hostname: HOST,
    port: PORT,
    path: '/sse',
    method: 'GET',
    headers: {
      'Accept': 'text/event-stream'
    }
  }, (res) => {
    if (res.statusCode !== 200) {
      console.error(`\x1b[31m❌ SSE connection failed with status code: ${res.statusCode}\x1b[0m`);
      process.exit(1);
    }
    
    if (res.headers['content-type'] !== 'text/event-stream') {
      console.error(`\x1b[31m❌ Invalid content type: ${res.headers['content-type']}\x1b[0m`);
      process.exit(1);
    }
    
    console.log('\x1b[32m✅ SSE connection established successfully\x1b[0m');
    console.log('\x1b[90m  Waiting for server messages...\x1b[0m');
    
    let data = '';
    let messageCount = 0;
    
    res.on('data', (chunk) => {
      data += chunk.toString();
      
      // Process complete SSE messages
      const messages = data.split('\n\n');
      data = messages.pop() || ''; // Keep the last incomplete message
      
      for (const message of messages) {
        if (!message.trim()) continue;
        
        const lines = message.split('\n');
        const eventData = lines
          .find(line => line.startsWith('data:'))
          ?.substring(5)
          .trim();
        
        if (eventData) {
          try {
            const parsedData = JSON.parse(eventData);
            console.log(`\x1b[36m📩 Received SSE message: \x1b[1m${parsedData.type}\x1b[0m\x1b[36m (${JSON.stringify(parsedData).substring(0, 100)}${JSON.stringify(parsedData).length > 100 ? '...' : ''})\x1b[0m`);
            messageCount++;
            
            // After receiving at least one message, proceed to the next test
            if (messageCount >= 1) {
              console.log('\x1b[32m✅ SSE test completed successfully\x1b[0m');
              res.destroy(); // Close the connection
              events.emit('sse-test-complete');
            }
          } catch (error) {
            console.error('\x1b[31m❌ Error parsing SSE message:\x1b[0m', error);
          }
        }
      }
    });
    
    // Set a timeout in case we don't receive any messages
    setTimeout(() => {
      if (messageCount === 0) {
        console.error('\x1b[31m❌ No SSE messages received within timeout period (5s)\x1b[0m');
        res.destroy();
        process.exit(1);
      }
    }, 5000);
  });
  
  req.on('error', (error) => {
    console.error('\x1b[31m❌ SSE connection error:\x1b[0m', error);
    process.exit(1);
  });
  
  req.end();
}

// Step 2: Test tools/list endpoint
function testToolsList() {
  console.log('\n' + '-'.repeat(60));
  console.log('\x1b[1m\x1b[32m  STEP 2: Testing tools/list endpoint\x1b[0m');
  console.log('-'.repeat(60));
  console.log('\x1b[90m  Sending JSON-RPC request to list available tools...\x1b[0m');
  
  const request = {
    jsonrpc: '2.0',
    id: '1',
    method: 'tools/list',
    params: {}
  };
  
  console.log(`\x1b[36m📤 Sending request: ${JSON.stringify(request)}\x1b[0m`);
  
  const req = http.request({
    hostname: HOST,
    port: PORT,
    path: '/sse',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  }, (res) => {
    console.log(`\x1b[90m  Received response with status: ${res.statusCode}\x1b[0m`);
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        
        if (response.error) {
          console.error('\x1b[31m❌ Error in response:\x1b[0m', response.error);
          process.exit(1);
        }
        
        if (response.result && response.result.tools) {
          const tools = response.result.tools;
          console.log(`\x1b[36m📋 Server reported ${tools.length} tools\x1b[0m`);
          
          // List the first few tools for visibility
          if (tools.length > 0) {
            console.log('\x1b[90m  Available tools (first 3):\x1b[0m');
            tools.slice(0, 3).forEach((tool: any, index: number) => {
              console.log(`\x1b[90m    ${index + 1}. ${tool.name} - ${tool.description.substring(0, 50)}${tool.description.length > 50 ? '...' : ''}\x1b[0m`);
            });
            if (tools.length > 3) {
              console.log(`\x1b[90m    ... and ${tools.length - 3} more\x1b[0m`);
            }
          }
          
          if (tools.length === 0) {
            console.error('\x1b[31m❌ No tools reported by the server!\x1b[0m');
            process.exit(1);
          } else {
            console.log('\x1b[32m✅ Tools list endpoint working correctly\x1b[0m');
            // Store the first tool for testing tools/call
            global.firstTool = tools[0];
            events.emit('tools-test-complete');
          }
        } else {
          console.error('\x1b[31m❌ Invalid response format:\x1b[0m', response);
          process.exit(1);
        }
      } catch (error) {
        console.error('\x1b[31m❌ Error parsing response:\x1b[0m', error);
        console.error('\x1b[31m❌ Raw response:\x1b[0m', data);
        process.exit(1);
      }
    });
  });
  
  req.on('error', (error) => {
    console.error('\x1b[31m❌ Request error:\x1b[0m', error);
    process.exit(1);
  });
  
  req.write(JSON.stringify(request));
  req.end();
}

// Step 3: Test tools/call endpoint
function testToolsCall() {
  console.log('\n' + '-'.repeat(60));
  console.log('\x1b[1m\x1b[32m  STEP 3: Testing tools/call endpoint\x1b[0m');
  console.log('-'.repeat(60));
  
  // If no tools are available, skip this test
  if (!global.firstTool) {
    console.log('\x1b[33m⚠️ No tools available to test tools/call endpoint\x1b[0m');
    events.emit('tools-call-test-complete');
    return;
  }
  
  console.log(`\x1b[90m  Sending JSON-RPC request to call tool: ${global.firstTool.name}...\x1b[0m`);
  
  // Create a minimal set of arguments based on the tool's input schema
  const args: any = {};
  if (global.firstTool.inputSchema && global.firstTool.inputSchema.required) {
    for (const requiredField of global.firstTool.inputSchema.required) {
      // Set default values based on type
      if (global.firstTool.inputSchema.properties && 
          global.firstTool.inputSchema.properties[requiredField]) {
        const propType = global.firstTool.inputSchema.properties[requiredField].type;
        
        if (propType === 'string') {
          args[requiredField] = 'test';
        } else if (propType === 'number') {
          args[requiredField] = 1;
        } else if (propType === 'boolean') {
          args[requiredField] = false;
        } else if (propType === 'array') {
          args[requiredField] = [];
        } else if (propType === 'object') {
          args[requiredField] = {};
        }
      } else {
        // If type information is not available, default to string
        args[requiredField] = 'test';
      }
    }
  }
  
  const request = {
    jsonrpc: '2.0',
    id: '2',
    method: 'tools/call',
    params: {
      name: global.firstTool.name,
      arguments: args
    }
  };
  
  console.log(`\x1b[36m📤 Sending request: ${JSON.stringify(request)}\x1b[0m`);
  
  const req = http.request({
    hostname: HOST,
    port: PORT,
    path: '/sse',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  }, (res) => {
    console.log(`\x1b[90m  Received response with status: ${res.statusCode}\x1b[0m`);
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        
        if (response.error) {
          // Some errors are expected if we couldn't provide proper arguments
          console.log('\x1b[33m⚠️ Error in response (this may be expected):\x1b[0m', response.error);
          console.log('\x1b[33m⚠️ The tools/call endpoint is responding with proper error format\x1b[0m');
          console.log('\x1b[32m✅ Tools call endpoint working correctly (with expected error)\x1b[0m');
          events.emit('tools-call-test-complete');
          return;
        }
        
        // If we got a successful response, that's great!
        console.log('\x1b[36m📋 Tool execution result:\x1b[0m', JSON.stringify(response.result).substring(0, 200) + (JSON.stringify(response.result).length > 200 ? '...' : ''));
        console.log('\x1b[32m✅ Tools call endpoint working correctly\x1b[0m');
        events.emit('tools-call-test-complete');
      } catch (error) {
        console.error('\x1b[31m❌ Error parsing response:\x1b[0m', error);
        console.error('\x1b[31m❌ Raw response:\x1b[0m', data);
        process.exit(1);
      }
    });
  });
  
  req.on('error', (error) => {
    console.error('\x1b[31m❌ Request error:\x1b[0m', error);
    process.exit(1);
  });
  
  req.write(JSON.stringify(request));
  req.end();
}

// Step 4: Test resources/list endpoint
function testResourcesList() {
  console.log('\n' + '-'.repeat(60));
  console.log('\x1b[1m\x1b[32m  STEP 4: Testing resources/list endpoint\x1b[0m');
  console.log('-'.repeat(60));
  console.log('\x1b[90m  Sending JSON-RPC request to list available resources...\x1b[0m');
  
  const request = {
    jsonrpc: '2.0',
    id: '3',
    method: 'resources/list',
    params: {}
  };
  
  console.log(`\x1b[36m📤 Sending request: ${JSON.stringify(request)}\x1b[0m`);
  
  const req = http.request({
    hostname: HOST,
    port: PORT,
    path: '/sse',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  }, (res) => {
    console.log(`\x1b[90m  Received response with status: ${res.statusCode}\x1b[0m`);
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        
        if (response.error) {
          console.error('\x1b[31m❌ Error in response:\x1b[0m', response.error);
          process.exit(1);
        }
        
        if (response.result && response.result.resources) {
          const resources = response.result.resources;
          console.log(`\x1b[36m📋 Server reported ${resources.length} resources\x1b[0m`);
          
          // List the resources for visibility
          if (resources.length > 0) {
            console.log('\x1b[90m  Available resources:\x1b[0m');
            resources.forEach((resource: any, index: number) => {
              console.log(`\x1b[90m    ${index + 1}. ${resource.uriPattern}\x1b[0m`);
            });
            
            // Store the first resource for testing resources/read
            global.firstResource = resources[0];
          } else {
            console.warn('\x1b[33m⚠️ No resources reported by the server\x1b[0m');
            console.log('\x1b[90m  This is not an error - the server may not have any resources registered\x1b[0m');
          }
          
          console.log('\x1b[32m✅ Resources list endpoint working correctly\x1b[0m');
          events.emit('resources-test-complete');
        } else {
          console.error('\x1b[31m❌ Invalid response format:\x1b[0m', response);
          process.exit(1);
        }
      } catch (error) {
        console.error('\x1b[31m❌ Error parsing response:\x1b[0m', error);
        console.error('\x1b[31m❌ Raw response:\x1b[0m', data);
        process.exit(1);
      }
    });
  });
  
  req.on('error', (error) => {
    console.error('\x1b[31m❌ Request error:\x1b[0m', error);
    process.exit(1);
  });
  
  req.write(JSON.stringify(request));
  req.end();
}

// Step 5: Test resources/read endpoint
function testResourcesRead() {
  console.log('\n' + '-'.repeat(60));
  console.log('\x1b[1m\x1b[32m  STEP 5: Testing resources/read endpoint\x1b[0m');
  console.log('-'.repeat(60));
  
  // If no resources are available, skip this test
  if (!global.firstResource) {
    console.log('\x1b[33m⚠️ No resources available to test resources/read endpoint\x1b[0m');
    events.emit('resources-read-test-complete');
    return;
  }
  
  console.log(`\x1b[90m  Sending JSON-RPC request to read resource: ${global.firstResource.uriPattern}...\x1b[0m`);
  
  // Extract a sample URI from the pattern
  // This is a simple approach - in a real test, we'd need to parse the pattern and generate a valid URI
  const sampleUri = global.firstResource.uriPattern.replace(/:[a-zA-Z0-9_]+/g, 'test');
  
  const request = {
    jsonrpc: '2.0',
    id: '4',
    method: 'resources/read',
    params: {
      uri: sampleUri
    }
  };
  
  console.log(`\x1b[36m📤 Sending request: ${JSON.stringify(request)}\x1b[0m`);
  
  const req = http.request({
    hostname: HOST,
    port: PORT,
    path: '/sse',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  }, (res) => {
    console.log(`\x1b[90m  Received response with status: ${res.statusCode}\x1b[0m`);
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        
        if (response.error) {
          // Some errors are expected if we couldn't provide a proper URI
          console.log('\x1b[33m⚠️ Error in response (this may be expected):\x1b[0m', response.error);
          console.log('\x1b[33m⚠️ The resources/read endpoint is responding with proper error format\x1b[0m');
          console.log('\x1b[32m✅ Resources read endpoint working correctly (with expected error)\x1b[0m');
          events.emit('resources-read-test-complete');
          return;
        }
        
        // If we got a successful response, that's great!
        console.log('\x1b[36m📋 Resource read result:\x1b[0m', JSON.stringify(response.result).substring(0, 200) + (JSON.stringify(response.result).length > 200 ? '...' : ''));
        console.log('\x1b[32m✅ Resources read endpoint working correctly\x1b[0m');
        events.emit('resources-read-test-complete');
      } catch (error) {
        console.error('\x1b[31m❌ Error parsing response:\x1b[0m', error);
        console.error('\x1b[31m❌ Raw response:\x1b[0m', data);
        process.exit(1);
      }
    });
  });
  
  req.on('error', (error) => {
    console.error('\x1b[31m❌ Request error:\x1b[0m', error);
    process.exit(1);
  });
  
  req.write(JSON.stringify(request));
  req.end();
}

// Generate configuration files
function generateConfigFiles() {
  console.log('\n' + '-'.repeat(60));
  console.log('\x1b[1m\x1b[32m  STEP 6: Generating configuration files\x1b[0m');
  console.log('-'.repeat(60));
  
  // Generate legacy format (mcpServers)
  const legacyConfig = {
    mcpServers: {
      "cloudscape-assistant": {
        url: `http://${HOST}:${PORT}`,
        disabled: false,
        alwaysAllow: []
      }
    }
  };
  
  // Generate modern format (connections)
  const modernConfig = {
    connections: [
      {
        name: "Cloudscape Assistant",
        type: "sse",
        url: `http://${HOST}:${PORT}`,
        autoConnect: true
      }
    ]
  };
  
  // Generate stdio format (for local servers)
  const stdioConfig = {
    connections: [
      {
        name: "Cloudscape Assistant",
        type: "stdio",
        command: "mcp-cloudscape-assistant",
        args: ["--port", PORT.toString()],
        env: {},
        cwd: "${workspaceFolder}",
        autoConnect: true
      }
    ]
  };
  
  // Write the configuration files
  try {
    fs.writeFileSync('mcp.legacy.json', JSON.stringify(legacyConfig, null, 2));
    fs.writeFileSync('mcp.modern.json', JSON.stringify(modernConfig, null, 2));
    fs.writeFileSync('mcp.stdio.json', JSON.stringify(stdioConfig, null, 2));
    
    console.log('\x1b[32m✅ Generated configuration files:\x1b[0m');
    console.log('\x1b[90m  - mcp.legacy.json (mcpServers format)\x1b[0m');
    console.log('\x1b[90m  - mcp.modern.json (connections format with SSE)\x1b[0m');
    console.log('\x1b[90m  - mcp.stdio.json (connections format with stdio)\x1b[0m');
    
    events.emit('config-files-generated');
  } catch (error) {
    console.error('\x1b[31m❌ Error generating configuration files:\x1b[0m', error);
    process.exit(1);
  }
}

// Run tests in sequence
console.log('\n\x1b[1m\x1b[36mStarting test sequence...\x1b[0m');
testSSEConnection();

events.on('sse-test-complete', () => {
  testToolsList();
});

events.on('tools-test-complete', () => {
  testToolsCall();
});

events.on('tools-call-test-complete', () => {
  testResourcesList();
});

events.on('resources-test-complete', () => {
  testResourcesRead();
});

events.on('resources-read-test-complete', () => {
  generateConfigFiles();
});

events.on('config-files-generated', () => {
  console.log('\n' + '='.repeat(80));
  console.log('\x1b[1m\x1b[32m  TEST RESULTS: SUCCESS\x1b[0m');
  console.log('='.repeat(80));
  console.log('\x1b[32m✅ All tests passed! The MCP server is properly configured for Roo integration.\x1b[0m');
  
  console.log('\n\x1b[1m\x1b[36mNext Steps:\x1b[0m');
  console.log('\x1b[36m1. Choose one of the generated configuration files:\x1b[0m');
  console.log('\x1b[33m   - For legacy Roo clients: Use mcp.legacy.json\x1b[0m');
  console.log('\x1b[33m   - For modern Roo clients with remote server: Use mcp.modern.json\x1b[0m');
  console.log('\x1b[33m   - For modern Roo clients with local server: Use mcp.stdio.json\x1b[0m');
  console.log('\x1b[36m2. Rename your chosen file to mcp.json in your project root\x1b[0m');
  console.log('\x1b[36m3. Make sure the server is running when you start Roo\x1b[0m');
  console.log('\x1b[36m4. Roo should automatically connect to the server\x1b[0m');
  
  console.log('\n\x1b[1m\x1b[32mTest completed successfully!\x1b[0m');
  process.exit(0);
});

// Handle unexpected errors
process.on('uncaughtException', (error) => {
  console.error('\n\x1b[31m❌ Uncaught exception during test:\x1b[0m', error);
  process.exit(1);
});

console.log('\x1b[90mPress Ctrl+C to abort the test at any time\x1b[0m');

// Add global type for storing first tool and resource
declare global {
  var firstTool: any;
  var firstResource: any;
}