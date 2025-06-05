import * as React from "react";
import PieChart from "@cloudscape-design/components/pie-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <PieChart
      data={[
        { title: "Running", value: 60, lastUpdate: "Dec 7, 2020" },
        { title: "Failed", value: 30, lastUpdate: "Dec 6, 2020" },
        { title: "In-progress", value: 10, lastUpdate: "Dec 6, 2020" },
        { title: "Pending", value: 0, lastUpdate: "Dec 7, 2020" },
      ]}
      detailPopoverContent={(datum, sum) => [
        { key: "Resource count", value: datum.value },
        {
          key: "Percentage",
          value: `${((datum.value / sum) * 100).toFixed(0)}%`,
        },
        { key: "Last update on", value: datum.lastUpdate },
      ]}
      segmentDescription={(datum, sum) =>
        `${datum.value} units, ${((datum.value / sum) * 100).toFixed(0)}%`
      }
      ariaDescription="Pie chart showing how many resources are currently in which state."
      ariaLabel="Pie chart"
      empty={
        <Box textAlign="center" color="inherit">
          {" "}
          <b>No data available</b>{" "}
          <Box variant="p" color="inherit">
            {" "}
            There is no data available{" "}
          </Box>{" "}
        </Box>
      }
      noMatch={
        <Box textAlign="center" color="inherit">
          {" "}
          <b>No matching data</b>{" "}
          <Box variant="p" color="inherit">
            {" "}
            There is no matching data to display{" "}
          </Box>{" "}
          <Button>Clear filter</Button>{" "}
        </Box>
      }
    />
  );
};
