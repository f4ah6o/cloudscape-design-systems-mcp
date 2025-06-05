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
      items={[]}
      loadingText="Loading resources"
      empty={
        <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
          {" "}
          <SpaceBetween size="m">
            {" "}
            <b>No matches</b> <Button>Clear filter</Button>{" "}
          </SpaceBetween>{" "}
        </Box>
      }
      filter={
        <TextFilter
          filteringPlaceholder="Find resources"
          filteringText="asdfjkl"
          countText="0 matches"
        />
      }
      header={<Header>Table with no results</Header>}
      pagination={<Pagination currentPageIndex={1} pagesCount={1} />}
    />
  );
};
