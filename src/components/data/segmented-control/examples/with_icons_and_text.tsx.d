import * as React from "react";
import SegmentedControl from "@cloudscape-design/components/segmented-control";
export default () => {
  const [selectedId, setSelectedId] = React.useState("seg-1");
  return (
    <SegmentedControl
      selectedId={selectedId}
      onChange={({ detail }) => setSelectedId(detail.selectedId)}
      label="Segmented control with icons"
      options={[
        { text: "Segment 1", iconName: "view-full", id: "seg-1" },
        { text: "Segment 2", iconName: "view-horizontal", id: "seg-2" },
        { text: "Segment 3", iconName: "view-vertical", id: "seg-3" },
      ]}
    />
  );
};
