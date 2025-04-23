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
console.log('=== Testing Component Registry ===');
const allComponents = componentRegistry.getAllComponents();
console.log(`Total components: ${Object.keys(allComponents).length}`);
console.log('Component IDs:', Object.keys(allComponents).join(', '));
console.log('\n');

// Test a specific component
const testComponentId = 'box';
const boxComponent = componentRegistry.getComponent(testComponentId);
console.log(`Component details for '${testComponentId}':`);
console.log(JSON.stringify(boxComponent, null, 2));
console.log('\n');

// Test Enhanced Search Engine
console.log('=== Testing Enhanced Search Engine ===');

// Test basic search
console.log('Basic search for "layout":');
const basicSearchResults = searchEngine.searchComponents({
  query: 'layout',
  limit: 5
});
console.log(`Found ${basicSearchResults.totalResults} results`);
console.log('Top 5 results:');
basicSearchResults.results.forEach((result, index) => {
  console.log(`${index + 1}. ${result.name} (Relevance: ${result.relevance})`);
});
console.log('\n');

// Test fuzzy search
console.log('Fuzzy search for "buttn":');
const fuzzySearchResults = searchEngine.searchComponents({
  query: 'buttn',
  fuzzyMatch: true,
  fuzzyThreshold: 0.7,
  limit: 3
});
console.log(`Found ${fuzzySearchResults.totalResults} results`);
console.log('Top 3 results:');
fuzzySearchResults.results.forEach((result, index) => {
  console.log(`${index + 1}. ${result.name} (Relevance: ${result.relevance}, Matched: ${result.matchedFields?.join(', ')})`);
});
console.log('\n');

// Test advanced filtering
console.log('Search with advanced filtering:');
const filteredSearchResults = searchEngine.searchComponents({
  query: 'input',
  filters: {
    experimental: false
  },
  sortBy: 'name',
  sortOrder: 'asc',
  limit: 5
});
console.log(`Found ${filteredSearchResults.totalResults} results`);
console.log('Top 5 results (sorted by name):');
filteredSearchResults.results.forEach((result, index) => {
  console.log(`${index + 1}. ${result.name} (Category: ${result.category})`);
});
console.log('\n');

// Test functionality search
console.log('Search by functionality:');
const functionalityResults = searchEngine.searchComponentsByFunctionality('selection', {
  limit: 3
});
console.log(`Found ${functionalityResults.totalResults} results for functionality "selection"`);
console.log('Top 3 results:');
functionalityResults.results.forEach((result, index) => {
  console.log(`${index + 1}. ${result.name} (Relevance: ${result.relevance})`);
});
console.log('\n');

// Test Property Explorer
console.log('=== Testing Property Explorer ===');

// Get all properties for a component
console.log('All properties for Button:');
const buttonProperties = propertyExplorer.getComponentProperties({
  componentId: 'button'
});
console.log(`Found ${buttonProperties ? Object.keys(buttonProperties).length : 0} properties`);
if (buttonProperties) {
  console.log('Property names:', Object.keys(buttonProperties).join(', '));
}
console.log('\n');

// Get filtered properties
console.log('Required properties for Form:');
const requiredFormProperties = propertyExplorer.getComponentProperties({
  componentId: 'form',
  filter: {
    required: true
  }
});
console.log(`Found ${requiredFormProperties ? Object.keys(requiredFormProperties).length : 0} required properties`);
if (requiredFormProperties) {
  console.log('Required property names:', Object.keys(requiredFormProperties).join(', '));
}
console.log('\n');

// Get property relationships
console.log('Property relationships for Table:');
const tableRelationships = propertyExplorer.getPropertyRelationships('table');
console.log(JSON.stringify(tableRelationships, null, 2));
console.log('\n');

// Get property type info
console.log('Type information for Button variant property:');
const variantTypeInfo = propertyExplorer.getPropertyTypeInfo({
  componentId: 'button',
  propertyId: 'variant'
});
console.log(JSON.stringify(variantTypeInfo, null, 2));
console.log('\n');

console.log('=== All Tests Completed ===');