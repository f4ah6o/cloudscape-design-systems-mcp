import * as React from "react";
import Flashbar from "@cloudscape-design/components/flashbar";
export default () => {
  const [items, setItems] = React.useState([
    {
      type: "warning",
      content: "This is a warning flash message.",
      dismissible: true,
      dismissLabel: "Dismiss message",
      onDismiss: () => setItems([]),
      id: "message_1",
    },
  ]);
  return <Flashbar items={items} />;
};
