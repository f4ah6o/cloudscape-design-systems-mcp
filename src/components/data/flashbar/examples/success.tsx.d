import * as React from "react";
import Flashbar from "@cloudscape-design/components/flashbar";
export default () => {
  const [items, setItems] = React.useState([
    {
      type: "success",
      content: "This is a success flash message.",
      action: <Button>View instance</Button>,
      dismissible: true,
      dismissLabel: "Dismiss message",
      onDismiss: () => setItems([]),
      id: "message_1",
    },
  ]);
  return <Flashbar items={items} />;
};
