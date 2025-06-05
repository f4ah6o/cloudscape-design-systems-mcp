/**
 * FastMCP Server Implementation
 *
 * This is a TypeScript implementation of the MCP server for the Cloudscape component library
 * using the FastMCP framework.
 */

import { FastMCP } from 'fastmcp';
import { z } from 'zod'; // Using Zod for schema validation
import * as fs from 'fs';
import * as path from 'path';

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
    execute: async (args) => {
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
      
      return {
        type: 'text',
        text: JSON.stringify({
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
        })
      };
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
      const codeResult = codeGenerator.generateComponentCode({
        componentId,
        props,
        children,
        eventHandlers,
        typescript,
        style: style as 'compact' | 'expanded',
        includeImports
      });
      
      return {
        type: 'text',
        text: codeResult.code
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
      const codeResult = codeGenerator.generatePatternCode({
        patternId,
        customizations,
        typescript,
        style: style as 'compact' | 'expanded',
        includeImports
      });
      
      return {
        type: 'text',
        text: codeResult.code
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
        scope: scope as 'components' | 'categories' | 'patterns' | 'all',
        limit
      });
      
      return {
        type: 'text',
        text: JSON.stringify(results)
      };
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
      
      return {
        type: 'text',
        text: JSON.stringify(properties)
      };
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
      const examples = exampleProvider.getExamples({
        componentId,
        type,
        limit,
        tags
      });
      
      return {
        type: 'text',
        text: JSON.stringify(examples)
      };
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
      
      // Get component properties for validation
      const properties = propertyExplorer.getComponentProperties({
        componentId
      });
      
      // Validate props against component properties
      const validationResult = {
        isValid: true,
        errors: [] as string[],
        warnings: [] as string[]
      };
      
      // Simple validation logic
      if (properties) {
        Object.entries(props).forEach(([key, value]) => {
          const property = properties[key];
          if (!property) {
            validationResult.warnings.push(`Unknown property: ${key}`);
          } else if (property.required && (value === undefined || value === null)) {
            validationResult.errors.push(`Required property ${key} is missing`);
            validationResult.isValid = false;
          } else if (value !== undefined && !isValueTypeValid(value, property.type)) {
            validationResult.errors.push(`Property ${key} has invalid type`);
            validationResult.isValid = false;
          }
        });
        
        // Check for missing required properties
        Object.entries(properties).forEach(([key, property]) => {
          if (property.required && !(key in props)) {
            validationResult.errors.push(`Required property ${key} is missing`);
            validationResult.isValid = false;
          }
        });
      }
      
      return {
        type: 'text',
        text: JSON.stringify(validationResult)
      };
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
      
      return {
        type: 'text',
        text: JSON.stringify(patterns)
      };
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
      
      // Get component details
      const component = componentRegistry.getComponent(componentId);
      
      if (!component) {
        throw new Error(`Component ${componentId} not found`);
      }
      
      // Generate accessibility information
      const accessibilityInfo = {
        name: component.name,
        ariaRoles: getComponentAriaRoles(component),
        keyboardNavigation: getComponentKeyboardNavigation(component),
        screenReaderSupport: getComponentScreenReaderSupport(component),
        bestPractices: getComponentAccessibilityBestPractices(component),
        commonIssues: getComponentAccessibilityCommonIssues(component),
      };
      
      return {
        type: 'text',
        text: JSON.stringify(accessibilityInfo, null, 2)
      };
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
      
      // Get component details
      const component = componentRegistry.getComponent(componentId);
      
      if (!component) {
        throw new Error(`Component ${componentId} not found`);
      }
      
      // Extract event handlers from properties
      const eventHandlers = Object.values(component.properties)
        .filter(prop => prop.name.startsWith('on') && prop.type === 'function')
        .map(prop => ({
          name: prop.name,
          description: prop.description,
          parameters: prop.type === 'function' ? 'event' : prop.type,
          isRequired: prop.required,
          examples: prop.examples || []
        }));
      
      return {
        type: 'text',
        text: JSON.stringify({
          componentId,
          componentName: component.name,
          eventHandlers
        }, null, 2)
      };
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
      
      // Get component details
      const component = componentRegistry.getComponent(componentId);
      
      if (!component) {
        throw new Error(`Component ${componentId} not found`);
      }
      
      // Generate version history (mock data for now)
      const versionHistory = [
        {
          version: component.version,
          date: '2025-05-01',
          changes: [
            'Initial release',
            'Added basic functionality'
          ]
        },
        {
          version: '1.0.0',
          date: '2025-04-15',
          changes: [
            'Beta release',
            'Fixed accessibility issues'
          ]
        }
      ];
      
      return {
        type: 'text',
        text: JSON.stringify({
          componentId,
          componentName: component.name,
          currentVersion: component.version,
          versionHistory
        }, null, 2)
      };
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
      
      // Get component details
      const components = componentIds.map(id => componentRegistry.getComponent(id)).filter(Boolean);
      
      if (components.length === 0) {
        throw new Error('No valid components found to compare');
      }
      
      // Compare components
      const comparison = {
        components: components.map(component => ({
          id: component?.id || 'unknown',
          name: component?.name || 'Unknown Component',
          category: component?.category || 'unknown',
          description: component?.description || '',
          version: component?.version || '0.0.0',
          isExperimental: component?.isExperimental || false,
          propertyCount: Object.keys(component?.properties || {}).length,
          requiredPropertyCount: Object.values(component?.properties || {}).filter(p => p?.required).length
        })),
        commonProperties: findCommonProperties(components),
        uniqueProperties: findUniqueProperties(components)
      };
      
      return {
        type: 'text',
        text: JSON.stringify(comparison, null, 2)
      };
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
      const { componentId, limit = 3 } = args;
      
      // Get component details
      const component = componentRegistry.getComponent(componentId);
      
      if (!component) {
        throw new Error(`Component ${componentId} not found`);
      }
      
      // Find alternative components in the same category
      const alternatives = Object.values(componentRegistry.getAllComponents())
        .filter(c => c.id !== componentId && c.category === component.category)
        .slice(0, limit)
        .map(c => ({
          id: c.id,
          name: c.name,
          description: c.description,
          similarities: getSimilarities(component, c),
          differences: getDifferences(component, c)
        }));
      
      return {
        type: 'text',
        text: JSON.stringify({
          componentId,
          componentName: component.name,
          alternatives
        }, null, 2)
      };
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
      
      // Get component details
      const component = componentRegistry.getComponent(componentId);
      
      if (!component) {
        throw new Error(`Component ${componentId} not found`);
      }
      
      // Generate dependencies (mock data for now)
      const dependencies = {
        required: [
          {
            name: '@cloudscape-design/components',
            version: '^3.0.0'
          }
        ],
        optional: [
          {
            name: '@cloudscape-design/global-styles',
            version: '^1.0.0',
            purpose: 'For consistent styling across components'
          }
        ],
        peerDependencies: [
          {
            name: 'react',
            version: '^17.0.0 || ^18.0.0'
          },
          {
            name: 'react-dom',
            version: '^17.0.0 || ^18.0.0'
          }
        ]
      };
      
      return {
        type: 'text',
        text: JSON.stringify({
          componentId,
          componentName: component.name,
          dependencies
        }, null, 2)
      };
    },
  });
}

