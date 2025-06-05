import * as React from "react";
import Autosuggest from "@cloudscape-design/components/autosuggest";
export default () => {
  const [value, setValue] = React.useState("");
  return (
    <Autosuggest
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      options={[
        { value: "Suggestion 1" },
        { value: "Suggestion 2" },
        { value: "Suggestion 3" },
        { value: "Suggestion 4" },
      ]}
      ariaLabel="Autosuggest example with suggestions"
      placeholder="Enter value"
      empty="No matches found"
    />
  );
};
