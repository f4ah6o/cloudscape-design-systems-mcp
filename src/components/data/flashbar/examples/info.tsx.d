import * as React from "react";
import Flashbar from "@cloudscape-design/components/flashbar";
export default () => {
  const [items, setItems] = React.useState([
    {
      type: "info",
      dismissible: true,
      dismissLabel: "Dismiss message",
      onDismiss: () => setItems([]),
      content: (
        <>
          {" "}
          This is an info flash message. It contains{" "}
          <Link color="inverted" href="#">
            {" "}
            a link to another page{" "}
          </Link>{" "}
          .{" "}
        </>
      ),
      id: "message_1",
    },
  ]);
  return <Flashbar items={items} />;
};
