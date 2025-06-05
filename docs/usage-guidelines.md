# Usage Guidelines Feature

The MCP Cloudscape Assistant provides comprehensive access to component usage guidelines through a hybrid approach that combines both MCP resources and tools for maximum flexibility and convenience.

## Overview

The usage guidelines feature offers two complementary access methods:

1. **Direct Resource Access**: Fast, direct access to complete usage guidelines
2. **Advanced Tool Access**: Sophisticated search and filtering capabilities

## MCP Resources

### cloudscape://usage/{componentId}

Direct access to component usage guidelines in markdown format.

**Examples:**
- `cloudscape://usage/button` - Button component usage guidelines
- `cloudscape://usage/table` - Table component usage guidelines
- `cloudscape://usage/form` - Form component usage guidelines

**Usage:**
```xml
<access_mcp_resource>
<server_name>cloudscape</server_name>
<uri>cloudscape://usage/button</uri>
</access_mcp_resource>
```

**Benefits:**
- Immediate access to complete usage guidelines
- Full markdown formatting preserved
- Suitable for documentation viewing and reference
- Minimal latency for content retrieval

## MCP Tools

### get_component_usage

Get usage guidelines for a specific component with optional section filtering.

**Parameters:**
- `componentId` (required): The ID of the component
- `section` (optional): Specific section to extract (e.g., "Features", "General guidelines")
- `format` (optional): Output format - "markdown" (default), "text", or "json"

**Examples:**
```json
{
  "componentId": "button"
}
```

```json
{
  "componentId": "button",
  "section": "Features",
  "format": "json"
}
```

**Benefits:**
- Section-specific content extraction
- Multiple output formats
- Structured data access for programmatic use

### search_usage_guidelines

Search across component usage guidelines with advanced filtering capabilities.

**Parameters:**
- `query` (optional): Text to search for in content
- `section` (optional): Specific section to search within
- `componentId` (optional): Limit search to specific component
- `limit` (optional): Maximum number of results to return

**Search Logic:**
- Multiple parameters use AND logic (all conditions must be met)
- Text search is case-insensitive
- Section search uses pattern matching for headers

**Examples:**

Search for accessibility content:
```json
{
  "query": "accessibility",
  "limit": 5
}
```

Find components with Features section:
```json
{
  "section": "Features"
}
```

Search for button-related content in Features sections:
```json
{
  "query": "button",
  "section": "Features"
}
```

Search within a specific component:
```json
{
  "componentId": "table",
  "query": "sorting"
}
```

**Benefits:**
- Cross-component content discovery
- Section-specific filtering
- Flexible query combinations
- Metadata about matched sections

## Usage Guidelines Structure

Component usage guidelines typically include the following sections:

### Standard Sections

1. **General guidelines**
   - High-level usage principles
   - Do's and Don'ts
   - Best practices

2. **Features**
   - Component capabilities
   - Available variants and options
   - Configuration details

3. **Writing guidelines**
   - Content and copy guidance
   - Tone and voice recommendations

4. **Code examples**
   - Implementation patterns
   - Common use cases

### Section Hierarchy

Usage guidelines use markdown heading hierarchy:
- `## Section Name` - Main sections
- `### Subsection Name` - Subsections
- `#### Detail Name` - Detailed items

## Common Use Cases

### 1. Component Research

When exploring components for a specific use case:

```json
{
  "query": "data visualization",
  "section": "Features"
}
```

### 2. Best Practices Discovery

Finding accessibility or usability guidance:

```json
{
  "query": "accessibility",
  "section": "General guidelines"
}
```

### 3. Feature Exploration

Understanding component capabilities:

```json
{
  "componentId": "table",
  "section": "Features"
}
```

### 4. Cross-Component Comparison

Comparing similar components:

```json
{
  "query": "selection",
  "section": "Features"
}
```

### 5. Implementation Guidance

Getting specific implementation details:

```json
{
  "componentId": "form",
  "query": "validation"
}
```

## Integration Examples

### With Roo Frontend-Code Mode

```xml
<use_mcp_tool>
<server_name>cloudscape</server_name>
<tool_name>search_usage_guidelines</tool_name>
<arguments>
{
  "query": "responsive design",
  "section": "General guidelines"
}
</arguments>
</use_mcp_tool>
```

### Direct Resource Access

```xml
<access_mcp_resource>
<server_name>cloudscape</server_name>
<uri>cloudscape://usage/app-layout</uri>
</access_mcp_resource>
```

### Programmatic Integration

```javascript
// Using the MCP client
const usageGuidelines = await mcpClient.callTool('search_usage_guidelines', {
  query: 'form validation',
  section: 'Features',
  limit: 3
});

const fullUsage = await mcpClient.getResource('cloudscape://usage/form');
```

## Best Practices

### For Direct Access
- Use resources for complete documentation viewing
- Ideal for comprehensive component research
- Best for static documentation display

### For Search and Filtering
- Use tools for content discovery
- Ideal for finding specific information across components
- Best for dynamic, filtered content access

### Performance Considerations
- Resources provide fastest access to complete content
- Tools offer more flexibility but with slight processing overhead
- Use appropriate access method based on use case

## Error Handling

### Common Error Scenarios

1. **Component Not Found**
   - Resource: Returns 404-style error
   - Tool: Returns null or empty result

2. **Section Not Found**
   - Tool returns error with specific section name
   - Check available sections using full component access

3. **No Search Results**
   - Tool returns empty array
   - Indicates no components match the search criteria

### Troubleshooting

1. **Verify component IDs** using `search_components`
2. **Check section names** using full usage guidelines access
3. **Test search queries** with broader terms first
4. **Use case-insensitive search** terms

## Future Enhancements

Planned improvements to the usage guidelines feature:

1. **Enhanced Search**
   - Fuzzy matching
   - Semantic search capabilities
   - Search result ranking

2. **Additional Formats**
   - HTML output
   - PDF generation
   - Interactive previews

3. **Content Linking**
   - Cross-references between components
   - Related component suggestions
   - Pattern-to-component mapping

4. **Versioning Support**
   - Historical usage guidelines
   - Change tracking
   - Version-specific guidance