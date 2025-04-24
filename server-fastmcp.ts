#!/usr/bin/env node

/**
 * Cloudscape MCP Server using FastMCP
 *
 * This is a Model Context Protocol (MCP) server that provides comprehensive information
 * about AWS Cloudscape Design System components, along with code generation capabilities
 * for common Cloudscape patterns.
 *
 * Version 1.0.0 - Phase 4: Integration and Testing with FastMCP
 * - Enhanced with FastMCP framework
 * - Improved error handling and logging
 * - Performance optimizations
 * - Security enhancements
 */

// Import from TypeScript files
import { createFastMCPServer } from './src/mcp/fastmcp-server';
import { getServerConfig } from './src/utils/config';

// Get server configuration
const config = getServerConfig();

// Create a new FastMCP server
const server = createFastMCPServer({
  name: 'cloudscape-assistant',
  description: 'Cloudscape Design System component information and code generation',
  version: '1.0.0',
  port: config.port,
  bind: config.bind
});

// Start the server
if (process.env.TRANSPORT_TYPE === 'sse') {
  server.start({
    transportType: 'sse',
    sse: {
      endpoint: '/sse',
      port: config.port,
    },
  });
} else {
  server.start({
    transportType: 'stdio',
  });
}

// Handle process signals for graceful shutdown
process.on('SIGINT', () => {
  console.log('\n' + '='.repeat(80));
  console.log('\x1b[1m\x1b[33m  RECEIVED SIGINT SIGNAL\x1b[0m');
  console.log('='.repeat(80));
  console.log('\x1b[33mShutting down server gracefully...\x1b[0m');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n' + '='.repeat(80));
  console.log('\x1b[1m\x1b[33m  RECEIVED SIGTERM SIGNAL\x1b[0m');
  console.log('='.repeat(80));
  console.log('\x1b[33mShutting down server gracefully...\x1b[0m');
  process.exit(0);
});

// Log uncaught exceptions for better debugging
process.on('uncaughtException', (error) => {
  console.log('\n' + '='.repeat(80));
  console.log('\x1b[1m\x1b[31m  UNCAUGHT EXCEPTION\x1b[0m');
  console.log('='.repeat(80));
  console.error('\x1b[31mUncaught Exception:\x1b[0m', error);
  console.log('\x1b[31mServer will now exit\x1b[0m');
  process.exit(1);
});

// Log unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.log('\n' + '='.repeat(80));
  console.log('\x1b[1m\x1b[31m  UNHANDLED PROMISE REJECTION\x1b[0m');
  console.log('='.repeat(80));
  console.error('\x1b[31mUnhandled Promise Rejection:\x1b[0m', reason);
  // We don't exit here to allow the server to continue running
});

// Keep the process running
console.log('Server process will stay running until manually terminated');

// Export the server for testing
export default server;