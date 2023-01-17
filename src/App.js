import React, { useState, useEffect } from "react";
import axios from "axios";
import getSymbolFromCurrency from "currency-symbol-map";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Navbar } from "components";
import { CoinList, Coin, Portfolio } from "pages";
import { Container, darkTheme, lightTheme } from "App.styled";

const App = () => {
  const [supportedCurrencies, setSupportedCurrencies] = useState([]);
  const [activeCurrency, setActiveCurrency] = useState("usd");
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const [theme, setTheme] = useState(true);
  useEffect(() => {
    const getSupportedCurrencies = async () => {
      try {
        await axios
          .get(
            `https://api.coingecko.com/api/v3/simple/supported_vs_currencies
`
          )
          .then(({ data }) => {
            setSupportedCurrencies(data);
          });
      } catch (err) {}
    };

    getSupportedCurrencies();
  }, [supportedCurrencies]);
  const handleTheme = () => {
    theme ? setTheme(false) : setTheme(true);
  };
  const handleSetStorage = (name, item) => {
    localStorage.setItem(name, item);
  };
  const handleCurrency = (e) => {
    if (activeCurrency === e.target.innerHTML) {
      document.querySelectorAll("li").focus();
    }
    setActiveCurrency(e.target.innerHTML);
    setCurrencySymbol(getSymbolFromCurrency(e.target.innerHTML));
    handleSetStorage("currency", e.target.innerHTML);
    handleSetStorage("symbol", getSymbolFromCurrency(e.target.innerHTML));
    window.location.reload();
  };
  const handleTextChange = (e) => {
    console.log(e.target.value);
    setActiveCurrency(e.target.value);
  };

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Navbar
            supportedCurrencies={supportedCurrencies}
            currencySymbol={currencySymbol}
            activeCurrency={activeCurrency}
            handleCurrency={handleCurrency}
            handleTextChange={handleTextChange}
            theme={theme}
            handleTheme={() => handleTheme()}
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

export default App;
