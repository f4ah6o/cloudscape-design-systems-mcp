#!/usr/bin/env node

/**
 * Test script for Phase 2 of the Cloudscape MCP Server
 * 
 * This script tests the enhanced functionality implemented in Phase 2:
 * 1. Expanded Component Registry
 * 2. Enhanced Search Engine
 * 3. Property Explorer
 */

// Import required modules
import componentRegistry from './src/components/registry';
import searchEngine from './src/search/engine';
import propertyExplorer from './src/property-explorer';

// Define types
interface SearchResult {
  id: string;
  name: string;
  category: string;
  description: string;
  relevance: number;
  matchedFields?: string[];
}

// Test Component Registry
console.error('=== Testing Component Registry ===');
const allComponents = componentRegistry.getAllComponents();
console.error(`Total components: ${Object.keys(allComponents).length}`);
console.error('Component IDs:', Object.keys(allComponents).join(', '));
console.error('\n');

// Test a specific component
const testComponentId = 'box';
const boxComponent = componentRegistry.getComponent(testComponentId);
console.error(`Component details for '${testComponentId}':`);
console.error(JSON.stringify(boxComponent, null, 2));
console.error('\n');

// Test Enhanced Search Engine
console.error('=== Testing Enhanced Search Engine ===');

// Test basic search
console.error('Basic search for "layout":');
const basicSearchResults = searchEngine.searchComponents({
  query: 'layout',
  limit: 5
});
console.error(`Found ${basicSearchResults.totalResults} results`);
console.error('Top 5 results:');
basicSearchResults.results.forEach((result, index) => {
  console.error(`${index + 1}. ${result.name} (Relevance: ${result.relevance})`);
});
console.error('\n');

// Test fuzzy search
console.error('Fuzzy search for "buttn":');
const fuzzySearchResults = searchEngine.searchComponents({
  query: 'buttn',
  fuzzyMatch: true,
  fuzzyThreshold: 0.7,
  limit: 3
});
console.error(`Found ${fuzzySearchResults.totalResults} results`);
console.error('Top 3 results:');
fuzzySearchResults.results.forEach((result, index) => {
  console.error(`${index + 1}. ${result.name} (Relevance: ${result.relevance}, Matched: ${result.matchedFields?.join(', ')})`);
});
console.error('\n');

// Test advanced filtering
console.error('Search with advanced filtering:');
const filteredSearchResults = searchEngine.searchComponents({
  query: 'input',
  filters: {
    experimental: false
  },
  sortBy: 'name',
  sortOrder: 'asc',
  limit: 5
});
console.error(`Found ${filteredSearchResults.totalResults} results`);
console.error('Top 5 results (sorted by name):');
filteredSearchResults.results.forEach((result, index) => {
  console.error(`${index + 1}. ${result.name} (Category: ${result.category})`);
});
console.error('\n');

// Test functionality search
console.error('Search by functionality:');
const functionalityResults = searchEngine.searchComponentsByFunctionality('selection', {
  limit: 3
});
console.error(`Found ${functionalityResults.totalResults} results for functionality "selection"`);
console.error('Top 3 results:');
functionalityResults.results.forEach((result, index) => {
  console.error(`${index + 1}. ${result.name} (Relevance: ${result.relevance})`);
});
console.error('\n');

// Test Property Explorer
console.error('=== Testing Property Explorer ===');

// Get all properties for a component
console.error('All properties for Button:');
const buttonProperties = propertyExplorer.getComponentProperties({
  componentId: 'button'
});
console.error(`Found ${buttonProperties ? Object.keys(buttonProperties).length : 0} properties`);
if (buttonProperties) {
  console.error('Property names:', Object.keys(buttonProperties).join(', '));
}
console.error('\n');

// Get filtered properties
console.error('Required properties for Form:');
const requiredFormProperties = propertyExplorer.getComponentProperties({
  componentId: 'form',
  filter: {
    required: true
  }
});
console.error(`Found ${requiredFormProperties ? Object.keys(requiredFormProperties).length : 0} required properties`);
if (requiredFormProperties) {
  console.error('Required property names:', Object.keys(requiredFormProperties).join(', '));
}
console.error('\n');

// Get property relationships
console.error('Property relationships for Table:');
const tableRelationships = propertyExplorer.getPropertyRelationships('table');
console.error(JSON.stringify(tableRelationships, null, 2));
console.error('\n');

// Get property type info
console.error('Type information for Button variant property:');
const variantTypeInfo = propertyExplorer.getPropertyTypeInfo({
  componentId: 'button',
  propertyId: 'variant'
});
console.error(JSON.stringify(variantTypeInfo, null, 2));
console.error('\n');

console.error('=== All Tests Completed ===');