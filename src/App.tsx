import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useWindowSize } from "usehooks-ts";
import { Navbar } from "components";
import { useAppSelector } from "store/hooks";
import { Coin, CoinList, Portfolio, SearchPage } from "pages";
import {
  Wrapper,
  Container,
  NavbarWrapper,
  darkTheme,
  lightTheme,
  GlobalStyle,
} from "App.styled";

const App = () => {
  const themeMode = useAppSelector((state) => state.theme);
  const theme = themeMode === "dark" ? darkTheme : lightTheme;
  const { width: windowWidth } = useWindowSize();
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container width={windowWidth - window.scrollX * 2}>
          <>
            <NavbarWrapper>
              <Navbar />
            </NavbarWrapper>
            <Routes>
              <Route path="/" element={<CoinList />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/coin/:id" element={<Coin />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </>
        </Container>
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;
