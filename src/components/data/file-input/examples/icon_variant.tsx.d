import * as React from "react";
import FileInput from "@cloudscape-design/components/file-input";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Table from "@cloudscape-design/components/table";
export default () => {
  const [value, setValue] = React.useState([]);
  return (
    <SpaceBetween size="s">
      {" "}
      <FileInput
        onChange={({ detail }) => setValue(detail.value)}
        value={value}
        variant="icon"
      />{" "}
      <Table
        columnDefinitions={[
          { id: "name", header: "File name", cell: (file) => file.name },
          {
            id: "size",
            header: "File size",
            cell: (file) => file.size / 1000 + "KB",
          },
        ]}
        items={value}
        empty="No files"
      />{" "}
    </SpaceBetween>
  );
};
