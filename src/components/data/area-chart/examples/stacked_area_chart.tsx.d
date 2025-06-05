import * as React from "react";
import AreaChart from "@cloudscape-design/components/area-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
export default () => {
  return (
    <AreaChart
      series={[
        {
          title: "Network 1",
          type: "area",
          data: [
            { x: new Date(1601017200000), y: 114489 },
            { x: new Date(1601018100000), y: 136935 },
            { x: new Date(1601019000000), y: 141026 },
            { x: new Date(1601019900000), y: 123288 },
            { x: new Date(1601020800000), y: 121956 },
            { x: new Date(1601021700000), y: 119868 },
            { x: new Date(1601022600000), y: 132326 },
            { x: new Date(1601023500000), y: 126879 },
            { x: new Date(1601024400000), y: 138543 },
            { x: new Date(1601025300000), y: 144309 },
            { x: new Date(1601026200000), y: 121118 },
            { x: new Date(1601027100000), y: 113430 },
            { x: new Date(1601028000000), y: 135911 },
            { x: new Date(1601028900000), y: 113126 },
            { x: new Date(1601029800000), y: 119538 },
            { x: new Date(1601030700000), y: 124338 },
            { x: new Date(1601031600000), y: 133884 },
            { x: new Date(1601032500000), y: 135473 },
            { x: new Date(1601033400000), y: 131187 },
            { x: new Date(1601034300000), y: 136176 },
            { x: new Date(1601035200000), y: 144422 },
            { x: new Date(1601036100000), y: 115392 },
            { x: new Date(1601037000000), y: 139307 },
            { x: new Date(1601037900000), y: 128517 },
            { x: new Date(1601038800000), y: 107160 },
            { x: new Date(1601039700000), y: 110283 },
            { x: new Date(1601040600000), y: 134513 },
            { x: new Date(1601041500000), y: 111311 },
            { x: new Date(1601042400000), y: 142686 },
            { x: new Date(1601043300000), y: 130652 },
            { x: new Date(1601044200000), y: 149418 },
            { x: new Date(1601045100000), y: 121923 },
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
          title: "Network 2",
          type: "area",
          data: [
            { x: new Date(1601017200000), y: 10413 },
            { x: new Date(1601018100000), y: 26582 },
            { x: new Date(1601019000000), y: 45593 },
            { x: new Date(1601019900000), y: 65918 },
            { x: new Date(1601020800000), y: 76223 },
            { x: new Date(1601021700000), y: 62385 },
            { x: new Date(1601022600000), y: 83330 },
            { x: new Date(1601023500000), y: 127209 },
            { x: new Date(1601024400000), y: 104802 },
            { x: new Date(1601025300000), y: 145899 },
            { x: new Date(1601026200000), y: 121375 },
            { x: new Date(1601027100000), y: 112968 },
            { x: new Date(1601028000000), y: 145263 },
            { x: new Date(1601028900000), y: 139562 },
            { x: new Date(1601029800000), y: 128343 },
            { x: new Date(1601030700000), y: 122774 },
            { x: new Date(1601031600000), y: 145396 },
            { x: new Date(1601032500000), y: 176509 },
            { x: new Date(1601033400000), y: 201006 },
            { x: new Date(1601034300000), y: 196538 },
            { x: new Date(1601035200000), y: 213773 },
            { x: new Date(1601036100000), y: 205076 },
            { x: new Date(1601037000000), y: 216369 },
            { x: new Date(1601037900000), y: 159386 },
            { x: new Date(1601038800000), y: 238852 },
            { x: new Date(1601039700000), y: 207500 },
            { x: new Date(1601040600000), y: 187110 },
            { x: new Date(1601041500000), y: 314165 },
            { x: new Date(1601042400000), y: 165653 },
            { x: new Date(1601043300000), y: 175584 },
            { x: new Date(1601044200000), y: 230042 },
            { x: new Date(1601045100000), y: 293879 },
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
      xDomain={[new Date(1601017200000), new Date(1601045100000)]}
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
      ariaLabel="Stacked area chart"
      height={300}
      hideFilter
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
