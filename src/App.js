import { connect } from "react-redux";
import { handleTheme } from "store/theme/action";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ThemeProvider } from "styled-components";
import { Navbar } from "components";
import { useWindowSize } from "hooks";
import { Auth, CoinList, Coin, Portfolio } from "pages";
import { Container, darkTheme, lightTheme } from "App.styled";

const App = (props) => {
  const { theme, activeCurrency, currencySymbol } = props;
  const { user, isAuthenticated } = useAuth0();
  const { width: screenWidth } = useWindowSize();
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Container width={screenWidth - window.scrollX * 2}>
        {isAuthenticated && (
          <>
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
                    user={user}
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
          </>
        )}
        {!isAuthenticated && <Auth theme={theme} />}
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
