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

  // Tool: setup
  server.addPrompt({
    name: 'setup',
    description: 'Get setup instructions for the frontend-code mode',
    arguments: [],
    load: async () => {
      try {
        // Read the setup instructions file
        const setupInstructions = fs.readFileSync(
          path.join(__dirname, '../resources/frontend-code-setup.roo.md'),
          'utf-8'
        );
        
        // Return the instructions as plain text
        return setupInstructions;
      } catch (error) {
        console.error('Error reading setup instructions:', error);
        throw new Error('Failed to read setup instructions');
      }
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
      const { componentId, filter } = args;
      
      // Get component properties with optional filtering
      const properties = propertyExplorer.getComponentProperties({
        componentId,
        filter
      });
      
      if (!properties) {
        throw new Error(`Component ${componentId} not found or has no properties`);
      }
      
      return JSON.stringify({
        componentId,
        properties: Object.values(properties).map(property => ({
          name: property.name,
          type: property.type,
          description: property.description,
          defaultValue: property.defaultValue,
          required: property.required,
          acceptedValues: property.acceptedValues,
          isDeprecated: property.isDeprecated,
          examples: property.examples || [],
        })),
        filter
      });
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
      const { componentId, type, limit = 10, tags = [] } = args;
      
      // Get component examples
      const examplesResponse = exampleProvider.getExamples({
        componentId,
        type,
        limit,
        tags
      });
      
      return JSON.stringify(examplesResponse);
    },
  });

  // Tool: validate_component_props
  server.addTool({
    name: 'validate_component_props',
    description: 'Validate if provided props are valid for a component',
    parameters: z.object({
      componentId: z.string().describe('Component ID'),
      props: z.record(z.any()).describe('Component props to validate'),
    }),
    execute: async (args) => {
      const { componentId, props } = args;
      
      // Get component
      const component = componentRegistry.getComponent(componentId);
      
      if (!component) {
        throw new Error(`Component ${componentId} not found`);
      }
      
      // Validate props
      const validationResults = {
        isValid: true,
        errors: [] as Array<{
          property: string;
          message: string;
          severity: 'error' | 'warning';
        }>,
        warnings: [] as Array<{
          property: string;
          message: string;
        }>,
      };
      
      // Check for required props
      Object.values(component.properties).forEach(property => {
        // Check if required property is missing
        if (property.required && !(property.name in props)) {
          validationResults.isValid = false;
          validationResults.errors.push({
            property: property.name,
            message: `Required property '${property.name}' is missing`,
            severity: 'error'
          });
        }
        
        // Check if property value is valid
        if (property.name in props) {
          const value = props[property.name];
          
          // Check if value is of correct type
          if (!isValueTypeValid(value, property.type)) {
            validationResults.isValid = false;
            validationResults.errors.push({
              property: property.name,
              message: `Property '${property.name}' has invalid type. Expected ${property.type}`,
              severity: 'error'
            });
          }
          
          // Check if value is in accepted values
          if (property.acceptedValues &&
              property.acceptedValues.length > 0 &&
              !property.acceptedValues.includes(value)) {
            validationResults.isValid = false;
            validationResults.errors.push({
              property: property.name,
              message: `Property '${property.name}' has invalid value. Accepted values: ${property.acceptedValues.join(', ')}`,
              severity: 'error'
            });
          }
          
          // Check if property is deprecated
          if (property.isDeprecated) {
            validationResults.warnings.push({
              property: property.name,
              message: `Property '${property.name}' is deprecated`
            });
          }
        }
      });
      
      // Check for unknown props
      Object.keys(props).forEach(propName => {
        if (!component.properties[propName]) {
          validationResults.warnings.push({
            property: propName,
            message: `Unknown property '${propName}'`
          });
        }
      });
      
      return JSON.stringify(validationResults);
    },
  });

  // Tool: get_component_patterns
  server.addTool({
    name: 'get_component_patterns',
    description: 'Get common usage patterns for a component',
    parameters: z.object({
      componentId: z.string().describe('Component ID'),
      limit: z.number().optional().describe('Maximum number of patterns to return'),
    }),
    execute: async (args) => {
      const { componentId, limit = 5 } = args;
      
      // Get component
      const component = componentRegistry.getComponent(componentId);
      
      if (!component) {
        throw new Error(`Component ${componentId} not found`);
      }
      
      // Get patterns that use this component
      const allPatterns = componentRegistry.getAllPatterns();
      const relevantPatterns = Object.values(allPatterns)
        .filter(pattern => pattern.components.includes(componentId))
        .slice(0, limit)
        .map(pattern => ({
          id: pattern.id,
          name: pattern.name,
          description: pattern.description,
          components: pattern.components.map(id => {
            const comp = componentRegistry.getComponent(id);
            return comp ? comp.name : id;
          }),
        }));
      
      return JSON.stringify({
        componentId,
        componentName: component.name,
        patterns: relevantPatterns,
        totalPatterns: relevantPatterns.length
      });
    },
  });

  // Tool: get_component_accessibility
  server.addTool({
    name: 'get_component_accessibility',
    description: 'Get accessibility information and best practices for a component',
    parameters: z.object({
      componentId: z.string().describe('Component ID'),
    }),
    execute: async (args) => {
      const { componentId } = args;
      
      // Get component
      const component = componentRegistry.getComponent(componentId);
      
      if (!component) {
        throw new Error(`Component ${componentId} not found`);
      }
      
      // Get component documentation with focus on accessibility
      const documentation = documentationProvider.getComponentDocumentation({
        componentId,
        section: 'accessibility',
        format: 'markdown'
      });
      
      return JSON.stringify({
        componentId,
        componentName: component.name,
        accessibility: documentation,
        ariaRoles: getComponentAriaRoles(component),
        keyboardNavigation: getComponentKeyboardNavigation(component),
        bestPractices: getComponentAccessibilityBestPractices(component)
      });
    },
  });

  // Tool: get_component_events
  server.addTool({
    name: 'get_component_events',
    description: 'Get information about events emitted by a component',
    parameters: z.object({
      componentId: z.string().describe('Component ID'),
    }),
    execute: async (args) => {
      const { componentId } = args;
      
      // Get component
      const component = componentRegistry.getComponent(componentId);
      
      if (!component) {
        throw new Error(`Component ${componentId} not found`);
      }
      
      // Get event handler properties
      const eventHandlerProps = Object.values(component.properties)
        .filter(prop => prop.name.startsWith('on') || prop.type.includes('function'))
        .map(prop => ({
          name: prop.name,
          description: prop.description,
          type: prop.type,
          isRequired: prop.required,
          isDeprecated: prop.isDeprecated || false,
          examples: prop.examples || []
        }));
      
      return JSON.stringify({
        componentId,
        componentName: component.name,
        events: eventHandlerProps,
        totalEvents: eventHandlerProps.length
      });
    },
  });

  // Tool: get_component_versions
  server.addTool({
    name: 'get_component_versions',
    description: 'Get version history and changes for a component',
    parameters: z.object({
      componentId: z.string().describe('Component ID'),
    }),
    execute: async (args) => {
      const { componentId } = args;
      
      // Get component
      const component = componentRegistry.getComponent(componentId);
      
      if (!component) {
        throw new Error(`Component ${componentId} not found`);
      }
      
      // For this implementation, we'll return the current version
      // In a real implementation, this would fetch version history from a database or API
      return JSON.stringify({
        componentId,
        componentName: component.name,
        currentVersion: component.version,
        isExperimental: component.isExperimental,
        versions: [
          {
            version: component.version,
            releaseDate: "2023-01-01", // Placeholder
            changes: [
              "Initial version" // Placeholder
            ],
            breaking: false
          }
        ]
      });
    },
  });

  // Tool: compare_components
  server.addTool({
    name: 'compare_components',
    description: 'Compare features and properties of multiple components',
    parameters: z.object({
      componentIds: z.array(z.string()).describe('Component IDs to compare'),
    }),
    execute: async (args) => {
      const { componentIds } = args;
      
      if (!componentIds || componentIds.length < 2) {
        throw new Error('At least two component IDs are required for comparison');
      }
      
      // Get components
      const components = componentIds.map(id => {
        const component = componentRegistry.getComponent(id);
        if (!component) {
          throw new Error(`Component ${id} not found`);
        }
        return component;
      });
      
      // Compare components
      const comparison = {
        components: components.map(component => ({
          id: component.id,
          name: component.name,
          category: component.category,
          description: component.description,
          version: component.version,
          isExperimental: component.isExperimental,
          propertyCount: Object.keys(component.properties).length,
        })),
        commonProperties: findCommonProperties(components),
        uniqueProperties: findUniqueProperties(components),
        categories: [...new Set(components.map(c => c.category))],
        isExperimental: components.some(c => c.isExperimental),
      };
      
      return JSON.stringify(comparison);
    },
  });

  // Tool: get_component_alternatives
  server.addTool({
    name: 'get_component_alternatives',
    description: 'Get alternative components that could be used instead',
    parameters: z.object({
      componentId: z.string().describe('Component ID'),
      limit: z.number().optional().describe('Maximum number of alternatives to return'),
    }),
    execute: async (args) => {
      const { componentId, limit = 5 } = args;
      
      // Get component
      const component = componentRegistry.getComponent(componentId);
      
      if (!component) {
        throw new Error(`Component ${componentId} not found`);
      }
      
      // Get related components
      const relatedComponents = component.relatedComponents
        .map(id => componentRegistry.getComponent(id))
        .filter(Boolean)
        .map(related => ({
          id: related!.id,
          name: related!.name,
          category: related!.category,
          description: related!.description,
          similarity: calculateComponentSimilarity(component, related!),
          comparisonPoints: getComponentComparisonPoints(component, related!),
        }));
      
      // Get components in the same category
      const categoryComponents = Object.values(componentRegistry.getAllComponents())
        .filter(c => c.category === component.category && c.id !== component.id)
        .map(c => ({
          id: c.id,
          name: c.name,
          category: c.category,
          description: c.description,
          similarity: calculateComponentSimilarity(component, c),
          comparisonPoints: getComponentComparisonPoints(component, c),
        }));
      
      // Combine and sort by similarity
      const alternatives = [...relatedComponents, ...categoryComponents]
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, limit);
      
      return JSON.stringify({
        componentId,
        componentName: component.name,
        alternatives,
        totalAlternatives: alternatives.length
      });
    },
  });

  // Tool: get_component_dependencies
  server.addTool({
    name: 'get_component_dependencies',
    description: 'Get dependencies required by a component',
    parameters: z.object({
      componentId: z.string().describe('Component ID'),
    }),
    execute: async (args) => {
      const { componentId } = args;
      
      // Get component
      const component = componentRegistry.getComponent(componentId);
      
      if (!component) {
        throw new Error(`Component ${componentId} not found`);
      }
      
      // In a real implementation, this would analyze the component's dependencies
      // For this implementation, we'll return the import path and related components
      return JSON.stringify({
        componentId,
        componentName: component.name,
        importPath: component.importPath,
        relatedComponents: component.relatedComponents.map(id => {
          const related = componentRegistry.getComponent(id);
          return related ? {
            id: related.id,
            name: related.name,
            importPath: related.importPath
          } : { id, name: id, importPath: '' };
        }),
        peerDependencies: [
          {
            name: "react",
            version: "^16.8.0 || ^17.0.0 || ^18.0.0"
          },
          {
            name: "react-dom",
            version: "^16.8.0 || ^17.0.0 || ^18.0.0"
          }
        ]
      });
    },
  });

  // Tool: generate_full_page
  server.addTool({
    name: 'generate_full_page',
    description: 'Generate code for a complete page using multiple components',
    parameters: z.object({
      layout: z.string().describe('Page layout (e.g., "dashboard", "form", "details")'),
      components: z.array(z.object({
        componentId: z.string().describe('Component ID'),
        props: z.record(z.any()).optional().describe('Component props'),
        children: z.string().optional().describe('Component children'),
      })).describe('Components to include in the page'),
      typescript: z.boolean().optional().describe('Whether to generate TypeScript code'),
      includeImports: z.boolean().optional().describe('Whether to include imports in the code'),
      includeStyles: z.boolean().optional().describe('Whether to include styles in the code'),
    }),
    execute: async (args) => {
      const {
        layout,
        components,
        typescript = false,
        includeImports = true,
        includeStyles = true
      } = args;
      
      if (!components || components.length === 0) {
        throw new Error('At least one component is required');
      }
      
      // Generate code for each component
      const componentCodes = components.map(comp => {
        const { componentId, props = {}, children = '' } = comp;
        
        // Generate component code
        const { code, imports } = codeGenerator.generateComponentCode({
          componentId,
          props,
          children,
          typescript,
          includeImports: false // We'll handle imports separately
        });
        
        return { code, imports, componentId };
      });
      
      // Combine imports
      const allImports = new Set<string>();
      componentCodes.forEach(comp => {
        comp.imports.forEach(imp => allImports.add(imp));
      });
      
      // Generate page layout
      let pageCode = '';
      
      switch (layout.toLowerCase()) {
        case 'dashboard':
          pageCode = generateDashboardLayout(componentCodes.map(c => c.code));
          break;
        case 'form':
          pageCode = generateFormLayout(componentCodes.map(c => c.code));
          break;
        case 'details':
          pageCode = generateDetailsLayout(componentCodes.map(c => c.code));
          break;
        default:
          pageCode = generateDefaultLayout(componentCodes.map(c => c.code));
      }
      
      // Add imports if requested
      if (includeImports) {
        pageCode = `${Array.from(allImports).join('\n')}\n\n${pageCode}`;
      }
      
      // Add styles if requested
      if (includeStyles) {
        pageCode = `${pageCode}\n\n${generatePageStyles(layout)}`;
      }
      
      return JSON.stringify({
        code: pageCode,
        layout,
        componentCount: components.length,
        language: typescript ? 'typescript' : 'javascript',
        format: typescript ? 'tsx' : 'jsx'
      });
    },
  });
}

