import * as React from "react";
import FormField from "@cloudscape-design/components/form-field";
import Select from "@cloudscape-design/components/select";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <FormField
      label="Security group"
      secondaryControl={<Button iconName="refresh" />}
    >
      {" "}
      <Select
        options={[
          { label: "sg-00dcd368", id: "1" },
          { label: "sg-02dcd36a", id: "2" },
          { label: "sg-04dcd36c", id: "3" },
          { label: "sg-05fa4668", id: "4" },
          { label: "sg-064a9062", id: "5" },
        ]}
      />{" "}
    </FormField>
  );
};
