import * as React from "react";
import TextFilter from "@cloudscape-design/components/text-filter";
export default () => {
  const [filteringText, setFilteringText] = React.useState("");
  return (
    <TextFilter
      filteringText={filteringText}
      filteringPlaceholder="Find instances"
      filteringAriaLabel="Filter instances"
      onChange={({ detail }) => setFilteringText(detail.filteringText)}
    />
  );
};
