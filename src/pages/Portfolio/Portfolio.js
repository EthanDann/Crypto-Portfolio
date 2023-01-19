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
  AssetInfo,
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
  const { assets, activeCurrency, currencySymbol } = props;
  return (
    <>
      <Container isOpen={isOpen}>
        <ButtonContainer>
          <AddAssetButton onClick={() => handleOpen()}>
            Add Asset
          </AddAssetButton>
        </ButtonContainer>
        <Header>Your Statistics</Header>
        {assets &&
          assets.map((coin) => {
            return (
              <Row key={coin.name}>
                <CoinInfoContainer>
                  <OuterContainer>
                    <InnerContainer>
                      <ImageContainer>
                        <Image src={"coin.image.large"} alt={coin.name} />
                      </ImageContainer>
                      <CoinName>
                        {coin.name}({"btc".toUpperCase()})
                      </CoinName>
                    </InnerContainer>
                  </OuterContainer>
                </CoinInfoContainer>
                <Column>
                  <AllTimeContent>
                    <ContentRow>
                      <Text>Current Price: </Text>
                      <AssetInfo>
                        {/* {currencySymbol + nFormatter(coin.current_price[activeCurrency], "1,000")} */}
                      </AssetInfo>
                      <Text>Price Change 24h: </Text>
                      <AssetInfo>{/*{coin.price_change_24h} */}</AssetInfo>
                      <Text>Market Cap vs Volume: </Text>
                      <AssetInfo>
                        {/* {coin.market_cap[activeCurrency] / coin.total_volume + "%"} */}
                      </AssetInfo>
                      <Text>Circ Supply vs Max Supply: </Text>
                      <IconContainer>{/* <StyledPlusIcon /> */}</IconContainer>
                      <AssetInfo>
                        {/* {nFormatter(coin.max_supply, "10,000") - nFormatter(coin.circulating_supply, "10,000")} */}
                      </AssetInfo>
                    </ContentRow>
                  </AllTimeContent>
                  <AllTimeContent>
                    <ContentRow>
                      <Text>Coin Amount: </Text>
                      <AssetInfo>
                        {coin.purchase_price / coin.price_on_purchase_date}
                      </AssetInfo>
                      <Text>Amount Value: </Text>
                      {/* <IconContainer><StyledPlusIcon /></IconContainer> */}
                      <AssetInfo>{coin.purchase_price}</AssetInfo>
                      <Text>Amount Price Change Since Purchase: </Text>
                      <IconContainer>{/* <StyledPlusIcon /> */}</IconContainer>
                      {/* {coin.current_price / coin.purchase_price} */}
                      <AssetInfo>10%</AssetInfo>
                      <Text>Purchase Date: </Text>
                      <AssetInfo>{coin.purchase_date}</AssetInfo>
                    </ContentRow>
                  </AllTimeContent>
                </Column>
              </Row>
            );
          })}
      </Container>
      {isOpen && (
        <ModalContainer ref={modalRef}>
          <AddAssetModal>
            <Header>Select Coin</Header>
            <Row>
              <CoinInfoContainer>
                <ImageContainer>
                  <Image
                    src={"selectedCoin.image.large"}
                    alt={"selectedCoin.name"}
                  />
                </ImageContainer>
                <CoinName>
                  {"selectedCoin.name"}({"selectedCoin.symbol".toUpperCase()})
                </CoinName>
              </CoinInfoContainer>
              <Column>
                <StyledSearchInput main placeholder={"Search for Coin..."} />
                {/* addAsset={() => props.addAsset()} */}
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

const mapStateToProps = (state) => ({
  assets: state.portfolio.assets,
  activeCurrency: state.supportedCurrencies.activeCurrency,
  currencySymbol: state.supportedCurrencies.currencySymbol,
});

export default connect(mapStateToProps)(Portfolio);
