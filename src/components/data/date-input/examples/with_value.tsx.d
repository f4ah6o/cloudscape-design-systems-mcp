import * as React from "react";
import DateInput from "@cloudscape-design/components/date-input";
import FormField from "@cloudscape-design/components/form-field";
export default () => {
  const [value, setValue] = React.useState("2020-01-01");
  return (
    <FormField
      label="Certificate expiry"
      constraintText="Use YYYY/MM/DD format."
    >
      {" "}
      <DateInput
        onChange={({ detail }) => setValue(detail.value)}
        value={value}
      />{" "}
    </FormField>
  );
};
