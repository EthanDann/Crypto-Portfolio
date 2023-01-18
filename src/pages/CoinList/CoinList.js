import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAllCoins, getMoreCoins } from "store/coinList/action";
import { CoinListTable, PriceChart, VolumeChart } from "components";
import { Wrapper, ChartWrapper, ChartContainer } from "./coinlist.styled";

const CoinList = (props) => {
  const [priceData, setPriceData] = useState([]);
  const [volumeData, setVolumeData] = useState([]);
  useEffect(() => {
    props.getAllCoins();
    //eslint-disable-next-line
  }, []);
  // useEffect(() => {
  //   const getChartInfo = async () => {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await axios.get(
  //         `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${props.activeCurrency}&days=30&interval=daily`
  //       );
  //       const priceData = data.prices.map((el) => el[1].toFixed(3));
  //       const volumeData = data.total_volumes.map((el) => el[1].toFixed(3));
  //       setPriceData(priceData);
  //       setVolumeData(volumeData);
  //       setIsLoading(false);
  //       setHasError(false);
  //     } catch (err) {
  //       setIsLoading(false);
  //       setHasError(true);
  //       setError(err);
  //     }
  //   };
  //   getChartInfo();
  //   //eslint-disable-next-line
  // }, [props.activeCurrency]);
  const { isLoading, hasError } = props;
  const HasCoin = !isLoading && props.coins;
  const HasPriceData = !isLoading && priceData;
  const HasVolumeData = !isLoading && volumeData;
  return (
    <Wrapper>
      {HasPriceData && HasVolumeData && !hasError && (
        <ChartWrapper>
          <ChartContainer id="price-chart">
            <PriceChart
              prices={priceData}
              currencySymbol={props.currencySymbol}
            />
          </ChartContainer>
          <ChartContainer id="volume-chart">
            <VolumeChart
              volumes={volumeData}
              currencySymbol={props.currencySymbol}
            />
          </ChartContainer>
        </ChartWrapper>
      )}
      {HasCoin && (
        <CoinListTable
          coinList={props.coins}
          currencySymbol={props.currencySymbol}
          hasError={hasError}
          error={props.error}
          isLoading={isLoading}
          next={() => props.getMoreCoins()}
        />
      )}
    </Wrapper>
  );
};
const mapStateToProps = (state) => ({
  coins: state.coins.data,
  pageNum: state.coins.pageNum,
  isLoading: state.coins.isLoading,
  hasError: state.coins.hasError,
  error: state.coins.error,
});
const mapDispatchToProps = {
  getAllCoins,
  getMoreCoins,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
