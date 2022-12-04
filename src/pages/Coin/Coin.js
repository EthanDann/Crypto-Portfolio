import React from "react";
import axios from "axios";
import { Container, Row, Summary, Header } from "./Coin.styled";

class CoinPage extends React.Component {
  state = {
    currentCoin: "bitcoin",
    coin: [],
  };
  getCoinData = async () => {
    const activeCurrency = this.props.activeCurrency;
    try {
      const { data } =
        await axios.get(`https://api.coingecko.com/api/v3/coins/${this.state.currentCoin}?localization=false
`);
      console.log(
        "current price in usd: ",
        data.market_data.current_price[activeCurrency.toLowerCase()]
      );

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
    const activeCurrency = this.props.activeCurrency;
    // console.log(
    //   "not displaying: ",
    //   coin.market_data.current_price[activeCurrency.toLowerCase()]
    // );
    return (
      <Container>
        <Row>
          <Summary key={coin.id}>
            <Header>Your Summary</Header>
            {coin.name}
          </Summary>
          <Summary key={coin.id}>{coin.name}</Summary>
        </Row>
      </Container>
    );
  }
}

export default CoinPage;
