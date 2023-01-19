import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { nFormatter, dateFormatter } from "utils";
import {
  Container,
  ButtonContainer,
  AddAssetButton,
  ModalContainer,
  AddAssetModal,
  InputContainer,
  StyledSearchInput,
  StyledInput,
  Row,
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
} from "./Portfolio.styled";

const Portfolio = (props) => {
  // const [coin, setCoin] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  //   useEffect(() => {
  //     axios
  //       .get(
  //         `https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false
  // `
  //       )
  //       .then(({ data }) => {
  //         setCoin(data);
  //       });
  //   }, []);
  const handleOpen = () => setIsOpen(!isOpen);
  const modalRef = useRef(null);
  useOutsideAlerter(modalRef);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  return (
    <>
      <Container isOpen={isOpen}>
        <ButtonContainer>
          <AddAssetButton onClick={() => handleOpen()}>
            Add Asset
          </AddAssetButton>
        </ButtonContainer>
        <Header>Your Statistics</Header>
        <Column>
          <Row>
            <CoinInfoContainer>
              <OuterContainer>
                <InnerContainer>
                  <ImageContainer>
                    <Image src={"image.large"} alt={"name"} />
                  </ImageContainer>
                  <CoinName>
                    {"name"}({"symbol".toUpperCase()})
                  </CoinName>
                </InnerContainer>
              </OuterContainer>
            </CoinInfoContainer>
            <AllTimeContent>
              <AllTimeHeader>
                {/* {currencySymbol + nFormatter(current_price[activeCurrency], "1,000")} */}
              </AllTimeHeader>
              <MarketDataContent>
                <List>
                  <ListItem>
                    <IconContainer>{/* <StyledPlusIcon /> */}</IconContainer>
                    {/* {"Market Cap: " +
              currencySymbol +
              nFormatter(market_cap[activeCurrency], "10,000")} */}
                  </ListItem>
                  <ListItem>
                    {/* {"Total Volume: " +
              nFormatter(total_volume[activeCurrency], "10,000") +
              " " +
              symbol.toUpperCase()} */}
                  </ListItem>
                  <ListItem>
                    <IconContainer>{/* <StyledPlusIcon /> */}</IconContainer>
                    {/* {"Circulating Supply: " +
              nFormatter(circulating_supply, "10,000") +
              " " +
              symbol.toUpperCase()} */}
                  </ListItem>
                  <ListItem>
                    {/* {"Max Supply: " +
              nFormatter(max_supply, "10,000") +
              " " +
              symbol.toUpperCase()} */}
                  </ListItem>
                </List>
              </MarketDataContent>
            </AllTimeContent>
          </Row>
          <Row>
            <AllTimeContent>
              <AllTimeHeader>
                {/* {currencySymbol + nFormatter(current_price[activeCurrency], "1,000")} */}
              </AllTimeHeader>
              <MarketDataContent>
                <List>
                  <ListItem>
                    <IconContainer>{/* <StyledPlusIcon /> */}</IconContainer>
                    {/* {"Market Cap: " +
              currencySymbol +
              nFormatter(market_cap[activeCurrency], "10,000")} */}
                  </ListItem>
                  <ListItem>
                    {/* {"Total Volume: " +
              nFormatter(total_volume[activeCurrency], "10,000") +
              " " +
              symbol.toUpperCase()} */}
                  </ListItem>
                  <ListItem>
                    <IconContainer>{/* <StyledPlusIcon /> */}</IconContainer>
                    {/* {"Circulating Supply: " +
              nFormatter(circulating_supply, "10,000") +
              " " +
              symbol.toUpperCase()} */}
                  </ListItem>
                  <ListItem>
                    {/* {"Max Supply: " +
              nFormatter(max_supply, "10,000") +
              " " +
              symbol.toUpperCase()} */}
                  </ListItem>
                </List>
              </MarketDataContent>
            </AllTimeContent>
          </Row>
        </Column>
      </Container>
      {isOpen && (
        <ModalContainer ref={modalRef}>
          <AddAssetModal>
            <Header>Select Coin</Header>
            <Row>
              <CoinInfoContainer>
                <ImageContainer>
                  <Image src={"image.large"} alt={"name"} />
                </ImageContainer>
                <CoinName>
                  {"name"}({"symbol".toUpperCase()})
                </CoinName>
              </CoinInfoContainer>
              <Column>
                <StyledSearchInput main placeholder={"Search for Coin..."} />
                <InputContainer>
                  <StyledInput placeholder="Purchased Amount" />
                </InputContainer>
                <InputContainer>
                  <StyledInput placeholder="Purchased Date" />
                </InputContainer>
              </Column>
            </Row>
          </AddAssetModal>
        </ModalContainer>
      )}
    </>
  );
};

export default connect()(Portfolio);