/**
 * Get ARIA roles for a component
 * @param component - Component to get ARIA roles for
 * @returns ARIA roles
 */
function getComponentAriaRoles(component: any): string[] {
  // Mock implementation - in a real system, this would be based on component data
  const rolesByComponent: Record<string, string[]> = {
    button: ['button'],
    link: ['link'],
    checkbox: ['checkbox'],
    table: ['table', 'grid'],
    form: ['form'],
    alert: ['alert'],
    modal: ['dialog'],
    tabs: ['tablist', 'tab', 'tabpanel'],
    menu: ['menu', 'menuitem'],
    select: ['listbox', 'option']
  };
  
  return rolesByComponent[component.id] || ['none'];
}

/**
 * Get keyboard navigation information for a component
 * @param component - Component to get keyboard navigation for
 * @returns Keyboard navigation information
 */
function getComponentKeyboardNavigation(component: any): Record<string, string> {
  // Mock implementation - in a real system, this would be based on component data
  const navigationByComponent: Record<string, Record<string, string>> = {
    button: {
      'Enter/Space': 'Activates the button'
    },
    link: {
      'Enter': 'Activates the link'
    },
    checkbox: {
      'Space': 'Toggles the checkbox'
    },
    table: {
      'Tab': 'Moves focus to the next focusable element',
      'Arrow keys': 'Navigates between cells',
      'Home/End': 'Moves to the first/last cell in a row'
    },
    tabs: {
      'Tab': 'Moves focus to the next tab',
      'Arrow keys': 'Moves between tabs',
      'Enter/Space': 'Activates the focused tab'
    }
  };
  
  return navigationByComponent[component.id] || {};
}

/**
 * Get screen reader support information for a component
 * @param component - Component to get screen reader support for
 * @returns Screen reader support information
 */
