import { useEffect } from "react";
import { connect } from "react-redux";
import BackToUp from "@uiw/react-back-to-top";
import { getAllCoins, getMoreCoins } from "store/coinList/action";
import { getChartInfo } from "store/charts/action";
import { CoinListTable, PriceChart, VolumeChart } from "components";
import { Wrapper, ChartWrapper, ChartContainer } from "./coinlist.styled";

const CoinList = (props) => {
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
  const HasCoin = !isLoading && props.coins;
  const HasPriceData = !isLoading && priceData;
  const HasVolumeData = !isLoading && volumeData;
  return (
    <Wrapper>
      <h1>Hello, {props.user?.nickname}</h1>
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
            isLoading={isLoading}
            next={() => getMoreCoins()}
          />
        </>
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
