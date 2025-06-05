import * as React from "react";
import Select from "@cloudscape-design/components/select";
export default () => {
  const [selectedOption, setSelectedOption] = React.useState({
    label: "Option 1",
    value: "1",
    tags: ["OptionTag1", "Tag2", "Tag3"],
  });
  return (
    <Select
      selectedOption={selectedOption}
      onChange={({ detail }) => setSelectedOption(detail.selectedOption)}
      options={[
        { label: "Option 1", value: "1", tags: ["OptionTag1", "Tag2", "Tag3"] },
        { label: "Option 2", value: "2", tags: ["OptionTag1", "Tag2", "Tag3"] },
      ]}
    />
  );
};
