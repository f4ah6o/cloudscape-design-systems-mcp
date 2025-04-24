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
<server_name>cloudscape</server_name>
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

3. Update your `.roomodes.yaml` file to include the frontend-code mode configuration:

```yaml
frontend-code:
  name: "Frontend Code"
  description: "Specialized mode for UI development with Cloudscape components"
  extends: "code"
  model: "claude-3-7-sonnet-20250219"
  rules:
    - ".roo/rules-code/*.roo.md"
    - ".roo/rules-frontend-code/*.roo.md"
  mcp_servers:
    - "cloudscape"
```

4. Start the Cloudscape MCP server:

```bash
npx mcp-cloudscape-assistant
```

5. Switch to the frontend-code mode in Roo:

```
<switch_mode>
<mode_slug>frontend-code</mode_slug>
<reason>Need to work with Cloudscape components</reason>
</switch_mode>
```

## Rules Files

The frontend-code mode includes the following rules files:

- `cloudscape-components.roo.md`: Provides an overview of the AWS Cloudscape Design System and its components, along with instructions for accessing the full component library via the Cloudscape MCP server.

You can access the contents of this file through the Cloudscape MCP server's setup tool:

```
<use_mcp_tool>
<server_name>cloudscape</server_name>
<tool_name>setup</tool_name>
<arguments>
{}
</arguments>
</use_mcp_tool>
```

## Adding Custom Rules

You can add additional rules files to the `.roo/rules-frontend-code` directory to customize the frontend-code mode. For example, you might want to add rules for:

- Project-specific UI patterns
- Custom Cloudscape component extensions
- UI development best practices
- Accessibility guidelines
- Performance optimization tips

To add a custom rules file:

1. Create a new `.roo.md` file in the `.roo/rules-frontend-code` directory
2. Add your custom rules to the file
3. Restart Roo to apply the changes

## Updating Rules

To update the rules for the frontend-code mode:

1. Edit the `.roo/rules-frontend-code/cloudscape-components.roo.md` file
2. Add or modify the rules as needed
3. Restart Roo to apply the changes

## Troubleshooting

If you encounter issues with the frontend-code mode:

1. Make sure the Cloudscape MCP server is running
2. Check that the `.roomodes.yaml` file includes the correct configuration
3. Verify that the rules files are in the correct location
4. Restart Roo to apply any changes