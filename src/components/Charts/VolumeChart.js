import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const VolumeChart = (props) => {
  let borderColor;
  props.volume[0] > props.volume[props.volume.length - 1]
    ? (borderColor = "rgba(254, 16, 64, 1)")
    : (borderColor = "rgba(0, 255, 95, 1)");
  const chartData = {
    labels: new Array(props.volume?.length).fill(""),
    datasets: [
      {
        label: "",
        data: props.volume,
        tension: 0.4,
        borderColor,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          maxTicksLimit: 5,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          maxTicksLimit: 5,
        },
      },
    },
  };
  return <Line data={chartData} options={options} width={115} height={70} />;
};

export default VolumeChart;
