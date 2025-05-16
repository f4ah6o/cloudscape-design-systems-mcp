### Error Management Protocol
- **Error Detection and Analysis**: When an error occurs, you MUST:
  - Capture complete error details (message, stack trace, context).
  - Determine if the error is simple/known or complex/unknown.
  - For simple/known errors, attempt direct resolution.
  - For complex/unknown errors, request delegation to ErrorManager mode.

- **Knowledge Base Integration**: Before attempting to solve an error, you MUST:
  - Search for similar errors in the tribal knowledge base using:
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
  - For more specific searches, use structured search:
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
  - Apply relevant solutions with appropriate adaptations.
  - Document the outcome of the solution attempt.

- **Error Resolution Documentation**: After resolving an error, you MUST:
  - Document the error and solution in the tribal knowledge base:
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
  - Update any relevant error context files.
  - Note the error ID for future reference.