/**
 * Find common properties between components
 * @param components - Components to compare
 * @returns Common properties
 */
function findCommonProperties(components: any[]): any[] {
  if (components.length === 0) return [];
  
  // Get property names from the first component
  const firstComponentProps = Object.keys(components[0].properties);
  
  // Find properties that exist in all components
  const commonProps = firstComponentProps.filter(propName =>
    components.every(component => component.properties[propName])
  );
  
  // Get property details
  return commonProps.map(propName => {
    const prop = components[0].properties[propName];
    return {
      name: prop.name,
      type: prop.type,
      description: prop.description,
      required: prop.required,
      isDeprecated: prop.isDeprecated || false
    };
  });
}

/**
 * Find unique properties for each component
 * @param components - Components to compare
 * @returns Unique properties for each component
 */
function findUniqueProperties(components: any[]): Record<string, any[]> {
  const result: Record<string, any[]> = {};
  
  components.forEach(component => {
    const uniqueProps = Object.values(component.properties).filter((prop: any) =>
      components.some(c => c.id !== component.id && !c.properties[prop.name])
    );
    
    result[component.id] = uniqueProps.map((prop: any) => ({
      name: prop.name,
      type: prop.type,
      description: prop.description,
      required: prop.required,
      isDeprecated: prop.isDeprecated || false
    }));
  });
  
  return result;
}

