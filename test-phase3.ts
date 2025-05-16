#!/usr/bin/env node

/**
 * Test script for Phase 3 of the Cloudscape MCP Server
 * 
 * This script tests the enhanced code generation, documentation provider,
 * and example provider functionality.
 */

// Import required modules
import { MCPServer } from './src/mcp/server';
import componentRegistry from './src/components/registry';
import codeGenerator from './src/code-generator/generator';
import documentationProvider from './src/documentation/provider';
import exampleProvider from './src/example-provider';

console.error('=== Cloudscape MCP Server - Phase 3 Test ===\n');

// Test Example Provider
console.error('--- Testing Example Provider ---');
try {
  // Test getting examples for a component
  const buttonExamples = exampleProvider.getExamples({
    componentId: 'button',
    limit: 2
  });
  console.error(`Found ${buttonExamples.totalExamples} examples for Button component`);
  console.error(`First example: ${buttonExamples.examples[0]?.name}`);
  
  // Test getting example categories
  const categories = exampleProvider.getExampleCategories();
  console.error(`Found ${categories.length} example categories`);
  
  console.error('Example Provider tests passed ✅');
} catch (error) {
  console.error('Example Provider tests failed ❌');
  console.error(error);
}

console.error('');

// Test Enhanced Code Generator
console.error('--- Testing Enhanced Code Generator ---');
try {
  // Test generating component code with TypeScript
  const buttonCode = codeGenerator.generateComponentCode({
    componentId: 'button',
    props: { variant: 'primary', disabled: false },
    children: 'Submit',
    typescript: true,
    style: 'compact'
  });
  console.error('Generated TypeScript button code:');
  console.error(buttonCode.code);
  
  // Test generating component interface
  const buttonInterface = codeGenerator.generateComponentInterface('button');
  console.error('\nGenerated TypeScript interface:');
  console.error(buttonInterface);
  
  // Test generating pattern code with customizations
  const tablePattern = codeGenerator.generatePatternCode({
    patternId: 'data-table',
    customizations: {
      columnDefinitions: [
        { id: 'id', header: 'ID', cell: 'item => item.id' },
        { id: 'name', header: 'Name', cell: 'item => item.name' }
      ],
      items: [
        { id: '1', name: 'Item 1' },
        { id: '2', name: 'Item 2' }
      ]
    },
    typescript: true
  });
  console.error('\nGenerated pattern code:');
  console.error(tablePattern.code.substring(0, 200) + '...');
  
  console.error('Enhanced Code Generator tests passed ✅');
} catch (error) {
  console.error('Enhanced Code Generator tests failed ❌');
  console.error(error);
}

console.error('');

// Test Documentation Provider
console.error('--- Testing Documentation Provider ---');
try {
  // Test getting component documentation with section filtering
  const buttonDocs = documentationProvider.getComponentDocumentation({
    componentId: 'button',
    section: 'bestPractices',
    format: 'markdown'
  });
  console.error('Button best practices documentation:');
  console.error(buttonDocs);
  
  // Test searching documentation
  const searchResults = documentationProvider.searchDocumentation({
    query: 'table',
    scope: 'components',
    limit: 3
  });
  console.error(`\nFound ${searchResults.totalResults} results for 'table'`);
  if (searchResults.results.length > 0) {
    console.error(`First result: ${searchResults.results[0].name}`);
  }
  
  console.error('Documentation Provider tests passed ✅');
} catch (error) {
  console.error('Documentation Provider tests failed ❌');
  console.error(error);
}

console.error('');
console.error('=== All Phase 3 tests completed ===');