# Cloudscape Components

This document provides an overview of the AWS Cloudscape Design System and its components, along with instructions for accessing the full component library via the Cloudscape MCP server.

## Overview

AWS Cloudscape Design System is a collection of reusable components and design guidelines for building intuitive, responsive, and accessible user experiences for AWS web applications. It provides a consistent look and feel across AWS web applications and helps developers build high-quality user interfaces quickly and efficiently.

## Key Features

- **Consistent Design**: Cloudscape provides a consistent design language across AWS web applications.
- **Accessibility**: Cloudscape components are designed to be accessible to all users, including those with disabilities.
- **Responsive Design**: Cloudscape components are designed to work well on all screen sizes.
- **Theming**: Cloudscape supports theming through design tokens.
- **Internationalization**: Cloudscape supports internationalization and localization.
- **Documentation**: Cloudscape provides comprehensive documentation for all components.

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

## Best Practices

When using Cloudscape components, follow these best practices:

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

## Common Patterns

The Cloudscape MCP Server provides code generation capabilities for common Cloudscape patterns, including:

### 1. Data Tables

Tables with sorting, filtering, and pagination.

### 2. Form Layouts

Forms with validation and error handling.

### 3. Application Layouts

Standard application layouts with navigation, content, and tools panels.

### 4. Card Layouts

Card-based layouts for displaying collections of items.

### 5. Dashboard Layouts

Dashboard layouts with multiple widgets and visualizations.

### 6. Wizard Flows

Step-by-step wizard flows for complex processes.

### 7. Split Panels

Split panel layouts for side-by-side content.

### 8. Detail Pages

Detail pages with header, content, and actions.

### 9. List Pages

List pages with filtering, sorting, and pagination.

### 10. Navigation Patterns

Navigation patterns with breadcrumbs, tabs, and side navigation.

## Resources

For more information about Cloudscape Design System, visit the following resources:

- [Cloudscape Design System Website](https://cloudscape.design/)
- [Cloudscape Design System Documentation](https://cloudscape.design/components/)
- [Cloudscape Design System GitHub Repository](https://github.com/cloudscape-design/components)