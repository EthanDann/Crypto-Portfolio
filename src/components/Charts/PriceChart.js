import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import nFormatter from "utils";
import { Wrapper, StyledLegend, LegendH4, StyledH5 } from "./charts.styled";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const PriceChart = (props) => {
  const chartData = () => {
    return {
      labels: new Array(props.prices?.length).fill(""),
      datasets: [
        {
          data: props.prices,
          tension: 0.6,
          borderColor: "rgb(1,226,37)",
          fill: false,
          backgroundColor: "rgba(23, 82, 34, .2)",
        },
      ],
    };
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
          drawTicks: false,
          borderWidth: 0,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
          borderWidth: 0,
        },
      },
    },
  };
  const today = new Date().toString().split(" ").splice(1, 3).join(" ");
  return (
    <Wrapper>
      <StyledLegend>
        <StyledH5>Bitcoin Price</StyledH5>
        <LegendH4>
          ${nFormatter(props.prices[props.prices.length - 1], 2)}
        </LegendH4>
        <StyledH5>{today}</StyledH5>
      </StyledLegend>
      <Line data={chartData()} options={options} width={415} height={250} />
    </Wrapper>
  );
};

export default PriceChart;
