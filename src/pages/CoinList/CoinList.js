import { useEffect } from "react";
import { connect } from "react-redux";
import BackToUp from "@uiw/react-back-to-top";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllCoins, getMoreCoins } from "store/coinList/action";
import { getChartInfo } from "store/charts/action";
import { CoinListTable, PriceChart, VolumeChart, AuthModal } from "components";
import {
  Wrapper,
  Header,
  ChartWrapper,
  ChartContainer,
} from "./coinlist.styled";

const CoinList = (props) => {
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    props.getAllCoins();
    const intervalCall = setInterval(() => {
      props.getChartInfo();
    }, 60000);
    return () => {
      clearInterval(intervalCall);
    };
    //eslint-disable-next-line
  }, []);
  const {
    getMoreCoins,
    priceData,
    volumeData,
    currencySymbol,
    coins,
    error,
    isLoading,
    hasError,
  } = props;
  const HasCoin = !isLoading && coins;
  const HasPriceData = !isLoading && priceData;
  const HasVolumeData = !isLoading && volumeData;
  return (
    <Wrapper>
      {!isAuthenticated && <AuthModal />}
      <Header>Hello, {props.user?.nickname}</Header>
      {HasPriceData && HasVolumeData && !hasError && (
        <ChartWrapper>
          <ChartContainer id="price-chart">
            <PriceChart prices={priceData} currencySymbol={currencySymbol} />
          </ChartContainer>
          <ChartContainer id="volume-chart">
            <VolumeChart volumes={volumeData} currencySymbol={currencySymbol} />
          </ChartContainer>
        </ChartWrapper>
      )}
      {HasCoin && (
        <>
          <CoinListTable
            coinList={coins}
            currencySymbol={currencySymbol}
            hasError={hasError}
            error={error}
            next={() => getMoreCoins()}
          />
        </>
      )}
      {isLoading && <span>Fetching data...</span>}
      {hasError && (
        <span>
          There was an error. Please refresh the page, or wait until connection
          can be made.
        </span>
      )}
      <BackToUp>Top</BackToUp>
    </Wrapper>
  );
};
const mapStateToProps = (state) => ({
  coins: state.coins.data,
  priceData: state.charts.priceData,
  volumeData: state.charts.volumeData,
  pageNum: state.coins.pageNum,
  isLoading: state.coins.isLoading,
  hasError: state.coins.hasError,
  error: state.coins.error,
});
const mapDispatchToProps = {
  getAllCoins,
  getChartInfo,
  getMoreCoins,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
