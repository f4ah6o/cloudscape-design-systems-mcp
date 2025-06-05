import * as React from "react";
import Autosuggest from "@cloudscape-design/components/autosuggest";
export default () => {
  const [value, setValue] = React.useState("");
  return (
    <Autosuggest
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      options={[
        { value: "1", label: "Suggestion 1" },
        { value: "2", label: "Suggestion 2" },
        { value: "3", label: "Suggestion 3" },
        { value: "4", label: "Suggestion 4" },
      ]}
      ariaLabel="Autosuggest example with values and labels"
      placeholder="Enter value"
      empty="No matches found"
    />
  );
};
