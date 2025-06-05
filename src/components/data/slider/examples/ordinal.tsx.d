import * as React from "react";
import Slider from "@cloudscape-design/components/slider";
export default () => {
  const [value, setValue] = React.useState(2);
  return (
    <Slider
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      valueFormatter={(value) =>
        [
          { value: "0", label: "None" },
          { value: "1", label: "Low" },
          { value: "2", label: "Medium" },
          { value: "3", label: "High" },
        ].find((item) => item.value === value.toString())?.label || ""
      }
      ariaDescription="From None to High"
      max={3}
      min={0}
      referenceValues={[1, 2]}
      step={1}
      tickMarks
    />
  );
};
