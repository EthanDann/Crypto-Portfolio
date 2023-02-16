import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useWindowSize } from "usehooks-ts";
import { Navbar } from "components";
import { useAppSelector } from "store/hooks";
import { Coin, CoinList, Portfolio } from "pages";
import { Container, darkTheme, lightTheme, GlobalStyle } from "App.styled";

const App = () => {
  const themeMode = useAppSelector((state) => state.theme);
  const theme = themeMode === "dark" ? darkTheme : lightTheme;
  const { width: windowWidth } = useWindowSize();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container width={windowWidth - window.scrollX * 2}>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<CoinList />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/coin/:id" element={<Coin />} />
          </Routes>
        </>
      </Container>
    </ThemeProvider>
  );
};

export default App;
