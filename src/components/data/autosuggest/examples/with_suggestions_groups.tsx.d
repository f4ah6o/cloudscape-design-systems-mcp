import * as React from "react";
import Autosuggest from "@cloudscape-design/components/autosuggest";
export default () => {
  const [value, setValue] = React.useState("");
  return (
    <Autosuggest
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      options={[
        {
          label: "Group 1",
          options: [
            { value: "Suggestion 1" },
            { value: "Suggestion 2" },
            { value: "Suggestion 3" },
            { value: "Suggestion 4" },
          ],
        },
        {
          label: "Group 2",
          options: [
            { value: "Suggestion 5" },
            { value: "Suggestion 6" },
            { value: "Suggestion 7" },
          ],
        },
      ]}
      ariaLabel="Autosuggest example with suggestions groups"
      placeholder="Enter value"
      empty="No matches found"
    />
  );
};