/**
 * Calculate similarity between two components
 * @param component1 - First component
 * @param component2 - Second component
 * @returns Similarity score (0-1)
 */
function calculateComponentSimilarity(component1: any, component2: any): number {
  // Calculate similarity based on various factors
  let similarity = 0;
  
  // Same category
  if (component1.category === component2.category) {
    similarity += 0.3;
  }
  
  // Common tags
  const commonTags = component1.tags.filter((tag: string) => component2.tags.includes(tag));
  similarity += 0.1 * (commonTags.length / Math.max(component1.tags.length, component2.tags.length));
  
  // Common properties
  const component1PropNames = Object.keys(component1.properties);
  const component2PropNames = Object.keys(component2.properties);
  const commonProps = component1PropNames.filter(prop => component2PropNames.includes(prop));
  
  similarity += 0.4 * (commonProps.length / Math.max(component1PropNames.length, component2PropNames.length));
  
  // Related components
  if (component1.relatedComponents.includes(component2.id) || component2.relatedComponents.includes(component1.id)) {
    similarity += 0.2;
  }
  
  return Math.min(similarity, 1);
}

/**
 * Get comparison points between two components
 * @param component1 - First component
 * @param component2 - Second component
 * @returns Comparison points
 */
function getComponentComparisonPoints(component1: any, component2: any): any[] {
  const points = [];
  
  // Compare categories
  if (component1.category === component2.category) {
    points.push({
      aspect: 'category',
      description: `Both components are in the ${component1.category} category`
    });
  } else {
    points.push({
      aspect: 'category',
      description: `${component1.name} is in ${component1.category} category, while ${component2.name} is in ${component2.category} category`
    });
  }
  
  // Compare experimental status
  if (component1.isExperimental !== component2.isExperimental) {
    points.push({
      aspect: 'stability',
      description: `${component1.isExperimental ? component1.name : component2.name} is experimental, while ${component1.isExperimental ? component2.name : component1.name} is stable`
    });
  }
  
  // Compare property count
  const component1PropCount = Object.keys(component1.properties).length;
  const component2PropCount = Object.keys(component2.properties).length;
  
  if (Math.abs(component1PropCount - component2PropCount) > 3) {
    points.push({
      aspect: 'complexity',
      description: `${component1PropCount > component2PropCount ? component1.name : component2.name} has more configuration options than ${component1PropCount > component2PropCount ? component2.name : component1.name}`
    });
  }
  
  return points;
}

