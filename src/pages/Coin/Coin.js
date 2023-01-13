import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { TopPageContent, BottomPageContent } from "components";

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
        <>
          <TopPageContent
            coin={coin}
            activeCurrency={props.activeCurrency}
            currencySymbol={props.currencySymbol}
          />
          <BottomPageContent
            coin={coin}
            activeCurrency={props.activeCurrency}
            currencySymbol={props.currencySymbol}
          />
        </>
      )}
    </>
  );
};

export default CoinPage;
