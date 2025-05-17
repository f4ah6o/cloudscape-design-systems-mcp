# Cloudscape MCP Assistant Development

This document contains development-specific information for the Cloudscape MCP Assistant project.

## Requirements

- **Node.js**: 24.0.1 or higher
- **npm**: 10.x or higher (comes with Node.js 24.0.1)

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

## Development Installation

1. Ensure you have Node.js 24.0.1 or higher installed:
```bash
node --version
# Should output v24.0.1 or higher
```

2. Clone the repository:
```bash
git clone https://github.com/agentience/mcp-cloudscape-assistant.git
cd mcp-cloudscape-assistant
```

3. Install dependencies:
```bash
npm install
```

4. Build the TypeScript code:
```bash
npm run build
```

## Development Usage

Start the server:
```bash
npm start

# With custom port
npm start -- --port 8080
# or
PORT=8080 npm start

# With custom bind address
npm start -- --bind 127.0.0.1
# or
BIND=127.0.0.1 npm start
```

For development with automatic reloading:
```bash
npm run dev

# With custom port
npm run dev -- --port 8080
# or
PORT=8080 npm run dev

# With custom bind address
npm run dev -- --bind 127.0.0.1
# or
BIND=127.0.0.1 npm run dev
```

## Core Components

The Cloudscape MCP Server provides the following functionality:

- **Component Registry**: Metadata for Cloudscape components
- **Search Engine**: Search for components by name, category, or tags
- **Code Generator**: Generate code for components and common patterns
- **Documentation Provider**: Comprehensive documentation for components
- **Example Provider**: Usage examples for components
- **Property Explorer**: Detailed property information and relationships
- **Roo Integration**: Enhanced integration with Roo
- **Performance Optimization**: Caching and memoization for improved performance
- **Security Enhancements**: Input validation and sanitization
- **Remote Server Capability**: Server stays running and listens on the specified port

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
- `docs/phase2-summary.md`
- `docs/phase3-summary.md`
- `docs/phase4-summary.md`

## Node.js 24.x Compatibility

This project requires Node.js 24.0.1 or higher. If you encounter any issues related to the Node.js version, please refer to the [Node.js 24 Upgrade Guide](docs/nodejs-24-upgrade-guide.md) for detailed information about compatibility considerations and potential issues.

Key considerations:
- TypeScript 5.4+ is recommended for better Node.js 24 support
- Some users have reported issues with ts-node on Node.js 24
- HTTP parser changes may affect behavior in some cases

## Publishing

To publish a new version of the package:

1. Update the version in `package.json`
2. Build the package:
```bash
npm run build
```

3. Publish to npm:
```bash
npm publish
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests to ensure everything works
5. Submit a pull request

Please ensure your code follows the project's coding standards and includes appropriate tests.