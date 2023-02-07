import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import getSymbolFromCurrency from "currency-symbol-map";
import { useWindowSize } from "usehooks-ts";
import { Navbar } from "components";
import { useAppSelector } from "store/hooks";
import { Coin, CoinList, Portfolio } from "pages";
import { Container, darkTheme, lightTheme } from "App.styled";

interface Props {
  width: number;
}

const App: React.FC<Props> = () => {
  const themeMode = useAppSelector((state) => state.theme);
  const theme = themeMode === "dark" ? darkTheme : lightTheme;
  const activeCurrency = useAppSelector((state) => state.currency);
  const currencySymbol = getSymbolFromCurrency(activeCurrency);
  const { width: windowWidth } = useWindowSize();
  return (
    <ThemeProvider theme={theme}>
      <Container width={windowWidth - window.scrollX * 2}>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<CoinList />} />
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