/**
 * Get ARIA roles for a component
 * @param component - Component metadata
 * @returns ARIA roles
 */
function getComponentAriaRoles(component: any): any[] {
  // In a real implementation, this would analyze the component's ARIA roles
  // For this implementation, we'll return placeholder data
  const commonRoles: Record<string, string[]> = {
    button: ['button'],
    link: ['link'],
    checkbox: ['checkbox'],
    radio: ['radio'],
    select: ['combobox'],
    input: ['textbox'],
    table: ['grid', 'table'],
    modal: ['dialog'],
    alert: ['alert'],
    tabs: ['tablist', 'tab', 'tabpanel'],
    menu: ['menu', 'menuitem'],
    form: ['form'],
  };
  
  // Find matching roles based on component ID
  for (const [key, roles] of Object.entries(commonRoles)) {
    if (component.id.toLowerCase().includes(key)) {
      return roles.map(role => ({
        role,
        description: `The ${component.name} component uses the '${role}' ARIA role`
      }));
    }
  }
  
  return [];
}

/**
 * Get keyboard navigation information for a component
 * @param component - Component metadata
 * @returns Keyboard navigation information
 */
function getComponentKeyboardNavigation(component: any): any[] {
  // In a real implementation, this would analyze the component's keyboard navigation
  // For this implementation, we'll return placeholder data
  const commonNavigation: Record<string, any[]> = {
    button: [
      { key: 'Enter', action: 'Activates the button' },
      { key: 'Space', action: 'Activates the button' }
    ],
    link: [
      { key: 'Enter', action: 'Activates the link' }
    ],
    checkbox: [
      { key: 'Space', action: 'Toggles the checkbox' }
    ],
    radio: [
      { key: 'Space', action: 'Selects the radio button' },
      { key: 'Arrow keys', action: 'Moves between radio buttons in a group' }
    ],
    select: [
      { key: 'Enter', action: 'Opens the dropdown' },
      { key: 'Arrow keys', action: 'Navigates between options' },
      { key: 'Escape', action: 'Closes the dropdown' }
    ],
    table: [
      { key: 'Arrow keys', action: 'Navigates between cells' },
      { key: 'Tab', action: 'Moves to the next focusable element' }
    ],
    tabs: [
      { key: 'Arrow keys', action: 'Navigates between tabs' },
      { key: 'Tab', action: 'Moves to the tab panel' }
    ],
  };
  
  // Find matching navigation based on component ID
  for (const [key, navigation] of Object.entries(commonNavigation)) {
    if (component.id.toLowerCase().includes(key)) {
      return navigation;
    }
  }
  
  return [];
}