function getComponentScreenReaderSupport(component: any): string[] {
  // Mock implementation - in a real system, this would be based on component data
  const supportByComponent: Record<string, string[]> = {
    button: [
      'Announces button text',
      'Announces button state (disabled, pressed)'
    ],
    link: [
      'Announces link text',
      'Announces if link opens in a new window'
    ],
    checkbox: [
      'Announces checkbox label',
      'Announces checkbox state (checked, unchecked, indeterminate)'
    ],
    table: [
      'Announces table caption',
      'Announces row and column headers',
      'Announces cell content with context'
    ]
  };
  
  return supportByComponent[component.id] || ['Standard screen reader support'];
}

/**
 * Get accessibility best practices for a component
 * @param component - Component to get accessibility best practices for
 * @returns Accessibility best practices
 */
function getComponentAccessibilityBestPractices(component: any): string[] {
  // Mock implementation - in a real system, this would be based on component data
  const bestPracticesByComponent: Record<string, string[]> = {
    button: [
      'Use clear and concise button text',
      'Avoid generic text like "Click here"',
      'Ensure sufficient color contrast'
    ],
    link: [
      'Use descriptive link text',
      'Avoid generic text like "Click here"',
      'Indicate if links open in a new window'
    ],
    checkbox: [
      'Use clear and concise labels',
      'Group related checkboxes with fieldset and legend'
    ],
    table: [
      'Use proper table headers',
      'Include a caption or summary',
      'Keep tables simple and avoid complex nesting'
    ]
  };
  
  return bestPracticesByComponent[component.id] || [
    'Follow WCAG 2.1 AA guidelines',
    'Ensure keyboard accessibility',
    'Provide text alternatives for non-text content',
    'Ensure sufficient color contrast'
  ];
}

/**
 * Get common accessibility issues for a component
 * @param component - Component to get common accessibility issues for
 * @returns Common accessibility issues
 */
function getComponentAccessibilityCommonIssues(component: any): string[] {
  // Mock implementation - in a real system, this would be based on component data
  const issuesByComponent: Record<string, string[]> = {
    button: [
      'Missing accessible name',
      'Insufficient color contrast',
      'Not keyboard accessible'
    ],
    link: [
      'Generic link text',
      'Missing indication for links opening in new windows',
      'Links that look like buttons'
    ],
    checkbox: [
      'Missing or unclear labels',
      'Not keyboard accessible',
      'Missing state changes announcement'
    ],
    table: [
      'Missing table headers',
      'Complex tables without proper structure',
      'Missing caption or summary'
    ]
  };
  
  return issuesByComponent[component.id] || [
    'Insufficient color contrast',
    'Missing keyboard accessibility',
    'Missing text alternatives',
    'Missing ARIA attributes'
  ];
}

/**
 * Find common properties between components
 * @param components - Components to compare
 * @returns Common properties
 */
function findCommonProperties(components: any[]): string[] {
  if (components.length === 0) {
    return [];
  }
  
  // Get property names from the first component
  const firstComponentProps = Object.keys(components[0].properties);
  
  // Filter for properties that exist in all components
  return firstComponentProps.filter(propName =>
    components.every(component =>
      component.properties && component.properties[propName]
    )
  );
}

/**
 * Find unique properties for each component
 * @param components - Components to compare
 * @returns Unique properties by component
 */
function findUniqueProperties(components: any[]): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  
  // For each component
  components.forEach(component => {
    // Get all property names from this component
    const componentProps = Object.keys(component.properties || {});
    
    // Find properties that don't exist in other components
    const uniqueProps = componentProps.filter(propName =>
      components
        .filter(c => c.id !== component.id) // Exclude the current component
        .every(c => !c.properties || !c.properties[propName]) // Property doesn't exist in other components
    );
    
    result[component.id] = uniqueProps;
  });
  
  return result;
}

/**
 * Get similarities between two components
 * @param component1 - First component
 * @param component2 - Second component
 * @returns Similarities
 */
function getSimilarities(component1: any, component2: any): string[] {
  // Mock implementation - in a real system, this would do a more sophisticated comparison
  const similarities = [];
  
  // Check if they're in the same category
  if (component1.category === component2.category) {
    similarities.push(`Both are ${component1.category} components`);
  }
  
  // Find common properties
  const commonProps = findCommonProperties([component1, component2]);
  if (commonProps.length > 0) {
    similarities.push(`Share ${commonProps.length} common properties`);
  }
  
  return similarities.length > 0 ? similarities : ['No significant similarities found'];
}

/**
 * Get differences between two components
 * @param component1 - First component
 * @param component2 - Second component
 * @returns Differences
 */
