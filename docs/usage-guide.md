# Frontend-Code Mode Usage Guide

This guide provides instructions on how to use the frontend-code mode effectively for UI development with AWS Cloudscape Design System components.

## Getting Started

### Prerequisites

Before using the frontend-code mode, ensure you have:

1. Roo installed and configured
2. The Cloudscape MCP server installed and running
3. The frontend-code mode configured in your `.roomodes.yaml` file
4. The rules files for frontend-code mode in the `.roo/rules-frontend-code` directory

### Switching to Frontend-Code Mode

To switch to the frontend-code mode, use the following command:

```
<switch_mode>
<mode_slug>frontend-code</mode_slug>
<reason>Need to work with Cloudscape components</reason>
</switch_mode>
```

## Working with Cloudscape Components

### Finding Components

To find Cloudscape components that match your needs, use the `search_components` tool:

```
<use_mcp_tool>
<server_name>cloudscape</server_name>
<tool_name>search_components</tool_name>
<arguments>
{
  "query": "table",
  "category": "display",
  "limit": 5
}
</arguments>
</use_mcp_tool>
```

This will return a list of components that match your search criteria, including their names, categories, and descriptions.

### Getting Component Details

To get detailed information about a specific component, use the `get_component_details` tool:

```
<use_mcp_tool>
<server_name>cloudscape</server_name>
<tool_name>get_component_details</tool_name>
<arguments>
{
  "componentId": "table"
}
</arguments>
</use_mcp_tool>
```

This will return detailed information about the component, including its properties, related components, and usage guidelines.

### Generating Component Code

To generate code for a component, use the `generate_component_code` tool:

```
<use_mcp_tool>
<server_name>cloudscape</server_name>
<tool_name>generate_component_code</tool_name>
<arguments>
{
  "componentId": "table",
  "props": {
    "columnDefinitions": [
      {
        "id": "name",
        "header": "Name",
        "cell": "item => item.name"
      },
      {
        "id": "type",
        "header": "Type",
        "cell": "item => item.type"
      }
    ],
    "items": "items"
  }
}
</arguments>
</use_mcp_tool>
```

This will generate code for the component with the specified props, which you can then use in your application.

### Generating Pattern Code

To generate code for a common Cloudscape pattern, use the `generate_pattern_code` tool:

```
<use_mcp_tool>
<server_name>cloudscape</server_name>
<tool_name>generate_pattern_code</tool_name>
<arguments>
{
  "patternId": "data-table",
  "customizations": {
    "columnDefinitions": [
      {
        "id": "name",
        "header": "Name",
        "cell": "item => item.name"
      },
      {
        "id": "type",
        "header": "Type",
        "cell": "item => item.type"
      }
    ],
    "items": "items"
  }
}
</arguments>
</use_mcp_tool>
```

This will generate code for the specified pattern with the provided customizations.

### Getting Component Examples

To get usage examples for a component, use the `get_component_examples` tool:

```
<use_mcp_tool>
<server_name>cloudscape</server_name>
<tool_name>get_component_examples</tool_name>
<arguments>
{
  "componentId": "table",
  "type": "basic",
  "limit": 3
}
</arguments>
</use_mcp_tool>
```

This will return usage examples for the component, which you can use as a reference for your own implementation.

### Accessing Component Documentation

To access comprehensive documentation for a component, use the `access_mcp_resource` tool:

```
<access_mcp_resource>
<server_name>cloudscape</server_name>
<uri>cloudscape://components/table</uri>
</access_mcp_resource>
```

This will return detailed documentation for the component, including usage guidelines, best practices, and accessibility considerations.

### Accessing Component Usage Guidelines

For detailed usage guidelines and best practices, use the dedicated usage guidelines resource:

```
<access_mcp_resource>
<server_name>cloudscape</server_name>
<uri>cloudscape://usage/table</uri>
</access_mcp_resource>
```

Or get specific usage information with the `get_component_usage` tool:

```
<use_mcp_tool>
<server_name>cloudscape</server_name>
<tool_name>get_component_usage</tool_name>
<arguments>
{
  "componentId": "table",
  "section": "Features"
}
</arguments>
</use_mcp_tool>
```

### Searching Usage Guidelines

To search across all component usage guidelines for specific content:

```
<use_mcp_tool>
<server_name>cloudscape</server_name>
<tool_name>search_usage_guidelines</tool_name>
<arguments>
{
  "query": "accessibility",
  "section": "General guidelines",
  "limit": 5
}
</arguments>
</use_mcp_tool>
```

This will find components that have both the specified query and section in their usage guidelines.

## Common UI Development Tasks

### Creating a Data Table

To create a data table with sorting, filtering, and pagination:

1. Search for the Table component:
   ```
   <use_mcp_tool>
   <server_name>cloudscape</server_name>
   <tool_name>search_components</tool_name>
   <arguments>
     {
       "query": "table"
     }
   </arguments>
   </use_mcp_tool>
   ```

2. Get details about the Table component:
   ```
   <use_mcp_tool>
   <server_name>cloudscape</server_name>
   <tool_name>get_component_details</tool_name>
   <arguments>
     {
       "componentId": "table"
     }
   </arguments>
   </use_mcp_tool>
   ```

