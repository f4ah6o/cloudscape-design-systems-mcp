#!/usr/bin/env node

/**
 * Cloudscape MCP Server
 *
 * This is a Model Context Protocol (MCP) server that provides comprehensive information
 * about AWS Cloudscape Design System components, along with code generation capabilities
 * for common Cloudscape patterns.
 *
 * Version 1.0.0
 * - Enhanced with FastMCP framework
 * - Improved error handling and logging
 * - Performance optimizations
 * - Security enhancements
 */

// Import from TypeScript files
import { createFastMCPServer } from './src/mcp/server';
import { getServerConfig } from './src/utils/config';
import { applySecurityEnhancements } from './src/security/index';
import { initializeRooIntegration } from './src/integration/roo-integration';
import { applyPerformanceOptimizations } from './src/optimization/performance';

// Get server configuration
const config = getServerConfig();

// Apply performance optimizations
applyPerformanceOptimizations();

// Create a new FastMCP server
let server = createFastMCPServer({
  name: 'cloudscape-assistant',
  description: 'Cloudscape Design System component information and code generation',
  version: '1.0.0',
  port: config.port,
  bind: config.bind
});

// Apply security enhancements
server = applySecurityEnhancements(server);

// Initialize Roo integration
server = initializeRooIntegration(server);

// Start the server with the specified transport type
if (config.transportType === 'sse') {
  console.log(`Starting server with SSE transport on port ${config.port}...`);
  server.start({
    transportType: 'sse',
    sse: {
      endpoint: '/sse',
      port: config.port,
    },
  });
} else {
  console.log('Starting server with stdio transport...');
  server.start({
    transportType: 'stdio',
  });
}

// Handle process signals for graceful shutdown
process.on('SIGINT', () => {
  console.error('\n' + '='.repeat(80));
  console.error('\x1b[1m\x1b[33m  RECEIVED SIGINT SIGNAL\x1b[0m');
  console.error('='.repeat(80));
  console.error('\x1b[33mShutting down server gracefully...\x1b[0m');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.error('\n' + '='.repeat(80));
  console.error('\x1b[1m\x1b[33m  RECEIVED SIGTERM SIGNAL\x1b[0m');
  console.error('='.repeat(80));
  console.error('\x1b[33mShutting down server gracefully...\x1b[0m');
  process.exit(0);
});

// Log uncaught exceptions for better debugging
process.on('uncaughtException', (error) => {
  console.error('\n' + '='.repeat(80));
  console.error('\x1b[1m\x1b[31m  UNCAUGHT EXCEPTION\x1b[0m');
  console.error('='.repeat(80));
  console.error('\x1b[31mUncaught Exception:\x1b[0m', error);
  console.error('\x1b[31mServer will now exit\x1b[0m');
  process.exit(1);
});

// Log unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('\n' + '='.repeat(80));
  console.error('\x1b[1m\x1b[31m  UNHANDLED PROMISE REJECTION\x1b[0m');
  console.error('='.repeat(80));
  console.error('\x1b[31mUnhandled Promise Rejection:\x1b[0m', reason);
  // We don't exit here to allow the server to continue running
});

// Export the server for testing
export default server;