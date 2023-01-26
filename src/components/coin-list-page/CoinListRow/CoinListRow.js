import { currencyFormatter } from "utils";
import { Sparkline, PercentDiv } from "components";
import {
  TableBody,
  TableRow,
  Td,
  TableDiv,
  StyledLink,
  NameContainer,
  CoinName,
  CurrencySymbol,
  StyledP,
  ProgressContainer,
  Image,
  Circle,
  Progress,
  Container,
} from "./CoinListRow.styled";

const CoinListRow = (props) => {
  const getPercentColor = (num) => {
    if (num < 0) return "true";
    return "false";
  };
  const { currencySymbol, coinList } = props;
  return (
    <TableBody>
      {coinList.map((coin, index) => {
        const {
          id,
          image,
          name,
          symbol,
          current_price,
          price_change_percentage_1h_in_currency,
          price_change_percentage_24h_in_currency,
          price_change_percentage_7d_in_currency,
          total_volume,
          total_supply,
          market_cap,
          circulating_supply,
          sparkline_in_7d,
        } = coin;
        return (
          <TableRow key={index}>
            <Td>
              <TableDiv>{index + 1}</TableDiv>
            </Td>
            <Td>
              <StyledLink to={`/Coin/${id}`}>
                <NameContainer>
                  <Image src={image} alt={name} />
                  <CoinName>
                    {name}({symbol.toUpperCase()})
                  </CoinName>
                </NameContainer>
              </StyledLink>
            </Td>
            <Td>
              <TableDiv>
                <CurrencySymbol>{currencySymbol ?? "$"}</CurrencySymbol>
                <span>{current_price}</span>
              </TableDiv>
            </Td>
            <PercentDiv
              list={coinList}
              hourType={getPercentColor(price_change_percentage_1h_in_currency)}
              hourText={
                (price_change_percentage_1h_in_currency.toFixed(2) ??
                  price_change_percentage_1h_in_currency) + "%"
              }
              dayType={getPercentColor(price_change_percentage_24h_in_currency)}
              dayText={price_change_percentage_24h_in_currency.toFixed(2) + "%"}
              weekType={getPercentColor(price_change_percentage_7d_in_currency)}
              weekText={price_change_percentage_7d_in_currency.toFixed(2) + "%"}
            />
            <Td>
              <ProgressContainer>
                <StyledP color={"rgb(138, 146, 178)"}>
                  <Circle color={"rgb(138, 146, 178)"} />
                  {currencyFormatter(total_volume, 2)}
                </StyledP>
                <StyledP color={"rgb(71, 76, 119)"}>
                  <Circle color={"rgb(71, 76, 119)"} />
                  {currencyFormatter(market_cap, 2)}
                </StyledP>
              </ProgressContainer>
              <Container width={80} padding={0.25}>
                <Progress percent={(total_volume / market_cap) * 100} />
              </Container>
            </Td>
            <Td>
              <ProgressContainer>
                <StyledP color={"rgb(138, 146, 178)"}>
                  <Circle color={"rgb(138, 146, 178)"} />
                  {currencyFormatter(circulating_supply, 2)}
                </StyledP>
                <StyledP color={"rgb(71, 76, 119)"}>
                  <Circle color={"rgb(71, 76, 119)"} />
                  {total_supply ? currencyFormatter(total_supply, 2) : "∞"}
                </StyledP>
              </ProgressContainer>
              <Container width={80} padding={0.25}>
                <Progress percent={(circulating_supply / total_supply) * 100} />
              </Container>
            </Td>
            <Td>
              <Sparkline prices={sparkline_in_7d.price} />
            </Td>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default CoinListRow;
