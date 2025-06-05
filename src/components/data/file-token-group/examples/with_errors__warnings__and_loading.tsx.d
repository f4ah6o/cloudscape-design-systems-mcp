import * as React from "react";
import FileTokenGroup from "@cloudscape-design/components/file-token-group";
export default () => {
  const [value, setValue] = React.useState("undefined");
  return (
    <FileTokenGroup
      onDismiss={({ detail }) =>
        setValue((value) =>
          value.filter((_, index) => detail.fileIndex !== index),
        )
      }
      value={value}
      i18nStrings={{
        removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
        limitShowFewer: "Show fewer files",
        limitShowMore: "Show more files",
        errorIconAriaLabel: "Error",
        warningIconAriaLabel: "Warning",
      }}
      items={[
        {
          file: new File([new Blob(["Test content"])], "file-1.pdf", {
            type: "application/pdf",
            lastModified: 1590962400000,
          }),
          errorText: "This is an error message related to this file",
        },
        {
          file: new File([new Blob(["Test content"])], "file-2.pdf", {
            type: "application/pdf",
            lastModified: 1590962400000,
          }),
          warningText: "This is a warning message related to this file",
        },
        {
          file: new File([new Blob(["Test content"])], "file-3.pdf", {
            type: "application/pdf",
            lastModified: 1590962400000,
          }),
          loading: true,
        },
      ]}
      showFileLastModified
      showFileSize
    />
  );
};
