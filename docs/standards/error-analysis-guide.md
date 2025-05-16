# Error Analysis Guide

## Overview

This guide provides a structured approach to analyzing and resolving errors using the tribal knowledge base and the ErrorManager mode.

## Error Analysis Process

1. **Initial Capture**
   - Record the complete error message
   - Save the stack trace
   - Document the environment details
   - Note steps to reproduce

2. **Knowledge Base Search**
   - Start with a broad search using error message
   - Refine search using error type if needed
   - Try context-based search with language/framework
   - Use code snippet search for specific syntax issues

3. **Root Cause Analysis**
   - Trace execution flow to error origin
   - Identify any external dependencies involved
   - Check recent changes that might have contributed
   - Look for patterns in similar past errors
   - Use isolation testing to verify causes

4. **Solution Development**
   - Start with known solutions from knowledge base
   - Adapt solutions to current context
   - Create minimal changes that address root cause
   - Add appropriate error handling
   - Test solution thoroughly

5. **Documentation**
   - Document error details
   - Record all attempted solutions
   - Explain root cause
   - Detail successful solution
   - Include prevention recommendations

## Using the Tribal MCP Server

### Finding Similar Errors

Use the `find_similar_errors` tool to search for errors similar to the current one:

```javascript
use_mcp_tool({
  server_name: "tribal",
  tool_name: "find_similar_errors",
  arguments: {
    query: "TypeError: Cannot read property 'data' of undefined",
    max_results: 5
  }
})
```

### Specific Error Searches

For more targeted searches, use the `search_errors` tool:

```javascript
use_mcp_tool({
  server_name: "tribal",
  tool_name: "search_errors",
  arguments: {
    error_type: "TypeError",
    language: "javascript",
    framework: "react",
    error_message: "Cannot read property",
    code_snippet: "const data = response.data.map(item => item.id);",
    max_results: 5
  }
})
```

### Documenting Resolved Errors

After resolving an error, always document it using the `track_error` tool:

```javascript
use_mcp_tool({
  server_name: "tribal",
  tool_name: "track_error",
  arguments: {
    error_type: "TypeError",
    error_message: "Cannot read property 'data' of undefined",
    language: "javascript",
    framework: "react",
    code_snippet: "const data = response.data.map(item => item.id);",
    task_description: "Fetching and processing API data in React component",
    solution_description: "Add null check before accessing response.data",
    solution_code_fix: "const data = response && response.data ? response.data.map(item => item.id) : [];",
    solution_explanation: "The error occurred because response.data was accessed without verifying that response existed and had a data property. Adding a null check prevents the error when response is undefined or doesn't have a data property.",
    solution_references: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"]
  }
})
```

## When to Delegate to ErrorManager

Delegate to ErrorManager when:
- The error is critical or blocks major functionality
- No similar errors exist in the knowledge base
- Multiple attempted solutions have failed
- The error crosses multiple system components
- The root cause is unclear after initial analysis
- The error may affect multiple parts of the system

## Common Error Patterns to Watch For

1. **Undefined or Null References**
   - Accessing properties on undefined objects
   - Using null as if it were an object
   - Missing initialization of variables

2. **Asynchronous Timing Issues**
   - Race conditions
   - Promises not properly awaited
   - Component rendering before data is available

3. **Type Mismatches**
   - Using a string as a number
   - Using an array as an object
   - Passing incorrect argument types to functions

4. **API Integration Problems**
   - Incorrect API endpoint URLs
   - Missing authentication tokens
   - Unexpected response formats

5. **Resource Management Issues**
   - Memory leaks
   - Unclosed connections
   - Excessive CPU or network usage

## Error Prevention Best Practices

1. **Defensive Programming**
   - Always check for null/undefined before accessing properties
   - Validate inputs early
   - Use try/catch blocks around error-prone code

2. **Type Safety**
   - Use TypeScript or PropTypes
   - Validate types at boundaries
   - Add runtime type checking for critical functions

3. **Error Handling**
   - Implement proper error handling strategies
   - Provide meaningful error messages
   - Log errors with sufficient context

4. **Testing**
   - Write tests that specifically target error conditions
   - Include edge cases and boundary conditions
   - Test error recovery mechanisms

5. **Documentation**
   - Document known error conditions
   - Maintain clear API documentation
   - Update documentation when error patterns are discovered