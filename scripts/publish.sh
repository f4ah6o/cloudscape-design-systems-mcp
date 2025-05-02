#!/bin/bash

# Publication script for React Design Systems MCP
# This script helps with the npm publication process

# Set to exit on error
set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== MCP Cloudscape Assistant Publication Script ===${NC}\n"

# Check if logged in to npm
if ! npm whoami >/dev/null 2>&1; then
  echo -e "${RED}❌ Not logged in to npm. Please log in first.${NC}"
  echo -e "Run: ${YELLOW}npm login${NC}"
  exit 1
else
  echo -e "${GREEN}✅ Logged in to npm as $(npm whoami)${NC}"
fi

# Get package name and version from package.json
PACKAGE_NAME=$(grep -m 1 '"name":' package.json | cut -d '"' -f 4)
CURRENT_VERSION=$(grep -m 1 '"version":' package.json | cut -d '"' -f 4)

echo -e "Package name: ${YELLOW}$PACKAGE_NAME${NC}"
echo -e "Current version: ${YELLOW}$CURRENT_VERSION${NC}"

# Check if it's a scoped package (starts with @)
IS_SCOPED=false
if [[ $PACKAGE_NAME == @* ]]; then
  IS_SCOPED=true
  echo -e "${GREEN}📦 Package $PACKAGE_NAME is a scoped package${NC}"
fi

# Final Checklist
echo -e "\n${GREEN}📋 Final Checklist Before Publishing:${NC}"

# Check README
if [ ! -f README.md ]; then
  echo -e "${RED}❌ README.md doesn't exist${NC}"
else
  if [ $(wc -l < README.md) -lt 10 ]; then
    echo -e "${YELLOW}⚠️ README.md might need more detailed documentation${NC}"
  else
    echo -e "${GREEN}✅ README.md exists${NC}"
  fi
fi

# Check LICENSE
if [ ! -f LICENSE ]; then
  echo -e "${YELLOW}⚠️ LICENSE file doesn't exist${NC}"
else
  echo -e "${GREEN}✅ LICENSE file exists${NC}"
fi

# Run tests
echo -e "\n${GREEN}🧪 Running tests...${NC}"
npm test

if [ $? -ne 0 ]; then
  echo -e "${RED}❌ Tests failed. Fix the issues before publishing.${NC}"
  exit 1
else
  echo -e "${GREEN}✅ Tests passed${NC}"
fi

# Build the package
echo -e "\n${GREEN}🔨 Building the package...${NC}"
npm run build

if [ $? -ne 0 ]; then
  echo -e "${RED}❌ Build failed. Fix the issues before publishing.${NC}"
  exit 1
else
  echo -e "${GREEN}✅ Build successful${NC}"
fi

# Verify executable permissions
echo -e "\n${GREEN}🔑 Verifying executable permissions...${NC}"
chmod +x dist/server-fastmcp.js
echo -e "${GREEN}✅ Executable permissions set${NC}"

# Check package size
echo -e "\n${GREEN}📦 Checking package size...${NC}"
npm pack --dry-run

# Ask if user wants to update version
echo -e "\n${GREEN}📝 Version Management:${NC}"
echo -e "Current version: ${YELLOW}$CURRENT_VERSION${NC}"
read -p "Do you want to update the version? (y/N) " update_version
if [[ $update_version == [Yy]* ]]; then
  echo -e "\nVersion update options:"
  echo -e "1) Patch (bug fixes) - ${YELLOW}npm version patch${NC}"
  echo -e "2) Minor (new features, backward compatible) - ${YELLOW}npm version minor${NC}"
  echo -e "3) Major (breaking changes) - ${YELLOW}npm version major${NC}"
  read -p "Enter your choice (1-3): " version_choice
  
  case $version_choice in
    1)
      npm version patch
      ;;
    2)
      npm version minor
      ;;
    3)
      npm version major
      ;;
    *)
      echo -e "${YELLOW}⚠️ Invalid choice. Version not updated.${NC}"
      ;;
  esac
  
  # Get updated version
  CURRENT_VERSION=$(grep -m 1 '"version":' package.json | cut -d '"' -f 4)
  echo -e "Updated version: ${YELLOW}$CURRENT_VERSION${NC}"
fi

# Ask if user wants to publish now
echo -e "\n${GREEN}📦 Publication:${NC}"
read -p "Do you want to publish the package now? (y/N) " publish_now
if [[ $publish_now == [Yy]* ]]; then
  echo -e "${GREEN}📦 Publishing package $PACKAGE_NAME...${NC}"
  
  if [ "$IS_SCOPED" = true ]; then
    npm publish --access public
  else
    npm publish
  fi
  
  if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}✅ Package published successfully!${NC}"
    echo -e "View your package at: ${YELLOW}https://www.npmjs.com/package/$PACKAGE_NAME${NC}"
    
    # Generate installation instructions
    echo -e "\n${GREEN}📋 Installation instructions:${NC}"
    echo -e "${YELLOW}npm install $PACKAGE_NAME${NC}"
    
    # Suggest adding npm version badge to README
    if ! grep -q "npm version" README.md; then
      echo -e "\n${GREEN}💡 Suggestion:${NC}"
      echo -e "Add an npm version badge to your README.md:"
      ESCAPED_NAME=$(echo "$PACKAGE_NAME" | sed 's/@/%40/g' | sed 's/\//%2F/g')
      echo -e "${YELLOW}[![npm version](https://img.shields.io/npm/v/$ESCAPED_NAME.svg)](https://www.npmjs.com/package/$PACKAGE_NAME)${NC}"
    fi
  else
    echo -e "${RED}❌ Publishing failed. Check the error message for details.${NC}"
  fi
else
  echo -e "${YELLOW}Package not published. You can publish it later with npm publish.${NC}"
fi

echo -e "\n${GREEN}🎉 Publication script completed!${NC}"