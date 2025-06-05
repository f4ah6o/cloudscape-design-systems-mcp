import * as React from "react";
import Cards from "@cloudscape-design/components/cards";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
export default () => {
  return (
    <Cards
      ariaLabels={{
        itemSelectionLabel: (e, i) => `select ${i.name}`,
        selectionGroupLabel: "Item selection",
      }}
      cardDefinition={{
        header: (item) => (
          <Link href="#" fontSize="heading-m">
            {" "}
            {item.name}{" "}
          </Link>
        ),
        sections: [
          {
            id: "description",
            header: "Description",
            content: (item) => item.description,
          },
          { id: "type", header: "Type", content: (item) => item.type },
          { id: "size", header: "Size", content: (item) => item.size },
        ],
      }}
      cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 2 }]}
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
          description: "This is the third item",
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
          alt: "Fifth",
          description: "This is the fifth item",
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
      stickyHeader
      variant="full-page"
      empty={
        <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
          {" "}
          <SpaceBetween size="m">
            {" "}
            <b>No resources</b> <Button>Create resource</Button>{" "}
          </SpaceBetween>{" "}
        </Box>
      }
      filter={<TextFilter filteringPlaceholder="Find resources" />}
      header={
        <Header variant="awsui-h1-sticky"> Cards with dark header </Header>
      }
      pagination={<Pagination currentPageIndex={1} pagesCount={2} />}
    />
  );
};
