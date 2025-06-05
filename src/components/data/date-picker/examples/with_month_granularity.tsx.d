import * as React from "react";
import DatePicker from "@cloudscape-design/components/date-picker";
import FormField from "@cloudscape-design/components/form-field";
export default () => {
  const [value, setValue] = React.useState("");
  return (
    <FormField label="Billing period" constraintText="Use YYYY/MM format.">
      {" "}
      <DatePicker
        onChange={({ detail }) => setValue(detail.value)}
        value={value}
        isDateEnabled={(date) => date <= new Date()}
        openCalendarAriaLabel={(selectedDate) =>
          "Choose billing period" +
          (selectedDate ? `, selected period is ${selectedDate}` : "")
        }
        granularity="month"
        placeholder="YYYY/MM"
      />{" "}
    </FormField>
  );
};
