import * as React from "react";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
export default () => {
  const [expandedItems, setExpandedItems] = React.useState();
  return (
    <Table
      renderAriaLive={({ firstIndex, lastIndex, totalItemsCount }) =>
        `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
      }
      renderLoaderPending={() => (
        <Button variant="inline-link" iconName="add-plus">
          {" "}
          Show more{" "}
        </Button>
      )}
      renderLoaderLoading={() => (
        <StatusIndicator type="loading"> Loading items </StatusIndicator>
      )}
      renderLoaderError={() => (
        <StatusIndicator type="error"> Loading error </StatusIndicator>
      )}
      renderLoaderEmpty={() => <Box>No resources found</Box>}
      expandableRows={{
        getItemChildren: (item) => item.children,
        isItemExpandable: (item) => Boolean(item.children),
        expandedItems: expandedItems,
        onExpandableItemToggle: ({ detail }) =>
          setExpandedItems((prev) => {
            const next = new Set((prev ?? []).map((item) => item.name));
            detail.expanded
              ? next.add(detail.item.name)
              : next.delete(detail.item.name);
            return [...next].map((name) => ({ name }));
          }),
      }}
      columnDefinitions={[
        {
          id: "variable",
          header: "Variable name",
          cell: (e) => e.name,
          sortingField: "name",
          isRowHeader: true,
        },
        {
          id: "value",
          header: "Text value",
          cell: (e) => e.alt,
          sortingField: "alt",
        },
        { id: "type", header: "Type", cell: (e) => e.type },
        {
          id: "description",
          header: "Description",
          cell: (e) => e.description,
        },
      ]}
      enableKeyboardNavigation
      getLoadingStatus={(item) =>
        !item
          ? "pending"
          : item.name === "Item 5"
            ? "loading"
            : item.name === "Item 6"
              ? "error"
              : "finished"
      }
      items={[
        {
          name: "Item 1",
          alt: "First",
          description: "This is the first item",
          type: "1A",
          size: "Small",
          children: [
            {
              name: "Item 1A",
              alt: "First A",
              description: "This is the first child of Item 1",
              type: "1A",
              size: "Small",
            },
            {
              name: "Item 1B",
              alt: "First B",
              description: "This is the second child of Item 1",
              type: "1A",
              size: "Small",
            },
          ],
        },
        {
          name: "Item 2",
          alt: "Second",
          description: "This is the second item",
          type: "1B",
          size: "Large",
          children: [
            {
              name: "Item 2A",
              alt: "Second A",
              description: "This is the first child of Item 2",
              type: "1B",
              size: "Large",
            },
            {
              name: "Item 2B",
              alt: "Second B",
              description: "This is the second child of Item 2",
              type: "1B",
              size: "Large",
            },
          ],
        },
        {
          name: "Item 3",
          alt: "Third",
          description: "-",
          type: "1A",
          size: "Large",
          children: [
            {
              name: "Item 3A",
              alt: "Third A",
              description: "This is the first child of Item 3",
              type: "1A",
              size: "Large",
            },
            {
              name: "Item 3B",
              alt: "Third B",
              description: "This is the second child of Item 3",
              type: "1A",
              size: "Large",
            },
          ],
        },
        {
          name: "Item 4",
          alt: "Fourth",
          description: "This is the fourth item",
          type: "2A",
          size: "Small",
          children: [
            {
              name: "Item 4A",
              alt: "Fourth A",
              description: "This is the first child of Item 4",
              type: "2A",
              size: "Small",
            },
            {
              name: "Item 4B",
              alt: "Fourth B",
              description: "This is the second child of Item 4",
              type: "2A",
              size: "Small",
            },
          ],
        },
        {
          name: "Item 5",
          alt: "-",
          description: "This is the fifth item with a longer description",
          type: "2A",
          size: "Large",
          children: [
            {
              name: "Item 5A",
              alt: "- A",
              description: "This is the first child of Item 5",
              type: "2A",
              size: "Large",
            },
            {
              name: "Item 5B",
              alt: "- B",
              description: "This is the second child of Item 5",
              type: "2A",
              size: "Large",
            },
          ],
        },
        {
          name: "Item 6",
          alt: "Sixth",
          description: "This is the sixth item",
          type: "1A",
          size: "Small",
          children: [
            {
              name: "Item 6A",
              alt: "Sixth A",
              description: "This is the first child of Item 6",
              type: "1A",
              size: "Small",
            },
            {
              name: "Item 6B",
              alt: "Sixth B",
              description: "This is the second child of Item 6",
              type: "1A",
              size: "Small",
            },
          ],
        },
      ]}
      loadingText="Loading resources"
      trackBy="name"
      empty={
        <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
          {" "}
          <SpaceBetween size="m">
            {" "}
            <b>No resources</b> <Button>Create resource</Button>{" "}
          </SpaceBetween>{" "}
        </Box>
      }
      filter={
        <TextFilter
          filteringPlaceholder="Find resources"
          filteringText=""
          countText="0 matches"
        />
      }
      header={<Header>Table with expandable rows</Header>}
    />
  );
};
