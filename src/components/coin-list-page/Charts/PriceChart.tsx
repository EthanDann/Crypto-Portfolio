import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { currencyFormatter } from "utils";
import { options } from "./chartsOptions";
import { Wrapper, StyledLegend, LegendH4, StyledH5 } from "./charts.styled";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

interface Props {
  prices: any[];
  currencySymbol?: string;
}

const PriceChart: React.FC<Props> = ({ prices, currencySymbol }) => {
  const getLabels = (): string[] => {
    let labels: string[] = [];
    for (let num = 1; num < 33; num++) {
      const date = new Date();
      date.setDate(date.getDate() - num);
      const day = ("0" + date.getUTCDate()).slice(-2);
      labels.push(day);
    }
    return labels;
  };
  const chartData = {
    labels: getLabels(),
    datasets: [
      {
        label: "Volume",
        data: prices,
        tension: 0.6,
        borderColor: "rgb(1,226,37)",
        fill: true,
        backgroundColor: (context: { chart: { ctx: any } }) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(0, "rgba(1, 226, 37, .4)");
          gradient.addColorStop(1, "rgba(23, 82, 34, .4)");
          return gradient;
        },
      },
    ],
  };

  const today = new Date().toString().split(" ").splice(1, 3).join(" ");
  return (
    <Wrapper>
      <StyledLegend>
        <StyledH5>Bitcoin Price</StyledH5>
        <LegendH4>
          {currencySymbol ?? "$"}
          {currencyFormatter(prices[prices.length - 1], 2)}
        </LegendH4>
        <StyledH5>{today}</StyledH5>
      </StyledLegend>
      <Line data={chartData} options={options as ChartOptions} />
    </Wrapper>
  );
};

export default PriceChart;
