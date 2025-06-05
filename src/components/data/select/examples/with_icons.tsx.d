import * as React from "react";
import Select from "@cloudscape-design/components/select";
export default () => {
  const [selectedOption, setSelectedOption] = React.useState({
    label: "Option 1",
    value: "1",
    iconName: "settings",
  });
  return (
    <Select
      selectedOption={selectedOption}
      onChange={({ detail }) => setSelectedOption(detail.selectedOption)}
      options={[
        { label: "Option 1", value: "1", iconName: "settings" },
        { label: "Option 2", value: "2", iconName: "unlocked" },
        { label: "Option 3", value: "3", iconName: "share" },
      ]}
    />
  );
};
