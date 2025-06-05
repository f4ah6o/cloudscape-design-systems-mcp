import * as React from "react";
import Autosuggest from "@cloudscape-design/components/autosuggest";
export default () => {
  const [value, setValue] = React.useState("");
  return (
    <Autosuggest
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      options={[]}
      ariaLabel="Autosuggest example with no suggestions"
      placeholder="Enter value"
      empty="No matches found"
    />
  );
};
