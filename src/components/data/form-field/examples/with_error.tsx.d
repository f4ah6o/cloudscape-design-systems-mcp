import * as React from "react";
import FormField from "@cloudscape-design/components/form-field";
import Input from "@cloudscape-design/components/input";
export default () => {
  return (
    <FormField
      constraintText="Requirements and constraints for the field."
      description="This is a description."
      errorText="This is an error message."
      label="Form field label"
    >
      {" "}
      <Input />{" "}
    </FormField>
  );
};
