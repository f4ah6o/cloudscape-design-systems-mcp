import * as React from "react";
import Select from "@cloudscape-design/components/select";
export default () => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  return (
    <Select
      selectedOption={selectedOption}
      onChange={({ detail }) => setSelectedOption(detail.selectedOption)}
      options={[]}
      loadingText="Loading instances"
      placeholder="Choose an option"
      statusType="loading"
    />
  );
};
