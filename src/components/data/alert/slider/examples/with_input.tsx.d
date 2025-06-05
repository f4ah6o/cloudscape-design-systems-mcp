import * as React from "react";
import Slider from "@cloudscape-design/components/slider";
import FormField from "@cloudscape-design/components/form-field";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Input from "@cloudscape-design/components/input";
import Box from "@cloudscape-design/components/box";
export default () => {
  const [value, setValue] = React.useState(50);
  return (
    <FormField label="Form field label">
      {" "}
      <div className="flex-wrapper">
        {" "}
        <div className="slider-wrapper">
          {" "}
          <Slider
            onChange={({ detail }) => setValue(detail.value)}
            value={value}
            max={100}
            min={0}
          />{" "}
        </div>{" "}
        <SpaceBetween size="m" alignItems="center" direction="horizontal">
          {" "}
          <div className="input-wrapper">
            {" "}
            <Input
              type="number"
              inputMode="numeric"
              value={value.toString()}
              onChange={({ detail }) => {
                setValue(Number(detail.value));
              }}
              controlId="validation-input"
            />{" "}
          </div>{" "}
          <Box>Units</Box>{" "}
        </SpaceBetween>{" "}
      </div>{" "}
    </FormField>
  );
};
