import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div``;
const Header = styled.h2``;

class CoinPage extends React.Component {
  state = {
    currentCoin: "bitcoin",
    coin: [],
  };
  getCoinData = async () => {
    try {
      const data =
        await axios.get(`https://api.coingecko.com/api/v3/coins/${this.state.currentCoin}?localization=false
`);
      this.setState({
        coinData: data.data,
      });
    } catch (err) {}
  };
  componentDidMount() {
    this.getCoinData();
  }
  render() {
    const { coin } = this.state;
    return (
      <Container>
        <Header>Your Summary</Header>
        {coin.name}
      </Container>
    );
  }
}

export default CoinPage;
