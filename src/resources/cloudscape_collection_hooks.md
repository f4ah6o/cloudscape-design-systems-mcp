# Cloudscape Collection Hooks Package

The Cloudscape collection hooks package provides utilities to handle data operations in collection components like tables and cards.

## Overview

Cloudscape provides [table](https://cloudscape.design/components/table/) and [cards](https://cloudscape.design/components/cards/) components to display collections of resources. These components display static datasets. Operations on these datasets (such as filtering, sorting, and pagination) should happen outside of these components.

### Client-side Collections

The `@cloudscape-design/collection-hooks` package provides utilities to handle filtering, sorting, or pagination operations when the full dataset describing the collection can be fetched on the client side, without requiring further asynchronous calls. This use case is called _client-side collection_.

### Server-side Collections

If your dataset has to be fetched asynchronously upon filtering, sorting, and pagination operations, don't use the `@cloudscape-design/collection-hooks` package. Instead, implement the fetching, filtering, selection, pagination, and sorting yourself. This use case is called _server-side collection_.

## Installation

This package is published to NPM as [@cloudscape-design/collection-hooks](https://www.npmjs.com/package/@cloudscape-design/collection-hooks).

```bash
npm install @cloudscape-design/collection-hooks
```

## Using with React

This package exports the `useCollection` [React hook](https://reactjs.org/docs/hooks-intro.html). It takes the original collection items and a configuration, and returns filtered, sorted, and paginated content, according to your configuration.

### Basic Example

```jsx
import { useCollection } from '@cloudscape-design/collection-hooks';
import { Table, TextFilter, Pagination, Button } from '@cloudscape-design/components';

const allItems = [
  { id: 'O4DMYB22MWEYROBVNSRAN', zone: 'us-east-1c', state: 'Healthy' },
  { id: 'S4JE6P56MI4XBCMD63GQP', zone: 'us-east-1a', state: 'Healthy' },
  { id: 'LF2QRGQR73UA8I4HOJXGP', zone: 'us-east-1b', state: 'Unhealthy' },
  // ... more items
];

function MyTable() {
  const { items, collectionProps, filterProps, paginationProps, actions } = useCollection(allItems, {
    filtering: {
      empty: <EmptyState title="No instances" action={<Button>Create instance</Button>} />,
      noMatch: <EmptyState title="No matches" action={<Button onClick={() => actions.setFiltering('')}>Clear filter</Button>} />,
    },
    sorting: {},
    pagination: { pageSize: 10 },
  });

  return (
    <Table
      {...collectionProps}
      items={items}
      columnDefinitions={[
        { id: 'id', header: 'ID', cell: item => item.id },
        { id: 'zone', header: 'Availability zone', cell: item => item.zone, sortingField: 'zone' },
        { id: 'state', header: 'State', cell: item => item.state, sortingField: 'state' },
      ]}
      filter={<TextFilter {...filterProps} filteringPlaceholder="Search instances" />}
      pagination={<Pagination {...paginationProps} />}
    />
  );
}
```

## Advanced Usage

### Sorting and Filtering on Nested Properties

If you want to use sorting, filtering, or property filtering on items that include nested properties, transform the items to bring the nested properties to the top:

```jsx
allItems = allItems.map(item => ({ 
  ...item, 
  firstName: item.name.first, 
  lastName: item.name.last 
}));

const { items, collectionProps, filterProps, actions } = useCollection(allItems, {
  filtering: {
    empty: <EmptyState title="No instances" action={<Button>Create instance</Button>} />,
    noMatch: <EmptyState title="No matches" action={<Button onClick={() => actions.setFiltering('')}>Clear filter</Button>} />,
  },
  sorting: {},
});
```

### Using Expandable Rows

If you want a table to use hierarchical data presentation with expandable rows:

```jsx
const allItems = [
  { id: '1', type: 'group', name: 'Devices', parentId: null },
  { id: '1.1', type: 'device', name: 'Smartphone', parentId: '1' },
  { id: '1.2', type: 'device', name: 'Laptop', parentId: '1' },
  { id: '2', type: 'group', name: 'Auxiliary', parentId: null }
];

const { items: rootItems, collectionProps } = useCollection(allItems, {
  expandableRows: {
    getId: (item) => item.id,
    getParentId: (item) => item.parentId,
  }
});

return (
  <Table 
    items={rootItems} 
    columnDefinitions={columnDefinitions} 
    {...collectionProps} 
  />
);
```

### Using Multi-select Tokens

To use multi-select tokens, pass `tokenType="enum"` to the desired properties and operators:

```jsx
const { items, propertyFilterProps } = useCollection(allItems, {
  propertyFiltering: {
    filteringProperties: [
      {
        key: 'state',
        operators: [
          { operator: '=', tokenType: "enum" },
          { operator: '!=', tokenType: "enum" },
          ':',
          '!:',
        ],
        // ...
      }
    ]
  }
});
```

### Using Custom Operator Matchers

Override the default filtering logic with custom match functions:

```jsx
const { items, propertyFilterProps } = useCollection(allItems, {
  propertyFiltering: {
    filteringProperties: [
      // Custom matcher for comma-separated list
      {
        key: 'status',
        operators: [
          { operator: '=', match: (itemValue, tokenValue) => tokenValue.split(',').includes(itemValue) },
          { operator: '!=', match: (itemValue, tokenValue) => !tokenValue.split(',').includes(itemValue) },
        ],
      },
      // Predefined date matcher
      {
        key: 'launchDate',
        operators: [
          { operator: '=', match: 'date' },
          { operator: '!=', match: 'date' },
          { operator: '<', match: 'date' },
          { operator: '<=', match: 'date' },
          { operator: '>', match: 'date' },
          { operator: '>=', match: 'date' },
        ],
      },
      // Predefined datetime matcher
      {
        key: 'lastEventAt',
        operators: [
          { operator: '=', match: 'datetime' },
          { operator: '!=', match: 'datetime' },
          { operator: '<', match: 'datetime' },
          { operator: '<=', match: 'datetime' },
        ],
      },
    ]
  }
});
```

### Intercepting Event Listeners

To define custom behavior upon user actions, ensure you always call the method created by the collection hook:

```jsx
const { paginationProps } = useCollection(/* ... */);

return (
  <Table
    pagination={
      <Pagination
        {...paginationProps}
        onChange={event => {
          myCustomFunction(event);
          paginationProps.onChange(event);
        }}
      />
    }
  />
);
```

## API Reference

### useCollection Hook

```typescript
useCollection<T>(allItems: Array<T>, configuration: Configuration): Result
```

### Configuration Object

| Name | Type | Description |
|------|------|-------------|
| `filtering` | `Object` | Filtering configuration. If you want to activate filtering with default settings, provide an empty object. |
| `filtering.filteringFunction` | `(item: T, text: string, fields?: string[]) => boolean` | Custom function to filter items. The default value is a function that loops through all items keys (unless `fields` property is provided), converts all values to strings, and matches them against current `filteringText`. |
| `filtering.fields` | `string[]` | Array of keys within the item object whose values are taken into account by the default filteringFunction. |
| `filtering.defaultFilteringText` | `string` | Initial filtering value on the first render. |
| `filtering.empty` | `React.ReactNode` | Content to display in the table/cards empty slot when there are no items initially provided. |
| `filtering.noMatch` | `React.ReactNode` | Content to display in the table/cards empty slot when filtering returns no matched items. |
| `propertyFiltering` | `Object` | Configuration for property filtering. |
| `propertyFiltering.filteringProperties` | `readonly PropertyFilterProperty[]` | Array of properties by which the data set is going to be filtered. |
| `propertyFiltering.filteringFunction` | `(item: T, query: PropertyFilterQuery) => boolean` | Custom function to filter items. |
| `propertyFiltering.defaultQuery` | `PropertyFilterQuery` | Initial query on the first render. |
| `propertyFiltering.empty` | `React.ReactNode` | Content to display when there are no items initially provided. |
| `propertyFiltering.noMatch` | `React.ReactNode` | Content to display when filtering returns no matched items. |
| `sorting` | `Object` | Sorting configuration. If you want to use sorting with default settings, provide an empty object. This feature is only applicable for the table component. |
| `sorting.defaultState` | `Object` | Initial sorting state on the first render with `sortingColumn` and `isDescending` properties. |
| `pagination` | `Object` | Pagination configuration. If you want to paginate items using default settings, provide an empty object. |
| `pagination.pageSize` | `number` | Value of the desired page size. |
| `pagination.defaultPage` | `number` | Page number for the initial render. |
| `pagination.allowPageOutOfRange` | `boolean` | Set to true to disable the logic that by default clamps the current page number to the number of available pages of items. |
| `selection` | `Object` | Selection configuration. If you want to use the selection feature with default settings, provide an empty object. |
| `selection.defaultSelectedItems` | `ReadonlyArray<T>` | Items selected on the initial render. |
| `selection.keepSelection` | `boolean` | If set to `true`, selected items will be kept across pagination, sorting, filtering and page size changes. |
| `selection.trackBy` | `string \| ((item: T) => string)` | Property of an item that uniquely identifies it. |
| `expandableRows` | `Object` | Expandable rows configuration. |
| `expandableRows.getId` | `(item: T) => string` | Property of an item that uniquely identifies it. |
| `expandableRows.getParentId` | `(item: T) => null \| string` | Property of an item that identifies its parent by ID. For root items the function must return `null`. |
| `expandableRows.defaultExpandedItems` | `ReadonlyArray<T>` | Items expanded on the initial render. |

### Result Object

| Name | Type | Description |
|------|------|-------------|
| `items` | `ReadOnlyArray<T>` | Table items on the current page with filtering, sorting, and pagination applied. |
| `allPageItems` | `ReadOnlyArray<T>` | Table items across all pages with filtering and sorting applied. |
| `filteredItemsCount` | `number` | Total numbers of items matching the current filter, ignoring the pagination. |
| `firstIndex` | `number` | The 1-based index of the first item returned in the `items` array. |
| `totalItemsCount` | `number` | The total count of all items in a table. |
| `actions` | `Object` | An object with functions to perform different actions. |
| `actions.setFiltering` | `(filteringText: string): void` | Sets new filtering text. |
| `actions.setPropertyFiltering` | `(query: Query): void` | Sets new filtering query. |
| `actions.setSorting` | `(state: SortingState): void` | Sets new sorting state. |
| `actions.setCurrentPage` | `(currentPageIndex: number): void` | Sets current page in pagination. |
| `actions.setSelectedItems` | `(selectedItems: ReadonlyArray<T>): void` | Sets the list of currently selected items. |
| `actions.setExpandedItems` | `(expandedItems: ReadonlyArray<T>): void` | Sets the list of currently expanded items. |
| `collectionProps` | `Object` | Props object to spread on the table/cards component. |
| `filterProps` | `Object` | Props object to spread on the TextFilter component. |
| `propertyFilterProps` | `Object` | Props object to spread on the PropertyFilter component. |
| `paginationProps` | `Object` | Props object to spread on the Pagination component. |

### PropertyFilterProperty Interface

```typescript
interface PropertyFilterProperty {
  key: string;
  groupValuesLabel?: string;
  propertyLabel: string;
  operators?: ReadonlyArray<PropertyFilterOperator | PropertyFilterOperatorExtended>;
  group?: string;
}
```

### PropertyFilterOperatorExtended Interface

```typescript
interface PropertyFilterOperatorExtended {
  operator: string;
  tokenType?: 'enum';
  match?: string | ((itemValue: any, tokenValue: any) => boolean);
}
```

## Best Practices

1. **Use client-side collections** when you can fetch the entire dataset upfront
2. **Transform nested properties** to top-level properties for filtering and sorting
3. **Always call the original event handlers** when intercepting events
4. **Use trackBy consistently** across selection and expandable rows configurations
5. **Provide meaningful empty and noMatch states** for better user experience
6. **Consider performance** when working with large datasets - the hooks work best with datasets that can be efficiently processed on the client

## Related Components

- [Table Component](https://cloudscape.design/components/table/)
- [Cards Component](https://cloudscape.design/components/cards/)
- [TextFilter Component](https://cloudscape.design/components/text-filter/)
- [PropertyFilter Component](https://cloudscape.design/components/property-filter/)
- [Pagination Component](https://cloudscape.design/components/pagination/)
