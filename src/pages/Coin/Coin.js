import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getCoinData } from "store/coin/action";
import { TopPageContent, BottomPageContent } from "components";
import { Container } from "./Coin.styled";

const CoinPage = (props) => {
  let { id } = useParams();
  useEffect(() => {
    getCoinData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { getCoinData, coin, activeCurrency, currencySymbol, theme } = props;
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
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  coin: state.coin.data,
  isLoading: state.coin.isLoading,
  error: state.coin.error,
});
const mapDispatchToProps = {
  getCoinData,
};
export default connect(mapStateToProps, mapDispatchToProps)(CoinPage);
