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
          type: "group",
          text: "Vote",
          items: [
            {
              type: "icon-toggle-button",
              id: "like",
              iconName: "thumbs-up",
              pressedIconName: "thumbs-up-filled",
              text: "Like",
              pressed: false,
              loading: true,
              loadingText: "Loading",
            },
            {
              type: "icon-toggle-button",
              id: "dislike",
              iconName: "thumbs-down",
              pressedIconName: "thumbs-down-filled",
              text: "Dislike",
              pressed: true,
              disabled: true,
            },
          ],
        },
        {
          type: "icon-button",
          id: "copy",
          iconName: "copy",
          text: "Copy",
          popoverFeedback: (
            <StatusIndicator type="success"> Message copied </StatusIndicator>
          ),
        },
        {
          type: "menu-dropdown",
          id: "more-actions",
          text: "More actions",
          items: [
            { id: "add", iconName: "add-plus", text: "Add" },
            { id: "remove", iconName: "remove", text: "Remove" },
          ],
        },
      ]}
    />
  );
};
