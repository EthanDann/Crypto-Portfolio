import { useEffect } from "react";
import { connect } from "react-redux";
import BackToUp from "@uiw/react-back-to-top";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppSelector } from "store/hooks";
import { getChartInfo } from "store/charts/action";
import { CoinListTable, PriceChart, VolumeChart, AuthModal } from "components";
import {
  Wrapper,
  Header,
  ChartWrapper,
  ChartContainer,
} from "./coinlist.styled";

const CoinList = (props) => {
  const { hasError } = useAppSelector((state) => state.coins);
  const isLoading = useAppSelector((state) => state.coins.isLoading);
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    const intervalCall = setInterval(() => {
      props.getChartInfo();
    }, 60000);
    return () => {
      clearInterval(intervalCall);
    };
  }, []);
  const { priceData, volumeData, currencySymbol } = props;
  const HasPriceData = !isLoading && priceData;
  const HasVolumeData = !isLoading && volumeData;
  return (
    <Wrapper>
      {!isAuthenticated && <AuthModal />}
      <Header>Hello, {user?.nickname}</Header>
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
      <CoinListTable currencySymbol={currencySymbol} />
      {isLoading && <span>Fetching data...</span>}
      {hasError && <span>There was an error.</span>}
      <BackToUp>Top</BackToUp>
    </Wrapper>
  );
};
const mapStateToProps = (state) => ({
  priceData: state.charts.priceData,
  volumeData: state.charts.volumeData,
  hasError: state.coins.hasError,
});
const mapDispatchToProps = {
  getChartInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
