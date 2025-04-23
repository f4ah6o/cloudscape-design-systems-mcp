#!/usr/bin/env node

/**
 * Cloudscape MCP Server
 *
 * This is a Model Context Protocol (MCP) server that provides comprehensive information
 * about AWS Cloudscape Design System components, along with code generation capabilities
 * for common Cloudscape patterns.
 *
 * Version 1.0.0 - Phase 4: Integration and Testing
 * - Enhanced with Roo integration
 * - Improved error handling and logging
 * - Performance optimizations
 * - Security enhancements
 */

// Import from TypeScript files
import { MCPServer } from './src/mcp/server';
import { initializeRooIntegration } from './src/integration/roo-integration';
import { applyPerformanceOptimizations } from './src/optimization/performance';
import { applySecurityEnhancements } from './src/security/index';

// Import other modules
import componentRegistry from './src/components/registry';
import searchEngine from './src/search/engine';
import codeGenerator from './src/code-generator/generator';
import documentationProvider from './src/documentation/provider';
import propertyExplorer from './src/property-explorer';
import exampleProvider from './src/example-provider';

// Define types for components and properties
interface ComponentProperty {
  name: string;
  type: string;
  description: string;
  defaultValue: any;
  required: boolean;
  acceptedValues: (string | number)[] | undefined;
  isDeprecated: boolean | undefined;
  examples?: string[];
}

interface Component {
  id: string;
  name: string;
  category: string;
  description: string;
  importPath: string;
  version: string;
  isExperimental: boolean;
  tags: string[];
  relatedComponents: string[];
  properties: Record<string, ComponentProperty>;
  examples: string[];
}

interface Example {
  id: string;
  name: string;
  description: string;
  type: string;
  code?: string;
  component?: string;
  tags?: string[];
}

interface ComponentResponse {
  id: string;
  name: string;
  category: string;
  description: string;
  importPath: string;
  version: string;
  isExperimental: boolean;
  tags: string[];
  relatedComponents?: Array<{
    id: string;
    name: string;
    category: string | null;
    description: string | null;
  }>;
  properties?: Array<{
    name: string;
    type: string;
    description: string;
    defaultValue: any;
    required: boolean;
    acceptedValues: (string | number)[] | undefined;
    isDeprecated: boolean | undefined;
    examples: any[];
  }>;
  examples?: Array<{
    id: string;
    name: string;
    description: string;
    type: string;
    code?: string;
  }>;
}

// Apply performance optimizations
applyPerformanceOptimizations();

// Create a new MCP server
const server = new MCPServer({
  name: 'cloudscape',
  description: 'Cloudscape Design System component information and code generation',
  version: '1.0.0',
});

// Apply security enhancements
const secureServer = applySecurityEnhancements(server);

// Initialize Roo integration
const enhancedServer = initializeRooIntegration(secureServer);

/**
 * Tool: search_components
 * 
 * Search for Cloudscape components based on query, category, and tags.
 */
server.tool({
  name: 'search_components',
  description: 'Search for Cloudscape components with advanced options',
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'Search query',
      },
      category: {
        type: 'string',
        description: 'Component category',
      },
      tags: {
        type: 'array',
        items: {
          type: 'string',
        },
        description: 'Tags to filter by',
      },
      limit: {
        type: 'number',
        description: 'Maximum number of results to return',
      },
      offset: {
        type: 'number',
        description: 'Offset for pagination',
      },
      fuzzyMatch: {
        type: 'boolean',
        description: 'Whether to use fuzzy matching',
      },
      fuzzyThreshold: {
        type: 'number',
        description: 'Threshold for fuzzy matching (0-1)',
      },
      filters: {
        type: 'object',
        description: 'Additional filters',
      },
      sortBy: {
        type: 'string',
        description: 'Field to sort by',
      },
      sortOrder: {
        type: 'string',
        description: 'Sort order (asc or desc)',
      },
    },
    required: ['query'],
  },
  handler: async (input, ctx) => {
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
    } = input;
    
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
      sortOrder
    });
    
    return {
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
    };
  },
});

/**
 * Tool: get_component_details
 * 
 * Get detailed information about a specific component.
 */
