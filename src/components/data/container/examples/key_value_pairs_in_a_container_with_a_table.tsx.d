import * as React from "react";
import Container from "@cloudscape-design/components/container";
import KeyValuePairs from "@cloudscape-design/components/key-value-pairs";
import Header from "@cloudscape-design/components/header";
import Table from "@cloudscape-design/components/table";
export default () => {
  return (
    <div>
      {" "}
      <Container
        variant="stacked"
        header={
          <Header headingTagOverride="h3" counter="(5)">
            {" "}
            Header{" "}
          </Header>
        }
      >
        {" "}
        <KeyValuePairs
          columns={4}
          items={[
            { label: "Label for key", value: "Value" },
            { label: "Label for key", value: "Value" },
            { label: "Label for key", value: "Value" },
            { label: "Label for key", value: "Value" },
          ]}
        />{" "}
      </Container>{" "}
      <Table
        variant="stacked"
        header={<Header variant="h3">Table header</Header>}
        columnDefinitions={[
          {
            id: "variable",
            header: "Variable name",
            cell: (item) => item.name,
            isRowHeader: true,
          },
          { id: "value", header: "Current value", cell: (item) => item.value },
        ]}
        items={[
          { name: "Item 1", value: "First" },
          { name: "Item 2", value: "Second" },
          { name: "Item 3", value: "Third" },
          { name: "Item 4", value: "Fourth" },
          { name: "Item 5", value: "Fifth" },
        ]}
      />{" "}
    </div>
  );
};