3. Generate code for a data table pattern:
   ```
   <use_mcp_tool>
   <server_name>cloudscape</server_name>
   <tool_name>generate_pattern_code</tool_name>
   <arguments>
     {
       "patternId": "data-table",
       "customizations": {
         "columnDefinitions": [
           {
             "id": "name",
             "header": "Name",
             "cell": "item => item.name",
             "sortingField": "name"
           },
           {
             "id": "type",
             "header": "Type",
             "cell": "item => item.type",
             "sortingField": "type"
           }
         ],
         "items": "items",
         "pagination": true,
         "filtering": true,
         "sorting": true
       }
     }
   </arguments>
   </use_mcp_tool>
   ```

4. Use the generated code in your application.

### Creating a Form

To create a form with validation:

1. Search for the Form component:
   ```
   <use_mcp_tool>
   <server_name>cloudscape</server_name>
   <tool_name>search_components</tool_name>
   <arguments>
     {
       "query": "form"
     }
   </arguments>
   </use_mcp_tool>
   ```

2. Get details about the Form component:
   ```
   <use_mcp_tool>
   <server_name>cloudscape</server_name>
   <tool_name>get_component_details</tool_name>
   <arguments>
     {
       "componentId": "form"
     }
   </arguments>
   </use_mcp_tool>
   ```

3. Generate code for a form pattern:
   ```
   <use_mcp_tool>
   <server_name>cloudscape</server_name>
   <tool_name>generate_pattern_code</tool_name>
   <arguments>
     {
       "patternId": "form",
       "customizations": {
         "fields": [
           {
             "id": "name",
             "label": "Name",
             "type": "input",
             "required": true
           },
           {
             "id": "description",
             "label": "Description",
             "type": "textarea"
           },
           {
             "id": "type",
             "label": "Type",
             "type": "select",
             "options": [
               { "label": "Type 1", "value": "1" },
               { "label": "Type 2", "value": "2" }
             ]
           }
         ],
         "validation": true,
         "submitButton": "Submit",
         "cancelButton": "Cancel"
       }
     }
   </arguments>
   </use_mcp_tool>
   ```

4. Use the generated code in your application.

### Creating an Application Layout

To create a standard application layout with navigation, content, and tools panels:

1. Search for the AppLayout component:
   ```
   <use_mcp_tool>
   <server_name>cloudscape</server_name>
   <tool_name>search_components</tool_name>
   <arguments>
     {
       "query": "applayout"
     }
   </arguments>
   </use_mcp_tool>
   ```

2. Get details about the AppLayout component:
   ```
   <use_mcp_tool>
   <server_name>cloudscape</server_name>
   <tool_name>get_component_details</tool_name>
   <arguments>
     {
       "componentId": "applayout"
     }
   </arguments>
   </use_mcp_tool>
   ```

3. Generate code for an application layout pattern:
   ```
   <use_mcp_tool>
   <server_name>cloudscape</server_name>
   <tool_name>generate_pattern_code</tool_name>
   <arguments>
     {
       "patternId": "application-layout",
       "customizations": {
         "navigation": true,
         "tools": true,
         "breadcrumbs": true,
         "notifications": true,
         "contentHeader": "Dashboard"
       }
     }
   </arguments>
   </use_mcp_tool>
   ```

4. Use the generated code in your application.

## Best Practices

### Component Selection

- Use the Component Registry to find the right component for your needs
- Consider the component's purpose, features, and limitations
- Choose the simplest component that meets your requirements
- Use component combinations for complex UI elements

### Code Generation

- Use the Code Generator to save time and ensure consistency
- Customize generated code to fit your specific requirements
- Use generated code as a starting point, not a final solution
- Review and understand generated code before using it

### Accessibility

- Follow Cloudscape accessibility guidelines
- Use proper ARIA attributes
- Ensure keyboard navigation works correctly
- Test with screen readers
- Maintain sufficient color contrast

### Responsive Design

- Use responsive components and layouts
- Test on different screen sizes
- Use breakpoints appropriately
- Consider mobile-first design

### Performance

- Minimize component nesting
- Use virtualization for large lists
- Optimize rendering performance
- Use lazy loading for expensive components

## Troubleshooting

### Common Issues

1. **Component Not Found**
   - Make sure you're using the correct component ID
   - Check if the component is available in the Component Registry
   - Try searching with different terms

2. **Code Generation Fails**
   - Check if the component ID is correct
   - Verify that the props are valid for the component
   - Make sure the pattern ID is correct

3. **Component Doesn't Render Correctly**
   - Check if you're importing the component correctly
   - Verify that you're providing all required props
   - Check for console errors
   - Make sure you're using the component as intended

4. **MCP Server Connection Issues**
   - Make sure the Cloudscape MCP server is running
   - Check that the server is configured correctly in `.roomodes.yaml`
   - Restart the server if necessary

### Getting Help

If you encounter issues that you can't resolve, try the following:

1. Check the Cloudscape documentation
2. Look at examples in the Component Registry
3. Ask for help from the development team
4. Check for known issues in the issue tracker

## Resources

- [Cloudscape Design System Website](https://cloudscape.design/)
- [Cloudscape Design System Documentation](https://cloudscape.design/components/)
- [Cloudscape Design System GitHub Repository](https://github.com/cloudscape-design/components)
- [Frontend-Code Mode Documentation](./frontend-code-mode.md)
- [Cloudscape MCP Server Documentation](./README.md)