import * as React from "react";
import BoardItem from "@cloudscape-design/board-components/board-item";
import Table from "@cloudscape-design/components/table";
import Link from "@cloudscape-design/components/link";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
import Board from "@cloudscape-design/board-components/board";
export default () => {
  return (
    <Board
      items={[{ id: "1", rowSpan: 4, columnSpan: 4, data: {} }]}
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
          footer={
            <Box textAlign="center">
              {" "}
              <Link>View all</Link>{" "}
            </Box>
          }
          header={<Header>Board item title</Header>}
          settings={
            <ButtonDropdown
              items={[
                { id: "preferences", text: "Preferences" },
                { id: "remove", text: "Remove" },
              ]}
              ariaLabel="Board item settings"
              variant="icon"
            />
          }
        >
          {" "}
          <div style={{ overflow: "hidden" }}>
            {" "}
            <Table
              variant="embedded"
              columnDefinitions={[
                {
                  header: "ID",
                  cell: (item) => <Link href="#">{item.id}</Link>,
                },
                {
                  header: "Status",
                  cell: (item) => (
                    <StatusIndicator type={item.status.toLowerCase()}>
                      {" "}
                      {item.status}{" "}
                    </StatusIndicator>
                  ),
                },
              ]}
              items={[
                {
                  id: "6f80c977-ca20-4563-8007-6387581f9a34",
                  status: "Success",
                },
                {
                  id: "4345032a-e270-4e6f-a187-60bf7ddd4ba3",
                  status: "Success",
                },
                {
                  id: "54dc6682-26d0-4c70-a42a-1772d443dd0d",
                  status: "Success",
                },
                { id: "bcd939ad-2203-4585-8e93-d944632872ef", status: "Error" },
                {
                  id: "244d0a59-c18d-4c18-90c2-deba14535d51",
                  status: "Success",
                },
                {
                  id: "bcd939ad-2203-4585-8e93-d944632872ef",
                  status: "Pending",
                },
              ]}
            />{" "}
          </div>{" "}
        </BoardItem>
      )}
      i18nStrings={(() => {
        function createAnnouncement(
          operationAnnouncement,
          conflicts,
          disturbed,
        ) {
          const conflictsAnnouncement =
            conflicts.length > 0
              ? `Conflicts with ${conflicts.map((c) => c.data.title).join(", ")}.`
              : "";
          const disturbedAnnouncement =
            disturbed.length > 0 ? `Disturbed ${disturbed.length} items.` : "";
          return [
            operationAnnouncement,
            conflictsAnnouncement,
            disturbedAnnouncement,
          ]
            .filter(Boolean)
            .join(" ");
        }
        return {
          liveAnnouncementDndStarted: (operationType) =>
            operationType === "resize" ? "Resizing" : "Dragging",
          liveAnnouncementDndItemReordered: (operation) => {
            const columns = `column ${operation.placement.x + 1}`;
            const rows = `row ${operation.placement.y + 1}`;
            return createAnnouncement(
              `Item moved to ${operation.direction === "horizontal" ? columns : rows}.`,
              operation.conflicts,
              operation.disturbed,
            );
          },
          liveAnnouncementDndItemResized: (operation) => {
            const columnsConstraint = operation.isMinimalColumnsReached
              ? " (minimal)"
              : "";
            const rowsConstraint = operation.isMinimalRowsReached
              ? " (minimal)"
              : "";
            const sizeAnnouncement =
              operation.direction === "horizontal"
                ? `columns ${operation.placement.width}${columnsConstraint}`
                : `rows ${operation.placement.height}${rowsConstraint}`;
            return createAnnouncement(
              `Item resized to ${sizeAnnouncement}.`,
              operation.conflicts,
              operation.disturbed,
            );
          },
          liveAnnouncementDndItemInserted: (operation) => {
            const columns = `column ${operation.placement.x + 1}`;
            const rows = `row ${operation.placement.y + 1}`;
            return createAnnouncement(
              `Item inserted to ${columns}, ${rows}.`,
              operation.conflicts,
              operation.disturbed,
            );
          },
          liveAnnouncementDndCommitted: (operationType) =>
            `${operationType} committed`,
          liveAnnouncementDndDiscarded: (operationType) =>
            `${operationType} discarded`,
          liveAnnouncementItemRemoved: (op) =>
            createAnnouncement(
              `Removed item ${op.item.data.title}.`,
              [],
              op.disturbed,
            ),
          navigationAriaLabel: "Board navigation",
          navigationAriaDescription:
            "Click on non-empty item to move focus over",
          navigationItemAriaLabel: (item) => (item ? item.data.title : "Empty"),
        };
      })()}
      onItemsChange={() => {}}
    />
  );
};
