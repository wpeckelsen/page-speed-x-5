import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import "../../App.scss";
import "./Chart.scss";

function ChartComponent({
  chartScore1,
  chartScore2,
  chartScore3,
  chartScore4,
  chartScore5,
}) {
  const options = {
    fontName: "Open Sans",
    fontSize: 16,
    title: "Speed Result",
    chartArea: { width: "50%" },
    style: { color: "white" },
    backgroundColor: { fill: "#f8feff" },
    hAxis: {
      title: "Speed",
      minValue: 0,
      maxValue: 100,
    },
    vAxis: { title: "Domain names" },
  };

  const data = [
    ["Speed Score", "Speed Score", { role: "style" }],
    ["Domain 1", chartScore1, "#EF6461"],
    ["Domain 2", chartScore2, "#3F826D"],
    ["Domain 3", chartScore3, "#2e2f42"],
    ["Domain 4", chartScore4, "#ecc453"],
    ["Domain 5", chartScore5, "#604791"],
  ];

  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="500px"
      data={data}
      options={options}
    />
  );
}

export default ChartComponent;
