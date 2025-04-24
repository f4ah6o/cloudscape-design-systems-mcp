#!/usr/bin/env node

/**
 * Test script to verify that tools are being properly reported by the MCP server
 */

import http from 'http';

// Configuration
const PORT = process.env.PORT || 3001;
const HOST = 'localhost';

// Create a JSON-RPC request to list tools
const request = {
  jsonrpc: '2.0',
  id: '1',
  method: 'tools/list',
  params: {}
};

// Options for the HTTP request
const options = {
  hostname: HOST,
  port: PORT,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }
};

console.log(`Testing MCP server at ${HOST}:${PORT}...`);
console.log('Requesting tools list...');

// Send the request
const req = http.request(options, (res) => {
  let data = '';
  
  // Collect response data
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  // Process response when complete
  res.on('end', () => {
    try {
      const response = JSON.parse(data);
      
      if (response.error) {
        console.error('Error:', response.error);
        process.exit(1);
      }
      
      if (response.result && response.result.tools) {
        const tools = response.result.tools;
        console.log(`\nServer reported ${tools.length} tools:`);
        
        tools.forEach((tool: any) => {
          console.log(`- ${tool.name}: ${tool.description}`);
        });
        
        if (tools.length === 0) {
          console.error('\nNo tools reported by the server!');
          process.exit(1);
        } else {
          console.log('\nSuccess! Tools are being properly reported.');
        }
      } else {
        console.error('Invalid response format:', response);
        process.exit(1);
      }
    } catch (error) {
      console.error('Error parsing response:', error);
      console.error('Raw response:', data);
      process.exit(1);
    }
  });
});

// Handle request errors
req.on('error', (error) => {
  console.error('Request error:', error);
  process.exit(1);
});

// Send the request body
req.write(JSON.stringify(request));
req.end();