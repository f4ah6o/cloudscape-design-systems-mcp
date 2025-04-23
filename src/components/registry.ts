/**
 * Component Registry
 * 
 * This module provides access to the Cloudscape component metadata.
 */

// Import component data
import categories from './data/categories';
import components from './data/components';
import patterns from './data/patterns';
import examples from './data/examples';
import additionalComponents from './data/additional-components';

// Type assertions for imported data
const categoriesData = categories as Record<string, CategoryMetadata>;
const componentsData = components as Record<string, ComponentMetadata>;
const patternsData = patterns as Record<string, PatternMetadata>;
const examplesData = examples as Record<string, ExampleMetadata>;
const additionalComponentsData = additionalComponents as Record<string, ComponentMetadata>;

// Define types for component metadata
export interface PropertyMetadata {
  name: string;
  type: string;
  description: string;
  defaultValue: any;
  required: boolean;
  acceptedValues?: (string | number)[];
  isDeprecated?: boolean;
  examples?: string[];
}

export interface ComponentMetadata {
  id: string;
  name: string;
  category: string;
  description: string;
  importPath: string;
  version: string;
  isExperimental: boolean;
  relatedComponents: string[];
  tags: string[];
  properties: Record<string, PropertyMetadata>;
  examples: string[];
}

export interface CategoryMetadata {
  id: string;
  name: string;
  description: string;
  components: string[];
}

export interface PatternMetadata {
  id: string;
  name: string;
  description: string;
  components: string[];
  code: string;
  customizationOptions: Record<string, CustomizationOption>;
}

export interface CustomizationOption {
  name: string;
  type: string;
  description: string;
  defaultValue: any;
  acceptedValues?: (string | number)[];
}

export interface ExampleMetadata {
  id: string;
  name: string;
  description: string;
  component: string;
  code: string;
  type: string;
  tags?: string[];
}

// Merge component data
const allComponents: Record<string, ComponentMetadata> = {
  ...componentsData,
  ...additionalComponentsData
};

/**
 * Get all components
 * @returns All components
 */
export function getAllComponents(): Record<string, ComponentMetadata> {
  return allComponents;
}

/**
 * Get a component by ID
 * @param componentId - Component ID
 * @returns Component metadata
 */
export function getComponent(componentId: string): ComponentMetadata | undefined {
  return allComponents[componentId];
}

/**
 * Get all categories
 * @returns All categories
 */
export function getAllCategories(): Record<string, CategoryMetadata> {
  return categoriesData;
}

/**
 * Get a category by ID
 * @param categoryId - Category ID
 * @returns Category metadata
 */
export function getCategory(categoryId: string): CategoryMetadata | undefined {
  return categoriesData[categoryId];
}

/**
 * Get all patterns
 * @returns All patterns
 */
export function getAllPatterns(): Record<string, PatternMetadata> {
  return patternsData;
}

/**
 * Get a pattern by ID
 * @param patternId - Pattern ID
 * @returns Pattern metadata
 */
export function getPattern(patternId: string): PatternMetadata | undefined {
  return patternsData[patternId];
}

/**
 * Get component examples
 * @param options - Options
 * @param options.componentId - Component ID
 * @param options.type - Example type
 * @param options.limit - Maximum number of examples to return
 * @returns Component examples
 */
export function getComponentExamples(options: {
  componentId: string;
  type?: string;
  limit?: number;
}): ExampleMetadata[] {
  const { componentId, type, limit } = options;
  
  // Get component examples
  const componentExamples = Object.values(examplesData).filter((example: ExampleMetadata) =>
    example.component === componentId &&
    (!type || example.type === type)
  );
  
  // Apply limit
  return limit ? componentExamples.slice(0, limit) : componentExamples;
}

// Export the module
export default {
  getAllComponents,
  getComponent,
  getAllCategories,
  getCategory,
  getAllPatterns,
  getPattern,
  getComponentExamples
};