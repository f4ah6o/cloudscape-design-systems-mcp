# Docker Image Publishing Guide

This guide explains how to build and publish the Docker image for the React Design Systems MCP server to GitHub Container Registry (ghcr.io).

## GitHub Container Registry

The Docker image is published to GitHub Container Registry at:
```
ghcr.io/agentience/react-design-systems-mcp
```

## Automated Publishing with GitHub Actions

A GitHub Actions workflow is set up to automatically build and publish the Docker image when:

1. A new release is created on GitHub
2. The workflow is manually triggered

### Manual Workflow Trigger

To manually trigger the Docker image publishing workflow:

1. Go to the GitHub repository
2. Navigate to "Actions" > "Publish Docker Image to GitHub Container Registry"
3. Click "Run workflow"
4. Optionally specify a custom tag (defaults to "latest")
5. Click "Run workflow" to start the build and publish process

## Local Publishing

For local development or manual publishing, you can use the provided shell script.

### Prerequisites

- Docker installed and running
- GitHub CLI authenticated or GitHub Personal Access Token with `write:packages` scope
- Git configured with your GitHub email

### Using the Script

```bash
# Build and publish with the default "latest" tag
./scripts/docker-publish.sh

# Build and publish with a specific tag
./scripts/docker-publish.sh v1.2.3
```

The script will:
1. Build the Docker image
2. Tag it with the specified tag, the package version from package.json, and "latest"
3. Prompt for GitHub authentication if needed
4. Push all tags to GitHub Container Registry

## Using the Published Image

### In docker-compose.yml

```yaml
version: '3'

services:
  react-design-systems-mcp:
    image: ghcr.io/agentience/react-design-systems-mcp:latest
    ports:
      - "3005:3005"
    environment:
      - PORT=3005
      - BIND=0.0.0.0
    restart: unless-stopped
```

### With Docker CLI

```bash
docker pull ghcr.io/agentience/react-design-systems-mcp:latest

docker run -p 3005:3005 \
  -e PORT=3005 \
  -e BIND=0.0.0.0 \
  ghcr.io/agentience/react-design-systems-mcp:latest
```

## Version Tags

The following tags are available:

- `latest`: The most recent build from the default branch
- `x.y.z`: Specific version tags (e.g., `1.0.0`)
- `x.y`: Major.minor version tags (e.g., `1.0`)
- `sha-xxxxxxx`: Tags based on commit SHA

## Authentication for Pulling Private Images

If the repository is private, you'll need to authenticate to pull the image:

```bash
# Login to GitHub Container Registry
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin

# Pull the image
docker pull ghcr.io/agentience/react-design-systems-mcp:latest
```

Replace `$GITHUB_TOKEN` with your GitHub Personal Access Token and `USERNAME` with your GitHub username.