import { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getAllCoins } from "store/coinList/action";
import { CoinListTable, PriceChart, VolumeChart } from "components";
import { Wrapper, ChartWrapper, ChartContainer } from "./coinlist.styled";

const CoinList = (props) => {
  const [coinList, setCoinList] = useState([]);
  const [priceData, setPriceData] = useState([]);
  const [volumeData, setVolumeData] = useState([]);
  const [coinsPerPage, setCoinsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    props.getAllCoins();
    //eslint-disable-next-line
  }, []);
  const getMoreCoins = async () => {
    try {
      setPage(page + 1);
      await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.activeCurrency}&order=market_cap_desc&per_page=${coinsPerPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
        )
        .then((res) => {
          setHasError(false);
          setCoinList([...coinList, ...res.data]);
        });
    } catch (err) {
      setHasError(true);
      setError(err);
    }
  };
  useEffect(() => {
    const getChartInfo = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${props.activeCurrency}&days=30&interval=daily`
        );
        const priceData = data.prices.map((el) => el[1].toFixed(3));
        const volumeData = data.total_volumes.map((el) => el[1].toFixed(3));
        setPriceData(priceData);
        setVolumeData(volumeData);
        setIsLoading(false);
        setHasError(false);
      } catch (err) {
        setIsLoading(false);
        setHasError(true);
        setError(err);
      }
    };
    getChartInfo();
    //eslint-disable-next-line
  }, [props.activeCurrency]);
  const HasCoin = !isLoading && coinList;
  const HasPriceData = !isLoading && priceData;
  const HasVolumeData = !isLoading && volumeData;
  const uniqueList = [];
  const filteredCoinList = props.coins.filter((element) => {
    const isDuplicate = uniqueList.includes(element.id);
    if (!isDuplicate) {
      uniqueList.push(element.id);
      return true;
    }
    return false;
  });
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
          filteredCoinList={filteredCoinList}
          currencySymbol={props.currencySymbol}
          hasError={hasError}
          error={error}
          isLoading={isLoading}
          next={() => getMoreCoins()}
        />
      )}
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  coins: state.coins.data,
  isLoading: state.coins.isLoading,
  hasError: state.coins.hasError,
});
const mapDispatchToProps = {
  getAllCoins,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
