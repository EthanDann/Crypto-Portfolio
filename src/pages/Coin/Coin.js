import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { nFormatter } from "utils";
import { ReactComponent as StackIcon } from "./StackIcon.svg";
import {
  Container,
  Column,
  CoinLinksContainer,
  Link,
  TopPageContent,
  BottomPageContent,
  LeftContent,
  LinkContainer,
  MiddleContent,
  RightContent,
  ImageContainer,
  Image,
  Anchor,
  Text,
  CoinText,
  AllTimeHeader,
  AllTimeText,
  PercentDiv,
  DescriptionContainer,
  Description,
  Header,
  LinkText,
  IconContainer,
  StackIconContainer,
  StyledPlusIcon,
  StyledUpArrow,
  StyledDownArrow,
  StyledLinkIcon,
} from "./Coin.styled";
import { SummaryLink, CurrencyConverter, TimeChart } from "components";

const CoinPage = (props) => {
  let { id } = useParams();
  const [coin, setCoin] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false

`
      )
      .then(({ data }) => {
        setCoin(data);
      });
  }, [id]);
  const getPercentColor = (num) => {
    if (num < 0) return "true";
    return "false";
  };
  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleString("en-US", {
      timeZone: "CST",
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZoneName: "short",
    });
  };
  const activeCurrency = props.activeCurrency.toLowerCase();
  const currencySymbol = props.currencySymbol;
  return (
    <>
      {coin.id && (
        <Container>
          <Header>Your Summary</Header>
          <TopPageContent>
            <Column>
              <LeftContent padding={"4em"}>
                <Text direction={"column"} fontSize={20}>
                  <ImageContainer>
                    <Image src={coin.image.small} alt={coin.name} />
                  </ImageContainer>
                  <CoinText>
                    {coin.name}({coin.symbol.toUpperCase()})
                  </CoinText>
                </Text>
              </LeftContent>
              <LeftContent padding={"1em 4em"}>
                <LinkContainer>
                  <LinkText fontSize={14}>
                    <StyledLinkIcon />
                    <Anchor href={coin.links.homepage[0]}>
                      {coin.links.homepage[0]}
                    </Anchor>
                  </LinkText>
                </LinkContainer>
              </LeftContent>
            </Column>
            <MiddleContent>
              <AllTimeHeader fontSize={40}>
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
                <StackIcon />
              </StackIconContainer>
              <AllTimeText fontSize={15}>
                <IconContainer>
                  <StyledUpArrow />
                </IconContainer>
                All-Time High:
                {" " +
                  currencySymbol +
                  nFormatter(coin.market_data.ath[activeCurrency], "1,000")}
                <br />
                {formatDate(coin.market_data.ath_date[activeCurrency])}
              </AllTimeText>
              <AllTimeText fontSize={15}>
                <IconContainer>
                  <StyledDownArrow />
                </IconContainer>
                All-Time Low:
                {" " + currencySymbol + coin.market_data.atl[activeCurrency]}
                <br />
                {formatDate(coin.market_data.atl_date[activeCurrency])}
              </AllTimeText>
            </MiddleContent>
            <RightContent>
              <Text fontSize={13} direction={"row"}>
                <IconContainer>
                  <StyledPlusIcon />
                </IconContainer>
                {"Market Cap: " +
                  currencySymbol +
                  nFormatter(
                    coin.market_data.market_cap[activeCurrency],
                    "10,000"
                  )}
              </Text>
              <Text fontSize={13}>
                <IconContainer>
                  <StyledPlusIcon />
                </IconContainer>
                {"Fully Diluted Valuation: " +
                  currencySymbol +
                  nFormatter(
                    coin.market_data.fully_diluted_valuation[activeCurrency],
                    "10,000"
                  )}
              </Text>
              <Text fontSize={13}>
                <IconContainer>
                  <StyledPlusIcon />
                </IconContainer>
                {"Volume/Market: " +
                  (
                    coin.market_data.total_volume.usd /
                    coin.market_data.market_cap.usd
                  ).toFixed(5)}
              </Text>
              <Text fontSize={13}>
                <IconContainer>
                  <StyledPlusIcon />
                </IconContainer>
                {"Total Volume: " +
                  nFormatter(coin.market_data.total_volume.usd, "10,000") +
                  " " +
                  coin.symbol.toUpperCase()}
              </Text>
              <Text fontSize={13}>
                <IconContainer>
                  <StyledPlusIcon />
                </IconContainer>
                {"Circulating Supply: " +
                  nFormatter(coin.market_data.circulating_supply, "10,000") +
                  " " +
                  coin.symbol.toUpperCase()}
              </Text>
              <Text fontSize={13}>
                <IconContainer>
                  <StyledPlusIcon />
                </IconContainer>
                {"Max Supply: " +
                  nFormatter(coin.market_data.max_supply, "10,000") +
                  " " +
                  coin.symbol.toUpperCase()}
              </Text>
            </RightContent>
          </TopPageContent>
          <BottomPageContent>
            <Header>Description</Header>
            <DescriptionContainer>
              <Description
                dangerouslySetInnerHTML={{ __html: coin.description.en }}
              />
            </DescriptionContainer>
            <CoinLinksContainer>
              <Link>
                <SummaryLink url={coin.links.blockchain_site[0]} />
              </Link>
              <Link>
                <SummaryLink url={coin.links.blockchain_site[1]} />
              </Link>
              <Link>
                <SummaryLink url={coin.links.blockchain_site[2]} />
              </Link>
            </CoinLinksContainer>
            <CurrencyConverter
              activeCurrency={props.activeCurrency}
              currencySymbol={props.currencySymbol}
              coinSymbol={coin.symbol.toUpperCase()}
              coinPrice={coin.market_data.current_price[activeCurrency]}
              theme={props.theme}
            />
            <TimeChart
              coinPrice={coin.market_data.current_price[activeCurrency]}
              currencySymbol={props.currencySymbol}
            />
          </BottomPageContent>
        </Container>
      )}
    </>
  );
};

export default CoinPage;
