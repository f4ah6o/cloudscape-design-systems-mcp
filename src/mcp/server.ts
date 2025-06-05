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

  // Note: port and bind options are used when calling server.start()

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
        componentDetails.relatedComponents = (component.relatedComponents || []).map(id => {
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
    execute: async (args) => {
      const {
        componentId,
        props = {},
        children = '',
        eventHandlers = {},
        typescript = true,
        style = 'expanded',
        includeImports = true
      } = args;
      
      // Get component details
      const component = componentRegistry.getComponent(componentId);
      
      if (!component) {
        throw new Error(`Component ${componentId} not found`);
      }
      
      // Generate code
      const code = codeGenerator.generateComponentCode({
        componentId,
        props,
        children,
        eventHandlers,
        typescript,
        style,
        includeImports
      });
      
      return {
        type: 'text',
        text: code
      };
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
    execute: async (args) => {
      const {
        patternId,
        customizations = {},
        typescript = true,
        style = 'expanded',
        includeImports = true
      } = args;
      
      // Get pattern details
      const pattern = componentRegistry.getPattern(patternId);
      
      if (!pattern) {
        throw new Error(`Pattern ${patternId} not found`);
      }
      
      // Generate code
      const code = codeGenerator.generatePatternCode({
        patternId,
        customizations,
        typescript,
        style,
        includeImports
      });
      
      return {
        type: 'text',
        text: code
      };
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
    execute: async (args) => {
      const {
        query,
        scope = 'all',
        limit = 10
      } = args;
      
      // Search documentation
      const results = documentationProvider.searchDocumentation({
        query,
        scope,
        limit
      });
      
      return JSON.stringify(results);
    },
  });

  // Tool: get_component_properties
  server.addTool({
    name: 'get_component_properties',
    description: 'Retrieve detailed property information for a specific component',
    parameters: z.object({
      componentId: z.string().describe('Component ID'),
      filter: z.object({
        required: z.boolean().optional().describe('Filter by required status'),
        deprecated: z.boolean().optional().describe('Filter by deprecated status'),
        type: z.string().optional().describe('Filter by property type'),
        namePattern: z.string().optional().describe('Filter by name pattern (regex)'),
      }).optional().describe('Property filters'),
    }),
    execute: async (args) => {
      const {
        componentId,
        filter = {}
      } = args;
      
      // Get component properties
      const properties = propertyExplorer.getComponentProperties({
        componentId,
        filter
      });
      
      return JSON.stringify(properties);
    },
  });

  // Tool: get_component_examples
  server.addTool({
    name: 'get_component_examples',
    description: 'Get usage examples for a specific component',
    parameters: z.object({
      componentId: z.string().describe('Component ID'),
      type: z.string().optional().describe('Example type'),
      limit: z.number().optional().describe('Maximum number of examples to return'),
      tags: z.array(z.string()).optional().describe('Tags to filter by'),
    }),
    execute: async (args) => {
      const {
        componentId,
        type,
        limit = 5,
        tags = []
      } = args;
      
      // Get component examples
      const examples = exampleProvider.getComponentExamples({
        componentId,
        type,
        limit,
        tags
      });
      
      return JSON.stringify(examples);
    },
  });

  // Additional tools
  server.addTool({
    name: 'validate_component_props',
    description: 'Validate if provided props are valid for a component',
    parameters: z.object({
      componentId: z.string().describe('Component ID'),
      props: z.record(z.any()).describe('Component props to validate'),
    }),
    execute: async (args) => {
      const { componentId, props } = args;
      
      // Validate component props
      const validationResult = propertyExplorer.validateComponentProps({
        componentId,
        props
      });
      
      return JSON.stringify(validationResult);
    },
  });

  server.addTool({
    name: 'get_component_patterns',
    description: 'Get common usage patterns for a component',
    parameters: z.object({
      componentId: z.string().describe('Component ID'),
      limit: z.number().optional().describe('Maximum number of patterns to return'),
    }),
    execute: async (args) => {
      const { componentId, limit = 5 } = args;
      
      // Get component patterns
      const patterns = Object.values(componentRegistry.getAllPatterns())
        .filter(pattern => pattern.components.includes(componentId))
        .slice(0, limit);
      
      return JSON.stringify(patterns);
    },
  });
}

/**
 * Register resources with the FastMCP server
 * @param server - FastMCP server instance
 */
function registerResources(server: FastMCP) {
  // Register component details resource
  server.addResourceTemplate({
    uriTemplate: 'cloudscape://components/{componentId}',
    name: 'Component Details',
    parameters: {
      componentId: {
        description: 'Component ID',
        required: true,
      },
    },
    handler: async (params) => {
      const { componentId } = params;
      const component = componentRegistry.getComponent(componentId);
      
      if (!component) {
        throw new Error(`Component ${componentId} not found`);
      }
      
      return {
        type: 'text',
        text: JSON.stringify(component, null, 2),
      };
    },
  });

  // Register category details resource
  server.addResourceTemplate({
    uriTemplate: 'cloudscape://categories/{categoryId}',
    name: 'Category Details',
    parameters: {
      categoryId: {
        description: 'Category ID',
        required: true,
      },
    },
    handler: async (params) => {
      const { categoryId } = params;
      const category = componentRegistry.getCategory(categoryId);
      
      if (!category) {
        throw new Error(`Category ${categoryId} not found`);
      }
      
      return {
        type: 'text',
        text: JSON.stringify(category, null, 2),
      };
    },
  });

  // Register pattern details resource
  server.addResourceTemplate({
    uriTemplate: 'cloudscape://patterns/{patternId}',
    name: 'Pattern Details',
    parameters: {
      patternId: {
        description: 'Pattern ID',
        required: true,
      },
    },
    handler: async (params) => {
      const { patternId } = params;
      const pattern = componentRegistry.getPattern(patternId);
      
      if (!pattern) {
        throw new Error(`Pattern ${patternId} not found`);
      }
      
      return {
        type: 'text',
        text: JSON.stringify(pattern, null, 2),
      };
    },
  });

  // Register example details resource
  server.addResourceTemplate({
    uriTemplate: 'cloudscape://examples/{exampleId}',
    name: 'Example Details',
    parameters: {
      exampleId: {
        description: 'Example ID',
        required: true,
      },
    },
    handler: async (params) => {
      const { exampleId } = params;
      const examples = exampleProvider.getExampleById(exampleId);
      
      if (!examples) {
        throw new Error(`Example ${exampleId} not found`);
      }
      
      return {
        type: 'text',
        text: JSON.stringify(examples, null, 2),
      };
    },
  });

  // Register direct resources
  server.addResource({
    uri: 'cloudscape://best-practices',
    name: 'Cloudscape Best Practices',
    handler: async () => {
      return {
        type: 'text',
        text: documentationProvider.getBestPractices(),
      };
    },
  });

  server.addResource({
    uri: 'cloudscape://components-overview',
    name: 'Cloudscape Components Overview',
    handler: async () => {
      return {
        type: 'text',
        text: documentationProvider.getComponentsOverview(),
      };
    },
  });

  server.addResource({
    uri: 'cloudscape://frontend-code-setup',
    name: 'Frontend Code Setup Instructions',
    handler: async () => {
      return {
        type: 'text',
        text: documentationProvider.getFrontendCodeSetup(),
      };
    },
  });
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