/**
 * Get accessibility best practices for a component
 * @param component - Component metadata
 * @returns Accessibility best practices
 */
function getComponentAccessibilityBestPractices(component: any): string[] {
  // In a real implementation, this would provide component-specific best practices
  // For this implementation, we'll return general best practices
  const generalBestPractices = [
    'Ensure all interactive elements are keyboard accessible',
    'Provide appropriate ARIA attributes',
    'Maintain sufficient color contrast',
    'Include descriptive labels and instructions',
    'Test with screen readers',
  ];
  
  const componentSpecificPractices: Record<string, string[]> = {
    button: [
      'Use the native button element when possible',
      'Provide descriptive button text',
      'Avoid using only icons without accessible labels',
    ],
    table: [
      'Include proper table headers with scope attributes',
      'Use caption or aria-labelledby to provide table context',
      'Consider responsive design for small screens',
    ],
    form: [
      'Associate labels with form controls',
      'Group related form elements with fieldset and legend',
      'Provide clear error messages',
      'Indicate required fields',
    ],
  };
  
  // Find matching best practices based on component ID
  for (const [key, practices] of Object.entries(componentSpecificPractices)) {
    if (component.id.toLowerCase().includes(key)) {
      return [...generalBestPractices, ...practices];
    }
  }
  
  return generalBestPractices;
}

