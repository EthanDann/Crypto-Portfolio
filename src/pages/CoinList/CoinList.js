import React from "react";
import axios from "axios";
import nFormatter from "utils";
import { Sparkline, PriceChart, VolumeChart, PercentDiv } from "components";
import { Progress, Container } from "./progressbar.styled";
import {
  Body,
  ChartsContainer,
  TableContainer,
  CoinContainer,
  CoinTable,
  Styledth,
  TableBody,
  TableRow,
  Td,
  TableDiv,
  ProgressContainer,
  Image,
  Circle,
} from "./coinlist.styled";

class CoinList extends React.Component {
  state = {
    coinList: [],
    priceData: [],
    volumeData: [],
    isLoading: false,
    hasError: false,
  };
  getAllCoins = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.props.activeCurrency}&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({
        coinList: data,
        isLoading: false,
        hasError: false,
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        hasError: true,
      });
    }
  };
  getChartInfo = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.props.activeCurrency}&days=30&interval=daily`
      );
      const priceData = data.prices.map((el) => el[1].toFixed(3));
      const volumeData = data.total_volumes.map((el) => el[1].toFixed(3));
      this.setState({
        priceData,
        volumeData,
        isLoading: false,
        hasError: false,
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        hasError: true,
      });
    }
  };
  getPercentColor = (num) => {
    if (num < 0) return "true";
    return "false";
  };
  componentDidMount = () => {
    this.getAllCoins();
    this.getChartInfo();
  };
  render() {
    const { coinList, priceData, volumeData } = this.state;
    const { isLoading, hasError } = this.state;
    const HasCoin = !this.state.isLoading && this.state.coinList;
    const HasPriceData = !this.state.isLoading && this.state.priceData;
    const HasVolumeData = !this.state.isLoading && this.state.volumeData;
    return (
      <Body>
        {HasPriceData && HasVolumeData && !hasError && (
          <ChartsContainer>
            <PriceChart
              prices={priceData}
              currencySymbol={this.props.currencySymbol}
            />
            <VolumeChart
              volumes={volumeData}
              currencySymbol={this.props.currencySymbol}
            />
          </ChartsContainer>
        )}
        <TableContainer>
          {isLoading && <span>Fetching all coins...</span>}
          {HasCoin && !hasError && (
            <CoinContainer>
              <CoinTable>
                <thead>
                  <tr>
                    <Styledth>#</Styledth>
                    <Styledth>Name</Styledth>
                    <Styledth>Price</Styledth>
                    <Styledth>1h</Styledth>
                    <Styledth>24h</Styledth>
                    <Styledth>7d</Styledth>
                    <Styledth>24h Vol / Market Cap</Styledth>
                    <Styledth>Circulating / Total Sup</Styledth>
                    <Styledth>Last 7d</Styledth>
                  </tr>
                </thead>
                <TableBody>
                  {coinList.map((coin, id) => {
                    return (
                      <TableRow key={coin.id}>
                        <Td>
                          <TableDiv>{id + 1}</TableDiv>
                        </Td>
                        <Td>
                          <TableDiv padding={"0 1rem 0 0.5rem"}>
                            <Image src={coin.image} alt={coin.name} />
                            {coin.name}({coin.symbol.toUpperCase()})
                          </TableDiv>
                        </Td>
                        <Td>
                          <TableDiv>
                            {this.props.currencySymbol ?? "$"}
                            {coin.current_price}
                          </TableDiv>
                        </Td>
                        <PercentDiv
                          list={coinList}
                          hourType={this.getPercentColor(
                            coin.price_change_percentage_1h_in_currency
                          )}
                          hourText={
                            coin.price_change_percentage_1h_in_currency.toFixed(
                              2
                            ) + "%"
                          }
                          dayType={this.getPercentColor(
                            coin.price_change_percentage_24h_in_currency
                          )}
                          dayText={
                            coin.price_change_percentage_24h_in_currency.toFixed(
                              2
                            ) + "%"
                          }
                          weekType={this.getPercentColor(
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
                              {nFormatter(coin.total_volume, 2)}
                            </p>
                            <p>
                              <Circle color={"rgb(71, 76, 119)"} />
                              {nFormatter(coin.market_cap, 2)}
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
                              {nFormatter(coin.circulating_supply, 2)}
                            </p>
                            <p>
                              <Circle color={"rgb(71, 76, 119)"} />
                              {coin.total_supply
                                ? nFormatter(coin.total_supply, 2)
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
            </CoinContainer>
          )}
          {hasError && <span>There was an error.</span>}
        </TableContainer>
      </Body>
    );
  }
}

export default CoinList;
