import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ThemeProvider } from "styled-components";
import getSymbolFromCurrency from "currency-symbol-map";
import { useWindowSize } from "usehooks-ts";
import { Navbar } from "components";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { handleTheme } from "store/theme/themeSlicer";
import { Auth, Coin, CoinList, Portfolio } from "pages";
import { Container, darkTheme, lightTheme } from "App.styled";

interface Props {
  width: number;
}

const App: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme);
  const theme = themeMode === "dark" ? darkTheme : lightTheme;
  const activeCurrency = useAppSelector((state) => state.currencies);
  const currencySymbol = getSymbolFromCurrency(activeCurrency);
  const { user, isAuthenticated } = useAuth0();
  const { width: windowWidth } = useWindowSize();

  return (
    <ThemeProvider theme={theme}>
      <Container width={windowWidth - window.scrollX * 2}>
        <>
          <Navbar handleTheme={() => dispatch(handleTheme(null))} />
          <Routes>
            <Route
              path="/"
              element={<CoinList currencySymbol={currencySymbol} user={user} />}
            />
            <Route
              path="/portfolio"
              element={<Portfolio currencySymbol={currencySymbol} />}
            />
            <Route
              path="/coin/:id"
              element={
                <Coin
                  currencySymbol={currencySymbol}
                  activeCurrency={activeCurrency}
                />
              }
            />
          </Routes>
        </>
      </Container>
    </ThemeProvider>
  );
};

export default App;
