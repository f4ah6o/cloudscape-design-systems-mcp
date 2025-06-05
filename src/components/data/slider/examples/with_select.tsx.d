import * as React from "react";
import Slider from "@cloudscape-design/components/slider";
import FormField from "@cloudscape-design/components/form-field";
import Grid from "@cloudscape-design/components/grid";
import Select from "@cloudscape-design/components/select";
export default () => {
  const [value, setValue] = React.useState(50);
  return (
    <FormField label="Form field label">
      {" "}
      <Grid gridDefinition={[{ colspan: { default: 12, xxs: 4 } }]}>
        {" "}
        {(() => {
          const options = [
            { value: "0" },
            { value: "25" },
            { value: "50" },
            { value: "75" },
            { value: "100" },
          ];
          const selectedOption =
            options.find((o) => o.value === value.toString()) ?? options[0];
          return (
            <Select
              selectedOption={selectedOption}
              onChange={({ detail }) =>
                setValue(parseInt(detail.selectedOption.value))
              }
              options={options}
            />
          );
        })()}{" "}
      </Grid>{" "}
      <Slider
        onChange={({ detail }) => setValue(detail.value)}
        value={value}
        controlId="select-slider"
        max={100}
        min={0}
        referenceValues={[25, 50, 75]}
        step={25}
        tickMarks
      />{" "}
    </FormField>
  );
};