/**
 * Generate dashboard layout
 * @param componentCodes - Component codes
 * @returns Dashboard layout code
 */
function generateDashboardLayout(componentCodes: string[]): string {
  return `function DashboardPage() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      
      <div className="dashboard-content">
        <div className="dashboard-main">
          ${componentCodes.slice(0, Math.ceil(componentCodes.length / 2)).join('\n          ')}
        </div>
        
        <div className="dashboard-sidebar">
          ${componentCodes.slice(Math.ceil(componentCodes.length / 2)).join('\n          ')}
        </div>
      </div>
      
      <footer className="dashboard-footer">
        <p>© ${new Date().getFullYear()} Your Company</p>
      </footer>
    </div>
  );
}

export default DashboardPage;`;
}

/**
 * Generate form layout
 * @param componentCodes - Component codes
 * @returns Form layout code
 */
function generateFormLayout(componentCodes: string[]): string {
  return `function FormPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.error('Form submitted');
  };

  return (
    <div className="form-container">
      <h1>Form Page</h1>
      
      <form onSubmit={handleSubmit}>
        ${componentCodes.join('\n        ')}
        
        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default FormPage;`;
}

/**
 * Generate details layout
 * @param componentCodes - Component codes
 * @returns Details layout code
 */
function generateDetailsLayout(componentCodes: string[]): string {
  return `function DetailsPage() {
  return (
    <div className="details-container">
      <header className="details-header">
        <h1>Details Page</h1>
        <div className="details-actions">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </header>
      
      <div className="details-content">
        ${componentCodes.join('\n        ')}
      </div>
      
      <div className="details-footer">
        <button>Back</button>
      </div>
    </div>
  );
}

export default DetailsPage;`;
}

/**
 * Generate default layout
 * @param componentCodes - Component codes
 * @returns Default layout code
 */
