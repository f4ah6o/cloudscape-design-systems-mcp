/**
 * Test script for Cloudscape MCP Server
 * 
 * This script tests the basic functionality of the Cloudscape MCP Server.
 */

// Import the required modules
import componentRegistry from './src/components/registry';
import searchEngine from './src/search/engine';
import codeGenerator from './src/code-generator/generator';
import documentationProvider from './src/documentation/provider';

// Test component registry
console.log('\n=== Testing Component Registry ===');
const allComponents = Object.keys(componentRegistry.getAllComponents());
console.log(`Total components: ${allComponents.length}`);
console.log(`Component IDs: ${allComponents.join(', ')}`);

const appLayout = componentRegistry.getComponent('app-layout');
console.log(`\nComponent details for 'app-layout':`);
console.log(`- Name: ${appLayout?.name}`);
console.log(`- Category: ${appLayout?.category}`);
console.log(`- Description: ${appLayout?.description}`);

// Test search engine
console.log('\n=== Testing Search Engine ===');
const searchResults = searchEngine.searchComponents({ query: 'table' });
console.log(`Search results for 'table': ${searchResults.results.length}`);
searchResults.results.forEach(result => {
  console.log(`- ${result.name} (Relevance: ${result.relevance}): ${result.description}`);
});

// Test code generator
console.log('\n=== Testing Code Generator ===');
const { code, imports } = codeGenerator.generateComponentCode({
  componentId: 'button',
  props: {
    variant: 'primary',
    disabled: false
  },
  children: 'Submit'
});
console.log('Generated code:');
console.log(imports.join('\n'));
console.log(code);

// Test documentation provider
console.log('\n=== Testing Documentation Provider ===');
const documentation = documentationProvider.getComponentDocumentation({
  componentId: 'table',
  format: 'markdown'
});
console.log('Documentation sections:');
if (typeof documentation === 'object') {
  Object.keys(documentation).forEach(section => {
    console.log(`- ${section}`);
  });
  console.log('\nOverview excerpt:');
  const overview = documentation.overview.split('\n').slice(0, 5).join('\n');
  console.log(overview);
}

console.log('\n=== All Tests Completed Successfully ===');