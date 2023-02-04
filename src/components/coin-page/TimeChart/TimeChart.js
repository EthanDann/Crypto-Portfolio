import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { useWindowSize } from "usehooks-ts";

import { Line } from "react-chartjs-2";
import { options } from "./TimeChartOptions";
import { Wrapper } from "./TimeChart.styled";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const TimeChart = (props) => {
  const { width: screenWidth } = useWindowSize();
  const getLabels = (arr) => {
    let labels = arr.map((arr) =>
      new Date(arr[0]).toLocaleString(undefined, {
        month: "short",
        day: "numeric",
      })
    );
    return labels;
  };
  const chartData = () => {
    return {
      labels: getLabels(props.chart),
      datasets: [
        {
          data: props.chart,
          tension: 0.4,
          borderColor: "rgba(44, 47, 54, 1)",
          fill: true,
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 350);
            gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
            gradient.addColorStop(0, "rgba(44, 47, 54, 0.5)");
            return gradient;
          },
        },
      ],
    };
  };

  return (
    <Wrapper width={screenWidth - window.scrollX * 2}>
      <Line data={chartData()} options={options} />
    </Wrapper>
  );
};

export default TimeChart;
