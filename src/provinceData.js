const data = [
  {
    province: "서울",
    grade: 0,
    totalPopulate2018: 29368.05,
    totalPopulate2017: 29619.84,
    totalPopulate2016: 29846.73,
    energyUsed2016: 26918.07,
    energyUsed2017: 26579.21,
    energyUsed2018: 26418.35,
    industryUsed2016: 783.15,
    industryUsed2017: 932.84,
    industryUsed2018: 889.97,
    agricultureUsed2016: 4.55,
    agricultureUsed2017: 4.17,
    agricultureUsed2018: 3.63,
    wasteUsed2016: 2140.96,
    wasteUsed2017: 2103.62,
    wasteUsed2018: 2056.1,
    description: "",
  },
  {
    province: "경기",
    grade: 0,
    totalPopulate2018: 87897.23,
    totalPopulate2017: 84454.05,
    totalPopulate2016: 81802.92,
    energyUsed2016: 68181.83,
    energyUsed2017: 67379.04,
    energyUsed2018: 71646.41,
    industryUsed2016: 7631.99,
    industryUsed2017: 11131.91,
    industryUsed2018: 10292.62,
    agricultureUsed2016: 3014.16,
    agricultureUsed2017: 2989.83,
    agricultureUsed2018: 3023.0,
    wasteUsed2016: 2974.93,
    wasteUsed2017: 2953.27,
    wasteUsed2018: 2935.19,
    description: "",
  },
  {
    province: "인천",
    grade: 0,
    totalPopulate2018: 51258.66,
    totalPopulate2017: 51218.51,
    totalPopulate2016: 52518.81,
    energyUsed2016: 52177.57,
    energyUsed2017: 50764.11,
    energyUsed2018: 50835.73,
    industryUsed2016: 416.02,
    industryUsed2017: 416.68,
    industryUsed2018: 437.01,
    agricultureUsed2016: 179.16,
    agricultureUsed2017: 179.74,
    agricultureUsed2018: 177.76,
    wasteUsed2016: 1425.51,
    wasteUsed2017: 1346.92,
    wasteUsed2018: 1212.92,
    description: "",
  },
  {
    province: "강원",
    grade: 0,
    totalPopulate2018: 52402.49,
    totalPopulate2017: 47603.08,
    totalPopulate2016: 41444.47,
    energyUsed2016: 22037.81,
    energyUsed2017: 28136.38,
    energyUsed2018: 33528.23,
    industryUsed2016: 17787.8,
    industryUsed2017: 17828.0,
    industryUsed2018: 17230.27,
    agricultureUsed2016: 1060.33,
    agricultureUsed2017: 1084.06,
    agricultureUsed2018: 1105.48,
    wasteUsed2016: 558.54,
    wasteUsed2017: 554.64,
    wasteUsed2018: 538.51,
    description: "",
  },
  {
    province: "충북",
    grade: 0,
    totalPopulate2018: 26637.98,
    totalPopulate2017: 26892.12,
    totalPopulate2016: 27558.38,
    energyUsed2016: 14230.77,
    energyUsed2017: 13990.85,
    energyUsed2018: 14288.16,
    industryUsed2016: 10801.39,
    industryUsed2017: 10426.19,
    industryUsed2018: 9885.77,
    agricultureUsed2016: 1278.43,
    agricultureUsed2017: 1259.98,
    agricultureUsed2018: 1279.13,
    wasteUsed2016: 1247.79,
    wasteUsed2017: 1215.1,
    wasteUsed2018: 1184.91,
    description: "",
  },
  {
    province: "충남",
    grade: 0,
    totalPopulate2018: 161299.72,
    totalPopulate2017: 155174.13,
    totalPopulate2016: 138984.2,
    energyUsed2016: 130694.29,
    energyUsed2017: 146602.31,
    energyUsed2018: 152467.6,
    industryUsed2016: 3231.93,
    industryUsed2017: 3254.33,
    industryUsed2018: 3513.38,
    agricultureUsed2016: 3373.72,
    agricultureUsed2017: 3362.99,
    agricultureUsed2018: 3355.77,
    wasteUsed2016: 1684.25,
    wasteUsed2017: 1954.5,
    wasteUsed2018: 1962.98,
    description: "",
  },
  {
    province: "대전",
    grade: 0,
    totalPopulate2018: 0,
    totalPopulate2017: 0,
    totalPopulate2016: 0,
    energyUsed2016: 0,
    energyUsed2017: 0,
    energyUsed2018: 0,
    industryUsed2016: 0,
    industryUsed2017: 0,
    industryUsed2018: 0,
    agricultureUsed2016: 0,
    agricultureUsed2017: 0,
    agricultureUsed2018: 0,
    wasteUsed2016: 0,
    wasteUsed2017: 0,
    wasteUsed2018: 0,
    description: "",
  },
  {
    province: "세종",
    grade: 0,
    totalPopulate2018: 6465.46,
    totalPopulate2017: 6148.5,
    totalPopulate2016: 6465.12,
    energyUsed2016: 5881.41,
    energyUsed2017: 5529.6,
    energyUsed2018: 5762.44,
    industryUsed2016: 36.14,
    industryUsed2017: 32.29,
    industryUsed2018: 86.91,
    agricultureUsed2016: 27.49,
    agricultureUsed2017: 26.18,
    agricultureUsed2018: 25.42,
    wasteUsed2016: 520.08,
    wasteUsed2017: 560.44,
    wasteUsed2018: 590.69,
    description: "",
  },
  {
    province: "경북",
    grade: 0,
    totalPopulate2018: 63013.67,
    totalPopulate2017: 62541.84,
    totalPopulate2016: 65058.72,
    energyUsed2016: 56618.59,
    energyUsed2017: 54222.65,
    energyUsed2018: 54471.0,
    industryUsed2016: 3616.09,
    industryUsed2017: 3487.26,
    industryUsed2018: 3826.78,
    agricultureUsed2016: 3149.74,
    agricultureUsed2017: 3210.19,
    agricultureUsed2018: 3227.83,
    wasteUsed2016: 1674.3,
    wasteUsed2017: 1621.74,
    wasteUsed2018: 1488.06,
    description: "",
  },
  {
    province: "경남",
    grade: 0,
    totalPopulate2018: 0,
    totalPopulate2017: 0,
    totalPopulate2016: 0,
    energyUsed2016: 0,
    energyUsed2017: 0,
    energyUsed2018: 0,
    industryUsed2016: 0,
    industryUsed2017: 0,
    industryUsed2018: 0,
    agricultureUsed2016: 0,
    agricultureUsed2017: 0,
    agricultureUsed2018: 0,
    wasteUsed2016: 0,
    wasteUsed2017: 0,
    wasteUsed2018: 0,
    description: "",
  },
  {
    province: "대구",
    grade: 0,
    totalPopulate2018: 9342.29,
    totalPopulate2017: 9465.59,
    totalPopulate2016: 9741.93,
    energyUsed2016: 9386.95,
    energyUsed2017: 9012.45,
    energyUsed2018: 8613.2,
    industryUsed2016: 154.61,
    industryUsed2017: 127.42,
    industryUsed2018: 424.43,
    agricultureUsed2016: 78.08,
    agricultureUsed2017: 75.69,
    agricultureUsed2018: 72.92,
    wasteUsed2016: 0,
    wasteUsed2017: 0,
    wasteUsed2018: 0,
    description: "",
  },
  {
    province: "울산",
    grade: 0,
    totalPopulate2018: 41045.65,
    totalPopulate2017: 36722.53,
    totalPopulate2016: 39979.09,
    energyUsed2016: 36072.96,
    energyUsed2017: 33627.23,
    energyUsed2018: 37285.48,
    industryUsed2016: 3193.36,
    industryUsed2017: 2336.0,
    industryUsed2018: 3109.57,
    agricultureUsed2016: 136.83,
    agricultureUsed2017: 135.34,
    agricultureUsed2018: 132.58,
    wasteUsed2016: 575.93,
    wasteUsed2017: 623.97,
    wasteUsed2018: 518.01,
    description: "",
  },
  {
    province: "부산",
    grade: 0,
    totalPopulate2018: 15692.45,
    totalPopulate2017: 13804.01,
    totalPopulate2016: 14636.22,
    energyUsed2016: 13314.44,
    energyUsed2017: 12359.58,
    energyUsed2018: 13270.43,
    industryUsed2016: 510.77,
    industryUsed2017: 657.94,
    industryUsed2018: 1710.2,
    agricultureUsed2016: 41.15,
    agricultureUsed2017: 38.99,
    agricultureUsed2018: 37.55,
    wasteUsed2016: 769.86,
    wasteUsed2017: 747.51,
    wasteUsed2018: 674.27,
    description: "",
  },
  {
    province: "전북",
    grade: 0,
    totalPopulate2018: 15308.77,
    totalPopulate2017: 13840.26,
    totalPopulate2016: 14307.61,
    energyUsed2016: 9822.21,
    energyUsed2017: 9369.25,
    energyUsed2018: 10234.1,
    industryUsed2016: 235.5,
    industryUsed2017: 214.07,
    industryUsed2018: 344.93,
    agricultureUsed2016: 2727.0,
    agricultureUsed2017: 2774.38,
    agricultureUsed2018: 2830.54,
    wasteUsed2016: 1522.89,
    wasteUsed2017: 1482.55,
    wasteUsed2018: 1899.2,
    description: "",
  },
  {
    province: "전남",
    grade: 0,
    totalPopulate2018: 90279.19,
    totalPopulate2017: 92389.19,
    totalPopulate2016: 87889.21,
    energyUsed2016: 79059.96,
    energyUsed2017: 83269.3,
    energyUsed2018: 81226.7,
    industryUsed2016: 4175.8,
    industryUsed2017: 4612.94,
    industryUsed2018: 4488.48,
    agricultureUsed2016: 3324.0,
    agricultureUsed2017: 3322.04,
    agricultureUsed2018: 3394.31,
    wasteUsed2016: 1329.45,
    wasteUsed2017: 1184.91,
    wasteUsed2018: 1169.7,
    description: "",
  },
  {
    province: "광주",
    grade: 0,
    totalPopulate2018: 5663.51,
    totalPopulate2017: 5407.02,
    totalPopulate2016: 5484.95,
    energyUsed2016: 5113.04,
    energyUsed2017: 5027.18,
    energyUsed2018: 5225.94,
    industryUsed2016: 56.62,
    industryUsed2017: 47.45,
    industryUsed2018: 92.54,
    agricultureUsed2016: 75.71,
    agricultureUsed2017: 74.66,
    agricultureUsed2018: 73.31,
    wasteUsed2016: 239.59,
    wasteUsed2017: 257.73,
    wasteUsed2018: 271.72,
    description: "",
  },
  {
    province: "제주",
    grade: 0,
    totalPopulate2018: 4840.64,
    totalPopulate2017: 4444.39,
    totalPopulate2016: 4229.12,
    energyUsed2016: 3653.1,
    energyUsed2017: 3865.96,
    energyUsed2018: 4197.12,
    industryUsed2016: 52.25,
    industryUsed2017: 44.66,
    industryUsed2018: 119.83,
    agricultureUsed2016: 353.44,
    agricultureUsed2017: 358.65,
    agricultureUsed2018: 363.92,
    wasteUsed2016: 170.33,
    wasteUsed2017: 175.13,
    wasteUsed2018: 159.77,
    description: "",
  },
];

export default data;