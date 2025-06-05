import * as React from "react";
import LineChart from "@cloudscape-design/components/line-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <LineChart
      series={[
        {
          title: "Site 1",
          type: "line",
          data: [
            { x: new Date(1601017200000), y: 58020 },
            { x: new Date(1601018100000), y: 102402 },
            { x: new Date(1601019000000), y: 104920 },
            { x: new Date(1601019900000), y: 94031 },
            { x: new Date(1601020800000), y: 125021 },
            { x: new Date(1601021700000), y: 159219 },
            { x: new Date(1601022600000), y: 193082 },
            { x: new Date(1601023500000), y: 162592 },
            { x: new Date(1601024400000), y: 274021 },
            { x: new Date(1601025300000), y: 264286 },
            { x: new Date(1601026200000), y: 289210 },
            { x: new Date(1601027100000), y: 256362 },
            { x: new Date(1601028000000), y: 257306 },
            { x: new Date(1601028900000), y: 186776 },
            { x: new Date(1601029800000), y: 294020 },
            { x: new Date(1601030700000), y: 385975 },
            { x: new Date(1601031600000), y: 486039 },
            { x: new Date(1601032500000), y: 490447 },
            { x: new Date(1601033400000), y: 361845 },
            { x: new Date(1601034300000), y: 339058 },
            { x: new Date(1601035200000), y: 298028 },
            { x: new Date(1601036100000), y: 231902 },
            { x: new Date(1601037000000), y: 224558 },
            { x: new Date(1601037900000), y: 253901 },
            { x: new Date(1601038800000), y: 102839 },
            { x: new Date(1601039700000), y: 234943 },
            { x: new Date(1601040600000), y: 204405 },
            { x: new Date(1601041500000), y: 190391 },
            { x: new Date(1601042400000), y: 183570 },
            { x: new Date(1601043300000), y: 162592 },
            { x: new Date(1601044200000), y: 148910 },
            { x: new Date(1601045100000), y: 229492 },
            { x: new Date(1601046000000), y: 293910 },
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
          type: "line",
          data: [
            { x: new Date(1601017200000), y: 151023 },
            { x: new Date(1601018100000), y: 169975 },
            { x: new Date(1601019000000), y: 176980 },
            { x: new Date(1601019900000), y: 168852 },
            { x: new Date(1601020800000), y: 149130 },
            { x: new Date(1601021700000), y: 147299 },
            { x: new Date(1601022600000), y: 169552 },
            { x: new Date(1601023500000), y: 163401 },
            { x: new Date(1601024400000), y: 154091 },
            { x: new Date(1601025300000), y: 199516 },
            { x: new Date(1601026200000), y: 195503 },
            { x: new Date(1601027100000), y: 189953 },
            { x: new Date(1601028000000), y: 181635 },
            { x: new Date(1601028900000), y: 192975 },
            { x: new Date(1601029800000), y: 205951 },
            { x: new Date(1601030700000), y: 218958 },
            { x: new Date(1601031600000), y: 220516 },
            { x: new Date(1601032500000), y: 213557 },
            { x: new Date(1601033400000), y: 165899 },
            { x: new Date(1601034300000), y: 173557 },
            { x: new Date(1601035200000), y: 172331 },
            { x: new Date(1601036100000), y: 186492 },
            { x: new Date(1601037000000), y: 131541 },
            { x: new Date(1601037900000), y: 142262 },
            { x: new Date(1601038800000), y: 194091 },
            { x: new Date(1601039700000), y: 185899 },
            { x: new Date(1601040600000), y: 173401 },
            { x: new Date(1601041500000), y: 171635 },
            { x: new Date(1601042400000), y: 179130 },
            { x: new Date(1601043300000), y: 185951 },
            { x: new Date(1601044200000), y: 144091 },
            { x: new Date(1601045100000), y: 152975 },
            { x: new Date(1601046000000), y: 157299 },
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
          title: "Performance goal",
          type: "threshold",
          y: 250000,
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
      xDomain={[new Date(1601017200000), new Date(1601046000000)]}
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
      ariaLabel="Multiple data series line chart"
      height={300}
      xScaleType="time"
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
