/**
 * MCP Cloudscape Assistant
 * 
 * A Model Context Protocol (MCP) server that provides comprehensive information
 * about AWS Cloudscape Design System components, along with code generation capabilities
 * for common Cloudscape patterns.
 */

import { createFastMCPServer } from './mcp/server';
import { getServerConfig } from './utils/config';
import { applySecurityEnhancements } from './security/index';
import { initializeRooIntegration } from './integration/roo-integration';
import { applyPerformanceOptimizations } from './optimization/performance';

/**
 * Creates a configured Cloudscape Assistant MCP server
 * @param options Configuration options for the server
 * @returns Configured MCP server instance
 */
export function createCloudscapeAssistant(options: any = {}) {
  // Apply performance optimizations
  applyPerformanceOptimizations();

  // Get server configuration
  const config = getServerConfig();
  
  // Create a new FastMCP server
  let server = createFastMCPServer({
    name: 'cloudscape-assistant',
    description: 'Cloudscape Design System component information and code generation',
    version: '1.0.0',
    port: options.port || config.port,
    bind: options.bind || config.bind,
    ...options
  });

  // Apply security enhancements
  server = applySecurityEnhancements(server);

  // Initialize Roo integration
  server = initializeRooIntegration(server);

  return server;
}

// Export the main function as default
export default createCloudscapeAssistant;

// Re-export key components for advanced usage
export { createFastMCPServer } from './mcp/server';
export { getServerConfig } from './utils/config';