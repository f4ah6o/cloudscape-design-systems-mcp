# Product Context

This file provides a high-level overview of the project and the expected product that will be created. Initially it is based upon projectBrief.md (if provided) and all other available project-related information in the working directory. This file is intended to be updated as the project evolves, and should be used to inform all other modes of the project's goals and context.
2025-05-01 16:56:49 - Log of updates made will be appended as footnotes to the end of this file.
2025-05-01 18:01:45 - Updated to reflect expanded scope from AWS Cloudscape to multiple React design systems.

*

## Project Goal

* This project is a MCP (Model Context Protocol) server for React design systems, currently supporting AWS Cloudscape with plans to expand to other design systems.
* The goal is providing tools and resources for working with various React design system components, starting with AWS Cloudscape and expanding to others in the future.
* The package has been renamed from `@agentience/mcp-cloudscape-assistant` to `@agentience/react-design-systems-mcp` to reflect this expanded scope.

## Key Features

* MCP server implementation (both legacy and FastMCP versions)
* Component registry and documentation
* Code generation capabilities
* Search functionality for components
* Integration with Roo (AI assistant)
* Security features
* Property exploration for components
* Support for multiple React design systems (starting with AWS Cloudscape)

## Overall Architecture

* TypeScript-based implementation
* Server architecture with MCP protocol support
* Component registry for React design system components
* Documentation provider for component usage
* Integration with Roo for AI-assisted development
* Search engine for component discovery
* Security layer for safe operation
* Extensible architecture to support multiple design systems

## Distribution

* Published as an npm package: `@agentience/react-design-systems-mcp`
* Executable CLI tool: `react-design-systems-mcp`
* TypeScript declarations for type safety
* Proper build configuration for distribution