import * as React from "react";
import AreaChart from "@cloudscape-design/components/area-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <AreaChart
      series={[]}
      statusType="loading"
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
