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
  MiddleContent,
  RightContent,
  ImageContainer,
  Image,
  Anchor,
  Text,
  PercentDiv,
  DescriptionContainer,
  Description,
  Header,
  StyledPlusIcon,
  StyledUpArrow,
  StyledDownArrow,
  StyledLinkIcon,
} from "./Coin.styled";

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
                  <div>
                    {coin.name}({coin.symbol.toUpperCase()})
                  </div>
                </Text>
              </LeftContent>
              <LeftContent padding={"1em 4em"}>
                <Text fontSize={14}>
                  <StyledLinkIcon />
                  <Anchor href={coin.links.homepage[0]}>
                    {coin.links.homepage[0]}
                  </Anchor>
                </Text>
              </LeftContent>
            </Column>
            <MiddleContent>
              <Text fontSize={40} direction={"row"}>
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
              </Text>
              <Text>
                <StackIcon />
              </Text>
              <Text fontSize={15}>
                <StyledUpArrow />
                All-Time High:
                {" " +
                  currencySymbol +
                  nFormatter(coin.market_data.ath[activeCurrency], "1,000")}
                <br />
                {formatDate(coin.market_data.ath_date[activeCurrency])}
              </Text>
              <Text fontSize={15}>
                <StyledDownArrow />
                All-Time Low:
                {" " + currencySymbol + coin.market_data.atl[activeCurrency]}
                <br />
                {formatDate(coin.market_data.atl_date[activeCurrency])}
              </Text>
            </MiddleContent>
            <RightContent>
              <Text fontSize={13} direction={"row"}>
                <StyledPlusIcon />
                {"Market Cap: " +
                  currencySymbol +
                  nFormatter(
                    coin.market_data.market_cap[activeCurrency],
                    "10,000"
                  )}
              </Text>
              <Text fontSize={13}>
                <StyledPlusIcon />
                {"Fully Diluted Valuation: " +
                  currencySymbol +
                  nFormatter(
                    coin.market_data.fully_diluted_valuation[activeCurrency],
                    "10,000"
                  )}
              </Text>
              <Text fontSize={13}>
                <StyledPlusIcon />
                {"Volume/Market: " +
                  (
                    coin.market_data.total_volume.usd /
                    coin.market_data.market_cap.usd
                  ).toFixed(5)}
              </Text>
              <Text fontSize={13}>
                <StyledPlusIcon />
                {"Total Volume: " +
                  nFormatter(coin.market_data.total_volume.usd, "10,000") +
                  " " +
                  coin.symbol.toUpperCase()}
              </Text>
              <Text fontSize={13}>
                <StyledPlusIcon />
                {"Circulating Supply: " +
                  nFormatter(coin.market_data.circulating_supply, "10,000") +
                  " " +
                  coin.symbol.toUpperCase()}
              </Text>
              <Text fontSize={13}>
                <StyledPlusIcon />
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
          </BottomPageContent>
        </Container>
      )}
    </>
  );
};

export default CoinPage;
