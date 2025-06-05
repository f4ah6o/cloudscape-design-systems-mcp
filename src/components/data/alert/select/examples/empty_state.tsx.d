import * as React from "react";
import Select from "@cloudscape-design/components/select";
export default () => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  return (
    <Select
      selectedOption={selectedOption}
      onChange={({ detail }) => setSelectedOption(detail.selectedOption)}
      options={[]}
      placeholder="Choose an option"
      empty="No options"
    />
  );
};
