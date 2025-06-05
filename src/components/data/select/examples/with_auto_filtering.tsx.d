import * as React from "react";
import Select from "@cloudscape-design/components/select";
export default () => {
  const [selectedOption, setSelectedOption] = React.useState({
    label: "Option 1",
    value: "1",
    iconName: "settings",
    description: "This is a description",
  });
  return (
    <Select
      selectedOption={selectedOption}
      onChange={({ detail }) => setSelectedOption(detail.selectedOption)}
      options={[
        {
          label: "Option 1",
          value: "1",
          iconName: "settings",
          description: "This is a description",
        },
        {
          label: "Option 2",
          value: "2",
          iconName: "unlocked",
          description: "This is a description",
        },
        {
          label: "Option 3",
          value: "3",
          iconName: "share",
          description: "This is a description",
        },
      ]}
      filteringType="auto"
    />
  );
};
