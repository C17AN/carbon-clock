export const data1 = {
  labels: ["2010", "2015", "2020"],
  datasets: [
    {
      labels: "",
      data: [33.13, 35.21, 34.07],
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

export const data2 = {
  labels: ["2016", "2018", "2020"],
  datasets: [
    {
      data: [640, 606, 528],
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

export const data3 = {
  labels: ["2010", "2015", "2020"],
  datasets: [
    {
      labels: "",
      data: [0.2, 0.4, 0.5],
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

export const option1 = {
  responsive: false,
  plugins: {
    legend: {
      display: false,
      labels: {
        color: "rgb(255, 99, 132)",
      },
    },
    title: {
      display: true,
      text: "세계 CO2 배출량 변화 (단위 : 10억 톤)",
    },
  },
  y: {
    max: 40,
    min: 30,
    step: 5,
    callback: function (value, index, values) {
      return "$" + value;
    },
  },
};

export const option2 = {
  responsive: false,
  plugins: {
    legend: {
      display: false,
      labels: {
        color: "rgb(255, 99, 132)",
      },
    },
    title: {
      display: true,
      text: "북극 빙하 면적 변화 (단위 : 10000㎢)",
    },
  },
  scales: {
    y: {},
  },
};

export const option3 = {
  responsive: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "지구 평균기온 편차",
    },
  },

  scales: {
    y: {
      max: 0.6,
      min: 0,
      step: 0.1,

      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value, index, values) {
          return value + "℃";
        },
      },
    },
  },
};
