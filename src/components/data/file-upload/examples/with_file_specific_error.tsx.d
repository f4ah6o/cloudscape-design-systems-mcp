import * as React from "react";
import FileUpload from "@cloudscape-design/components/file-upload";
import FormField from "@cloudscape-design/components/form-field";
export default () => {
  const [value, setValue] = React.useState([
    new File([new Blob(["Test content"])], "file-1.pdf", {
      type: "application/pdf",
      lastModified: 1590962400000,
    }),
  ]);
  return (
    <FormField label="Form field label" description="Description">
      {" "}
      <FileUpload
        onChange={({ detail }) => setValue(detail.value)}
        value={value}
        fileErrors={["This is an error message related to this file"]}
        i18nStrings={{
          uploadButtonText: (e) => (e ? "Choose files" : "Choose file"),
          dropzoneText: (e) =>
            e ? "Drop files to upload" : "Drop file to upload",
          removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
          limitShowFewer: "Show fewer files",
          limitShowMore: "Show more files",
          errorIconAriaLabel: "Error",
          warningIconAriaLabel: "Warning",
        }}
        multiple
        showFileLastModified
        showFileSize
        showFileThumbnail
        tokenLimit={3}
        constraintText="Hint text for file requirements"
      />{" "}
    </FormField>
  );
};
