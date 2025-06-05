# Cloudscape Component Library

This document provides an overview of the AWS Cloudscape Design System component library that is supported by React Design Systems.

## Overview

AWS Cloudscape Design System is a collection of reusable components and design guidelines for building intuitive, responsive, and accessible user experiences for AWS web applications. React Design Systems provides comprehensive information about all Cloudscape components, along with code generation capabilities for common Cloudscape patterns.

## Component Categories

Cloudscape components are organized into the following categories:

### 1. Foundation

Foundation components provide the basic building blocks for creating user interfaces.

| Component | Description |
|-----------|-------------|
| Box | A layout element that applies standard spacing to its content |
| Container | A layout element that groups related content |
| Grid | A responsive layout grid system |
| SpaceBetween | A layout element that adds equal spacing between its children |
| TextContent | A container for displaying formatted text content |
| VisualContext | A component that provides visual context for its children |

### 2. Navigation

Navigation components help users navigate through the application.

| Component | Description |
|-----------|-------------|
| BreadcrumbGroup | A component that displays the current location within the application hierarchy |
| Link | A component that navigates to another page or section |
| Pagination | A component that enables navigation through paginated content |
| SideNavigation | A component that provides navigation within a section of the application |
| Tabs | A component that organizes content into multiple tabs |
| TopNavigation | A component that provides navigation at the top of the application |

### 3. Input

Input components allow users to enter and manipulate data.

| Component | Description |
|-----------|-------------|
| Autosuggest | A text input with suggestions |
| Button | A component that triggers an action |
| Checkbox | A component that allows users to select multiple options |
| DatePicker | A component for selecting dates |
| FileUpload | A component for uploading files |
| Form | A container for form controls |
| FormField | A container for a form control with a label and error message |
| Input | A text input field |
| Multiselect | A component that allows users to select multiple options from a dropdown |
| RadioGroup | A group of radio buttons |
| Select | A dropdown selection component |
| Textarea | A multi-line text input field |
| TimePicker | A component for selecting times |
| TokenGroup | A component for displaying and managing tokens |

### 4. Display

Display components present information to users.

| Component | Description |
|-----------|-------------|
| Alert | A component that displays a message with an icon |
| Badge | A component that displays a small amount of information |
| ColumnLayout | A component that arranges content in columns |
| ExpandableSection | A component that can be expanded or collapsed |
| Flashbar | A component that displays a list of flash messages |
| Icon | A component that displays an icon |
| Popover | A component that displays additional information in a popup |
| ProgressBar | A component that displays progress |
| Spinner | A component that indicates loading |
| StatusIndicator | A component that displays status information |
| Table | A component for displaying tabular data |
| Tiles | A component for displaying a grid of selectable tiles |

### 5. Charts

Chart components visualize data.

| Component | Description |
|-----------|-------------|
| AreaChart | A chart that displays data as an area |
| BarChart | A chart that displays data as bars |
| Box Plot | A chart that displays distribution of data |
| LineChart | A chart that displays data as lines |
| MixedLineBarChart | A chart that combines line and bar charts |
| PieChart | A chart that displays data as a pie |
| ScatterPlot | A chart that displays data as points |

### 6. Specialized

Specialized components for specific use cases.

| Component | Description |
|-----------|-------------|
| AppLayout | A component that provides a standard application layout |
| Cards | A component for displaying content in cards |
| Drawer | A panel that slides in from the edge of the screen |
| HelpPanel | A component that displays help information |
| Modal | A dialog that appears on top of the main content |
| Wizard | A component that guides users through a multi-step process |

## Most Commonly Used Components

The following components are the most commonly used in Cloudscape applications and will be highlighted in the minimal rules file:

1. **AppLayout**: Provides a standard application layout with navigation, content, and tools panels
2. **Table**: Displays tabular data with sorting, filtering, and pagination
3. **Form**: Container for form controls with validation
4. **Button**: Triggers actions with various styles and sizes
5. **Container**: Groups related content with headers and optional actions
6. **Header**: Displays a heading with optional actions
7. **SpaceBetween**: Adds equal spacing between children
8. **Grid**: Responsive layout grid system
9. **Cards**: Displays content in card format
10. **Alert**: Displays messages with different severity levels
11. **Tabs**: Organizes content into multiple tabs
12. **Modal**: Displays content in a modal dialog
13. **Select**: Dropdown selection component
14. **Input**: Text input field
15. **Pagination**: Enables navigation through paginated content

## Component Properties

Each component has a set of properties that control its appearance and behavior. The Cloudscape MCP Server will provide detailed information about all component properties, including:

- Property name
- Property type
- Property description
- Default value
- Required/optional status
- Accepted values
- Deprecation status
- Examples

### Example: Button Component Properties

