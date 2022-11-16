import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import nFormatter from "utils";
import { options } from "./chartsOptions";
import { Wrapper, StyledLegend, LegendH4, StyledH5 } from "./charts.styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const VolumeChart = (props) => {
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
  const chartData = () => {
    return {
      labels: getLabels(),
      datasets: [
        {
          label: "Volume",
          data: props.volumes,
          tension: 0.6,
          borderColor: "rgb(33, 114, 229)",
          fill: false,
          backgroundColor: "rgba(33, 50, 150, 0.5)",
        },
      ],
    };
  };

  const today = new Date().toString().split(" ").splice(1, 3).join(" ");
  return (
    <Wrapper order={2}>
      <StyledLegend>
        <StyledH5>Bitcoin Volume</StyledH5>
        <LegendH4>
          ${nFormatter(props.volumes[props.volumes.length - 1], 2)}
        </LegendH4>
        <StyledH5>{today}</StyledH5>
      </StyledLegend>
      <Line data={chartData()} options={options} width={415} height={250} />
    </Wrapper>
  );
};

export default VolumeChart;
