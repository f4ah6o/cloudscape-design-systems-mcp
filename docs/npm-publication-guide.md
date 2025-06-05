# Package Publication Guide for React Design Systems MCP

This guide outlines the steps to publish the MCP Cloudscape Assistant package to npm and GitHub Packages.

## Prerequisites

Before publishing, ensure you have:

1. An npm account (create one at https://www.npmjs.com/signup if needed)
2. A GitHub account with access to the repository
3. Proper npm authentication on your local machine
4. Completed all items in the pre-publication checklist

## Pre-Publication Steps

1. **Login to npm** (if not already logged in):
   ```bash
   npm login
   ```

2. **Verify package contents** with a dry run:
   ```bash
   npm pack --dry-run
   ```
   This will show you exactly what files will be included in the published package.

3. **Run tests** to ensure everything is working:
   ```bash
   npm test
   ```

4. **Build the package**:
   ```bash
   npm run build
   ```

5. **Verify the executable permissions**:
   ```bash
   chmod +x dist/server-fastmcp.js
   ```

6. **Test the package locally**:
   ```bash
   # Create a global link
   npm link
   
   # In a new directory, test the package
   mkdir test-install
   cd test-install
   npm link @agentience/react-design-systems-mcp
   
   # Test the CLI
   react-design-systems-mcp --help
   
   # Test importing the package
   node -e "const { createCloudscapeAssistant } = require('@agentience/react-design-systems-mcp'); console.error(typeof createCloudscapeAssistant === 'function');"
   ```

## Publishing Process

### Option 1: Manual Publishing (Recommended for First Release)

1. **Verify you're logged in**:
   ```bash
   npm whoami
   ```

2. **Check the package version**:
   ```bash
   npm version
   ```

3. **Update the version** (if needed):
   ```bash
   # For patch updates (bug fixes)
   npm version patch
   
   # For minor updates (new features, backward compatible)
   npm version minor
   
   # For major updates (breaking changes)
   npm version major
   ```

4. **Publish the package**:
   ```bash
   # For scoped packages (like @agentience/mcp-cloudscape-assistant)
   npm publish --access public
   ```

5. **Verify the publication**:
   ```bash
   npm view @agentience/react-design-systems-mcp
   ```

6. **Test the published package**:
   ```bash
   # In a new directory
   mkdir test-published
   cd test-published
   npm init -y
   npm install @agentience/react-design-systems-mcp
   
   # Test the CLI
   npx react-design-systems-mcp
   
   # Test importing the package
   node -e "const { createCloudscapeAssistant } = require('@agentience/react-design-systems-mcp'); console.error(typeof createCloudscapeAssistant === 'function');"
   ```

### Option 2: Automated Publishing with GitHub Actions (Recommended for Future Releases)

1. **Create a GitHub workflow file**:
  Create a file at `.github/workflows/publish.yml` with the following content:

  ```yaml
  name: React Design Systems MCP Package

  on:
    release:
      types: [created]
    workflow_dispatch:
      inputs:
        version:
          description: 'Version to publish'
          required: true
          default: '1.0.0'

  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v3
          with:
            node-version: '24.x'
            registry-url: 'https://registry.npmjs.org/'
        - name: Install dependencies
          run: |
            if [ -f package-lock.json ]; then
              echo "Found package-lock.json, using npm ci"
              npm ci
            else
              echo "No package-lock.json found, using npm install"
              npm install
            fi
        - run: npm run test:ci
        - run: npm run build
        # The postbuild script already makes dist/server.js executable
        # Ensure the server file is executable
        - name: Make server file executable
          run: chmod +x dist/server.js
        
        # Check if package name is scoped (starts with @)
        - name: Check if package is scoped
          id: package-check
          run: |
            IS_SCOPED=$(node -e "const pkg = require('./package.json'); console.error(pkg.name.startsWith('@') ? 'true' : 'false');")
            echo "IS_SCOPED=$IS_SCOPED" >> $GITHUB_ENV
            echo "Package name from package.json: $(node -e "console.error(require('./package.json').name)")"
        
        # Publish package to NPM registry
        - name: Publish package to NPM
          run: |
            if [ "$IS_SCOPED" = "true" ]; then
              echo "Publishing scoped package with --access public"
              npm publish --access public
            else
              echo "Publishing regular package"
              npm publish
            fi
          env:
            NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
            
    publish-github:
      needs: build
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v3
          with:
            node-version: '24.x'
            registry-url: 'https://npm.pkg.github.com/'
            scope: '@agentience'
        - name: Install dependencies
          run: |
            if [ -f package-lock.json ]; then
              echo "Found package-lock.json, using npm ci"
              npm ci
            else
              echo "No package-lock.json found, using npm install"
              npm install
            fi
        - run: npm run build
        # Ensure the server file is executable
        - name: Make server file executable
          run: chmod +x dist/server.js
        
        # Publish package to GitHub Packages
        - name: Publish package to GitHub Packages
          run: npm publish --access public
          env:
            NODE_AUTH_TOKEN: ${{secrets.GITHUB_TOKEN}}
  ```

2. **Create an npm token**:
   ```bash
   npm token create --read-only=false
   ```
   Copy the generated token.

3. **Add the token to GitHub secrets**:
   - Go to your GitHub repository
   - Navigate to Settings > Secrets and variables > Actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Paste the npm token you created
   - Click "Add secret"

4. **GitHub Packages Authentication**:
  - The workflow uses the `GITHUB_TOKEN` secret which is automatically provided by GitHub Actions
  - No additional setup is required for GitHub Packages authentication in the workflow
  - For local publishing to GitHub Packages, you'll need to:
    ```bash
    # Create a Personal Access Token with packages:write scope
    # Add to your ~/.npmrc file:
    echo "@agentience:registry=https://npm.pkg.github.com/" >> ~/.npmrc
    echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN" >> ~/.npmrc
    ```

5. **Publishing using GitHub Releases**:
   - Update your package version in package.json
   - Commit and push your changes
   - Go to your GitHub repository
   - Navigate to Releases
   - Click "Create a new release"
   - Create a new tag in the format `v1.0.0` (matching your package version)
   - Title: `Release v1.0.0`
   - Description: Add your release notes
   - Click "Publish release"
   - The workflow will automatically publish to both npm and GitHub Packages

## Post-Publication Steps

1. **Add an npm version badge to README.md**:
   ```markdown
   [![npm version](https://img.shields.io/npm/v/@agentience/react-design-systems-mcp.svg)](https://www.npmjs.com/package/@agentience/react-design-systems-mcp)
   ```

2. **Update documentation** with installation instructions:
   ```markdown
   ## Installation

   ### From npm Registry
   ```bash
   # Install as a dependency
   npm install @agentience/react-design-systems-mcp

   # Or install globally
   npm install -g @agentience/react-design-systems-mcp
   ```

   ### From GitHub Packages
   ```bash
   # Configure npm to use GitHub Packages for the @agentience scope
   echo "@agentience:registry=https://npm.pkg.github.com/" >> .npmrc
   
   # Install as a dependency
   npm install @agentience/react-design-systems-mcp
   
   # Or install globally
   npm install -g @agentience/react-design-systems-mcp
   ```

3. **Announce the release** to relevant communities or stakeholders

## Updating the Package

For future updates:

1. Make your code changes
2. Update tests and ensure they pass
3. Update documentation as needed
4. Update the version number using `npm version patch|minor|major`
5. Publish using either the manual or automated method

## Troubleshooting

- **Authentication errors**: Run `npm login` to refresh your authentication
- **Permission errors**: Ensure you have the correct permissions for the package/organization
- **Package name conflicts**: Check if the package name is already taken
- **Version conflicts**: Ensure you're publishing a new version number
- **GitHub Packages errors**: Make sure your package name matches your GitHub username/organization (e.g., @agentience/package-name)
- **Registry conflicts**: If you're having issues with multiple registries, check your .npmrc configuration

## Conclusion

Congratulations on publishing your package to npm! Remember to maintain your package by addressing issues, adding new features, and updating dependencies as needed.