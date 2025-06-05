import * as React from "react";
import Multiselect from "@cloudscape-design/components/multiselect";
export default () => {
  const [selectedOptions, setSelectedOptions] = React.useState([
    {
      label: "Option 1",
      value: "1",
      iconName: "settings",
      description: "This is a description",
    },
  ]);
  return (
    <Multiselect
      selectedOptions={selectedOptions}
      onChange={({ detail }) => setSelectedOptions(detail.selectedOptions)}
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
      placeholder="Choose options"
    />
  );
};
