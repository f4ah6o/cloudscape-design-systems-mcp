import * as React from "react";
import ButtonGroup from "@cloudscape-design/components/button-group";
export default () => {
  const [feedback, setFeedback] = React.useState("");
  return (
    <ButtonGroup
      onItemClick={({ detail }) =>
        ["like", "dislike"].includes(detail.id) &&
        setFeedback(detail.pressed ? detail.id : "")
      }
      ariaLabel="Chat actions"
      items={[
        {
          type: "icon-button",
          id: "copy",
          iconName: "copy",
          text: "Copy",
          popoverFeedback: (
            <StatusIndicator type="success"> Message copied </StatusIndicator>
          ),
        },
        { type: "icon-button", id: "add", iconName: "add-plus", text: "Add" },
        {
          type: "icon-button",
          id: "remove",
          iconName: "remove",
          text: "Remove",
        },
      ]}
    />
  );
};
