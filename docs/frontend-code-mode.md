# Frontend-Code Mode Documentation

This document provides documentation for the frontend-code mode, which extends the standard Code mode with Cloudscape component awareness.

## Overview

The frontend-code mode is a specialized mode for UI development with AWS Cloudscape Design System components. It extends the standard Code mode with additional capabilities for working with Cloudscape components, including:

- Component search and retrieval
- Code generation for common Cloudscape patterns
- Access to detailed component documentation
- Property exploration
- Example retrieval

## Mode Configuration

The frontend-code mode is configured in the `.roomodes.yaml` file with the following settings:

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

### Configuration Details

- **name**: The display name of the mode
- **description**: A brief description of the mode
- **extends**: The mode that this mode extends (in this case, "code")
- **model**: The model to use for this mode
- **rules**: The rules files to load for this mode
- **mcp_servers**: The MCP servers to connect to for this mode

## Rules File

The frontend-code mode includes a minimal rules file (`.roo/rules-frontend-code/cloudscape-components.roo.md`) that provides quick access to the most commonly used Cloudscape components. The rules file contains:

- Overview of Cloudscape Design System
- List of 10-15 most commonly used components with brief descriptions
- Instructions for accessing the full component library via MCP server

### Rules File Content

```markdown
# Cloudscape Components

This document provides an overview of the AWS Cloudscape Design System and its components, along with instructions for accessing the full component library via the Cloudscape MCP server.

## Overview

AWS Cloudscape Design System is a collection of reusable components and design guidelines for building intuitive, responsive, and accessible user experiences for AWS web applications. It provides a consistent look and feel across AWS web applications and helps developers build high-quality user interfaces quickly and efficiently.

## Most Commonly Used Components

The following components are the most commonly used in Cloudscape applications:

### 1. AppLayout

AppLayout provides a standard application layout with navigation, content, and tools panels.

```tsx
import AppLayout from "@cloudscape-design/components/app-layout";

<AppLayout
  navigation={<div>Navigation</div>}
  content={<div>Main Content</div>}
  tools={<div>Tools Panel</div>}
/>
```

### 2. Table

Table displays tabular data with sorting, filtering, and pagination.

```tsx
import Table from "@cloudscape-design/components/table";

<Table
  columnDefinitions={[
    {
      id: "name",
      header: "Name",
      cell: item => item.name
    },
    {
      id: "type",
      header: "Type",
      cell: item => item.type
    }
  ]}
  items={[
    { name: "Item 1", type: "Type 1" },
    { name: "Item 2", type: "Type 2" }
  ]}
/>
```

### 3. Form

Form is a container for form controls with validation.

```tsx
import Form from "@cloudscape-design/components/form";

<Form
  header={<h1>Form Header</h1>}
  actions={<div>Form Actions</div>}
>
  <div>Form Content</div>
</Form>
```

### 4. Button

Button triggers actions with various styles and sizes.

```tsx
import Button from "@cloudscape-design/components/button";

<Button
  variant="primary"
  onClick={() => console.log("Button clicked")}
>
  Submit
</Button>
```

### 5. Container

Container groups related content with headers and optional actions.

```tsx
import Container from "@cloudscape-design/components/container";

<Container
  header={<h2>Container Header</h2>}
>
  <div>Container Content</div>
</Container>
```

### 6. Header

Header displays a heading with optional actions.

```tsx
import Header from "@cloudscape-design/components/header";

<Header
  actions={<div>Header Actions</div>}
>
  Header Title
</Header>
```

### 7. SpaceBetween

SpaceBetween adds equal spacing between children.

```tsx
import SpaceBetween from "@cloudscape-design/components/space-between";

<SpaceBetween size="m">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</SpaceBetween>
```

### 8. Grid

Grid is a responsive layout grid system.

```tsx
import Grid from "@cloudscape-design/components/grid";

<Grid
  gridDefinition={[
    { colspan: 6 },
    { colspan: 6 }
  ]}
>
  <div>Column 1</div>
  <div>Column 2</div>
</Grid>
```

### 9. Cards

Cards displays content in card format.

```tsx
import Cards from "@cloudscape-design/components/cards";

