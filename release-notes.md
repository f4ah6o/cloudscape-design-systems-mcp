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