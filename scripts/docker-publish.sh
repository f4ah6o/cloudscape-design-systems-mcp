#!/bin/bash
set -e

# Get package info from package.json
PACKAGE_NAME=$(node -e "console.error(require('./package.json').name.replace('@', '').replace('/', '-'))")
PACKAGE_VERSION=$(node -e "console.error(require('./package.json').version)")
GITHUB_USERNAME=${GITHUB_USERNAME:-$(git config user.email | cut -d@ -f1)}
GITHUB_REPO=$(node -e "const repo = require('./package.json').repository.url; console.error(repo.replace('https://github.com/', '').replace('.git', ''))")

# Default tag is latest if not specified
TAG=${1:-latest}

# GitHub Container Registry URL
REGISTRY="ghcr.io"
IMAGE_NAME="${REGISTRY}/${GITHUB_REPO}"

echo "🔨 Building Docker image: ${IMAGE_NAME}:${TAG}"
docker build -t "${IMAGE_NAME}:${TAG}" .

# If TAG is not "latest" and not the version number, also tag with version
if [ "$TAG" != "latest" ] && [ "$TAG" != "$PACKAGE_VERSION" ]; then
  echo "🏷️ Also tagging with version: ${IMAGE_NAME}:${PACKAGE_VERSION}"
  docker tag "${IMAGE_NAME}:${TAG}" "${IMAGE_NAME}:${PACKAGE_VERSION}"
fi

# Always tag with "latest" if not already done
if [ "$TAG" != "latest" ]; then
  echo "🏷️ Also tagging as latest: ${IMAGE_NAME}:latest"
  docker tag "${IMAGE_NAME}:${TAG}" "${IMAGE_NAME}:latest"
fi

echo "🔑 Logging in to GitHub Container Registry"
echo "Please enter your GitHub Personal Access Token when prompted"
echo "Note: Your token needs 'write:packages' scope"
docker login ${REGISTRY} -u ${GITHUB_USERNAME}

echo "🚀 Pushing image to GitHub Container Registry"
if [ "$TAG" != "latest" ]; then
  docker push "${IMAGE_NAME}:${TAG}"
fi
if [ "$TAG" != "$PACKAGE_VERSION" ]; then
  docker push "${IMAGE_NAME}:${PACKAGE_VERSION}"
fi
docker push "${IMAGE_NAME}:latest"

echo "✅ Successfully pushed ${IMAGE_NAME} to GitHub Container Registry"
echo "📦 Tags pushed: ${TAG} ${PACKAGE_VERSION} latest"