function generateDefaultLayout(componentCodes: string[]): string {
  return `function DefaultPage() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Page Title</h1>
      </header>
      
      <div className="page-content">
        ${componentCodes.join('\n        ')}
      </div>
      
      <footer className="page-footer">
        <p>© ${new Date().getFullYear()} Your Company</p>
      </footer>
    </div>
  );
}

export default DefaultPage;`;
}

/**
 * Generate page styles
 * @param layout - Page layout
 * @returns CSS styles
 */
function generatePageStyles(layout: string): string {
  switch (layout.toLowerCase()) {
    case 'dashboard':
      return `/* Dashboard Styles */
.dashboard-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.dashboard-header {
  padding: 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.dashboard-content {
  display: flex;
  flex: 1;
  padding: 1rem;
}

.dashboard-main {
  flex: 3;
  margin-right: 1rem;
}

.dashboard-sidebar {
  flex: 1;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
}

.dashboard-footer {
  padding: 1rem;
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  text-align: center;
}`;
    
    case 'form':
      return `/* Form Styles */
.form-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid #ced4da;
  background-color: #f8f9fa;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #0d6efd;
  color: white;
  border-color: #0d6efd;
}`;
    
    case 'details':
      return `/* Details Styles */
.details-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.details-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.details-actions {
  display: flex;
  gap: 0.5rem;
}

.details-content {
  margin-bottom: 2rem;
}

.details-footer {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
}`;
    
    default:
      return `/* Default Page Styles */
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.page-content {
  margin-bottom: 2rem;
}

.page-footer {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
  text-align: center;
}`;
  }
}

/**
 * Helper function to check if a value is of the expected type
 * @param value - The value to check
 * @param expectedType - The expected type
 * @returns Whether the value is of the expected type
 */
