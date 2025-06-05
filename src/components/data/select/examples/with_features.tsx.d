import * as React from "react";
import Select from "@cloudscape-design/components/select";
export default () => {
  const [selectedOption, setSelectedOption] = React.useState({
    label: "Option 1",
    value: "1",
    iconName: "settings",
    description: "sub value",
    tags: ["CPU-v2", "2Gb RAM"],
    labelTag: "128Gb",
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
          description: "sub value",
          tags: ["CPU-v2", "2Gb RAM"],
          labelTag: "128Gb",
        },
        {
          label: "Option 2",
          value: "2",
          iconName: "settings",
          description: "sub value",
          tags: ["CPU-v2", "2Gb RAM"],
          labelTag: "128Gb",
        },
        {
          label: "Option 3",
          value: "3",
          iconName: "settings",
          description: "sub value",
          tags: ["CPU-v2", "2Gb RAM"],
          labelTag: "128Gb",
        },
      ]}
      triggerVariant="option"
    />
  );
};
