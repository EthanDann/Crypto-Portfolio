import { connect } from "react-redux";
import { handleTheme } from "store/theme/action";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Navbar } from "components";
import { CoinList, Coin, Portfolio } from "pages";
import { Container, darkTheme, lightTheme } from "App.styled";

const App = (props) => {
  const { theme, activeCurrency, currencySymbol } = props;
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Navbar
            currencySymbol={currencySymbol}
            activeCurrency={activeCurrency}
            theme={theme}
            handleTheme={() => props.handleTheme()}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <CoinList
                  activeCurrency={activeCurrency}
                  currencySymbol={currencySymbol}
                />
              }
            />
            <Route exact path="/Portfolio" element={<Portfolio />} />
            <Route
              path="/Coin/:id"
              element={
                <Coin
                  activeCurrency={activeCurrency}
                  currencySymbol={currencySymbol}
                  theme={theme}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme.activeTheme,
  activeCurrency: state.supportedCurrencies.activeCurrency,
  currencySymbol: state.supportedCurrencies.currencySymbol,
});
const mapDispatchToProps = {
  handleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
