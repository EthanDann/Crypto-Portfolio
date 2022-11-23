import React from "react";
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
    coinList: [],
    priceData: [],
    volumeData: [],
    isLoading: false,
    hasError: false,
    theme: true,
  };
  handleTheme = () => {
    this.state.theme
      ? this.setState({ theme: false })
      : this.setState({ theme: true });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme ? darkTheme : lightTheme}>
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
