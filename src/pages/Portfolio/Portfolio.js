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
  ContentRow,
  Column,
  CoinName,
  CoinInfoContainer,
  OuterContainer,
  InnerContainer,
  Text,
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
        <Row>
          <CoinInfoContainer>
            <OuterContainer>
              <InnerContainer>
                <ImageContainer>
                  <Image src={"coin.image.large"} alt={"coin.name"} />
                </ImageContainer>
                <CoinName>
                  {"coin.name"}({"coin.symbol".toUpperCase()})
                </CoinName>
              </InnerContainer>
            </OuterContainer>
          </CoinInfoContainer>
          <Column>
            <AllTimeContent>
              <ContentRow>
                <Text>Current Price: </Text>
                {/* {currencySymbol + nFormatter(coin.current_price[activeCurrency], "1,000")} */}
                <Text>Price Change 24h: </Text>
                {/*{coin.price_change_24h} */}
                <Text>Market Cap vs Volume: </Text>
                {/* {coin.market_cap[activeCurrency] / coin.total_volume + "%"} */}
                <Text>Circ Supply vs Max Supply: </Text>
                <IconContainer>{/* <StyledPlusIcon /> */}</IconContainer>
                {/* {nFormatter(coin.max_supply, "10,000") - nFormatter(coin.circulating_supply, "10,000")} */}
              </ContentRow>
            </AllTimeContent>
            <AllTimeContent>
              <ContentRow>
                <Text>Coin Amount: </Text>
                {/* {coin.amount} */}
                <Text>Amount Value: </Text>
                <IconContainer>{/* <StyledPlusIcon /> */}</IconContainer>
                {/* {coin.purchase_price} */}
                <Text>Amount Price Change Since Purchase: </Text>
                <IconContainer>{/* <StyledPlusIcon /> */}</IconContainer>
                {/* {coin.current_price / coin.purchase_price} */}
                <Text>Purchase Date: </Text>
                {/* {coin.purchaseDate} */}
              </ContentRow>
            </AllTimeContent>
          </Column>
        </Row>
      </Container>
      {isOpen && (
        <ModalContainer ref={modalRef}>
          <AddAssetModal>
            <Header>Select Coin</Header>
            <Row>
              <CoinInfoContainer>
                <ImageContainer>
                  <Image src={"coin.image.large"} alt={"coin.name"} />
                </ImageContainer>
                <CoinName>
                  {"coin.name"}({"coin.symbol".toUpperCase()})
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
