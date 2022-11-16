import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Navbar } from "components";
import { CoinList, Coin, Portfolio } from "pages";
import nFormatter from "utils";

const Container = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
const darkTheme = {
  main: "rgba(24,27,31,255)",
  secondary: "rgba(30,33,40,255)",
  fontColor: "rgba(255,255,255,255)",
  imageBackgroundColor: "rgba(247,247,247,255)",
  transition: "background-color 500ms linear",
};
const lightTheme = {
  main: "rgba(255,255,255, 255)",
  secondary: "rgba(247,247,247,255)",
  fontColor: "rgba(24,27,31,255)",
  imageBackgroundColor: "rgba(30,33,40,255)",
  transition: "background-color 500ms linear",
};
class App extends React.Component {
  state = {
    coinList: [],
    priceData: [],
    volumeData: [],
    isLoading: false,
    hasError: false,
    theme: "dark",
  };
  handleTheme = () => {
    this.state.theme === "dark"
      ? this.setState({ theme: "light" })
      : this.setState({ theme: "dark" });
  };
  getAllCoins = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
      );
      this.setState({
        coinList: data,
        isLoading: false,
        hasError: false,
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        hasError: true,
      });
    }
  };
  getChartInfo = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily"
      );
      const priceData = data.prices.map((el) => el[1].toFixed(3));
      const volumeData = data.total_volumes.map((el) => el[1].toFixed(3));
      this.setState({
        priceData,
        volumeData,
        isLoading: false,
        hasError: false,
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        hasError: true,
      });
    }
  };
  componentDidMount = () => {
    this.getAllCoins();
    this.getChartInfo();
  };
  render() {
    return (
      <ThemeProvider
        theme={this.state.theme === "dark" ? darkTheme : lightTheme}
      >
        <Container>
          <BrowserRouter>
            <Navbar theme={this.state.theme} handleTheme={this.handleTheme} />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <CoinList
                    isLoading={this.state.isLoading}
                    hasError={this.state.hasError}
                    list={this.state.coinList}
                    priceList={this.state.priceData}
                    volumeList={this.state.volumeData}
                  />
                }
              />
              <Route exact path="/Portfolio" element={<Portfolio />} />
              <Route exact path="Coin/*" element={<Coin />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
