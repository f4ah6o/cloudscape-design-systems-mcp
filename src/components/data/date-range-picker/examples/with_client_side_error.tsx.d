import * as React from "react";
import DateRangePicker from "@cloudscape-design/components/date-range-picker";
export default () => {
  const [value, setValue] = React.useState(undefined);
  return (
    <DateRangePicker
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      relativeOptions={[
        {
          key: "previous-5-minutes",
          amount: 5,
          unit: "minute",
          type: "relative",
        },
        {
          key: "previous-30-minutes",
          amount: 30,
          unit: "minute",
          type: "relative",
        },
        { key: "previous-1-hour", amount: 1, unit: "hour", type: "relative" },
        { key: "previous-6-hours", amount: 6, unit: "hour", type: "relative" },
      ]}
      isValidRange={(range) => {
        const differenceInDays = (dateOne, dateTwo) => {
          const milliseconds = Math.abs(new Date(dateTwo) - new Date(dateOne));
          const days = Math.ceil(milliseconds / (1000 * 60 * 60 * 24));
          return days;
        };
        if (range === null) {
          return {
            valid: false,
            errorMessage:
              "The selected date range is incomplete. Select a start and end date for the date range.",
          };
        }
        if (range.type === "absolute") {
          const [startDateWithoutTime] = range.startDate.split("T");
          const [endDateWithoutTime] = range.endDate.split("T");
          if (!startDateWithoutTime || !endDateWithoutTime) {
            return {
              valid: false,
              errorMessage:
                "The selected date range is incomplete. Select a start and end date for the date range.",
            };
          }
          if (new Date(range.startDate) - new Date(range.endDate) > 0) {
            return {
              valid: false,
              errorMessage:
                "The selected date range is invalid. The start date must be before the end date.",
            };
          }
          if (differenceInDays(range.startDate, range.endDate) >= 30) {
            return {
              valid: false,
              errorMessage:
                "The selected date range is too large. Select a range less than 30 days.",
            };
          }
          if (differenceInDays(range.startDate, range.endDate) < 6) {
            return {
              valid: false,
              errorMessage:
                "The selected date range is too small. Select a range larger than 6 days.",
            };
          }
        }
        if (range.type === "relative") {
          if (isNaN(range.amount)) {
            return {
              valid: false,
              errorMessage:
                "The selected date range is incomplete. Specify a duration for the date range.",
            };
          }
          if (
            (range.unit === "second" && range.amount < 60 * 60 * 24 * 6) ||
            (range.unit === "minute" && range.amount < 60 * 24 * 6) ||
            (range.unit === "hour" && range.amount < 24 * 6) ||
            (range.unit === "day" && range.amount < 6) ||
            range.amount === 0
          ) {
            return {
              valid: false,
              errorMessage:
                "The selected date range is too small. Select a range larger than 6 days.",
            };
          }
          if (
            (range.unit === "second" && range.amount >= 60 * 60 * 24 * 30) ||
            (range.unit === "minute" && range.amount >= 60 * 24 * 30) ||
            (range.unit === "hour" && range.amount >= 24 * 30) ||
            (range.unit === "day" && range.amount >= 30) ||
            (range.unit === "week" && range.amount >= 4) ||
            (range.unit === "month" && range.amount >= 1) ||
            range.unit === "year"
          ) {
            return {
              valid: false,
              errorMessage:
                "The selected date range is too large. Select a range less than 30 days.",
            };
          }
        }
        return { valid: true };
      }}
      i18nStrings={{}}
      placeholder="Filter by a date and time range"
    />
  );
};
