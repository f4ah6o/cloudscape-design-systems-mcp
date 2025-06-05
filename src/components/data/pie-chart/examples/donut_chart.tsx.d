import * as React from "react";
import PieChart from "@cloudscape-design/components/pie-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <PieChart
      data={[
        { title: "Item A", percentage: 40, value: 40 },
        { title: "Item B", percentage: 25, value: 25 },
        { title: "Item C", percentage: 20, value: 20 },
        { title: "Item D", percentage: 10, value: 10 },
        { title: "Item E", percentage: 5, value: 5 },
      ]}
      visibleSegments={[
        { title: "Item A", percentage: 40, value: 40 },
        { title: "Item B", percentage: 25, value: 25 },
        { title: "Item C", percentage: 20, value: 20 },
        { title: "Item D", percentage: 10, value: 10 },
        { title: "Item E", percentage: 5, value: 5 },
      ]}
      segmentDescription={(datum, sum) =>
        `${datum.value} units, ${((datum.value / sum) * 100).toFixed(0)}%`
      }
      ariaDescription="Donut chart showing generic example data."
      ariaLabel="Donut chart"
      innerMetricDescription="total units"
      innerMetricValue="100"
      size="large"
      variant="donut"
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
