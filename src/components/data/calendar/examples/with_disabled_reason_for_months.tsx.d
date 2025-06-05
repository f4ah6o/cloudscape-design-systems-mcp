import * as React from "react";
import Calendar from "@cloudscape-design/components/calendar";
export default () => {
  const [value, setValue] = React.useState("");
  return (
    <Calendar
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      isDateEnabled={(date) => date <= new Date("2024-06")}
      dateDisabledReason={(date) =>
        date >= new Date("2024-06")
          ? "You can only select a month before July 2024."
          : ""
      }
      granularity="month"
    />
  );
};
