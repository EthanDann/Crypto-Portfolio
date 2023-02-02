import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ThemeProvider } from "styled-components";
import getSymbolFromCurrency from "currency-symbol-map";
import { useWindowSize } from "usehooks-ts";
import { Navbar } from "components";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { handleTheme } from "store/theme/themeSlicer";
import { Auth, CoinList, Coin, Portfolio } from "pages";
import { Container, darkTheme, lightTheme } from "App.styled";

const App = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme);
  const theme = themeMode === "dark" ? darkTheme : lightTheme;
  const activeCurrency = useAppSelector((state) => state.currencies);
  const currencySymbol = getSymbolFromCurrency(activeCurrency);
  const { user, isAuthenticated } = useAuth0();
  const { width } = useWindowSize();
  return (
    <ThemeProvider theme={theme}>
      <Container width={width - window.scrollX * 2}>
        {isAuthenticated && (
          <>
            <Navbar
              theme={theme}
              handleTheme={() => dispatch(handleTheme(null))}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <CoinList currencySymbol={currencySymbol} user={user} />
                }
              />
              <Route path="/Portfolio" element={<Portfolio />} />
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

export default App;
