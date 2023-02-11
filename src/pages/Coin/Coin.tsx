import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BackToUp from "@uiw/react-back-to-top";
import getSymbolFromCurrency from "currency-symbol-map";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { getCoinData } from "store/coin/coinSlicer";
import { TopPageContent, BottomPageContent } from "components";
import { Container } from "./Coin.styled";
import { Coin } from "./Coin.types";

const CoinPage = () => {
  const { id } = useParams<string>();
  const coin: Coin = useAppSelector((state) => state.coin.data);
  const activeCurrency: string = useAppSelector((state) => state.currency);
  const currencySymbol = getSymbolFromCurrency(activeCurrency);
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
