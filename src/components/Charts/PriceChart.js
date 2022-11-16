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
import { options } from "./chartsOptions";
import { Wrapper, StyledLegend, LegendH4, StyledH5 } from "./charts.styled";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const PriceChart = (props) => {
  const chartData = () => {
    const getLabels = () => {
      let labels = [];
      for (let num = 0; num <= 31; num++) {
        const date = new Date();
        date.setDate(date.getDate() - num);
        const day = ("0" + date.getUTCDate()).slice(-2);
        labels.push(day);
      }
      return labels;
    };
    return {
      labels: getLabels(),
      datasets: [
        {
          label: "Volume",
          data: props.prices,
          tension: 0.6,
          borderColor: "rgb(1,226,37)",
          fill: false,
          backgroundColor: "rgba(23, 82, 34, .2)",
        },
      ],
    };
  };

  const today = new Date().toString().split(" ").splice(1, 3).join(" ");
  return (
    <Wrapper order={1}>
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
