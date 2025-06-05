import * as React from "react";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
export default () => {
  return (
    <Table
      renderAriaLive={({ firstIndex, lastIndex, totalItemsCount }) =>
        `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
      }
      columnDefinitions={[
        {
          id: "variable",
          header: "Variable name",
          cell: (item) => item.name || "-",
          sortingField: "name",
          isRowHeader: true,
        },
        {
          id: "type",
          header: "Text pushed right",
          cell: (item) => <Box float="right">{item.type || "-"}</Box>,
          sortingField: "type",
        },
        {
          id: "description",
          header: "Description",
          cell: (item) => item.description || "-",
        },
      ]}
      enableKeyboardNavigation
      items={[
        {
          name: "Item 1",
          alt: "First",
          description: "This is the first item",
          type: "1A",
          size: "Small",
        },
        {
          name: "Item 2",
          alt: "Second",
          description: "This is the second item",
          type: "1B",
          size: "Large",
        },
        {
          name: "Item 3",
          alt: "Third",
          description: "-",
          type: "1A",
          size: "Large",
        },
        {
          name: "Item 4",
          alt: "Fourth",
          description: "This is the fourth item",
          type: "2A",
          size: "Small",
        },
        {
          name: "Item 5",
          alt: "-",
          description: "This is the fifth item with a longer description",
          type: "2A",
          size: "Large",
        },
        {
          name: "Item 6",
          alt: "Sixth",
          description: "This is the sixth item",
          type: "1A",
          size: "Small",
        },
      ]}
      loadingText="Loading resources"
      selectedItems={[{ name: "Item 2" }]}
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
      header={<Header>Table with formatted columns</Header>}
      pagination={<Pagination currentPageIndex={1} pagesCount={1} />}
    />
  );
};
