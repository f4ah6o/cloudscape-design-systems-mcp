# Error Handling Protocol

## Overview

This protocol defines standard error handling procedures for all modes in the system, leveraging the tribal MCP server for knowledge sharing and the ErrorManager mode for complex cases.

## Direct Error Handling (For All Modes)

For common, well-understood errors that can be resolved quickly:

1. **Initial Capture**
   - Capture complete error details (message, stack trace, context)
   - Record the environment information
   - Document the steps to reproduce

2. **Knowledge Search**
   - Use the tribal MCP server to search for similar errors:
   ```javascript
   use_mcp_tool({
     server_name: "tribal",
     tool_name: "find_similar_errors",
     arguments: {
       query: "[ERROR_MESSAGE]",
       max_results: 5
     }
   })
   ```
   - For more specific searches:
   ```javascript
   use_mcp_tool({
     server_name: "tribal",
     tool_name: "search_errors",
     arguments: {
       error_type: "[ERROR_TYPE]",
       language: "[LANGUAGE]",
       framework: "[FRAMEWORK]"
     }
   })
   ```

3. **Apply Solution**
   - If a clear solution exists, implement it with appropriate adaptations
   - Test the solution thoroughly
   - Document any modifications made to the original solution

4. **Document Resolution**
   - Always document the error and solution:
   ```javascript
   use_mcp_tool({
     server_name: "tribal",
     tool_name: "track_error",
     arguments: {
       error_type: "[ERROR_TYPE]",
       error_message: "[ERROR_MESSAGE]",
       language: "[LANGUAGE]",
       framework: "[FRAMEWORK]",
       code_snippet: "[CODE_SNIPPET]",
       task_description: "[TASK_DESCRIPTION]",
       solution_description: "[SOLUTION_DESCRIPTION]",
       solution_code_fix: "[SOLUTION_CODE]",
       solution_explanation: "[SOLUTION_EXPLANATION]"
     }
   })
   ```

## Delegation to ErrorManager (For Complex Errors)

For complex errors requiring deeper analysis or those not found in the knowledge base:

1. **Create Error Context**
   - Document detailed error information in `/docs/errors/error-context-[UNIQUE_ID].md`
   - Include all relevant context, environment details, and reproduction steps
   - Use the template provided in `/docs/errors/error-context-template.md`

2. **Delegate to ErrorManager**
   - Use Maestro to delegate to ErrorManager mode
   - Include all relevant error details and context files
   - Clearly specify what assistance is needed

3. **Implement Solution**
   - Apply the solution provided by ErrorManager
   - Validate the solution works as expected
   - Document any modifications or adaptations

4. **Update Documentation**
   - Ensure the error and its solution are documented in the tribal knowledge base
   - Update error context files with resolution details

## Error Severity Classification

Classify errors by severity to determine appropriate handling:

1. **Critical**
   - System is unusable or major functionality is broken
   - Data integrity is compromised
   - Security is compromised
   - Always delegate to ErrorManager

2. **Major**
   - Important functionality is impaired but workarounds exist
   - Performance is severely degraded
   - Search knowledge base first, delegate if no solution found

3. **Minor**
   - Cosmetic issues or minor functional problems
   - Limited impact on user experience
   - Handle directly using knowledge base

## Integration with Development Workflow

Each mode should integrate error handling into its development workflow:

1. **During Development**
   - Search for common errors before they occur
   - Implement defensive error handling
   - Document known error-prone areas

2. **During Testing**
   - Document all errors encountered during testing
   - Track resolution of test failures
   - Build test cases for known error conditions

3. **Post-Implementation**
   - Review error patterns across the implementation
   - Recommend error prevention measures
   - Update documentation with error handling best practices

## Knowledge Sharing Responsibility

All modes share responsibility for building the tribal knowledge base:

1. **Document All Errors** - Even simple or quickly resolved errors
2. **Search Before Solving** - Always check for existing solutions
3. **Update Existing Solutions** - Improve documentation for known errors
4. **Share Patterns** - Identify and document error patterns