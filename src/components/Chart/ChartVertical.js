import React from "react";
import { Chart } from "react-google-charts";

function ChartVertical({chartScore1}) {
  const data = [
    ["Domain name", "Speed Score", { role: "style" }],
    ["Domain 1", chartScore1, "#EF6461"],
    ["Domain 2", 71, "#3F826D"],
    ["Domain 3", 82, "#2e2f42"],
    ["Domain 4", 55, "#ecc453"],
    ["Domain 5", 89, "#604791"],
  ];

  const options = {
    chart: {
      fontName: "Open Sans",
      fontSize: 16,
      style: { colors: "white" },
      backgroundColor: { fill: "#f8feff" },
    },

    chartArea: { width: "80%" },
    title: "Speed Score of Domains",
    subtitle: "tested through Page Speed x 5",

    vAxis: {
      minValue: 0,
      maxValue: 100,
    },

  };

  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="800px"
      data={data}
      options={options}
    />
  );
}

export default ChartVertical;
