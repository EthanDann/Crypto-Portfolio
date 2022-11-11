import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Wrapper } from "./sparkline.styled";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const Sparkline = (props) => {
  let borderColor;
  props.prices[0] > props.prices[props.prices.length - 1]
    ? (borderColor = "rgba(254, 16, 64, 1)")
    : (borderColor = "rgba(0, 255, 95, 1)");
  const chartData = {
    labels: new Array(props.prices?.length).fill(""),
    datasets: [
      {
        label: "",
        data: props.prices,
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
  return (
    <Wrapper>
      <Line data={chartData} options={options} width={115} height={70} />
    </Wrapper>
  );
};

export default Sparkline;
