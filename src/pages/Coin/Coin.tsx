import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BackToUp from "@uiw/react-back-to-top";
import getSymbolFromCurrency from "currency-symbol-map";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { getCoinData } from "store/coin/action";
import { TopPageContent, BottomPageContent } from "components";
import { Container } from "./Coin.styled";

const CoinPage = () => {
  const { id } = useParams();
  const coin = useAppSelector((state) => state.coin.data);
  const activeCurrency: string = useAppSelector((state) => state.currency);
  const currencySymbol: string | undefined =
    getSymbolFromCurrency(activeCurrency);
  const theme: string = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCoinData(id));
  }, [id]);
  return (
    <>
      {coin.id && (
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
            currencySymbol={currencySymbol}
            theme={theme}
          />
          <BackToUp>Top</BackToUp>
        </Container>
      )}
    </>
  );
};

export default CoinPage;
