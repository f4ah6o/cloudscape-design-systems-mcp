import * as React from "react";
import Multiselect from "@cloudscape-design/components/multiselect";
export default () => {
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  return (
    <Multiselect
      selectedOptions={selectedOptions}
      onChange={({ detail }) => setSelectedOptions(detail.selectedOptions)}
      options={[]}
      loadingText="Loading instances"
      placeholder="Choose options"
      statusType="loading"
    />
  );
};
