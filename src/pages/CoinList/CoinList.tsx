import { useEffect } from "react";
import BackToUp from "@uiw/react-back-to-top";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { getChartInfo } from "store/charts/chartsSlicer";
import { CoinListTable, PriceChart, VolumeChart } from "components";
import {
  Wrapper,
  Header,
  ChartWrapper,
  ChartContainer,
} from "./coinlist.styled";

const CoinList = () => {
  const { hasError } = useAppSelector((state) => state.coins);
  const currency = useAppSelector((state) => state.currency);
  const isLoading = useAppSelector((state) => state.coins.isLoading);
  const priceData = useAppSelector((state) => state.charts.priceData);
  const volumeData = useAppSelector((state) => state.charts.volumeData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getChartInfo({ currency }));
    const intervalCall = setInterval(() => {
      dispatch(getChartInfo({ currency }));
    }, 60000);
    return () => {
      clearInterval(intervalCall);
    };
  }, [currency]);
  const HasPriceData = !isLoading && priceData;
  const HasVolumeData = !isLoading && volumeData;
  return (
    <Wrapper>
      <Header>Your Overview</Header>
      {HasPriceData && HasVolumeData && !hasError && !isLoading && (
        <ChartWrapper>
          <ChartContainer id="price-chart">
            <PriceChart prices={priceData} />
          </ChartContainer>
          <ChartContainer id="volume-chart">
            <VolumeChart volumes={volumeData} />
          </ChartContainer>
        </ChartWrapper>
      )}
      <CoinListTable />
      {isLoading && <span>Fetching data...</span>}
      {hasError && <span>There was an error.</span>}
      <BackToUp>Top</BackToUp>
    </Wrapper>
  );
};

export default CoinList;
