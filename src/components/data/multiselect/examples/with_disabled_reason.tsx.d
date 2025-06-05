import * as React from "react";
import Multiselect from "@cloudscape-design/components/multiselect";
export default () => {
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  return (
    <Multiselect
      selectedOptions={selectedOptions}
      onChange={({ detail }) => setSelectedOptions(detail.selectedOptions)}
      options={[
        {
          label: "Option 1",
          value: "1",
          disabled: true,
          disabledReason:
            "This option is available in the primary region. You need to switch regions.",
        },
        {
          label: "Option 2",
          value: "2",
          disabled: true,
          disabledReason:
            "This option is available in the primary region. You need to switch regions.",
        },
        { label: "Option 3", value: "3" },
      ]}
      placeholder="Choose options"
    />
  );
};
