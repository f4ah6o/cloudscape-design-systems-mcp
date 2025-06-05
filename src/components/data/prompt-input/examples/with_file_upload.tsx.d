import * as React from "react";
import FileDropzone, {
  useFilesDragging,
} from "@cloudscape-design/components/file-dropzone";
import PromptInput from "@cloudscape-design/components/prompt-input";
import Box from "@cloudscape-design/components/box";
import FileInput from "@cloudscape-design/components/file-input";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Icon from "@cloudscape-design/components/icon";
import FileTokenGroup from "@cloudscape-design/components/file-token-group";
export default () => {
  const [value, setValue] = React.useState("");
  const [files, setFiles] = React.useState([
    new File([new Blob(["Test content"])], "file-1.pdf", {
      type: "application/pdf",
      lastModified: 1590962400000,
    }),
    new File([new Blob(["Test content"])], "file-2.pdf", {
      type: "application/pdf",
      lastModified: 1590962400000,
    }),
    new File([new Blob(["Test content"])], "file-3.pdf", {
      type: "application/pdf",
      lastModified: 1590962400000,
    }),
  ]);
  return (
    <AreFilesDragging>
      {" "}
      {(areFilesDragging) => (
        <PromptInput
          onChange={({ detail }) => setValue(detail.value)}
          value={value}
          actionButtonAriaLabel="Send message"
          actionButtonIconName="send"
          disableSecondaryActionsPaddings
          placeholder="Ask a question"
          secondaryActions={
            <Box padding={{ left: "xxs", top: "xs" }}>
              {" "}
              <FileInput
                variant="icon"
                multiple={true}
                value={files}
                onChange={({ detail }) => setFiles(detail.value)}
              />{" "}
            </Box>
          }
          secondaryContent={
            areFilesDragging ? (
              <FileDropzone
                onChange={({ detail }) =>
                  setFiles((prev) => [...prev, ...detail.value])
                }
              >
                {" "}
                <SpaceBetween size="xs" alignItems="center">
                  {" "}
                  <Icon name="upload" /> <Box>Drop files here</Box>{" "}
                </SpaceBetween>{" "}
              </FileDropzone>
            ) : (
              files.length > 0 && (
                <FileTokenGroup
                  items={files.map((file) => ({ file }))}
                  onDismiss={({ detail }) =>
                    setFiles((files) =>
                      files.filter((_, index) => index !== detail.fileIndex),
                    )
                  }
                  alignment="horizontal"
                  showFileSize={true}
                  showFileLastModified={true}
                  showFileThumbnail={true}
                  i18nStrings={{
                    removeFileAriaLabel: () => "Remove file",
                    limitShowFewer: "Show fewer files",
                    limitShowMore: "Show more files",
                    errorIconAriaLabel: "Error",
                    warningIconAriaLabel: "Warning",
                  }}
                />
              )
            )
          }
        />
      )}{" "}
    </AreFilesDragging>
  );
};
