// import React from "react";
// import { Line } from "react-chartjs-2";
// import styled from "styled-components";

// const Wrapper = styled.div``;

// export const Sparkline = (props) => {
//   const chartData = (canvas) => {
//     let borderColor;
//     props.prices[0] > props.prices[props.prices.length - 1]
//       ? (borderColor = "rgba(254, 16, 64, 1)")
//       : (borderColor = "rgba(0, 255, 95, 1)");
//     return {
//       labels: new Array(props.prices?.length).fill(""),
//       datasets: [
//         {
//           label: "",
//           data: props.prices,
//           tension: 0.4,
//           borderColor,
//           fill: false,
//         },
//       ],
//     };
//   };

//   const options = {
//     scales: {
//       xAxis: {
//         display: false,
//       },
//       yAxis: {
//         display: false,
//       },
//     },
//   };
//   return (
//     <Wrapper>
//       <Line
//         data={chartData}
//         options={options}
//         width={100}
//         height={70}
//       />
//     </Wrapper>
//   );
// };

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const options = {
  responsive: true,
  scales: {
    xAxis: {
      display: false,
    },
    yAxis: {
      display: false,
    },
  },
};

export class Sparkline extends React.Component {
  state = {
    data: [],
    hasError: false,
  };
  getAllCoins = async () => {
    try {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
      );
      console.log(data.map((coin) => coin.sparkline_in_7d.price));
      this.setState({
        data,
      });
    } catch (err) {
      this.setState({
        hasError: true,
      });
    }
  };
  componentDidMount = () => {
    this.getAllCoins();
    console.log(this.state.data);
  };
  render() {
    const labels = ["", "", "", "", "", "", ""];
    const getBorderColor = (props) => {
      let borderColor;
      data[0] > data[data.length - 1]
        ? (borderColor = "rgba(254, 16, 64, 1)")
        : (borderColor = "rgba(0, 255, 95, 1)");
      return borderColor;
    };
    const data = {
      labels: new Array(labels?.length).fill(""),
      datasets: [
        {
          label: "",
          data: this.state.data.map((coin) => coin.sparkline_in_7d.price),
          tension: 0.4,
          fill: false,
          borderColor: getBorderColor,
        },
      ],
    };
    return (
      <div>
        <Line data={data} options={options} width={115} height={75} />
      </div>
    );
  }
}
