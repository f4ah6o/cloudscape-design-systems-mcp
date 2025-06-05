import * as React from "react";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Link from "@cloudscape-design/components/link";
import Header from "@cloudscape-design/components/header";
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
          isRowHeader: true,
        },
        {
          id: "value",
          header: "Text value",
          cell: (e) => e.alt,
          isRowHeader: undefined,
        },
        {
          id: "type",
          header: "Type",
          cell: (e) => e.type,
          isRowHeader: undefined,
        },
        {
          id: "description",
          header: "Description",
          cell: (e) => e.description,
          isRowHeader: undefined,
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
      empty={
        <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
          {" "}
          <SpaceBetween size="m">
            {" "}
            <b>No resources</b> <Button>Create resource</Button>{" "}
          </SpaceBetween>{" "}
        </Box>
      }
      footer={
        <Box textAlign="center">
          {" "}
          <Link href="#">View all</Link>{" "}
        </Box>
      }
      header={<Header counter="(100)">Table with footer</Header>}
    />
  );
};
