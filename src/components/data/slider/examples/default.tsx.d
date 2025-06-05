import * as React from "react";
import Slider from "@cloudscape-design/components/slider";
export default () => {
  const [value, setValue] = React.useState(50);
  return (
    <Slider
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      max={100}
      min={0}
    />
  );
};
