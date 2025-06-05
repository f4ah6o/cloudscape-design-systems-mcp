import * as React from "react";
import PromptInput from "@cloudscape-design/components/prompt-input";
export default () => {
  const [value, setValue] = React.useState("");
  return (
    <PromptInput
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      ariaLabel="Default prompt input"
      placeholder="Ask a question"
    />
  );
};
