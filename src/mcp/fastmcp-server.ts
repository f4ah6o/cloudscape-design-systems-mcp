/**
 * FastMCP Server Implementation
 *
 * This is a TypeScript implementation of the MCP server for the Cloudscape component library
 * using the FastMCP framework.
 */

import { FastMCP } from 'fastmcp';
import { z } from 'zod'; // Using Zod for schema validation

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
      
      // Build response with requested details
      const response: any = {
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
        response.relatedComponents = component.relatedComponents.map(id => {
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
        response.properties = Object.values(component.properties).map(property => ({
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
        response.examples = componentRegistry.getComponentExamples({
          componentId,
          limit: 5,
        }).map(example => ({
          id: example.id,
          name: example.name,
          description: example.description,
          type: example.type,
        }));
      }
      
      return response;
    },
  });

  // Tool: generate_component_code
  server.addTool({
    name: 'generate_component_code',
    description: 'Generate code for a component with advanced customization options',
    parameters: z.object({
      componentId: z.string().describe('Component ID'),
      props: z.record(z.any()).optional().describe('Component props'),
      children: z.string().optional().describe('Component children'),
      eventHandlers: z.record(z.any()).optional().describe('Component event handlers'),
      typescript: z.boolean().optional().describe('Whether to generate TypeScript code'),
      style: z.string().optional().describe('Code style (compact or expanded)'),
      includeImports: z.boolean().optional().describe('Whether to include imports in the code'),
    }),
    execute: async (args, context) => {
      const {
        componentId,
        props,
        children,
        eventHandlers,
        typescript = false,
        includeImports = true
      } = args;
      const style = (args.style || 'expanded') as "compact" | "expanded";
      
      // Generate component code with enhanced options
      const { code, imports, language, format } = codeGenerator.generateComponentCode({
        componentId,
        props,
        children,
        eventHandlers,
        typescript,
        style,
        includeImports
      });
      
      return JSON.stringify({
        code,
        imports,
        language,
        format
      });
    },
  });

  // Tool: generate_pattern_code
  server.addTool({
    name: 'generate_pattern_code',
    description: 'Generate code for a common pattern with advanced customization options',
    parameters: z.object({
      patternId: z.string().describe('Pattern ID'),
      customizations: z.record(z.any()).optional().describe('Pattern customizations'),
      typescript: z.boolean().optional().describe('Whether to generate TypeScript code'),
      style: z.string().optional().describe('Code style (compact or expanded)'),
      includeImports: z.boolean().optional().describe('Whether to include imports in the code'),
    }),
    execute: async (args, context) => {
      const {
        patternId,
        customizations = {},
        typescript = false,
        includeImports = true
      } = args;
      const style = (args.style || 'expanded') as "compact" | "expanded";
      
      // Generate pattern code with enhanced options
      const { code, imports, language, format } = codeGenerator.generatePatternCode({
        patternId,
        customizations,
        typescript,
        style,
        includeImports
      });
      
      return JSON.stringify({
        code,
        imports,
        language,
        format
      });
    },
  });

  // Tool: search_documentation
  server.addTool({
    name: 'search_documentation',
    description: 'Search within component documentation',
    parameters: z.object({
      query: z.string().describe('Search query'),
      scope: z.string().optional().describe('Search scope (components, categories, patterns, all)'),
      limit: z.number().optional().describe('Maximum number of results to return'),
    }),
    execute: async (args, context) => {
      const { query, scope: rawScope = 'all', limit = 10 } = args;
      const scope = rawScope as "components" | "categories" | "patterns" | "all";
      
      // Search documentation using the Documentation Provider
      const results = documentationProvider.searchDocumentation({
        query,
        scope,
        limit
      });
      
      return JSON.stringify(results);
    },
  });

  // Add more tools as needed...
  // The implementation follows the same pattern as above
}

/**
 * Register resources with the FastMCP server
 * @param server - FastMCP server instance
 */
function registerResources(server: FastMCP) {
  // Resource: cloudscape://components/{componentId}
  server.addResourceTemplate({
    uriTemplate: 'cloudscape://components/{componentId}',
    name: 'Component Details',
    mimeType: 'application/json',
    arguments: [
      {
        name: 'componentId',
        description: 'Component ID',
        required: true,
      },
    ],
    async load({ componentId }) {
      // Get component details
      const component = componentRegistry.getComponent(componentId);
      
      if (!component) {
        throw new Error(`Component ${componentId} not found`);
      }
      
      // Get component documentation with enhanced options
      const documentation = documentationProvider.getComponentDocumentation({
        componentId,
        format: 'markdown'
      });
      
      return {
        text: JSON.stringify({
          id: component.id,
          name: component.name,
          category: component.category,
          description: component.description,
          importPath: component.importPath,
          version: component.version,
          isExperimental: component.isExperimental,
          documentation,
        }, null, 2),
      };
    },
  });

  // Resource: cloudscape://categories/{categoryId}
  server.addResourceTemplate({
    uriTemplate: 'cloudscape://categories/{categoryId}',
    name: 'Category Details',
    mimeType: 'application/json',
    arguments: [
      {
        name: 'categoryId',
        description: 'Category ID',
        required: true,
      },
    ],
    async load({ categoryId }) {
      // Get category details
      const category = componentRegistry.getCategory(categoryId);
      
      if (!category) {
        throw new Error(`Category ${categoryId} not found`);
      }
      
      return {
        text: JSON.stringify({
          id: category.id,
          name: category.name,
          description: category.description,
          components: category.components.map(id => {
            const component = componentRegistry.getComponent(id);
            return {
              id,
              name: component ? component.name : id,
            };
          }),
        }, null, 2),
      };
    },
  });

  // Add more resources as needed...
  // The implementation follows the same pattern as above
}