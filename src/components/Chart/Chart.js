import React from "react";
import { Chart } from "react-google-charts";
import "../../App.scss";
import "./Chart.scss";

function ChartComponent() {
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
    vAxis: {title: "URLs"},
  };





  const data = [
    ["Speed Score", "Speed Score", { role: "style" }],
    ["Domain 1", 79, "#EF6461"],
    ["Domain 2", 78, "#3F826D"],
    ["Domain 3", 91, "#2e2f42"],
    ["Domain 4", 67, "#ecc453"],
    ["Domain 5", 89, "#604791"],
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