server.tool({
  name: 'get_component_details',
  description: 'Get detailed information about a component',
  inputSchema: {
    type: 'object',
    properties: {
      componentId: {
        type: 'string',
        description: 'Component ID',
      },
      includeExamples: {
        type: 'boolean',
        description: 'Whether to include examples',
      },
      includeRelatedComponents: {
        type: 'boolean',
        description: 'Whether to include related components',
      },
      includeProperties: {
        type: 'boolean',
        description: 'Whether to include properties',
      },
    },
    required: ['componentId'],
  },
  handler: async (input, ctx) => {
    const {
      componentId,
      includeExamples = true,
      includeRelatedComponents = true,
      includeProperties = true
    } = input;
    
    // Get component details
    const component = componentRegistry.getComponent(componentId);
    
    if (!component) {
      throw new Error(`Component ${componentId} not found`);
    }
    
    // Build response with requested details
    const response: ComponentResponse = {
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

/**
 * Tool: generate_component_code
 * 
 * Generate code for a component with specified props, children, and event handlers.
 */
server.tool({
  name: 'generate_component_code',
  description: 'Generate code for a component with advanced customization options',
  inputSchema: {
    type: 'object',
    properties: {
      componentId: {
        type: 'string',
        description: 'Component ID',
      },
      props: {
        type: 'object',
        description: 'Component props',
      },
      children: {
        type: 'string',
        description: 'Component children',
      },
      eventHandlers: {
        type: 'object',
        description: 'Component event handlers',
      },
      typescript: {
        type: 'boolean',
        description: 'Whether to generate TypeScript code',
      },
      style: {
        type: 'string',
        description: 'Code style (compact or expanded)',
        enum: ['compact', 'expanded'],
      },
      includeImports: {
        type: 'boolean',
        description: 'Whether to include imports in the code',
      },
    },
    required: ['componentId'],
  },
  handler: async (input, ctx) => {
    const {
      componentId,
      props,
      children,
      eventHandlers,
      typescript = false,
      style = 'expanded',
      includeImports = true
    } = input;
    
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
    
    return {
      code,
      imports,
      language,
      format
    };
  },
});

/**
 * Tool: generate_pattern_code
 * 
 * Generate code for a common Cloudscape pattern with customizations.
 */
server.tool({
  name: 'generate_pattern_code',
  description: 'Generate code for a common pattern with advanced customization options',
  inputSchema: {
    type: 'object',
    properties: {
      patternId: {
        type: 'string',
        description: 'Pattern ID',
      },
      customizations: {
        type: 'object',
        description: 'Pattern customizations',
      },
      typescript: {
        type: 'boolean',
        description: 'Whether to generate TypeScript code',
      },
      style: {
        type: 'string',
        description: 'Code style (compact or expanded)',
        enum: ['compact', 'expanded'],
      },
      includeImports: {
        type: 'boolean',
        description: 'Whether to include imports in the code',
      },
    },
    required: ['patternId'],
  },
  handler: async (input, ctx) => {
    const {
      patternId,
      customizations = {},
      typescript = false,
      style = 'expanded',
      includeImports = true
    } = input;
    
    // Generate pattern code with enhanced options
    const { code, imports, language, format } = codeGenerator.generatePatternCode({
      patternId,
      customizations,
      typescript,
      style,
      includeImports
    });
    
    return {
      code,
      imports,
      language,
      format
    };
  },
});

/**
 * Tool: search_documentation
 *
 * Search within component documentation.
 */
server.tool({
  name: 'search_documentation',
  description: 'Search within component documentation',
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'Search query',
      },
      scope: {
        type: 'string',
        description: 'Search scope (components, categories, patterns, all)',
        enum: ['components', 'categories', 'patterns', 'all'],
      },
      limit: {
        type: 'number',
        description: 'Maximum number of results to return',
      },
    },
    required: ['query'],
  },
  handler: async (input, ctx) => {
    const { query, scope = 'all', limit = 10 } = input;
    
    // Search documentation using the Documentation Provider
    const results = documentationProvider.searchDocumentation({
      query,
      scope,
      limit
    });
    
    return results;
  },
});

/**
 * Tool: get_component_documentation
 *
 * Get detailed documentation for a component with section filtering.
 */
server.tool({
  name: 'get_component_documentation',
  description: 'Get detailed documentation for a component with section filtering',
  inputSchema: {
    type: 'object',
    properties: {
      componentId: {
        type: 'string',
        description: 'Component ID',
      },
      section: {
        type: 'string',
        description: 'Documentation section',
        enum: ['overview', 'props', 'usage', 'accessibility', 'design', 'bestPractices', 'commonPitfalls', 'migrationGuides', 'examples'],
      },
      format: {
        type: 'string',
        description: 'Documentation format',
        enum: ['markdown', 'html', 'plain'],
      },
    },
    required: ['componentId'],
  },
  handler: async (input, ctx) => {
    const { componentId, section, format = 'markdown' } = input;
    
    // Get component documentation using the Documentation Provider
    const documentation = documentationProvider.getComponentDocumentation({
      componentId,
      section,
      format
    });
    
    return {
      componentId,
      componentName: componentRegistry.getComponent(componentId)?.name || componentId,
      section,
      format,
      documentation
    };
  },
});

/**
 * Tool: generate_component_interface
 *
 * Generate TypeScript interface for a component.
 */
server.tool({
  name: 'generate_component_interface',
  description: 'Generate TypeScript interface for a component',
  inputSchema: {
    type: 'object',
    properties: {
      componentId: {
        type: 'string',
        description: 'Component ID',
      },
    },
    required: ['componentId'],
  },
  handler: async (input, ctx) => {
    const { componentId } = input;
    
    // Generate component interface
    const interfaceCode = codeGenerator.generateComponentInterface(componentId);
    
    return {
      code: interfaceCode,
      language: 'typescript'
    };
  },
});

/**
 * Tool: get_component_examples
 * 
 * Get usage examples for a component.
 */
server.tool({
  name: 'get_component_examples',
  description: 'Get usage examples for a component',
  inputSchema: {
    type: 'object',
    properties: {
      componentId: {
        type: 'string',
        description: 'Component ID',
      },
      type: {
        type: 'string',
        description: 'Example type',
      },
      limit: {
        type: 'number',
        description: 'Maximum number of examples to return',
      },
      includeCode: {
        type: 'boolean',
        description: 'Whether to include code in the response',
      },
    },
    required: ['componentId'],
  },
  handler: async (input, ctx) => {
    const { componentId, type, limit, includeCode = true } = input;
    
    // Get component examples
    const examples = componentRegistry.getComponentExamples({
      componentId,
      type,
      limit: limit || 10,
    });
    
    return {
      componentId,
      componentName: componentRegistry.getComponent(componentId)?.name || componentId,
      examples: examples.map(example => {
        const result: Partial<Example> = {
          id: example.id,
          name: example.name,
          description: example.description,
          type: example.type,
        };
        
        if (includeCode) {
          result.code = example.code;
        }
        
        return result;
      }),
      totalExamples: examples.length,
    };
  },
});

/**
 * Resource: cloudscape://components/{componentId}
 * 
 * Get component details.
 */
server.resource({
  uriPattern: 'cloudscape://components/:componentId',
  handler: async (params, ctx) => {
    const { componentId } = params;
    
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
      id: component.id,
      name: component.name,
      category: component.category,
      description: component.description,
      importPath: component.importPath,
      version: component.version,
      isExperimental: component.isExperimental,
      documentation,
    };
  },
});

