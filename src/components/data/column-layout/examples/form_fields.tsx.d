import * as React from "react";
import ColumnLayout from "@cloudscape-design/components/column-layout";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
export default () => {
  return (
    <ColumnLayout columns={2}>
      {" "}
      <FormField
        label="Form label"
        description="This is a description"
        stretch={true}
      >
        {" "}
        <Input></Input>{" "}
      </FormField>{" "}
      <FormField
        label="Form label"
        description="This is a description"
        errorText="This is an error message"
        stretch={true}
      >
        {" "}
        <Input></Input>{" "}
      </FormField>{" "}
    </ColumnLayout>
  );
};
