import React from "react";
import axios from "axios";
import getSymbolFromCurrency from "currency-symbol-map";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Navbar } from "components";
import { CoinList, Coin, Portfolio } from "pages";

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
    supportedCurrencies: [],
    currencySymbol: localStorage.getItem("symbol") ?? "$",
    activeCurrency: localStorage.getItem("currency") ?? "USD",
    isOpen: false,
    theme: true,
  };
  getSupportedCurrencies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/simple/supported_vs_currencies
`
      );
      this.setState({ supportedCurrencies: data.sort() });
    } catch (err) {}
  };
  handleTheme = () => {
    this.state.theme
      ? this.setState({ theme: false })
      : this.setState({ theme: true });
  };
  handleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleCurrency = (e) => {
    this.setState({
      activeCurrency: e.target.innerHTML,
      isOpen: false,
      currencySymbol: getSymbolFromCurrency(e.target.innerHTML),
    });
    localStorage.setItem("currency", e.target.innerHTML);
    localStorage.setItem("symbol", getSymbolFromCurrency(e.target.innerHTML));
    window.location.reload();
  };
  componentDidMount = () => {
    this.getSupportedCurrencies();
  };
  render() {
    return (
      <ThemeProvider theme={this.state.theme ? darkTheme : lightTheme}>
        <Container>
          <BrowserRouter>
            <Navbar
              supportedCurrencies={this.state.supportedCurrencies}
              currencySymbol={this.state.currencySymbol}
              isOpen={this.state.isOpen}
              handleOpen={this.handleOpen}
              activeCurrency={this.state.activeCurrency}
              handleCurrency={this.handleCurrency}
              theme={this.state.theme}
              handleTheme={this.handleTheme}
            />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <CoinList
                    activeCurrency={this.state.activeCurrency}
                    currencySymbol={this.state.currencySymbol}
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
