import React from "react";
import styled from "styled-components";
import nFormatter from "../../utilities/nformatter";
import { Progress, Container } from "../../styles/ProgressBar.styled";

const Body = styled.body`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondary};
  transition: ${(props) => props.theme.transition};
`;
const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
`;
const CoinContainer = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme.main};
  transition: ${(props) => props.theme.transition};
`;
const CoinTable = styled.table`
  font-size: 1rem;
  margin: auto;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.main};
  transition: ${(props) => props.theme.transition};
`;
const TableHeader = styled.thead``;
const TableBody = styled.tbody`
  vertical-align: middle;
`;
const TableRow = styled.tr`
  text-align: center;
  vertical-align: middle;
`;
const Td = styled.td`
  color: white;
  text-align: left;
  border-bottom: 1px solid gray;
  padding: 0;
  &:nth-child(7) > div,
  &:nth-child(8) > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    position: relative;
  }
  &:nth-child(7) p,
  &:nth-child(8) p {
    margin: 0;
  }
`;
const TableDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;
const PercentDiv = styled(TableDiv)`
  color: ${({ type }) => (type === "negative" ? "red" : "green")};
`;
const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Line = styled.div`
  display: flex;
  width: 100%;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
`;
const Image = styled.img`
  margin: 0.5rem;
  width: 9%;
`;
const Circle = styled.div`
  background-color: ${({ color }) => (color ? color : "white")};
  border: ${({ borderColor }) =>
    borderColor ? `${borderColor} 1.5px solid` : "none"};
  box-shadow: ${({ borderColor }) =>
    borderColor
      ? "rgba(6, 213, 84, 0) 0px 0px 10px -3px, rgba(6, 213, 84, .6) 0px 0px 10px -1px"
      : "none"};
  border-radius: 50%;
  height: 0.6rem;
  width: 0.6rem;
  margin: auto 0.5rem 0 0;
  display: inline-block;
`;
class CoinList extends React.Component {
  state = {
    theme: "dark",
  };
  render() {
    const { list, isLoading, hasError } = this.props;
    const HasCoin = !this.props.isLoading && this.props.list;
    return (
      <Body>
        <TableContainer>
          {isLoading && <span>Fetching all coins...</span>}
          {HasCoin && !hasError && (
            <CoinContainer>
              <CoinTable>
                <TableHeader>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>1h</th>
                    <th>24h</th>
                    <th>7d</th>
                    <th>24h Vol / Market Cap</th>
                    <th>Circulating / Total Sup</th>
                    <th>Last 7d</th>
                  </tr>
                </TableHeader>
                <TableBody>
                  {list.map((coin, id) => {
                    return (
                      <TableRow key={coin.id}>
                        <Td>
                          <TableDiv>{id + 1}</TableDiv>
                        </Td>
                        <Td>
                          <TableDiv>
                            <Image src={coin.image} alt={coin.name} />{" "}
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
                                ? "negative"
                                : "positive"
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
                                ? "negative"
                                : "positive"
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
                                ? "negative"
                                : "positive"
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
                              <Circle />
                              {nFormatter(coin.total_volume, 2)}
                            </p>
                            <p>
                              <Circle />
                              {nFormatter(coin.market_cap, 2)}
                            </p>
                          </ProgressContainer>
                          <Container width={80}>
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
                              <Circle />
                              {nFormatter(coin.circulating_supply, 2)}
                            </p>
                            <p>
                              <Circle />
                              {coin.total_supply
                                ? nFormatter(coin.total_supply, 2)
                                : "∞"}
                            </p>
                          </ProgressContainer>
                          <Container width={80}>
                            {coin.circulating_supply && coin.total_supply}
                            <Progress
                              percent={
                                (coin.circulating_supply / coin.total_supply) *
                                100
                              }
                            />
                          </Container>
                        </Td>
                        <Line />
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