function getDifferences(component1: any, component2: any): string[] {
  // Mock implementation - in a real system, this would do a more sophisticated comparison
  const differences = [];
  
  // Compare property counts
  const props1Count = Object.keys(component1.properties || {}).length;
  const props2Count = Object.keys(component2.properties || {}).length;
  if (props1Count !== props2Count) {
    differences.push(`${component1.name} has ${props1Count} properties, while ${component2.name} has ${props2Count}`);
  }
  
  // Compare experimental status
  if (component1.isExperimental !== component2.isExperimental) {
    if (component1.isExperimental) {
      differences.push(`${component1.name} is experimental, while ${component2.name} is stable`);
    } else {
      differences.push(`${component1.name} is stable, while ${component2.name} is experimental`);
    }
  }
  
  return differences.length > 0 ? differences : ['No significant differences found'];
}

/**
 * Register resources with the FastMCP server
 * @param server - FastMCP server instance
 */
function registerResources(server: FastMCP) {
  // Register component details resource
  (server.addResourceTemplate as any)({
    uriTemplate: 'cloudscape://components/{componentId}',
    name: 'Component Details',
    parameters: [
      {
        name: 'componentId',
        description: 'Component ID',
      }
    ],
    handler: async (params: { componentId: string }) => {
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
  (server.addResourceTemplate as any)({
    uriTemplate: 'cloudscape://categories/{categoryId}',
    name: 'Category Details',
    parameters: [
      {
        name: 'categoryId',
        description: 'Category ID',
      }
    ],
    handler: async (params: { categoryId: string }) => {
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
  (server.addResourceTemplate as any)({
    uriTemplate: 'cloudscape://patterns/{patternId}',
    name: 'Pattern Details',
    parameters: [
      {
        name: 'patternId',
        description: 'Pattern ID',
      }
    ],
    handler: async (params: { patternId: string }) => {
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
  (server.addResourceTemplate as any)({
    uriTemplate: 'cloudscape://examples/{exampleId}',
    name: 'Example Details',
    parameters: [
      {
        name: 'exampleId',
        description: 'Example ID',
      }
    ],
    handler: async (params: { exampleId: string }) => {
      const { exampleId } = params;
      const example = exampleProvider.getExample(exampleId);
      
      if (!example) {
        throw new Error(`Example ${exampleId} not found`);
      }
      
      return {
        type: 'text',
        text: JSON.stringify(example, null, 2),
      };
    },
  });

  // Register direct resources
  (server.addResource as any)({
    uri: 'cloudscape://best-practices',
    name: 'Cloudscape Best Practices',
    handler: async () => {
      // Create a simple best practices guide
      const bestPractices = `
# Cloudscape Design System Best Practices

## General Guidelines
- Follow accessibility best practices
- Use consistent spacing and alignment
- Maintain visual hierarchy
- Test with different screen sizes

## Component Usage
- Keep content concise and focused
- Use clear and descriptive labels
- Provide feedback for user interactions
- Follow component-specific guidelines
`;
      
      return {
        type: 'text',
        text: bestPractices,
      };
    },
  });

  (server.addResource as any)({
    uri: 'cloudscape://components-overview',
    name: 'Cloudscape Components Overview',
    handler: async () => {
      // Generate an overview of all components
      const components = componentRegistry.getAllComponents();
      const categories = componentRegistry.getAllCategories();
      
      let overview = `# Cloudscape Components Overview\n\n`;
      
      // Group components by category
      Object.values(categories).forEach(category => {
        overview += `## ${category.name}\n\n`;
        overview += `${category.description}\n\n`;
        
        // List components in this category
        const categoryComponents = Object.values(components)
          .filter(component => component.category === category.id);
        
        categoryComponents.forEach(component => {
          overview += `### ${component.name}\n\n`;
          overview += `${component.description}\n\n`;
        });
        
        overview += '\n';
      });
      
      return {
        type: 'text',
        text: overview,
      };
    },
  });

  (server.addResource as any)({
    uri: 'cloudscape://frontend-code-setup',
    name: 'Frontend Code Setup Instructions',
    handler: async () => {
      // Create frontend code setup instructions
      const setupInstructions = `
# Frontend Code Setup Instructions

## Installation

Install the Cloudscape Design System packages:

\`\`\`bash
npm install @cloudscape-design/components @cloudscape-design/global-styles
\`\`\`

## Basic Setup

1. Import the global styles in your application's entry point:

\`\`\`jsx
import '@cloudscape-design/global-styles/index.css';
\`\`\`

2. Import and use components:

\`\`\`jsx
import Button from '@cloudscape-design/components/button';

function MyComponent() {
  return <Button variant="primary">Click me</Button>;
}
\`\`\`

## TypeScript Setup

If you're using TypeScript, make sure to include the following in your tsconfig.json:

\`\`\`json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "jsx": "react",
    "lib": ["DOM", "ES2019"]
  }
}
\`\`\`
`;
      
      return {
        type: 'text',
        text: setupInstructions,
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