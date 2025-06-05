import * as React from "react";
import Autosuggest from "@cloudscape-design/components/autosuggest";
export default () => {
  const [value, setValue] = React.useState("");
  return (
    <Autosuggest
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      options={[
        { value: "Suggestion 1", description: "This is a description" },
        {
          value: "Suggestion 2",
          iconName: "unlocked",
          labelTag: "This is a label tag",
        },
        {
          value: "Suggestion 3 (disabled)",
          iconName: "share",
          tags: ["Tags go here", "Tag1", "Tag2"],
          disabled: true,
        },
        {
          value: "Suggestion 4",
          disabled: false,
          filteringTags: ["filtering", "tags", "these are filtering tags"],
        },
      ]}
      ariaLabel="Autosuggest example with features"
      placeholder="Enter value"
      empty="No matches found"
    />
  );
};