```typescript
interface ButtonProps {
  // The text displayed inside the button
  children?: React.ReactNode;
  
  // Determines the button's general styling
  variant?: 'primary' | 'normal' | 'link' | 'icon';
  
  // Determines the button's size
  formAction?: 'none' | 'submit';
  
  // Determines the button's size
  iconAlign?: 'left' | 'right';
  
  // The URL that the link button points to
  href?: string;
  
  // The icon displayed in the button
  iconName?: IconProps.Name;
  
  // Determines the button's size
  iconUrl?: string;
  
  // Determines whether the button is disabled
  disabled?: boolean;
  
  // Determines whether the button is in a loading state
  loading?: boolean;
  
  // Determines whether the button should be rendered with a dangerous look
  wrapText?: boolean;
  
  // Determines the button's size
  download?: boolean | string;
  
  // Determines the button's size
  target?: string;
  
  // Determines the button's size
  rel?: string;
  
  // Called when the user clicks the button
  onClick?: (event: React.MouseEvent) => void;
  
  // Called when the user presses a key while the button is focused
  onKeyDown?: (event: React.KeyboardEvent) => void;
  
  // Called when the user presses a key and releases it while the button is focused
  onKeyUp?: (event: React.KeyboardEvent) => void;
  
  // Called when the button receives focus
  onFocus?: (event: React.FocusEvent) => void;
  
  // Called when the button loses focus
  onBlur?: (event: React.FocusEvent) => void;
}
```

## Component Examples

The Cloudscape MCP Server will provide examples for each component, including:

- Basic usage
- With different props
- With children
- With event handlers
- In different contexts
- With different themes
- Responsive examples
- Accessibility examples

### Example: Basic Button Usage

```tsx
import Button from "@cloudscape-design/components/button";

function MyComponent() {
  return (
    <Button
      variant="primary"
      onClick={() => console.error("Button clicked")}
    >
      Submit
    </Button>
  );
}
```

## Common Patterns

The Cloudscape MCP Server will provide code generation capabilities for common Cloudscape patterns, including:

### 1. Data Tables

```tsx
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import Pagination from "@cloudscape-design/components/pagination";

function DataTable({ items }) {
  return (
    <Table
      columnDefinitions={[
        {
          id: "name",
          header: "Name",
          cell: item => item.name,
          sortingField: "name"
        },
        {
          id: "type",
          header: "Type",
          cell: item => item.type,
          sortingField: "type"
        }
      ]}
      items={items}
      pagination={
        <Pagination
          currentPageIndex={1}
          pagesCount={2}
          onNextPageClick={() => {}}
          onPreviousPageClick={() => {}}
        />
      }
      header={
        <Box>Data Table</Box>
      }
    />
  );
}
```

### 2. Form Layout

```tsx
import Form from "@cloudscape-design/components/form";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
import Button from "@cloudscape-design/components/button";
import SpaceBetween from "@cloudscape-design/components/space-between";

function FormLayout() {
  return (
    <Form
      header={<h1>Form Header</h1>}
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <Button variant="link">Cancel</Button>
          <Button variant="primary">Submit</Button>
        </SpaceBetween>
      }
    >
      <FormField label="Name" controlId="name">
        <Input value="" onChange={({ detail }) => {}} />
      </FormField>
      <FormField label="Description" controlId="description">
        <Input value="" onChange={({ detail }) => {}} />
      </FormField>
    </Form>
  );
}
```

### 3. Application Layout

```tsx
import AppLayout from "@cloudscape-design/components/app-layout";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import TopNavigation from "@cloudscape-design/components/top-navigation";

function ApplicationLayout() {
  return (
    <>
      <TopNavigation
        identity={{ href: "#", title: "Application" }}
        utilities={[
          {
            type: "button",
            text: "Settings",
            href: "#"
          }
        ]}
      />
      <AppLayout
        navigation={
          <SideNavigation
            activeHref="#/home"
            items={[
              { type: "link", text: "Home", href: "#/home" },
              { type: "link", text: "Users", href: "#/users" }
            ]}
          />
        }
        content={<div>Main Content</div>}
        tools={<div>Tools Panel</div>}
      />
    </>
  );
}
```

## Accessibility

The Cloudscape MCP Server will provide accessibility information for each component, including:

- ARIA attributes
- Keyboard navigation
- Screen reader support
- Color contrast
- Focus management

## Theming

Cloudscape components support theming through the use of design tokens. The Cloudscape MCP Server will provide information about:

- Available themes
- Theme customization
- Theme switching
- Dark mode support

## Responsive Design

Cloudscape components are designed to be responsive. The Cloudscape MCP Server will provide information about:

- Responsive behavior
- Breakpoints
- Mobile-first design
- Responsive patterns

## Best Practices

The Cloudscape MCP Server will provide best practices for using Cloudscape components, including:

- Component selection
- Component composition
- Performance optimization
- Accessibility considerations
- Responsive design
- Error handling
- Form validation
- Data loading and error states