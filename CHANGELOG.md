# React Design Systems MCP v1.0.6

## Summary
This release delivers significant user-facing enhancements with comprehensive documentation for all components and expanded data coverage, alongside critical bug fixes and workflow improvements.

## Major Features
- **Complete Component Documentation**: Full implementation of documentation for all AWS Cloudscape Design System components
- **Enhanced Component Data**: Expanded coverage including events, functions, and detailed usage information
- **Improved Data Quality**: Comprehensive component metadata with better examples and usage patterns

## User-Facing Enhancements
- Full documentation coverage for all components in the registry
- Enhanced component data including event handlers and function references
- Improved usage examples and patterns for better developer experience
- Better component discovery through enriched metadata

## Bug Fixes
- Fixed test failures in usage tools with improved markdown text conversion
- Resolved console output issues in publishing workflow  
- Removed deprecated Docker Compose version configuration

## Documentation Improvements
- Added Claude Desktop configuration section to README
- Converted architecture diagrams to Mermaid format for better compatibility
- Moved FastMCP implementation details from README to DEVELOPMENT.md
- Updated Mermaid diagram syntax for v10.9.1 compatibility

## Workflow Improvements
- Removed GitHub Packages publishing from npm release workflow
- Streamlined publishing process to use npm registry only

---

# React Design Systems MCP v1.0.5

## Summary
This release focuses on upgrading the project to Node.js 24.0.1 for improved performance, security, and compatibility with the latest Node.js features.

## Major Changes
- **Node.js 24.0.1 Upgrade**: Updated minimum Node.js requirement from 18.0.0 to 24.0.0
- **Container Updates**: Updated Dockerfile to use node:24.0.1-alpine3.20 base image
- **CI/CD Updates**: Updated GitHub workflows to use Node.js 24.x

## Technical Improvements
- Enhanced performance and security through Node.js 24.0.1 features
- Improved compatibility with latest Node.js ecosystem
- Updated development and deployment documentation

## Infrastructure Updates
- Updated package.json engines field to require Node.js >=24.0.0
- Updated Docker configuration for Node.js 24.0.1
- Updated GitHub Actions workflow to use Node.js 24.x

## Documentation
- Added comprehensive Node.js 24.0.1 upgrade guide
- Created DevSecOps plan for the upgrade process
- Added Node.js compatibility research documentation
- Updated project context and task documentation

## Related Issues
- CA-2: Node.js 24.0.1 upgrade implementation

## Migration Notes
Users upgrading to this version must have Node.js 24.0.1 or later installed. See the Node.js upgrade guide in the documentation for detailed migration instructions.

---

# React Design Systems MCP v1.0.4

## Summary
This release introduces Docker containerization for the React Design Systems MCP server with Server-Sent Events (SSE) support, enabling continuous operation and multi-client support.

## Key Features
- Docker containerization with optimized configuration
- SSE protocol support for real-time updates
- Automated workflows for Docker image and NPM package publication

## Docker Support
- Exposed port 3005 for SSE connections
- Optimized Docker image with multi-stage build
- Docker Compose configuration for easy deployment

## Documentation
- Added Docker usage documentation
- Updated installation and deployment guides
- Added SSE connection examples

## Technical Improvements
- Implemented FastMCP framework's SSE support
- Optimized server configuration for containerized environments
- Enhanced stability for continuous operation

## Notes
This is the first release using automated GitHub workflows for both Docker image and NPM package publication.