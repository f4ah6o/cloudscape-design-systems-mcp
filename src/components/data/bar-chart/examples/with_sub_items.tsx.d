import * as React from "react";
import BarChart from "@cloudscape-design/components/bar-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <BarChart
      series={[
        {
          title: "Amazon Simple Storage Service",
          type: "bar",
          data: [
            { x: "2023-04", y: 56.03 },
            { x: "2023-05", y: 65.14 },
            { x: "2023-06", y: 69.8 },
            { x: "2023-07", y: 78.45 },
            { x: "2023-08", y: 84.36 },
            { x: "2023-09", y: 90.68 },
          ],
        },
        {
          title: "Amazon Relational Database Service",
          type: "bar",
          data: [
            { x: "2023-05", y: 217.77 },
            { x: "2023-06", y: 35.9 },
            { x: "2023-07", y: 36.39 },
            { x: "2023-08", y: 36.39 },
            { x: "2023-09", y: 35.96 },
          ],
        },
        {
          title: "AWS Config",
          type: "bar",
          data: [
            { x: "2023-04", y: 39.02 },
            { x: "2023-05", y: 41.94 },
            { x: "2023-06", y: 40.06 },
            { x: "2023-07", y: 39.6 },
            { x: "2023-08", y: 48.62 },
            { x: "2023-09", y: 88.34 },
          ],
        },
        {
          title: "AWS Key Management Service",
          type: "bar",
          data: [
            { x: "2023-04", y: 39.48 },
            { x: "2023-05", y: 43.63 },
            { x: "2023-06", y: 43.25 },
            { x: "2023-07", y: 45.62 },
            { x: "2023-08", y: 45.12 },
            { x: "2023-09", y: 45.93 },
          ],
        },
        {
          title: "Amazon Elastic Container Service",
          type: "bar",
          data: [
            { x: "2023-04", y: 25.48 },
            { x: "2023-05", y: 45.06 },
            { x: "2023-06", y: 41.65 },
            { x: "2023-07", y: 23.42 },
            { x: "2023-08", y: 13.52 },
            { x: "2023-09", y: 64.24 },
          ],
        },
        {
          title: "Others",
          type: "bar",
          data: [
            { x: "2023-04", y: 27.31 },
            { x: "2023-05", y: 33.6 },
            { x: "2023-06", y: 41.08 },
            { x: "2023-07", y: 37.37 },
            { x: "2023-08", y: 25.49 },
            { x: "2023-09", y: 25.28 },
          ],
        },
      ]}
      xDomain={[
        "2023-04",
        "2023-05",
        "2023-06",
        "2023-07",
        "2023-08",
        "2023-09",
      ]}
      detailPopoverSeriesContent={({ series, x, y }) => ({
        key: series.title,
        value: moneyFormatter(y),
        expandable: series.title === "Others",
        subItems:
          series.title === "Others"
            ? [
                {
                  key: "AWS Lambda",
                  value: moneyFormatter(
                    {
                      "2023-04": 10.89,
                      "2023-05": 11.25,
                      "2023-06": 10.89,
                      "2023-07": 11.25,
                      "2023-08": 11.25,
                      "2023-09": 10.89,
                    }[x],
                  ),
                },
                {
                  key: "CodeBuild",
                  value: moneyFormatter(
                    {
                      "2023-04": 6.42,
                      "2023-05": 9.52,
                      "2023-06": 19.06,
                      "2023-07": 17.92,
                      "2023-08": 7.22,
                      "2023-09": 6.08,
                    }[x],
                  ),
                },
                {
                  key: "Amazon GuardDuty",
                  value: moneyFormatter(
                    {
                      "2023-04": 10,
                      "2023-05": 12.83,
                      "2023-06": 11.13,
                      "2023-07": 8.2,
                      "2023-08": 7.02,
                      "2023-09": 8.31,
                    }[x],
                  ),
                },
              ]
            : undefined,
      })}
      ariaLabel="Costs chart"
      detailPopoverFooter={(xValue) => {
        const total = {
          "2023-04": 131.29,
          "2023-05": 447.14,
          "2023-06": 271.74,
          "2023-07": 260.85,
          "2023-08": 253.5,
          "2023-09": 350.43,
        }[xValue];
        return (
          <>
            {" "}
            <hr />{" "}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {" "}
              <span>Total</span> <span>{moneyFormatter(total)}</span>{" "}
            </div>{" "}
          </>
        );
      }}
      height={300}
      stackedBars
      xTickFormatter={(d) =>
        new Date(d).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })
      }
      xTitle="Time"
      yTitle="Costs"
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
