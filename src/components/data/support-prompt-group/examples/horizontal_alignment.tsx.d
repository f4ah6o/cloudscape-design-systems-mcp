import * as React from "react";
import SupportPromptGroup from "@cloudscape-design/chat-components/support-prompt-group";
export default () => {
  const [value, setValue] = React.useState();
  return (
    <SupportPromptGroup
      onItemClick={({ detail }) => setValue(detail.id)}
      alignment="horizontal"
      ariaLabel="Horizontal support prompt"
      items={[
        { text: "Create image", id: "create-image" },
        { text: "Brainstorm", id: "brainstorm" },
        { text: "Summarize text", id: "summarize" },
      ]}
    />
  );
};
