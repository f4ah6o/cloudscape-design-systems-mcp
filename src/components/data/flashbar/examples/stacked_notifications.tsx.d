import * as React from "react";
import Flashbar from "@cloudscape-design/components/flashbar";
export default () => {
  const [items, setItems] = React.useState([
    {
      type: "success",
      dismissible: true,
      dismissLabel: "Dismiss message",
      content: "This is a success flash message",
      id: "message_5",
      onDismiss: () =>
        setItems((items) => items.filter((item) => item.id !== "message_5")),
    },
    {
      type: "warning",
      dismissible: true,
      dismissLabel: "Dismiss message",
      content: "This is a warning flash message",
      id: "message_4",
      onDismiss: () =>
        setItems((items) => items.filter((item) => item.id !== "message_4")),
    },
    {
      type: "error",
      dismissible: true,
      dismissLabel: "Dismiss message",
      header: "Failed to update instance id-4890f893e",
      content: "This is a dismissible error message",
      id: "message_3",
      onDismiss: () =>
        setItems((items) => items.filter((item) => item.id !== "message_3")),
    },
    {
      type: "info",
      dismissible: true,
      dismissLabel: "Dismiss message",
      content: "This is an info flash message",
      id: "message_2",
      onDismiss: () =>
        setItems((items) => items.filter((item) => item.id !== "message_2")),
    },
    {
      type: "in-progress",
      dismissible: true,
      dismissLabel: "Dismiss message",
      content: (
        <ProgressBar
          label="Progress bar label"
          description="Progress bar description"
          value={37}
          additionalInfo="Additional information"
          variant="flash"
        />
      ),
      id: "message_1",
      onDismiss: () =>
        setItems((items) => items.filter((item) => item.id !== "message_1")),
    },
  ]);
  return (
    <Flashbar
      items={items}
      i18nStrings={{
        ariaLabel: "Notifications",
        notificationBarAriaLabel: "View all notifications",
        notificationBarText: "Notifications",
        errorIconAriaLabel: "Error",
        warningIconAriaLabel: "Warning",
        successIconAriaLabel: "Success",
        infoIconAriaLabel: "Info",
        inProgressIconAriaLabel: "In progress",
      }}
      stackItems
    />
  );
};
