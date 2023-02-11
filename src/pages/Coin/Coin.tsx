import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BackToUp from "@uiw/react-back-to-top";
import getSymbolFromCurrency from "currency-symbol-map";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { getCoinData } from "store/coin/coinSlicer";
import { TopPageContent, BottomPageContent } from "components";
import { Container } from "./Coin.styled";

interface KeyNumberIsString {
  [key: number]: string;
}
interface KeyStringIsNumber {
  [key: string]: number;
}
interface KeyStringIsString {
  [key: string]: string;
}
interface MarketData {
  price_change_24h_in_currency: KeyStringIsNumber;
  current_price: KeyStringIsNumber;
  ath: KeyStringIsNumber;
  ath_date: KeyStringIsString;
  ath_change_percentage: KeyStringIsNumber;
  atl: KeyStringIsNumber;
  atl_date: KeyStringIsString;
  atl_change_percentage: KeyStringIsNumber;
  market_cap: KeyStringIsNumber;
  fully_diluted_valuation: KeyStringIsString;
  total_volume: KeyStringIsNumber;
  circulating_supply: number;
  max_supply: number;
}
interface Coin {
  name: string;
  market_data: MarketData;
  image: { small: string };
  links: {
    homepage: KeyNumberIsString;
    blockchain_site: KeyNumberIsString;
  };
  symbol: string;
  description: { en: string };
}

const CoinPage = () => {
  const { id } = useParams<string>();
  const coin: Coin = useAppSelector((state) => state.coin.data);
  const activeCurrency: string = useAppSelector((state) => state.currency);
  const currencySymbol: string | undefined =
    getSymbolFromCurrency(activeCurrency);
  const theme: string = useAppSelector((state) => state.theme);
  const { isLoading, hasError } = useAppSelector((state) => state.coin);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getCoinData(id));
    }
  }, []);

  return (
    <>
      {coin.name && (
        <Container>
          <TopPageContent
            coin={coin}
            activeCurrency={activeCurrency}
            currencySymbol={currencySymbol}
            theme={theme}
          />
          <BottomPageContent
            coin={coin}
            id={id}
            activeCurrency={activeCurrency}
            theme={theme}
          />
          <BackToUp>Top</BackToUp>
        </Container>
      )}
      {isLoading && <span>Fetching coin data...</span>}
      {hasError && <span>There was an error.</span>}
    </>
  );
};

export default CoinPage;
