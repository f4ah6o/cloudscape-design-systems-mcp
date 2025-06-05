import * as React from "react";
import FileDropzone from "@cloudscape-design/components/file-dropzone";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Box from "@cloudscape-design/components/box";
import FileInput from "@cloudscape-design/components/file-input";
import FileTokenGroup from "@cloudscape-design/components/file-token-group";
export default () => {
  const [value, setValue] = React.useState([]);
  return (
    <SpaceBetween size="l">
      {" "}
      <FileDropzone onChange={({ detail }) => setValue(detail.value)}>
        {" "}
        <SpaceBetween size="xxs" alignItems="center">
          {" "}
          <Box color="inherit"> Drop files here or select from below </Box>{" "}
          <FileInput
            value={value}
            onChange={({ detail }) => setValue(detail.value)}
          >
            {" "}
            Choose files{" "}
          </FileInput>{" "}
        </SpaceBetween>{" "}
      </FileDropzone>{" "}
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
