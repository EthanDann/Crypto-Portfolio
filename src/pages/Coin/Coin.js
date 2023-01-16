import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { TopPageContent, BottomPageContent } from "components";
import { Container } from "./Coin.styled";

const CoinPage = (props) => {
  let { id } = useParams();
  const [coin, setCoin] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false
`
      )
      .then(({ data }) => {
        setCoin(data);
      });
  }, [id]);
  return (
    <>
      {coin.id && (
        <Container>
          <TopPageContent
            coin={coin}
            activeCurrency={props.activeCurrency}
            currencySymbol={props.currencySymbol}
            theme={props.theme}
          />
          <BottomPageContent
            coin={coin}
            id={id}
            activeCurrency={props.activeCurrency}
            currencySymbol={props.currencySymbol}
            theme={props.theme}
          />
        </Container>
      )}
    </>
  );
};

export default CoinPage;
