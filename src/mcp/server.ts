/**
 * FastMCP Server Implementation
 *
 * This is a TypeScript implementation of the MCP server for the Cloudscape component library
 * using the FastMCP framework.
 */

import { FastMCP } from 'fastmcp';
import { z } from 'zod'; // Using Zod for schema validation
import fs from 'fs';
import path from 'path';

// Import other modules
import componentRegistry from '../components/registry';
import searchEngine from '../search/engine';
import codeGenerator from '../code-generator/generator';
import documentationProvider from '../documentation/provider';
import propertyExplorer from '../property-explorer';
import exampleProvider from '../example-provider';

/**
 * Create a FastMCP server instance
 * @param options - Server options
 * @returns FastMCP server instance
 */
export function createFastMCPServer(options: {
  name: string;
  description: string;
  version: string;
  port?: number;
  bind?: string;
}) {
  // Create a new FastMCP server
  const server = new FastMCP({
    name: options.name,
    version: options.version as `${number}.${number}.${number}`,
  });

  // Register tools
  registerTools(server);

  // Register resources
  registerResources(server);

  return server;
}

/**
 * Register tools with the FastMCP server
 * @param server - FastMCP server instance
 */
function registerTools(server: FastMCP) {
  // Tool: search_components
  server.addTool({
    name: 'search_components',
    description: 'Search for Cloudscape components with advanced options',
    parameters: z.object({
      query: z.string().describe('Search query'),
      category: z.string().optional().describe('Component category'),
      tags: z.array(z.string()).optional().describe('Tags to filter by'),
      limit: z.number().optional().describe('Maximum number of results to return'),
      offset: z.number().optional().describe('Offset for pagination'),
      fuzzyMatch: z.boolean().optional().describe('Whether to use fuzzy matching'),
      fuzzyThreshold: z.number().optional().describe('Threshold for fuzzy matching (0-1)'),
      filters: z.record(z.any()).optional().describe('Additional filters'),
      sortBy: z.string().optional().describe('Field to sort by'),
      sortOrder: z.string().optional().describe('Sort order (asc or desc)'),
    }),
    execute: async (args, context) => {
      const {
        query,
        category,
        tags,
        limit,
        offset,
        fuzzyMatch,
        fuzzyThreshold,
        filters,
        sortBy,
        sortOrder
      } = args;
      
      // Search for components with advanced options
      const searchResult = searchEngine.searchComponents({
        query,
        category,
        tags,
        limit,
        offset,
        fuzzyMatch,
        fuzzyThreshold,
        filters,
        sortBy,
        sortOrder: sortOrder as "asc" | "desc" | undefined
      });
      
      return JSON.stringify({
        results: searchResult.results.map(result => ({
          componentId: result.id,
          name: result.name,
          category: result.category,
          description: result.description,
          relevance: result.relevance,
          matchedFields: result.matchedFields,
          tags: result.tags,
          importPath: result.importPath,
          version: result.version,
          isExperimental: result.isExperimental,
        })),
        totalResults: searchResult.totalResults,
        query: searchResult.query,
        category: searchResult.category,
        tags: searchResult.tags,
        limit: searchResult.limit,
        offset: searchResult.offset
      });
    },
  });

  // Tool: get_component_details
  server.addTool({
    name: 'get_component_details',
    description: 'Get detailed information about a component',
    parameters: z.object({
      componentId: z.string().describe('Component ID'),
      includeExamples: z.boolean().optional().describe('Whether to include examples'),
      includeRelatedComponents: z.boolean().optional().describe('Whether to include related components'),
      includeProperties: z.boolean().optional().describe('Whether to include properties'),
    }),
    execute: async (args) => {
      const {
        componentId,
        includeExamples = true,
        includeRelatedComponents = true,
        includeProperties = true
      } = args;
      
      // Get component details
      const component = componentRegistry.getComponent(componentId);
      
      if (!component) {
        throw new Error(`Component ${componentId} not found`);
      }
      
      // Build component details
      const componentDetails: any = {
        id: component.id,
        name: component.name,
        category: component.category,
        description: component.description,
        importPath: component.importPath,
        version: component.version,
        isExperimental: component.isExperimental,
        tags: component.tags,
      };
      
      // Include related components if requested
      if (includeRelatedComponents) {
        componentDetails.relatedComponents = component.relatedComponents.map(id => {
          const relatedComponent = componentRegistry.getComponent(id);
          return {
            id,
            name: relatedComponent ? relatedComponent.name : id,
            category: relatedComponent ? relatedComponent.category : null,
            description: relatedComponent ? relatedComponent.description : null,
          };
        });
      }
      
      // Include properties if requested
      if (includeProperties) {
        componentDetails.properties = Object.values(component.properties).map(property => ({
          name: property.name,
          type: property.type,
          description: property.description,
          defaultValue: property.defaultValue,
          required: property.required,
          acceptedValues: property.acceptedValues,
          isDeprecated: property.isDeprecated,
          examples: property.examples || [],
        }));
      }
      
      // Include examples if requested
      if (includeExamples) {
        componentDetails.examples = componentRegistry.getComponentExamples({
          componentId,
          limit: 5,
        }).map(example => ({
          id: example.id,
          name: example.name,
          description: example.description,
          type: example.type,
        }));
      }
      
      // Format the response as a TextContent object
      return {
        type: 'text',
        text: JSON.stringify(componentDetails, null, 2)
      };
    },
  });

  // Add more tools here...
  // (The rest of the tools implementation would go here)
}

/**
 * Register resources with the FastMCP server
 * @param server - FastMCP server instance
 */
function registerResources(server: FastMCP) {
  // Register resources here...
  // (The resources implementation would go here)
}

/**
 * Check if a value is of the expected type
 * @param value - Value to check
 * @param expectedType - Expected type
 * @returns Whether the value is of the expected type
 */
function isValueTypeValid(value: any, expectedType: string): boolean {
  // Implementation of type validation
  // (The type validation implementation would go here)
  return true;
}