import * as React from "react";
import BarChart from "@cloudscape-design/components/bar-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <BarChart
      series={[
        {
          title: "Desktop",
          type: "bar",
          valueFormatter: (e) => `${(100 * e).toFixed(0)}%`,
          data: [
            { x: "Visits", y: 0.32 },
            { x: "Bounces", y: 0.24 },
          ],
        },
        {
          title: "Mobile",
          type: "bar",
          valueFormatter: (e) => `${(100 * e).toFixed(0)}%`,
          data: [
            { x: "Visits", y: 0.26 },
            { x: "Bounces", y: 0.45 },
          ],
        },
        {
          title: "Tablet",
          type: "bar",
          valueFormatter: (e) => `${(100 * e).toFixed(0)}%`,
          data: [
            { x: "Visits", y: 0.23 },
            { x: "Bounces", y: 0.18 },
          ],
        },
        {
          title: "Embedded",
          type: "bar",
          valueFormatter: (e) => `${(100 * e).toFixed(0)}%`,
          data: [
            { x: "Visits", y: 0.13 },
            { x: "Bounces", y: 0.03 },
          ],
        },
        {
          title: "Crawler",
          type: "bar",
          valueFormatter: (e) => `${(100 * e).toFixed(0)}%`,
          data: [
            { x: "Visits", y: 0.06 },
            { x: "Bounces", y: 0.1 },
          ],
        },
      ]}
      xDomain={["Visits", "Bounces"]}
      yDomain={[0, 1]}
      i18nStrings={{ yTickFormatter: (e) => `${(100 * e).toFixed(0)}%` }}
      detailPopoverSeriesContent={({ series, x, y }) => {
        const valueLink = ({ key, value }) => (
          <Link
            external="true"
            href="#"
            ariaLabel={`See details for ${percentageFormatter(value)} on ${key} (opens in a new tab)`}
          >
            {" "}
            {percentageFormatter(value)}{" "}
          </Link>
        );
        return {
          key: series.title,
          value: valueLink({ key: series.title, value: y }),
          expandable: series.title === "Desktop" || series.title === "Mobile",
          subItems:
            series.title === "Desktop"
              ? [
                  {
                    key: "Chrome",
                    value: valueLink({
                      key: "Desktop Chrome",
                      value: x === "Visits" ? 0.19 : 0.15,
                    }),
                  },
                  {
                    key: "Safari",
                    value: valueLink({
                      key: "Desktop Safari",
                      value: x === "Visits" ? 0.07 : 0.05,
                    }),
                  },
                  {
                    key: "Edge",
                    value: valueLink({
                      key: "Desktop Edge",
                      value: x === "Visits" ? 0.02 : 0.02,
                    }),
                  },
                  {
                    key: "Firefox",
                    value: valueLink({
                      key: "Desktop Firefox",
                      value: x === "Visits" ? 0.02 : 0.02,
                    }),
                  },
                  {
                    key: "Others",
                    value: valueLink({
                      key: "Other desktop browsers",
                      value: x === "Visits" ? 0.02 : 0.02,
                    }),
                  },
                ]
              : series.title === "Mobile"
                ? [
                    {
                      key: "Chrome",
                      value: valueLink({
                        key: "Mobile Chrome",
                        value: x === "Visits" ? 0.18 : 0.3,
                      }),
                    },
                    {
                      key: "Safari",
                      value: valueLink({
                        key: "Mobile Safari",
                        value: x === "Visits" ? 0.04 : 0.08,
                      }),
                    },
                    {
                      key: "Others",
                      value: valueLink({
                        key: "Other mobile browsers",
                        value: x === "Visits" ? 0.04 : 0.07,
                      }),
                    },
                  ]
                : undefined,
        };
      }}
      ariaLabel="Stacked, horizontal bar chart"
      detailPopoverFooter={(xValue) => (
        <Button ariaLabel={`View details for ${xValue}`}> View details </Button>
      )}
      height={300}
      horizontalBars
      stackedBars
      xTitle="Visit type"
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
