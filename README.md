# Cloudscape MCP Assistant

This is a Model Context Protocol (MCP) server that provides comprehensive information about AWS Cloudscape Design System components, along with code generation capabilities for common Cloudscape patterns. The server is implemented in TypeScript for improved type safety and developer experience.

## Overview

The Cloudscape MCP Server provides the following functionality:

- Component Registry: Metadata for Cloudscape components
- Search Engine: Search for components by name, category, or tags
- Code Generator: Generate code for components and common patterns
- Documentation Provider: Comprehensive documentation for components
- Example Provider: Usage examples for components
- Property Explorer: Detailed property information and relationships
- Roo Integration: Enhanced integration with Roo
- Performance Optimization: Caching and memoization for improved performance
- Security Enhancements: Input validation and sanitization

## Project Structure

```
mcp-cloudscape-assistant/
├── server.ts                  # Main server file
├── tsconfig.json              # TypeScript configuration
├── src/
│   ├── components/            # Component Registry
│   │   ├── data/              # Component data
│   │   │   ├── categories.ts  # Category metadata
│   │   │   ├── components.ts  # Component metadata
│   │   │   ├── examples.ts    # Example metadata
│   │   │   └── patterns.ts    # Pattern metadata
│   │   └── registry.ts        # Component Registry implementation
│   ├── search/                # Search Engine
│   │   └── engine.ts          # Search Engine implementation
│   ├── code-generator/        # Code Generator
│   │   └── generator.ts       # Code Generator implementation
│   ├── documentation/         # Documentation Provider
│   │   └── provider.ts        # Documentation Provider implementation
│   ├── example-provider/      # Example Provider
│   │   └── index.ts           # Example Provider implementation
│   ├── property-explorer/     # Property Explorer
│   │   └── index.ts           # Property Explorer implementation
│   ├── integration/           # Roo Integration
│   │   └── roo-integration.ts # Roo Integration implementation
│   ├── optimization/          # Performance Optimization
│   │   └── performance.ts     # Performance Optimization implementation
│   ├── security/              # Security Enhancements
│   │   └── index.ts           # Security Enhancements implementation
│   └── mcp/                   # MCP Server implementation
│       └── server.ts          # MCP Server implementation
├── test.ts                    # Basic test script
├── test-phase2.ts             # Phase 2 test script
├── test-phase3.ts             # Phase 3 test script
└── test-phase4.ts             # Phase 4 test script
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/agentience/mcp-cloudscape-assistant.git
cd mcp-cloudscape-assistant
```

2. Install dependencies:
```bash
npm install
```

3. Build the TypeScript code:
```bash
npm run build
```

## Usage

Start the server:
```bash
npm start
```

For development with automatic reloading:
```bash
npm run dev
```

## MCP Tools

The Cloudscape MCP Server provides the following tools:

### search_components

Search for Cloudscape components based on query, category, and tags.

```javascript
{
  "query": "table",
  "category": "display",
  "tags": ["data", "grid"],
  "limit": 5
}
```

### get_component_details

Get detailed information about a specific component.

```javascript
{
  "componentId": "table"
}
```

### generate_component_code

Generate code for a component with specified props, children, and event handlers.

```javascript
{
  "componentId": "button",
  "props": {
    "variant": "primary",
    "disabled": false
  },
  "children": "Submit",
  "eventHandlers": {
    "onClick": "() => console.log('Button clicked')"
  }
}
```

### generate_pattern_code

Generate code for a common Cloudscape pattern with customizations.

```javascript
{
  "patternId": "data-table",
  "customizations": {
    "columnDefinitions": [
      {
        "id": "name",
        "header": "Name",
        "cell": "item => item.name"
      },
      {
        "id": "type",
        "header": "Type",
        "cell": "item => item.type"
      }
    ],
    "items": "items"
  }
}
```

### get_component_examples

Get usage examples for a component.

```javascript
{
  "componentId": "table",
  "type": "basic",
  "limit": 3
}
```

## MCP Resources

The Cloudscape MCP Server provides the following resources:

- `cloudscape://components/{componentId}`: Get component details
- `cloudscape://categories/{categoryId}`: Get category details
- `cloudscape://patterns/{patternId}`: Get pattern details
- `cloudscape://examples/{exampleId}`: Get example details
- `cloudscape://properties/{componentId}/{propertyId}`: Get property details

## Testing

Run the test scripts to verify that all components are working correctly:

```bash
# Basic test
node dist/test.js

# Phase 2 test (Component Registry and Search Engine)
node dist/test-phase2.js

# Phase 3 test (Code Generator, Documentation Provider, and Example Provider)
node dist/test-phase3.js

# Phase 4 test (Roo Integration, Performance, and Security)
node dist/test-phase4.js
```

## Implementation Phases

The Cloudscape MCP Server was implemented in four phases:

### Phase 1: Initial Setup and Core Functionality

- Set up the basic MCP server infrastructure
- Implemented the Component Registry with metadata for the most commonly used components
- Implemented basic search functionality
- Implemented basic component retrieval functionality

### Phase 2: Complete Component Registry and Enhanced Search

- Completed the Component Registry with metadata for all Cloudscape components
- Enhanced search functionality with advanced filtering and ranking
- Implemented property exploration functionality
- Improved component retrieval with more detailed information

### Phase 3: Code Generation and Documentation

- Implemented code generation for individual components
- Implemented code generation for common Cloudscape patterns
- Implemented comprehensive documentation provider
- Implemented example provider

### Phase 4: Integration and Testing

- Integrated the MCP server with Roo
- Tested the integration with frontend-code mode
- Optimized performance with caching and memoization
- Implemented security enhancements with input validation and sanitization
- Finalized documentation

For more details on each phase, see the phase summary files:
- `phase2-summary.md`
- `phase3-summary.md`
- `phase4-summary.md`

## License

MIT