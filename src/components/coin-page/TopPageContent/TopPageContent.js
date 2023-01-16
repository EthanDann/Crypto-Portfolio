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
  const { image, name, symbol, links, market_data } = props.coin;

  const {
    current_price,
    ath_change_percentage,
    ath,
    atl,
    ath_date,
    atl_date,
    market_cap,
    fully_diluted_valuation,
    total_volume,
    circulating_supply,
    max_supply,
  } = market_data;
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
                  <Image src={image.large} alt={name} />
                </ImageContainer>
                <CoinName>
                  {name}({symbol.toUpperCase()})
                </CoinName>
              </InnerContainer>
            </OuterContainer>
          </CoinInfoContainer>
          <LinkContainer>
            <LinkContent>
              <LinkIconContainer>
                <StyledLinkIcon />
              </LinkIconContainer>
              <Anchor href={links.homepage[0]}>{links.homepage[0]}</Anchor>
            </LinkContent>
          </LinkContainer>
        </Column>
        <AllTimeContent>
          <AllTimeHeader>
            {currencySymbol +
              nFormatter(current_price[activeCurrency], "1,000")}
            <PercentDiv
              type={getPercentColor(
                ath_change_percentage[activeCurrency].toFixed(1)
              )}
            >
              {ath_change_percentage[activeCurrency].toFixed(1) + "%"}
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
            {" " + currencySymbol + nFormatter(ath[activeCurrency], "1,000")}
            <br />
            {dateFormatter(ath_date[activeCurrency])}
          </AllTimeText>
          <AllTimeText>
            <IconContainer>
              <StyledDownArrow />
            </IconContainer>
            All-Time Low:
            {" " + currencySymbol + atl[activeCurrency]}
            <br />
            {dateFormatter(atl_date[activeCurrency])}
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
                nFormatter(market_cap[activeCurrency], "10,000")}
            </ListItem>
            <ListItem>
              <IconContainer>
                <StyledPlusIcon />
              </IconContainer>
              {"Fully Diluted Valuation: " +
                currencySymbol +
                nFormatter(fully_diluted_valuation[activeCurrency], "10,000")}
            </ListItem>
            <ListItem>
              <IconContainer>
                <StyledPlusIcon />
              </IconContainer>
              {"Volume/Market: " +
                (
                  total_volume[activeCurrency] / market_cap[activeCurrency]
                ).toFixed(5)}
            </ListItem>
            <ListItem>
              <IconContainer>
                <StyledPlusIcon />
              </IconContainer>
              {"Total Volume: " +
                nFormatter(total_volume[activeCurrency], "10,000") +
                " " +
                symbol.toUpperCase()}
            </ListItem>
            <ListItem>
              <IconContainer>
                <StyledPlusIcon />
              </IconContainer>
              {"Circulating Supply: " +
                nFormatter(circulating_supply, "10,000") +
                " " +
                symbol.toUpperCase()}
            </ListItem>
            <ListItem>
              <IconContainer>
                <StyledPlusIcon />
              </IconContainer>
              {"Max Supply: " +
                nFormatter(max_supply, "10,000") +
                " " +
                symbol.toUpperCase()}
            </ListItem>
          </List>
        </MarketDataContent>
      </Container>
    </>
  );
};
