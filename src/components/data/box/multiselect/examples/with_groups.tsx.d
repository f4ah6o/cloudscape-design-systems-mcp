import * as React from "react";
import Multiselect from "@cloudscape-design/components/multiselect";
export default () => {
  const [selectedOptions, setSelectedOptions] = React.useState([
    { label: "Option 1", value: "1", description: "This is a description" },
  ]);
  return (
    <Multiselect
      selectedOptions={selectedOptions}
      onChange={({ detail }) => setSelectedOptions(detail.selectedOptions)}
      options={[
        {
          label: "Group 1",
          options: [
            {
              label: "Option 1",
              value: "1",
              description: "This is a description",
            },
            {
              label: "Option 2",
              value: "2",
              iconName: "unlocked",
              labelTag: "This is a label tag",
            },
          ],
        },
        {
          label: "Group 2",
          options: [
            {
              label: "Option 3 (disabled)",
              value: "3",
              iconName: "share",
              tags: ["Tags go here", "Tag1", "Tag2"],
              disabled: true,
            },
            {
              label: "Option 4",
              value: "4",
              filteringTags: ["filtering", "tags", "these are filtering tags"],
            },
          ],
        },
        {
          label: "Group 3 (disabled)",
          disabled: true,
          options: [
            { label: "Option 5", value: "5" },
            { label: "Option 6", value: "6" },
          ],
        },
      ]}
      placeholder="Choose options"
    />
  );
};
