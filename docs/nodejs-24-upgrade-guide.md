# Node.js 24.0.1 Upgrade Guide

## Overview

This project has been upgraded to use Node.js 24.0.1, which is the latest LTS (Long Term Support) version. This guide provides information about the upgrade, compatibility considerations, and recommendations for users.

## What Changed

- **Node.js Version**: Updated from Node.js 18.x/20.x to Node.js 24.0.1
- **Package Requirements**: Updated `package.json` engines field from ">=18.0.0" to ">=24.0.0"
- **Docker Image**: Updated from `node:20.11.1-alpine3.19` to `node:24.0.1-alpine3.20`
- **CI/CD Workflows**: Updated GitHub Actions workflows to use Node.js 24.x

## Key Features and Improvements in Node.js 24.0.1

1. **V8 Engine**: Updated to V8 12.3, which includes performance improvements and new JavaScript language features
2. **Performance**: Improved startup time and reduced memory usage
3. **Security**: Enhanced security features and fixes for vulnerabilities
4. **Module System**: Improved ESM (ECMAScript Modules) support and interoperability
5. **HTTP**: Updated HTTP parser with better performance and standards compliance
6. **Toolchain**: Updated compilers and dependencies

## Compatibility Considerations

### Core Dependencies

Most core dependencies are compatible with Node.js 24.0.1:

- **express (^4.18.2)**: Highly compatible with Node.js 24
- **js-yaml (^4.1.0)**: Highly compatible with Node.js 24
- **lodash (^4.17.21)**: Highly compatible with Node.js 24
- **tslib (2.8.1)**: Highly compatible with Node.js 24
- **fastmcp (^1.22.4)**: Medium compatibility - thorough testing recommended

### Development Dependencies

Some development dependencies may require attention:

- **TypeScript**: TypeScript 5.4+ is recommended for better Node.js 24 support
- **ts-node**: Some users have reported issues with ts-node on Node.js 24
- **Jest**: Some Jest configurations may need adjustments for Node.js 24

### Potential Issues

1. **ESM/CommonJS Interoperability**
   - Node.js 24 has stricter handling of ESM/CommonJS interoperability
   - Review import/require statements if you encounter issues

2. **TypeScript Configuration**
   - TypeScript configuration may need adjustments for Node.js 24
   - Consider updating tsconfig.json with appropriate target and module settings

3. **HTTP Behavior Changes**
   - Changes to HTTP implementation may affect Express.js behavior
   - Test HTTP endpoints thoroughly if you're extending this project

4. **Performance Profile Changes**
   - Different performance characteristics may affect application behavior
   - Monitor performance metrics after upgrade

## Security Improvements

Node.js 24.0.1 includes several security enhancements:

1. **Enhanced Security Features**:
   - Improved HTTP parser with better security handling
   - Updated OpenSSL version with security patches
   - Enhanced permission model for better security isolation
   - Improved secure defaults for various APIs

2. **Vulnerability Mitigations**:
   - Addresses CVEs present in older Node.js versions
   - Improved handling of HTTP request smuggling attacks
   - Better memory safety with updated V8 engine

3. **Security-Related Breaking Changes**:
   - Stricter handling of HTTP headers and requests
   - More secure defaults for crypto operations
   - Deprecation of insecure APIs and patterns

## Recommendations for Users

1. **Update Your Development Environment**:
   - Install Node.js 24.0.1 or higher
   - Update npm to the latest version

2. **Test Your Applications**:
   - Run tests to identify any compatibility issues
   - Pay special attention to HTTP endpoints and module imports

3. **Update Dependencies**:
   - Consider updating TypeScript to 5.4+ for better compatibility
   - Check for updates to other dependencies that may improve compatibility

4. **Review Your Code**:
   - Look for deprecated APIs or patterns that may be affected
   - Update import/require statements if needed
   - Review HTTP handling code for potential issues

## Docker Users

If you're using Docker, the project now uses `node:24.0.1-alpine3.20` as the base image. No action is required if you're pulling the latest image from the GitHub Container Registry.

## References

1. [Node.js 24.0.1 Release Notes](https://nodejs.org/en/blog/release/v24.0.1)
2. [Node.js 24.0.0 Release Notes](https://nodejs.org/en/blog/release/v24.0.0)
3. [Node.js Docker Images](https://hub.docker.com/_/node)
4. [TypeScript and Node.js Compatibility](https://github.com/microsoft/TypeScript/wiki/Node.js-Support)