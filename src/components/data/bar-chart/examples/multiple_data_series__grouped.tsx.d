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
            { x: new Date(1601103600000), y: 470319 },
            { x: new Date(1601110800000), y: 374991 },
            { x: new Date(1601118000000), y: 430357 },
            { x: new Date(1601125200000), y: 440773 },
            { x: new Date(1601132400000), y: 464442 },
          ],
          valueFormatter: function o(e) {
            return Math.abs(e) >= 1e9
              ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
              : Math.abs(e) >= 1e6
                ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
                : Math.abs(e) >= 1e3
                  ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
                  : e.toFixed(2);
          },
        },
        {
          title: "Site 2",
          type: "bar",
          data: [
            { x: new Date(1601103600000), y: 452301 },
            { x: new Date(1601110800000), y: 432909 },
            { x: new Date(1601118000000), y: 463349 },
            { x: new Date(1601125200000), y: 470328 },
            { x: new Date(1601132400000), y: 485630 },
          ],
          valueFormatter: function o(e) {
            return Math.abs(e) >= 1e9
              ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
              : Math.abs(e) >= 1e6
                ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
                : Math.abs(e) >= 1e3
                  ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
                  : e.toFixed(2);
          },
        },
        {
          title: "Site 3",
          type: "bar",
          data: [
            { x: new Date(1601103600000), y: 301030 },
            { x: new Date(1601110800000), y: 352920 },
            { x: new Date(1601118000000), y: 368204 },
            { x: new Date(1601125200000), y: 358290 },
            { x: new Date(1601132400000), y: 210720 },
          ],
          valueFormatter: function o(e) {
            return Math.abs(e) >= 1e9
              ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
              : Math.abs(e) >= 1e6
                ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
                : Math.abs(e) >= 1e3
                  ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
                  : e.toFixed(2);
          },
        },
        {
          title: "Site 4",
          type: "bar",
          data: [
            { x: new Date(1601103600000), y: 91394 },
            { x: new Date(1601110800000), y: 56012 },
            { x: new Date(1601118000000), y: 156204 },
            { x: new Date(1601125200000), y: 98349 },
            { x: new Date(1601132400000), y: 99249 },
          ],
          valueFormatter: function o(e) {
            return Math.abs(e) >= 1e9
              ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
              : Math.abs(e) >= 1e6
                ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
                : Math.abs(e) >= 1e3
                  ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
                  : e.toFixed(2);
          },
        },
        {
          title: "Site 5",
          type: "bar",
          data: [
            { x: new Date(1601103600000), y: 102032 },
            { x: new Date(1601110800000), y: 84201 },
            { x: new Date(1601118000000), y: 173002 },
            { x: new Date(1601125200000), y: 103283 },
            { x: new Date(1601132400000), y: 95382 },
          ],
          valueFormatter: function o(e) {
            return Math.abs(e) >= 1e9
              ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
              : Math.abs(e) >= 1e6
                ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
                : Math.abs(e) >= 1e3
                  ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
                  : e.toFixed(2);
          },
        },
        {
          title: "Site 6",
          type: "bar",
          data: [
            { x: new Date(1601103600000), y: 45029 },
            { x: new Date(1601110800000), y: 99291 },
            { x: new Date(1601118000000), y: 90325 },
            { x: new Date(1601125200000), y: 23940 },
            { x: new Date(1601132400000), y: 59321 },
          ],
          valueFormatter: function o(e) {
            return Math.abs(e) >= 1e9
              ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
              : Math.abs(e) >= 1e6
                ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
                : Math.abs(e) >= 1e3
                  ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
                  : e.toFixed(2);
          },
        },
      ]}
      xDomain={[
        new Date(1601103600000),
        new Date(1601110800000),
        new Date(1601118000000),
        new Date(1601125200000),
        new Date(1601132400000),
      ]}
      yDomain={[0, 500000]}
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
      detailPopoverSeriesContent={({ series, y }) => {
        const formattedValue = numberFormatter(y);
        return {
          key: series.title,
          value: (
            <Link
              external="true"
              href="#"
              ariaLabel={`See details for ${formattedValue} on ${series.title} (opens in a new tab)`}
            >
              {" "}
              {formattedValue}{" "}
            </Link>
          ),
        };
      }}
      ariaLabel="Multiple data series line chart"
      height={300}
      xTitle="Time (UTC)"
      yTitle="Bytes transferred"
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