/**
 * Resource: cloudscape://categories/{categoryId}
 * 
 * Get category details.
 */
server.resource({
  uriPattern: 'cloudscape://categories/:categoryId',
  handler: async (params, ctx) => {
    const { categoryId } = params;
    
    // Get category details
    const category = componentRegistry.getCategory(categoryId);
    
    if (!category) {
      throw new Error(`Category ${categoryId} not found`);
    }
    
    return {
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
    };
  },
});

/**
 * Resource: cloudscape://patterns/{patternId}
 * 
 * Get pattern details.
 */
server.resource({
  uriPattern: 'cloudscape://patterns/:patternId',
  handler: async (params, ctx) => {
    const { patternId } = params;
    
    // Get pattern details
    const pattern = componentRegistry.getPattern(patternId);
    
    if (!pattern) {
      throw new Error(`Pattern ${patternId} not found`);
    }
    
    return {
      id: pattern.id,
      name: pattern.name,
      description: pattern.description,
      components: pattern.components.map(id => {
        const component = componentRegistry.getComponent(id);
        return {
          id,
          name: component ? component.name : id,
        };
      }),
      code: pattern.code,
      customizationOptions: pattern.customizationOptions,
    };
  },
});

/**
 * Resource: cloudscape://examples/{exampleId}
 *
 * Get example details.
 */
