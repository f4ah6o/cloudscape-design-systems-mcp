import * as React from "react";
import ButtonGroup from "@cloudscape-design/components/button-group";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Table from "@cloudscape-design/components/table";
export default () => {
  const [files, setFiles] = React.useState([]);
  return (
    <SpaceBetween size="s">
      {" "}
      <ButtonGroup
        onFilesChange={({ detail }) =>
          setFiles((prev) => [...prev, ...detail.files])
        }
        ariaLabel="Chat actions"
        items={[
          {
            type: "icon-file-input",
            id: "file-input",
            text: "Upload files",
            multiple: true,
          },
          { type: "icon-button", id: "add", iconName: "add-plus", text: "Add" },
          {
            type: "icon-button",
            id: "remove",
            iconName: "remove",
            text: "Remove",
          },
        ]}
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
        items={files}
        empty="No files"
      />{" "}
    </SpaceBetween>
  );
};