function isValueTypeValid(value: any, expectedType: string): boolean {
  switch (expectedType.toLowerCase()) {
    case 'string':
      return typeof value === 'string';
    case 'number':
      return typeof value === 'number';
    case 'boolean':
      return typeof value === 'boolean';
    case 'function':
      return typeof value === 'function' || typeof value === 'string'; // Allow string for function expressions
    case 'array':
      return Array.isArray(value);
    case 'object':
      return typeof value === 'object' && value !== null && !Array.isArray(value);
    default:
      return true; // For complex types, assume valid
  }
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

  // Resource: cloudscape://patterns/{patternId}
  server.addResourceTemplate({
    uriTemplate: 'cloudscape://patterns/{patternId}',
    name: 'Pattern Details',
    mimeType: 'application/json',
    arguments: [
      {
        name: 'patternId',
        description: 'Pattern ID',
        required: true,
      },
    ],
    async load({ patternId }) {
      // Get pattern details
      const pattern = componentRegistry.getPattern(patternId);
      
      if (!pattern) {
        throw new Error(`Pattern ${patternId} not found`);
      }
      
      // Get pattern documentation
      const documentation = documentationProvider.getPatternDocumentation({
        patternId,
        format: 'markdown'
      });
      
      // Get components used in the pattern
      const components = pattern.components.map(componentId => {
        const component = componentRegistry.getComponent(componentId);
        return component ? {
          id: component.id,
          name: component.name,
          description: component.description,
          category: component.category
        } : { id: componentId, name: componentId, description: '', category: '' };
      });
      
      return {
        text: JSON.stringify({
          id: pattern.id,
          name: pattern.name,
          description: pattern.description,
          components,
          customizationOptions: pattern.customizationOptions,
          documentation,
        }, null, 2),
      };
    },
  });

  // Resource: cloudscape://examples/{exampleId}
  server.addResourceTemplate({
    uriTemplate: 'cloudscape://examples/{exampleId}',
    name: 'Example Details',
    mimeType: 'application/json',
    arguments: [
      {
        name: 'exampleId',
        description: 'Example ID',
        required: true,
      },
    ],
    async load({ exampleId }) {
      // Get example details
      const example = exampleProvider.getExample(exampleId);
      
      if (!example) {
        throw new Error(`Example ${exampleId} not found`);
      }
      
      // Get component for the example
      const component = componentRegistry.getComponent(example.component);
      
      return {
        text: JSON.stringify({
          id: example.id,
          name: example.name,
          description: example.description,
          component: example.component,
          componentName: component ? component.name : example.component,
          type: example.type,
          code: example.code,
          tags: example.tags || [],
        }, null, 2),
      };
    },
  });

  // Resource: cloudscape://best-practices
  server.addResource({
    uri: 'cloudscape://best-practices',
    name: 'Cloudscape Best Practices',
    mimeType: 'text/markdown',
    async load() {
      // In a real implementation, this would read from a file or database
      // For this implementation, we'll return a markdown string
      const bestPractices = `# Cloudscape Design System Best Practices

## General Best Practices

### Component Selection
- Choose the simplest component that meets your requirements
- Use consistent components across your application
- Consider accessibility requirements when selecting components

### Layout and Spacing
- Follow the Cloudscape grid system for consistent spacing
- Use container components to group related elements
- Maintain consistent spacing between components

### Responsive Design
- Test your application on different screen sizes
- Use responsive components that adapt to different viewports
- Consider mobile-first design principles

## Component-Specific Best Practices

### Buttons
- Use primary buttons for main actions
- Use secondary buttons for alternative actions
- Provide clear and concise button labels
- Group related buttons together

### Forms
- Group related form fields
- Provide clear labels for all form fields
- Indicate required fields
- Provide helpful error messages
- Use appropriate input types for different data

### Tables
- Use tables for structured data
- Provide sorting and filtering options for large datasets
- Use pagination for large datasets
- Provide clear column headers

### Navigation
- Use consistent navigation patterns
- Provide clear indication of current location
- Use breadcrumbs for deep navigation structures
- Consider keyboard navigation

## Performance Considerations

- Lazy load components when appropriate
- Optimize component rendering
- Use pagination and virtualization for large datasets
- Monitor and optimize bundle size

## Accessibility Guidelines

- Ensure keyboard navigation for all interactive elements
- Provide appropriate ARIA attributes
- Maintain sufficient color contrast
- Test with screen readers
- Follow WAI-ARIA guidelines

## Common Patterns

- Dashboard layouts
- Form layouts
- Detail pages
- List pages
- Navigation structures
- Modal dialogs
- Notifications and alerts

## Additional Resources

- [Cloudscape Design System Documentation](https://cloudscape.design/)
- [Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/aria/)
- [React Best Practices](https://reactjs.org/docs/thinking-in-react.html)
`;
      
      return {
        text: bestPractices,
      };
    },
  });

  // Resource: cloudscape://components-overview
  server.addResource({
    uri: 'cloudscape://components-overview',
    name: 'Cloudscape Components Overview',
    mimeType: 'text/markdown',
    async load() {
      try {
        // Read the cloudscape components overview file
        const componentsOverview = fs.readFileSync(
          path.join(__dirname, '../resources/cloudscape-components.roo.md'),
          'utf-8'
        );
        
        // Return the overview as markdown text
        return {
          text: componentsOverview,
        };
      } catch (error) {
        console.error('Error reading cloudscape components overview:', error);
        throw new Error('Failed to read cloudscape components overview');
      }
    },
  });

  // Resource: cloudscape://frontend-code-setup
  server.addResource({
    uri: 'cloudscape://frontend-code-setup',
    name: 'Frontend Code Setup Instructions',
    mimeType: 'text/markdown',
    async load() {
      try {
        // Read the frontend code setup instructions file
        const setupInstructions = fs.readFileSync(
          path.join(__dirname, '../resources/frontend-code-setup.roo.md'),
          'utf-8'
        );
        
        // Return the instructions as markdown text
        return {
          text: setupInstructions,
        };
      } catch (error) {
        console.error('Error reading frontend code setup instructions:', error);
        throw new Error('Failed to read frontend code setup instructions');
      }
    },
  });
}