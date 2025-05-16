# React Design Systems MCP

[![npm version](https://img.shields.io/npm/v/@agentience/react-design-systems-mcp.svg)](https://www.npmjs.com/package/@agentience/react-design-systems-mcp)

A Model Context Protocol (MCP) server that provides comprehensive information about React design systems, along with code generation capabilities for common UI patterns. Currently supports AWS Cloudscape Design System, with plans to add support for Material UI, Chakra UI, Ant Design, and other popular React design systems in the future.

## Features

- Search for Cloudscape components with advanced options
- Get detailed information about components
- Generate code for components with customization options
- Generate code for common patterns
- Get setup instructions for the frontend-code mode
- Get component properties
- Get component examples
- Validate component props
- Get component patterns
- Compare components
- Generate multi-component layouts

## Installation

### For Development

```bash
# Clone the repository
git clone https://github.com/agentience/mcp-cloudscape-assistant.git
cd mcp-cloudscape-assistant

# Install dependencies
npm install
```

### For Usage as a Dependency

```bash
# Install from npm
npm install @agentience/react-design-systems-mcp
```

### Global Installation

```bash
# Install globally to use as a CLI tool
npm install -g @agentience/react-design-systems-mcp

# Then you can run it directly
react-design-systems-mcp
```

## Usage

### Running the Server

#### Standard Mode (stdio)

```bash
npm start
```

or

```bash
npm run dev
```

#### SSE Mode (for Web Applications)

```bash
npm run dev:sse
```

### Testing

```bash
npm test
```

## Docker Deployment

This project can be deployed using Docker. For detailed instructions, see [Docker Deployment Guide](DOCKER.md).

### Quick Start with Docker

```bash
# Pull the image from GitHub Container Registry
docker pull ghcr.io/agentience/react-design-systems-mcp:latest

# Run the container
docker run -d -p 3005:3005 --name react-design-systems-mcp ghcr.io/agentience/react-design-systems-mcp:latest
```

### Using Docker Compose

```bash
# Clone the repository
git clone https://github.com/agentience/mcp-cloudscape-assistant.git
cd mcp-cloudscape-assistant

# Start with Docker Compose
docker-compose up -d
```

For information on building and publishing the Docker image to GitHub Container Registry, see [Docker Publishing Guide](docs/docker-publishing-guide.md).

## FastMCP Implementation

This project uses the FastMCP framework, which provides a more structured and type-safe approach to building MCP servers. FastMCP offers several advantages:

- Simplified tool and resource definition
- Built-in support for authentication
- Session management
- Image and audio content handling
- Improved logging
- Better error handling
- Support for SSE (Server-Sent Events)
- CORS support
- Progress notifications
- Typed server events
- Prompt argument auto-completion

For more information about the FastMCP implementation, see [FastMCP Migration](docs/fastmcp-migration.md).

## Documentation

- [Architecture](docs/architecture.md)
- [Component Library](docs/component-library.md)
- [CORS Support](docs/cors-support.md)
- [FastMCP Implementation](docs/fastmcp-implementation.md)
- [FastMCP Migration](docs/fastmcp-migration.md)
- [Frontend Code Mode](docs/frontend-code-mode.md)
- [Implementation Plan](docs/implementation-plan.md)
- [MCP Protocol Guide](docs/mcp-protocol-guide.md)
- [Roo Integration Guide](docs/roo-integration-guide.md)
- [Usage Guide](docs/usage-guide.md)
- [Docker Deployment Guide](DOCKER.md)
- [Docker Publishing Guide](docs/docker-publishing-guide.md)

## Roadmap

This MCP server currently supports the AWS Cloudscape Design System, but we plan to expand support to other popular React design systems in the future:

- **Material UI**: Comprehensive support for Google's Material Design implementation for React
- **Chakra UI**: Component-focused support for the accessible and customizable Chakra UI library
- **Ant Design**: Enterprise-grade UI system for React applications
- **Blueprint**: Support for Palantir's UI toolkit for web applications
- **Mantine**: Modern React components with excellent dark mode support

If you're interested in contributing support for additional design systems, please check out our [Contributing](#contributing) guidelines.

## Using as a Dependency

When using this package as a dependency in your project, you can import and use it as follows:

```javascript
// CommonJS
const { createCloudscapeAssistant } = require('@agentience/react-design-systems-mcp');

// ES Modules
import { createCloudscapeAssistant } from '@agentience/react-design-systems-mcp';

// Create and configure the assistant
const assistant = createCloudscapeAssistant({
  // Configuration options
});

// Start the assistant
assistant.start();
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT - See [LICENSE](LICENSE) for more information.