<Cards
  cardDefinition={{
    header: item => item.name,
    sections: [
      {
        id: "description",
        header: "Description",
        content: item => item.description
      }
    ]
  }}
  items={[
    { name: "Item 1", description: "Description 1" },
    { name: "Item 2", description: "Description 2" }
  ]}
/>
```

### 10. Alert

Alert displays messages with different severity levels.

```tsx
import Alert from "@cloudscape-design/components/alert";

<Alert
  type="success"
  header="Success"
>
  Operation completed successfully.
</Alert>
```

### 11. Tabs

Tabs organizes content into multiple tabs.

```tsx
import Tabs from "@cloudscape-design/components/tabs";

<Tabs
  tabs={[
    {
      label: "Tab 1",
      id: "tab1",
      content: <div>Tab 1 Content</div>
    },
    {
      label: "Tab 2",
      id: "tab2",
      content: <div>Tab 2 Content</div>
    }
  ]}
/>
```

### 12. Modal

Modal displays content in a modal dialog.

```tsx
import Modal from "@cloudscape-design/components/modal";

<Modal
  visible={true}
  header="Modal Header"
  onDismiss={() => {}}
>
  <div>Modal Content</div>
</Modal>
```

### 13. Select

Select is a dropdown selection component.

```tsx
import Select from "@cloudscape-design/components/select";

<Select
  options={[
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" }
  ]}
  selectedOption={{ label: "Option 1", value: "1" }}
  onChange={({ detail }) => {}}
/>
```

### 14. Input

Input is a text input field.

```tsx
import Input from "@cloudscape-design/components/input";

<Input
  value=""
  onChange={({ detail }) => {}}
/>
```

### 15. Pagination

Pagination enables navigation through paginated content.

```tsx
import Pagination from "@cloudscape-design/components/pagination";

<Pagination
  currentPageIndex={1}
  pagesCount={5}
  onNextPageClick={() => {}}
  onPreviousPageClick={() => {}}
/>
```

## Accessing the Full Component Library

The frontend-code mode provides access to the full Cloudscape component library via the Cloudscape MCP server. You can use the following tools to access component information:

### 1. Search Components

Use the `search_components` tool to search for Cloudscape components:

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

### 2. Get Component Details

Use the `get_component_details` tool to get detailed information about a component:

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

### 3. Generate Component Code

Use the `generate_component_code` tool to generate code for a component:

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

### 4. Generate Pattern Code

Use the `generate_pattern_code` tool to generate code for a common pattern:

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

### 5. Get Component Examples

Use the `get_component_examples` tool to get usage examples for a component:

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

### 6. Access Component Documentation

Use the `access_mcp_resource` tool to access component documentation:

```
<access_mcp_resource>
<server_name>cloudscape</server_name>
<uri>cloudscape://components/table</uri>
</access_mcp_resource>
```

## Using Frontend-Code Mode

To use the frontend-code mode, follow these steps:

1. **Switch to Frontend-Code Mode**:
   ```
   <switch_mode>
   <mode_slug>frontend-code</mode_slug>
   <reason>Need to work with Cloudscape components</reason>
   </switch_mode>
   ```

2. **Search for Components**:
   Use the `search_components` tool to find components that match your needs.

3. **Get Component Details**:
   Use the `get_component_details` tool to get detailed information about a component.

4. **Generate Component Code**:
   Use the `generate_component_code` tool to generate code for a component.

5. **Generate Pattern Code**:
   Use the `generate_pattern_code` tool to generate code for a common pattern.

6. **Get Component Examples**:
   Use the `get_component_examples` tool to get usage examples for a component.

7. **Access Component Documentation**:
   Use the `access_mcp_resource` tool to access component documentation.

## Best Practices

When using the frontend-code mode, follow these best practices:

1. **Use the Component Registry**:
   The Component Registry provides comprehensive information about all Cloudscape components. Use it to find the right component for your needs.

2. **Leverage Code Generation**:
   The Code Generator can save you time by generating code for common patterns. Use it to quickly implement complex UI components.

3. **Consult Documentation**:
   The Documentation Provider offers detailed information about component usage, best practices, and accessibility considerations. Consult it when you're unsure about how to use a component.

4. **Explore Examples**:
   The Example Provider offers usage examples for components. Explore them to learn how to use components effectively.

5. **Follow Accessibility Guidelines**:
   Cloudscape components are designed to be accessible. Follow the accessibility guidelines to ensure your UI is accessible to all users.

6. **Use Responsive Design**:
   Cloudscape components are designed to be responsive. Use responsive design patterns to ensure your UI works well on all devices.

7. **Optimize Performance**:
   Follow performance best practices to ensure your UI is fast and responsive.

## Troubleshooting

If you encounter issues with the frontend-code mode, try the following:

1. **Check Component Availability**:
   Make sure the component you're trying to use is available in the Component Registry.

2. **Verify Tool Usage**:
   Make sure you're using the MCP tools correctly.

3. **Consult Documentation**:
   Check the documentation for the component you're trying to use.

4. **Explore Examples**:
   Look at examples of how to use the component.

5. **Ask for Help**:
   If you're still having issues, ask for help from the development team.
```

