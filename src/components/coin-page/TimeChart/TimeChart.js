import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { currencyFormatter } from "utils";
import { options } from "./TimeChartOptions";
import { Wrapper, StyledLegend, LegendH4, StyledH5 } from "./TimeChart.styled";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const TimeChart = (props) => {
  const chartData = () => {
    return {
      labels: "",
      datasets: [
        {
          label: "Price",
          data: props.coinPrice,
          tension: 0.6,
          borderColor: "rgb(1,226,37)",
          fill: true,
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 350);
            gradient.addColorStop(0, "rgba(1, 226, 37, .4)");
            gradient.addColorStop(1, "rgba(23, 82, 34, .4)");
            return gradient;
          },
        },
      ],
    };
  };

  return (
    <Wrapper>
      <Line data={chartData()} options={options} />
    </Wrapper>
  );
};

export default TimeChart;