server.resource({
  uriPattern: 'cloudscape://examples/:exampleId',
  handler: async (params, ctx) => {
    const { exampleId } = params;
    
    // Get example details using the Example Provider
    const example = exampleProvider.getExample(exampleId);
    
    return example;
  },
});

/**
 * Tool: get_examples
 *
 * Get examples for a component with filtering and pagination.
 */
server.tool({
  name: 'get_examples',
  description: 'Get examples for a component with filtering and pagination',
  inputSchema: {
    type: 'object',
    properties: {
      componentId: {
        type: 'string',
        description: 'Component ID',
      },
      type: {
        type: 'string',
        description: 'Example type',
      },
      limit: {
        type: 'number',
        description: 'Maximum number of examples to return',
      },
      offset: {
        type: 'number',
        description: 'Offset for pagination',
      },
      tags: {
        type: 'array',
        items: {
          type: 'string',
        },
        description: 'Tags to filter by',
      },
      includeCode: {
        type: 'boolean',
        description: 'Whether to include code in the response',
      },
    },
    required: ['componentId'],
  },
  handler: async (input, ctx) => {
    const { componentId, type, limit, offset, tags, includeCode = true } = input;
    
    // Get examples using the Example Provider
    const examples = exampleProvider.getExamples({
      componentId,
      type,
      limit,
      offset,
      tags
    });
    
    // Filter out code if not requested
    if (!includeCode) {
      examples.examples = examples.examples.map(example => {
        const { code, ...rest } = example;
        return rest;
      });
    }
    
    return examples;
  },
});

/**
 * Tool: search_examples
 *
 * Search for examples across all components.
 */
server.tool({
  name: 'search_examples',
  description: 'Search for examples across all components',
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'Search query',
      },
      tags: {
        type: 'array',
        items: {
          type: 'string',
        },
        description: 'Tags to filter by',
      },
      limit: {
        type: 'number',
        description: 'Maximum number of examples to return',
      },
      offset: {
        type: 'number',
        description: 'Offset for pagination',
      },
      includeCode: {
        type: 'boolean',
        description: 'Whether to include code in the response',
      },
    },
    required: ['query'],
  },
  handler: async (input, ctx) => {
    const { query, tags, limit, offset, includeCode = true } = input;
    
    // Search examples using the Example Provider
    const results = exampleProvider.searchExamples({
      query,
      tags,
      limit,
      offset
    });
    
    // Filter out code if not requested
    if (!includeCode) {
      results.examples = results.examples.map(example => {
        const { code, ...rest } = example;
        return rest;
      });
    }
    
    return results;
  },
});

/**
 * Tool: get_example_categories
 *
 * Get all example categories.
 */
server.tool({
  name: 'get_example_categories',
  description: 'Get all example categories',
  inputSchema: {
    type: 'object',
    properties: {},
  },
  handler: async (input, ctx) => {
    // Get example categories using the Example Provider
    const categories = exampleProvider.getExampleCategories();
    
    return {
      categories,
      totalCategories: categories.length
    };
  },
});

/**
 * Resource: cloudscape://properties/{componentId}/{propertyId}
 * 
 * Get property details.
 */
server.resource({
  uriPattern: 'cloudscape://properties/:componentId/:propertyId',
  handler: async (params, ctx) => {
    const { componentId, propertyId } = params;
    
    // Get component details
    const component = componentRegistry.getComponent(componentId);
    
    if (!component) {
      throw new Error(`Component ${componentId} not found`);
    }
    
    // Get property details
    const property = component.properties[propertyId];
    
    if (!property) {
      throw new Error(`Property ${propertyId} not found for component ${componentId}`);
    }
    
    return {
      name: property.name,
      type: property.type,
      description: property.description,
      defaultValue: property.defaultValue,
      required: property.required,
      acceptedValues: property.acceptedValues,
      isDeprecated: property.isDeprecated,
      examples: property.examples,
    };
  },
});

/**
 * Resource: cloudscape://properties/:componentId
 *
 * Get all properties for a component.
 */
