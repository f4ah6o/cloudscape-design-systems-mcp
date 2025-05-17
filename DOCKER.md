# Docker Deployment for React Design Systems MCP

This document provides instructions for deploying the React Design Systems MCP server using Docker.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your system
- [Docker Compose](https://docs.docker.com/compose/install/) (optional, for using docker-compose.yml)

## Docker Image Details

The Docker image for this project is based on Node.js 24.0.1 Alpine (specifically `node:24.0.1-alpine3.20`). This provides:

- A lightweight container based on Alpine Linux 3.20
- Node.js 24.0.1 runtime environment
- npm 10.x package manager
- Minimal attack surface for improved security

## Quick Start

### Using Docker Compose (Recommended)

1. Clone this repository or download the source code
2. Navigate to the project directory
3. Run the following command:

```bash
docker-compose up -d
```

This will build the Docker image and start the container in detached mode.

### Using Docker Directly

1. Clone this repository or download the source code
2. Navigate to the project directory
3. Build the Docker image:

```bash
docker build -t react-design-systems-mcp .
```

4. Run the Docker container:

```bash
docker run -d -p 3005:3005 --name react-design-systems-mcp react-design-systems-mcp
```

## Accessing the Server

Once the container is running, the MCP server will be available via SSE (Server-Sent Events) at:

```
http://localhost:3005/sse
```

## Environment Variables

The following environment variables can be configured:

- `PORT`: The port on which the server will listen (default: 3005)
- `BIND`: The address to bind to (default: 0.0.0.0)

Note: The server is configured to use SSE transport in Docker mode.

## Managing the Container

### View Logs

```bash
# Using Docker
docker logs react-design-systems-mcp

# Using Docker Compose
docker-compose logs
```

### Stop the Container

```bash
# Using Docker
docker stop react-design-systems-mcp

# Using Docker Compose
docker-compose down
```

### Restart the Container

```bash
# Using Docker
docker restart react-design-systems-mcp

# Using Docker Compose
docker-compose restart
```

## Troubleshooting

If you encounter any issues with the Docker deployment, try the following:

1. Check the container logs for error messages
2. Verify that port 3005 is not being used by another application
3. Ensure that Docker has sufficient resources allocated
4. Try rebuilding the image with the `--no-cache` option:

```bash
docker build --no-cache -t react-design-systems-mcp .
```

### Node.js Version Issues

If you encounter issues related to the Node.js version:

1. Verify that your Dockerfile is using the correct Node.js image:
   ```
   FROM node:24.0.1-alpine3.20
   ```

2. Check for any compatibility issues with dependencies by reviewing the container logs
3. For detailed information about Node.js 24.0.1 compatibility, refer to the [Node.js 24 Upgrade Guide](docs/nodejs-24-upgrade-guide.md)

## Security Considerations

- The SSE endpoint does not require authentication by default
- The server is configured to listen on all interfaces (0.0.0.0)
- Consider using a reverse proxy with TLS for production deployments
- Node.js 24.0.1 includes security improvements over previous versions

## Publishing to GitHub Container Registry

The Docker image for this project can be published to GitHub Container Registry (ghcr.io). This allows for easier distribution and versioning of the Docker image.

For detailed instructions on building and publishing the Docker image, see [Docker Publishing Guide](docs/docker-publishing-guide.md).

### Using the Published Image

Once published, you can use the image directly without building it locally:

```bash
# Pull the image
docker pull ghcr.io/agentience/react-design-systems-mcp:latest

# Run the container
docker run -d -p 3005:3005 --name react-design-systems-mcp ghcr.io/agentience/react-design-systems-mcp:latest
```

Or in your docker-compose.yml:

```yaml
services:
  react-design-systems-mcp:
    image: ghcr.io/agentience/react-design-systems-mcp:latest
    # other configuration...