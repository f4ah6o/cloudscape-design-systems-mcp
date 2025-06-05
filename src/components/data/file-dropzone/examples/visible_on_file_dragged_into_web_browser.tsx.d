import * as React from "react";
import FileDropzone, {
  useFilesDragging,
} from "@cloudscape-design/components/file-dropzone";
import SpaceBetween from "@cloudscape-design/components/space-between";
import FileTokenGroup from "@cloudscape-design/components/file-token-group";
export default () => {
  const [value, setValue] = React.useState([]);
  return (
    <SpaceBetween size="xs">
      {" "}
      <AreFilesDragging>
        {" "}
        {(areFilesDragging) =>
          areFilesDragging ? (
            <FileDropzone onChange={({ detail }) => setValue(detail.value)}>
              {" "}
              Drop files here{" "}
            </FileDropzone>
          ) : (
            "Drag files to this browser tab to see the dropzone"
          )
        }{" "}
      </AreFilesDragging>{" "}
      <FileTokenGroup
        items={value.map((file) => ({ file }))}
        onDismiss={({ detail }) =>
          setValue((value) =>
            value.filter((_, index) => index !== detail.fileIndex),
          )
        }
        i18nStrings={{
          removeFileAriaLabel: () => "Remove file",
          limitShowFewer: "Show fewer files",
          limitShowMore: "Show more files",
          errorIconAriaLabel: "Error",
          warningIconAriaLabel: "Warning",
        }}
      />{" "}
    </SpaceBetween>
  );
};
