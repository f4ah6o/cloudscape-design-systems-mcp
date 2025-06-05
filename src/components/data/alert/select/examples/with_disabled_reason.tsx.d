import * as React from "react";
import Select from "@cloudscape-design/components/select";
export default () => {
  const [selectedOption, setSelectedOption] = React.useState({
    label: "Option 3",
    value: "3",
  });
  return (
    <Select
      selectedOption={selectedOption}
      onChange={({ detail }) => setSelectedOption(detail.selectedOption)}
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
      triggerVariant="option"
    />
  );
};
