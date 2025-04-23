# Frontend-Code Mode Rules

This directory contains the rules files for the frontend-code mode, which extends the standard Code mode with Cloudscape component awareness.

## Setup Instructions

1. Create the `.roo/rules-frontend-code` directory in your project:

```bash
mkdir -p .roo/rules-frontend-code
```

2. Copy the `cloudscape-components.roo.md` file to the `.roo/rules-frontend-code` directory:

```bash
cp /path/to/cloudscape-components.roo.md .roo/rules-frontend-code/
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