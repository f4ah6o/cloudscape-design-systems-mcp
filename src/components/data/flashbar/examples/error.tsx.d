import * as React from "react";
import Flashbar from "@cloudscape-design/components/flashbar";
export default () => {
  const [items, setItems] = React.useState([
    {
      header: "Failed to update 4 instances",
      type: "error",
      content: "This is a dismissible error message.",
      dismissible: true,
      dismissLabel: "Dismiss message",
      onDismiss: () => setItems([]),
      id: "message_1",
    },
  ]);
  return <Flashbar items={items} />;
};
