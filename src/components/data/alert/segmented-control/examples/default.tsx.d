import * as React from "react";
import SegmentedControl from "@cloudscape-design/components/segmented-control";
export default () => {
  const [selectedId, setSelectedId] = React.useState("seg-1");
  return (
    <SegmentedControl
      selectedId={selectedId}
      onChange={({ detail }) => setSelectedId(detail.selectedId)}
      label="Default segmented control"
      options={[
        { text: "Segment 1", id: "seg-1" },
        { text: "Segment 2", id: "seg-2" },
        { text: "Segment 3", id: "seg-3" },
      ]}
    />
  );
};
