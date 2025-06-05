import * as React from "react";
import SegmentedControl from "@cloudscape-design/components/segmented-control";
export default () => {
  const [selectedId, setSelectedId] = React.useState("seg-1");
  return (
    <SegmentedControl
      selectedId={selectedId}
      onChange={({ detail }) => setSelectedId(detail.selectedId)}
      label="Segmented control with only icons"
      options={[
        { iconName: "view-full", iconAlt: "Segment 1", id: "seg-1" },
        { iconName: "view-horizontal", iconAlt: "Segment 2", id: "seg-2" },
        { iconName: "view-vertical", iconAlt: "Segment 3", id: "seg-3" },
      ]}
    />
  );
};
