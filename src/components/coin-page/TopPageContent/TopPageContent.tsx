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
import { Props } from "./TopPageContent.types";

export const TopPageContent: React.FC<Props> = ({
  coin,
  activeCurrency,
  currencySymbol,
}) => {
  const getPercentColor = (num: number) => {
    if (num < 0) return true;
    return false;
  };
  const { image, name, symbol, links, market_data } = coin;
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
            {currencySymbol?.toLowerCase() +
              nFormatter(current_price[activeCurrency.toLowerCase()], "1,000")}
            <PercentDiv
              type={getPercentColor(
                ath_change_percentage[activeCurrency.toLowerCase()]
              )}
            >
              {ath_change_percentage[activeCurrency.toLowerCase()].toFixed(1) +
                "%"}
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
              currencySymbol?.toLowerCase() +
              nFormatter(ath[activeCurrency.toLowerCase()], "1,000")}
            <br />
            {dateFormatter(ath_date[activeCurrency.toLowerCase()])}
          </AllTimeText>
          <AllTimeText>
            <IconContainer>
              <StyledDownArrow />
            </IconContainer>
            All-Time Low:
            {" " +
              currencySymbol?.toLowerCase() +
              atl[activeCurrency.toLowerCase()]}
            <br />
            {dateFormatter(atl_date[activeCurrency.toLowerCase()])}
          </AllTimeText>
        </AllTimeContent>
        <MarketDataContent>
          <List>
            <ListItem>
              <IconContainer>
                <StyledPlusIcon />
              </IconContainer>
              {"Market Cap: " +
                currencySymbol?.toLowerCase() +
                nFormatter(market_cap[activeCurrency.toLowerCase()], "10,000")}
            </ListItem>
            <ListItem>
              <IconContainer>
                <StyledPlusIcon />
              </IconContainer>
              {"Fully Diluted Valuation: " +
                currencySymbol?.toLowerCase() +
                nFormatter(
                  fully_diluted_valuation[activeCurrency.toLowerCase()],
                  "10,000"
                )}
            </ListItem>
            <ListItem>
              <IconContainer>
                <StyledPlusIcon />
              </IconContainer>
              {"Volume/Market: " +
                (
                  total_volume[activeCurrency.toLowerCase()] /
                  market_cap[activeCurrency.toLowerCase()]
                ).toFixed(5)}
            </ListItem>
            <ListItem>
              <IconContainer>
                <StyledPlusIcon />
              </IconContainer>
              {"Total Volume: " +
                nFormatter(
                  total_volume[activeCurrency.toLowerCase()],
                  "10,000"
                ) +
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
