import React from "react";
import axios from "axios";
import styled from "styled-components";

class CoinPage extends React.Component {
  state = {
    currentCoin: "bitcoin",
    coin: [],
  };
  getCoinData = async () => {
    try {
      const { data } =
        await axios.get(`https://api.coingecko.com/api/v3/coins/${this.state.currentCoin}?localization=false
`);
      this.setState({
        coin: data,
      });
    } catch (err) {}
  };
  componentDidMount() {
    this.getCoinData();
  }
  render() {
    const { coin } = this.state;
    console.log(coin.name);
    return (
      <div>
        <h2>Your Summary</h2>
        {coin.name}
      </div>
    );
  }
}

export default CoinPage;
