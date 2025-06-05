import * as React from "react";
import BarChart from "@cloudscape-design/components/bar-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <BarChart
      series={[
        {
          title: "Site 1",
          type: "bar",
          data: [
            { x: new Date(1601103600000), y: 34503 },
            { x: new Date(1601110800000), y: 25832 },
            { x: new Date(1601118000000), y: 4012 },
            { x: new Date(1601125200000), y: -5602 },
            { x: new Date(1601132400000), y: 17839 },
          ],
          valueFormatter: (e) =>
            "$" +
            e.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
        },
        {
          title: "Average revenue",
          type: "threshold",
          y: 19104,
          valueFormatter: (e) =>
            "$" +
            e.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
        },
      ]}
      xDomain={[
        new Date(1601103600000),
        new Date(1601110800000),
        new Date(1601118000000),
        new Date(1601125200000),
        new Date(1601132400000),
      ]}
      yDomain={[-10000, 40000]}
      i18nStrings={{
        xTickFormatter: (e) =>
          e
            .toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: !1,
            })
            .split(",")
            .join("\n"),
        yTickFormatter: function o(e) {
          return Math.abs(e) >= 1e9
            ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
            : Math.abs(e) >= 1e6
              ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
              : Math.abs(e) >= 1e3
                ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
                : e.toFixed(2);
        },
      }}
      ariaLabel="Single data series line chart"
      height={300}
      xTitle="Time (UTC)"
      yTitle="Revenue (USD)"
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
