import { nFormatter, dateFormatter } from "utils";
import {
  Container,
  Column,
  CoinName,
  CoinInfoContainer,
  OuterContainer,
  InnerContainer,
  LinkContent,
  LinkContainer,
  AllTimeContent,
  MarketDataContent,
  ImageContainer,
  Image,
  Anchor,
  AllTimeHeader,
  AllTimeText,
  PercentDiv,
  List,
  ListItem,
  Header,
  LinkIconContainer,
  IconContainer,
  StackIconContainer,
  StyledPlusIcon,
  StyledUpArrow,
  StyledDownArrow,
  StyledLinkIcon,
  StyledStackIcon,
} from "./TopPageContent.styled";

export const TopPageContent = (props) => {
  const getPercentColor = (num) => {
    if (num < 0) return true;
    return false;
  };
  const { coin } = props.coin;
  const activeCurrency = props.activeCurrency.toLowerCase();
  const currencySymbol = props.currencySymbol;
  return (
    <>
      <Header>Your Summary</Header>
      <Container>
        <Column>
          <CoinInfoContainer>
            <OuterContainer>
              <InnerContainer>
                <ImageContainer>
                  <Image src={coin.image.small} alt={coin.name} />
                </ImageContainer>
                <CoinName>
                  {coin.name}({coin.symbol.toUpperCase()})
                </CoinName>
              </InnerContainer>
            </OuterContainer>
          </CoinInfoContainer>
          <LinkContainer>
            <LinkContent>
              <LinkIconContainer>
                <StyledLinkIcon />
              </LinkIconContainer>
              <Anchor href={coin.links.homepage[0]}>
                {coin.links.homepage[0]}
              </Anchor>
            </LinkContent>
          </LinkContainer>
        </Column>
        <AllTimeContent>
          <AllTimeHeader>
            {currencySymbol +
              nFormatter(
                coin.market_data.current_price[activeCurrency],
                "1,000"
              )}
            <PercentDiv
              type={getPercentColor(
                coin.market_data.ath_change_percentage.btc.toFixed(1)
              )}
            >
              {coin.market_data.ath_change_percentage.btc.toFixed(1) + "%"}
            </PercentDiv>
          </AllTimeHeader>
          <StackIconContainer>
            <StyledStackIcon />
          </StackIconContainer>
          <AllTimeText>
            <IconContainer>
              <StyledUpArrow />
            </IconContainer>
            All-Time High:
            {" " +
              currencySymbol +
              nFormatter(coin.market_data.ath[activeCurrency], "1,000")}
            <br />
            {dateFormatter(coin.market_data.ath_date[activeCurrency])}
          </AllTimeText>
          <AllTimeText>
            <IconContainer>
              <StyledDownArrow />
            </IconContainer>
            All-Time Low:
            {" " + currencySymbol + coin.market_data.atl[activeCurrency]}
            <br />
            {dateFormatter(coin.market_data.atl_date[activeCurrency])}
          </AllTimeText>
        </AllTimeContent>
        <MarketDataContent>
          <List>
            <ListItem>
              <IconContainer>
                <StyledPlusIcon />
              </IconContainer>
              {"Market Cap: " +
                currencySymbol +
                nFormatter(
                  coin.market_data.market_cap[activeCurrency],
                  "10,000"
                )}
            </ListItem>
            <ListItem>
              <IconContainer>
                <StyledPlusIcon />
              </IconContainer>
              {"Fully Diluted Valuation: " +
                currencySymbol +
                nFormatter(
                  coin.market_data.fully_diluted_valuation[activeCurrency],
                  "10,000"
                )}
            </ListItem>
            <ListItem>
              <IconContainer>
                <StyledPlusIcon />
              </IconContainer>
              {"Volume/Market: " +
                (
                  coin.market_data.total_volume.usd /
                  coin.market_data.market_cap.usd
                ).toFixed(5)}
            </ListItem>
            <ListItem>
              <IconContainer>
                <StyledPlusIcon />
              </IconContainer>
              {"Total Volume: " +
                nFormatter(coin.market_data.total_volume.usd, "10,000") +
                " " +
                coin.symbol.toUpperCase()}
            </ListItem>
            <ListItem>
              <IconContainer>
                <StyledPlusIcon />
              </IconContainer>
              {"Circulating Supply: " +
                nFormatter(coin.market_data.circulating_supply, "10,000") +
                " " +
                coin.symbol.toUpperCase()}
            </ListItem>
            <ListItem>
              <IconContainer>
                <StyledPlusIcon />
              </IconContainer>
              {"Max Supply: " +
                nFormatter(coin.market_data.max_supply, "10,000") +
                " " +
                coin.symbol.toUpperCase()}
            </ListItem>
          </List>
        </MarketDataContent>
      </Container>
    </>
  );
};