## Using Frontend-Code Mode

To use the frontend-code mode, follow these steps:

1. **Switch to Frontend-Code Mode**:
   ```
   <switch_mode>
   <mode_slug>frontend-code</mode_slug>
   <reason>Need to work with Cloudscape components</reason>
   </switch_mode>
   ```

2. **Search for Components**:
   Use the `search_components` tool to find components that match your needs.

3. **Get Component Details**:
   Use the `get_component_details` tool to get detailed information about a component.

4. **Generate Component Code**:
   Use the `generate_component_code` tool to generate code for a component.

5. **Generate Pattern Code**:
   Use the `generate_pattern_code` tool to generate code for a common pattern.

6. **Get Component Examples**:
   Use the `get_component_examples` tool to get usage examples for a component.

7. **Access Component Documentation**:
   Use the `access_mcp_resource` tool to access component documentation.

## Best Practices

When using the frontend-code mode, follow these best practices:

1. **Use the Component Registry**:
   The Component Registry provides comprehensive information about all Cloudscape components. Use it to find the right component for your needs.

2. **Leverage Code Generation**:
   The Code Generator can save you time by generating code for common patterns. Use it to quickly implement complex UI components.

3. **Consult Documentation**:
   The Documentation Provider offers detailed information about component usage, best practices, and accessibility considerations. Consult it when you're unsure about how to use a component.

4. **Explore Examples**:
   The Example Provider offers usage examples for components. Explore them to learn how to use components effectively.

5. **Follow Accessibility Guidelines**:
   Cloudscape components are designed to be accessible. Follow the accessibility guidelines to ensure your UI is accessible to all users.

6. **Use Responsive Design**:
   Cloudscape components are designed to be responsive. Use responsive design patterns to ensure your UI works well on all devices.

7. **Optimize Performance**:
   Follow performance best practices to ensure your UI is fast and responsive.

## Troubleshooting

If you encounter issues with the frontend-code mode, try the following:

1. **Check Component Availability**:
   Make sure the component you're trying to use is available in the Component Registry.

2. **Verify Tool Usage**:
   Make sure you're using the MCP tools correctly.

3. **Consult Documentation**:
   Check the documentation for the component you're trying to use.

4. **Explore Examples**:
   Look at examples of how to use the component.

5. **Ask for Help**:
   If you're still having issues, ask for help from the development team.

## Future Enhancements

The frontend-code mode will be enhanced over time with the following features:

1. **More Components**:
   Support for more Cloudscape components as they are released.

2. **More Patterns**:
   Support for more common Cloudscape patterns.

3. **Better Code Generation**:
   Enhanced code generation capabilities with more customization options.

4. **Improved Documentation**:
   More comprehensive documentation with more examples and best practices.

5. **Integration with Other Tools**:
   Integration with other tools such as linters, formatters, and testing frameworks.

6. **Performance Optimization**:
   Improved performance for large projects with many components.

7. **Accessibility Checking**:
   Automated accessibility checking for Cloudscape components.