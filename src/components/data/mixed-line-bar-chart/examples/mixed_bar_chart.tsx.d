import * as React from "react";
import MixedLineBarChart from "@cloudscape-design/components/mixed-line-bar-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <MixedLineBarChart
      series={[
        {
          title: "Costs",
          type: "bar",
          data: [
            { x: "Jun 2019", y: 6562 },
            { x: "Jul 2019", y: 8768 },
            { x: "Aug 2019", y: 9742 },
            { x: "Sep 2019", y: 10464 },
            { x: "Oct 2019", y: 16777 },
            { x: "Nov 2019", y: 9956 },
            { x: "Dec 2019", y: 5876 },
          ],
          valueFormatter: (e) =>
            "$" +
            e.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
        },
        {
          title: "Costs last year",
          type: "line",
          data: [
            { x: "Jun 2019", y: 5373 },
            { x: "Jul 2019", y: 7563 },
            { x: "Aug 2019", y: 7900 },
            { x: "Sep 2019", y: 12342 },
            { x: "Oct 2019", y: 14311 },
            { x: "Nov 2019", y: 11830 },
            { x: "Dec 2019", y: 8505 },
          ],
          valueFormatter: (e) =>
            "$" +
            e.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
        },
        {
          title: "Budget",
          type: "threshold",
          y: 12000,
          valueFormatter: (e) =>
            "$" +
            e.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
        },
        { title: "Peak cost", type: "threshold", x: "Sep 2019" },
      ]}
      xDomain={[
        "Jun 2019",
        "Jul 2019",
        "Aug 2019",
        "Sep 2019",
        "Oct 2019",
        "Nov 2019",
        "Dec 2019",
      ]}
      yDomain={[0, 20000]}
      i18nStrings={{
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
      detailPopoverSeriesContent={({ series, x, y }) => ({
        key: series.title,
        value: (
          <Link
            external="true"
            href="#"
            ariaLabel={`See details for ${moneyFormatter(y)} on ${series.title} (opens in a new tab)`}
          >
            {" "}
            {moneyFormatter(y)}{" "}
          </Link>
        ),
      })}
      ariaLabel="Mixed bar chart"
      height={300}
      xScaleType="categorical"
      xTitle="Budget month"
      yTitle="Costs (USD)"
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
