import * as React from "react";
import BoardItem from "@cloudscape-design/board-components/board-item";
import Header from "@cloudscape-design/components/header";
import ItemsPalette from "@cloudscape-design/board-components/items-palette";
export default () => {
  return (
    <ItemsPalette
      items={[{ id: "1", data: {} }]}
      renderItem={() => (
        <BoardItem
          i18nStrings={{
            dragHandleAriaLabel: "Drag handle",
            dragHandleAriaDescription:
              "Use Space or Enter to activate drag, arrow keys to move, Space or Enter to submit, or Escape to discard. Be sure to temporarily disable any screen reader navigation feature that may interfere with the functionality of the arrow keys.",
            resizeHandleAriaLabel: "Resize handle",
            resizeHandleAriaDescription:
              "Use Space or Enter to activate resize, arrow keys to move, Space or Enter to submit, or Escape to discard. Be sure to temporarily disable any screen reader navigation feature that may interfere with the functionality of the arrow keys.",
          }}
          header={<Header>Board item in palette</Header>}
        >
          {" "}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {" "}
            <img src="/preview-cube.svg" alt="cube icon" />{" "}
            <p>Palette item description</p>{" "}
          </div>{" "}
        </BoardItem>
      )}
      i18nStrings={{
        navigationAriaLabel: "Items palette navigation",
        navigationAriaDescription: "Click on an item to move focus over",
        navigationItemAriaLabel: (item) => item.data.title,
        liveAnnouncementDndStarted: "Dragging",
        liveAnnouncementDndDiscarded: "Insertion discarded",
      }}
    />
  );
};