server.resource({
  uriPattern: 'cloudscape://properties/:componentId',
  handler: async (params, ctx) => {
    const { componentId } = params;
    
    // Get component details
    const component = componentRegistry.getComponent(componentId);
    
    if (!component) {
      throw new Error(`Component ${componentId} not found`);
    }
    
    return {
      componentId,
      componentName: component.name,
      properties: Object.values(component.properties).map(property => ({
        name: property.name,
        type: property.type,
        description: property.description,
        defaultValue: property.defaultValue,
        required: property.required,
        acceptedValues: property.acceptedValues,
        isDeprecated: property.isDeprecated,
      })),
    };
  },
});

/**
 * Tool: search_components_by_functionality
 *
 * Search for components based on functionality.
 */
server.tool({
  name: 'search_components_by_functionality',
  description: 'Search for components based on functionality',
  inputSchema: {
    type: 'object',
    properties: {
      functionality: {
        type: 'string',
        description: 'Functionality to search for',
      },
      limit: {
        type: 'number',
        description: 'Maximum number of results to return',
      },
      fuzzyMatch: {
        type: 'boolean',
        description: 'Whether to use fuzzy matching',
      },
    },
    required: ['functionality'],
  },
  handler: async (input, ctx) => {
    const { functionality, limit, fuzzyMatch } = input;
    
    // Search for components by functionality
    const searchResult = searchEngine.searchComponentsByFunctionality(functionality, {
      limit,
      fuzzyMatch,
    });
    
    return {
      results: searchResult.results.map(result => ({
        componentId: result.id,
        name: result.name,
        category: result.category,
        description: result.description,
        relevance: result.relevance,
        tags: result.tags,
      })),
      totalResults: searchResult.totalResults,
      functionality: searchResult.functionality,
    };
  },
});

/**
 * Tool: explore_component_properties
 *
 * Explore properties of a component.
 */
server.tool({
  name: 'explore_component_properties',
  description: 'Explore properties of a component',
  inputSchema: {
    type: 'object',
    properties: {
      componentId: {
        type: 'string',
        description: 'Component ID',
      },
      filter: {
        type: 'object',
        description: 'Filter criteria for properties',
      },
    },
    required: ['componentId'],
  },
  handler: async (input, ctx) => {
    const { componentId, filter } = input;
    
    // Get component properties
    const properties = propertyExplorer.getComponentProperties({
      componentId,
      filter,
    });
    
    if (!properties) {
      throw new Error(`Component ${componentId} not found`);
    }
    
    return {
      componentId,
      componentName: componentRegistry.getComponent(componentId)?.name || componentId,
      properties: Object.values(properties).map((property: any) => ({
        name: property.name,
        type: property.type,
        description: property.description,
        defaultValue: property.defaultValue,
        required: property.required,
        acceptedValues: property.acceptedValues,
        isDeprecated: property.isDeprecated,
      })),
      totalProperties: Object.keys(properties).length,
    };
  },
});

/**
 * Tool: get_property_relationships
 *
 * Get relationships between properties of a component.
 */
server.tool({
  name: 'get_property_relationships',
  description: 'Get relationships between properties of a component',
  inputSchema: {
    type: 'object',
    properties: {
      componentId: {
        type: 'string',
        description: 'Component ID',
      },
    },
    required: ['componentId'],
  },
  handler: async (input, ctx) => {
    const { componentId } = input;
    
    // Get property relationships
    const relationships = propertyExplorer.getPropertyRelationships(componentId);
    
    if (!relationships) {
      throw new Error(`Component ${componentId} not found`);
    }
    
    return relationships;
  },
});

/**
 * Tool: get_property_type_info
 *
 * Get detailed type information for a property.
 */
server.tool({
  name: 'get_property_type_info',
  description: 'Get detailed type information for a property',
  inputSchema: {
    type: 'object',
    properties: {
      componentId: {
        type: 'string',
        description: 'Component ID',
      },
      propertyId: {
        type: 'string',
        description: 'Property ID',
      },
    },
    required: ['componentId', 'propertyId'],
  },
  handler: async (input, ctx) => {
    const { componentId, propertyId } = input;
    
    // Get property type information
    const typeInfo = propertyExplorer.getPropertyTypeInfo({
      componentId,
      propertyId,
    });
    
    if (!typeInfo) {
      throw new Error(`Property ${propertyId} not found for component ${componentId}`);
    }
    
    return typeInfo;
  },
});

// Start the enhanced server
enhancedServer.start();

// Export the server for testing
export default enhancedServer;