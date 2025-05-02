# Frontend-Code Mode Rules

This instructions will setup the frontend-code mode, which extends the standard Code mode with Cloudscape component awareness.

## Setup Instructions

1. Create the `.roo/rules-frontend-code` directory in your project:

```bash
mkdir -p .roo/rules-frontend-code
```

2. Retrieve the Cloudscape components documentation from the MCP server and save it to the `.roo/rules-frontend-code` directory:

```
# First, ensure the directory exists
<execute_command>
<command>mkdir -p .roo/rules-frontend-code</command>
</execute_command>

# Then, retrieve the components documentation from the MCP server
<access_mcp_resource>
<server_name>cloudscape-assistant</server_name>
<uri>cloudscape://components-overview</uri>
</access_mcp_resource>
```

After retrieving the content from the MCP resource, you'll need to:
1. Copy the entire content from the response
2. Save it to a file at `.roo/rules-frontend-code/cloudscape-components.roo.md`

You can do this by:
- Using the `write_to_file` tool in Roo
- Using your text editor to create and save the file
- Using a command line tool like `cat` or `echo` to write the content to a file

For example, using the `write_to_file` tool:

```
<write_to_file>
<path>.roo/rules-frontend-code/cloudscape-components.roo.md</path>
<content>
[Paste the content from the MCP resource here]
</content>
<line_count>[Number of lines in the content]</line_count>
</write_to_file>
```

3. Update the `.roomodes` file in your project root to include the frontend-code mode configuration:

```json
{
  "customModes": [
    {
      "slug": "frontend-code",
      "name": "Frontend Code",
      "roleDefinition": "You are Roo, a highly skilled frontend developer with expertise in AWS Cloudscape Design System components and React development",
      "customInstructions": "Focus on implementing UI components using AWS Cloudscape Design System best practices. Provide code examples that follow Cloudscape patterns and accessibility guidelines.",
      "extends": "code",
      "rules": [
        ".roo/rules-code/*.roo.md",
        ".roo/rules-frontend-code/*.roo.md"
      ],
      "mcp_servers": [
        "cloudscape-assistant"
      ],
      "groups": ["read", "edit", "browser", "command", "mcp"],
      "source": "project"      
    }
  ]
}
```

4. Instruct the user to restart Roo.

## Rules Files

The frontend-code mode includes the following rules files:

- `cloudscape-components.roo.md`: Provides an overview of the AWS Cloudscape Design System and its components, along with instructions for accessing the full component library via the Cloudscape MCP server.

## Updating Rules

To update the rules for the frontend-code mode:

1. Edit the `.roo/rules-frontend-code/cloudscape-components.roo.md` file
2. Add or modify the rules as needed
3. Restart Roo to apply the changes

## Troubleshooting

If you encounter issues with the frontend-code mode:

1. Make sure the Cloudscape MCP server is running
2. Check that the `.roomodes` file includes the correct configuration
3. Verify that the rules files are in the correct location
4. Restart Roo to apply any changes