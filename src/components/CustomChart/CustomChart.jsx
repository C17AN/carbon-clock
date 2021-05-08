import React from "react";
import { Bar } from "react-chartjs-2";
import "./CustomChart.scss";

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      labels: "",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem) {
        return tooltipItem.yLabel;
      },
    },
  },
};

const CustomChart = () => (
  <>
    <h3>북극곰 개체수 감소량</h3>
    <div className="chart-container">
      <Bar
        data={data}
        options={options}
        style={{ position: "relative", width: "25vw", margin: "0 2rem" }}
      />
      <Bar
        data={data}
        options={options}
        style={{ position: "relative", width: "25vw", margin: "0 2rem" }}
      />
      <Bar
        data={data}
        options={options}
        style={{ position: "relative", width: "25vw", margin: "0 2rem" }}
      />
    </div>
  </>
);

export default CustomChart;
