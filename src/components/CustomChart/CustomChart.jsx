import React from "react";
import { Bar } from "react-chartjs-2";
import { data1, data2, data3, option1, option2, option3 } from "../../climateData";
import "./CustomChart.scss";

const CustomChart = () => (
  <>
    <div className="chart-container">
      <Bar
        data={data1}
        options={option1}
        style={{ position: "relative", width: "25vw", margin: "0 2rem" }}
      />
      <Bar
        data={data2}
        options={option2}
        style={{ position: "relative", width: "25vw", margin: "0 2rem" }}
      />
      <Bar
        data={data3}
        options={option3}
        style={{ position: "relative", width: "25vw", margin: "0 2rem" }}
      />
    </div>
  </>
);

export default CustomChart;
