import * as React from "react";
import FormField from "@cloudscape-design/components/form-field";
import RadioGroup from "@cloudscape-design/components/radio-group";
export default () => {
  return (
    <FormField label="Form field label">
      {" "}
      <RadioGroup
        items={[
          {
            value: "first",
            label:
              "Set the stretch property to true when using radio buttons or checkboxes in a form-field: their label must stretch to 100% of the field width.",
          },
          {
            value: "second",
            label: "The same applies to any textual information",
          },
          { value: "third", label: "Third Choice" },
        ]}
      />{" "}
    </FormField>
  );
};
