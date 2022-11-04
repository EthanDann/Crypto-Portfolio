import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Coin from "./pages/Coin";

class App extends React.Component {
  state = {
    coinList: [],
    isLoading: false,
    hasError: false,
  };
  getAllCoins = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
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
  componentDidMount = () => {
    this.getAllCoins();
  };
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isLoading={this.state.isLoading}
                hasError={this.state.hasError}
                list={this.state.coinList}
              />
            }
          />
          <Route path="Coin/*" element={<Coin />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
