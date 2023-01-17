import { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { currencyFormatter } from "utils";
import { Sparkline, PriceChart, VolumeChart, PercentDiv } from "components";
import {
  Wrapper,
  ChartWrapper,
  ChartContainer,
  TableContainer,
  CoinTable,
  ScrollableDiv,
  ScrollText,
  TableHeader,
  HeaderTr,
  Styledth,
  TableBody,
  TableRow,
  Td,
  TableDiv,
  StyledLink,
  NameContainer,
  CoinName,
  CurrencySymbol,
  ProgressContainer,
  Image,
  Circle,
  Progress,
  Container,
} from "./coinlist.styled";

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
    const getAllCoins = async () => {
      try {
        setIsLoading(true);
        await axios
          .get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.activeCurrency}&order=market_cap_desc&per_page=${coinsPerPage}&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
          )
          .then(({ data }) => {
            setCoinList(data);
            setIsLoading(false);
            setHasError(false);
          });
      } catch (err) {
        setHasError(true);
        setError(err);
      }
    };
    getAllCoins();
    //eslint-disable-next-line
  }, [props.activeCurrency, coinsPerPage]);
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
  const getPercentColor = (num) => {
    if (num < 0) return "true";
    return "false";
  };
  const HasCoin = !isLoading && coinList;
  const HasPriceData = !isLoading && priceData;
  const HasVolumeData = !isLoading && volumeData;
  const uniqueList = [];
  const filteredCoinList = coinList.filter((element) => {
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
      <TableContainer>
        {isLoading && <span>Fetching all coins...</span>}
        {HasCoin && !hasError && (
          <ScrollableDiv id="scrollableDiv">
            <InfiniteScroll
              dataLength={coinList.length}
              next={() => getMoreCoins()}
              hasMore={true}
              loader={<ScrollText>Loading...</ScrollText>}
              scrollableTarget={"scrollableDiv"}
              endMessage={<ScrollText>Yay! You have seen it all</ScrollText>}
            >
              <CoinTable>
                <TableHeader>
                  <HeaderTr>
                    <Styledth>#</Styledth>
                    <Styledth>Name</Styledth>
                    <Styledth>Price</Styledth>
                    <Styledth>1h</Styledth>
                    <Styledth>24h</Styledth>
                    <Styledth>7d</Styledth>
                    <Styledth>24h Vol / Market Cap</Styledth>
                    <Styledth>Circulating / Total Sup</Styledth>
                    <Styledth>Last 7d</Styledth>
                  </HeaderTr>
                </TableHeader>
                <TableBody>
                  {filteredCoinList.map((coin, id) => {
                    return (
                      <TableRow key={id}>
                        <Td>
                          <TableDiv>{id + 1}</TableDiv>
                        </Td>
                        <Td>
                          <StyledLink to={`/Coin/${coin.id}`}>
                            <NameContainer>
                              <Image src={coin.image} alt={coin.name} />
                              <CoinName>
                                {coin.name}({coin.symbol.toUpperCase()})
                              </CoinName>
                            </NameContainer>
                          </StyledLink>
                        </Td>
                        <Td>
                          <TableDiv>
                            <CurrencySymbol>
                              {props.currencySymbol ?? "$"}
                            </CurrencySymbol>
                            <span>{coin.current_price}</span>
                          </TableDiv>
                        </Td>
                        <PercentDiv
                          list={coinList}
                          hourType={getPercentColor(
                            coin.price_change_percentage_1h_in_currency
                          )}
                          hourText={
                            coin.price_change_percentage_1h_in_currency.toFixed(
                              2
                            ) + "%"
                          }
                          dayType={getPercentColor(
                            coin.price_change_percentage_24h_in_currency
                          )}
                          dayText={
                            coin.price_change_percentage_24h_in_currency.toFixed(
                              2
                            ) + "%"
                          }
                          weekType={getPercentColor(
                            coin.price_change_percentage_7d_in_currency
                          )}
                          weekText={
                            coin.price_change_percentage_7d_in_currency.toFixed(
                              2
                            ) + "%"
                          }
                        />
                        <Td>
                          <ProgressContainer>
                            <p>
                              <Circle color={"rgb(138, 146, 178)"} />
                              {currencyFormatter(coin.total_volume, 2)}
                            </p>
                            <p>
                              <Circle color={"rgb(71, 76, 119)"} />
                              {currencyFormatter(coin.market_cap, 2)}
                            </p>
                          </ProgressContainer>
                          <Container width={80} padding={0.25}>
                            <Progress
                              percent={
                                (coin.total_volume / coin.market_cap) * 100
                              }
                            />
                          </Container>
                        </Td>
                        <Td>
                          <ProgressContainer>
                            <p>
                              <Circle color={"rgb(138, 146, 178)"} />
                              {currencyFormatter(coin.circulating_supply, 2)}
                            </p>
                            <p>
                              <Circle color={"rgb(71, 76, 119)"} />
                              {coin.total_supply
                                ? currencyFormatter(coin.total_supply, 2)
                                : "∞"}
                            </p>
                          </ProgressContainer>
                          <Container width={80} padding={0.25}>
                            <Progress
                              percent={
                                (coin.circulating_supply / coin.total_supply) *
                                100
                              }
                            />
                          </Container>
                        </Td>
                        <Td>
                          <Sparkline prices={coin.sparkline_in_7d.price} />
                        </Td>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </CoinTable>
            </InfiniteScroll>
          </ScrollableDiv>
        )}
        {hasError && <span>${error}</span>}
      </TableContainer>
    </Wrapper>
  );
};

export default CoinList;
