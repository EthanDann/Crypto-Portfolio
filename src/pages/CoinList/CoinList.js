import React from "react";
import nFormatter from "utils";
import { Sparkline } from "components";
import { PriceChart, VolumeChart } from "components";
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
  PercentDiv,
  ProgressContainer,
  Image,
  Circle,
} from "./coinlist.styled";

class CoinList extends React.Component {
  state = {
    theme: "dark",
  };

  render() {
    const { list, priceList, volumeList, isLoading, hasError } = this.props;
    const HasCoin = !this.props.isLoading && this.props.list;
    const HasPriceData = !this.props.isLoading && this.props.priceList;
    const HasVolumeData = !this.props.isLoading && this.props.volumeList;
    return (
      <Body>
        {HasPriceData && HasVolumeData && (
          <ChartsContainer>
            <PriceChart prices={priceList} />
            <VolumeChart volumes={volumeList} />
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
                  {list.map((coin, id) => {
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
                          <TableDiv>${coin.current_price}</TableDiv>
                        </Td>
                        <Td>
                          <PercentDiv
                            type={
                              coin.price_change_percentage_1h_in_currency < 0
                                ? "true"
                                : "false"
                            }
                          >
                            {coin.price_change_percentage_1h_in_currency.toFixed(
                              2
                            )}
                            %
                          </PercentDiv>
                        </Td>
                        <Td>
                          <PercentDiv
                            type={
                              coin.price_change_percentage_24h_in_currency < 0
                                ? "true"
                                : "false"
                            }
                          >
                            {coin.price_change_percentage_24h_in_currency.toFixed(
                              2
                            )}
                            %
                          </PercentDiv>
                        </Td>
                        <Td>
                          <PercentDiv
                            type={
                              coin.price_change_percentage_7d_in_currency < 0
                                ? "true"
                                : "false"
                            }
                          >
                            {coin.price_change_percentage_7d_in_currency.toFixed(
                              2
                            )}
                            %
                          </PercentDiv>
                        </Td>
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
