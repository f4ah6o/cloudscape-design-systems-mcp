import * as React from "react";
import FormField from "@cloudscape-design/components/form-field";
import Textarea from "@cloudscape-design/components/textarea";
export default () => {
  return (
    <FormField
      description="This is a description."
      label={
        <span>
          {" "}
          Form field label <i>- optional</i>{" "}
        </span>
      }
    >
      {" "}
      <Textarea />{" "}
    </FormField>
  );
};
