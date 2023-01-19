import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  handleCoinClick,
  handlePurchasedAmount,
  handlePurchaseDate,
  handleSave,
} from "store/portfolio/action";
import {
  Container,
  ButtonContainer,
  Button,
  ModalButtonContainer,
  ModalInputContainer,
  ModalContentContainer,
  ModalImageContainer,
  ModalButton,
  ModalContainer,
  ModalInfoContainer,
  AddAssetModal,
  InputContainer,
  StyledSearchInput,
  StyledInput,
  StyledDatePicker,
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
  FillerDiv,
  ArrowContainer,
  Circle,
  Arrow,
  Pulse,
} from "./Portfolio.styled";

const Portfolio = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  const handlePurchasedAmount = (e) => {
    props.handlePurchasedAmount(e.target.value);
  };
  const handlePurchaseDate = (e) => {
    let date = e.target.value;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    year > yyyy ? setHasError(true) : setHasError(false);
    month > mm ? setHasError(true) : setHasError(false);
    day > dd && month >= mm && year >= yyyy
      ? setHasError(true)
      : setHasError(false);
    !hasError ? props.handlePurchaseDate(date) : (date = null);
  };
  const handleAddAsset = () => {
    props.handleSave();
    setIsOpen(false);
  };
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
  const { assets, selectedCoin, activeCurrency, currencySymbol } = props;
  console.log(props);
  return (
    <>
      <Container isOpen={isOpen}>
        <ButtonContainer>
          <Button onClick={() => handleOpen()}>Add Asset</Button>
        </ButtonContainer>
        {assets && <Header>Your Statistics</Header> &&
          assets.map((coin) => {
            const {
              image,
              name,
              symbol,
              current_price,
              purchase_price,
              price_on_purchase_date,
              purchase_date,
              price_change_percentage_24h_in_currency,
              total_volume,
              total_supply,
              market_cap,
              circulating_supply,
            } = coin;
            return (
              <Row key={name}>
                <CoinInfoContainer>
                  <OuterContainer>
                    <InnerContainer>
                      <ImageContainer>
                        <Image src={"coin.image.large"} alt={name} />
                      </ImageContainer>
                      <CoinName>
                        {name}({"btc".toUpperCase()})
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
                        {purchase_price / price_on_purchase_date}
                      </AssetInfo>
                      <Text>Amount Value: </Text>
                      {/* <IconContainer><StyledPlusIcon /></IconContainer> */}
                      <AssetInfo>{purchase_price}</AssetInfo>
                      <Text>Amount Price Change Since Purchase: </Text>
                      <IconContainer>{/* <StyledPlusIcon /> */}</IconContainer>
                      {/* {coin.current_price / coin.purchase_price} */}
                      <AssetInfo>10%</AssetInfo>
                      <Text>Purchase Date: </Text>
                      <AssetInfo>{purchase_date}</AssetInfo>
                    </ContentRow>
                  </AllTimeContent>
                </Column>
              </Row>
            );
          })}
      </Container>
      {!assets && (
        <FillerDiv>
          <ArrowContainer>
            <Circle>
              <Arrow>↑</Arrow>
            </Circle>
            <Pulse></Pulse>
          </ArrowContainer>
          Add an Asset!
        </FillerDiv>
      )}
      {isOpen && (
        <ModalContainer ref={modalRef}>
          <AddAssetModal>
            <Header center>Select Coin</Header>
            <ModalContentContainer>
              {selectedCoin.name && (
                <ModalInfoContainer>
                  <ModalImageContainer>
                    <Image src={selectedCoin.image} alt={selectedCoin.name} />
                  </ModalImageContainer>
                  <CoinName>
                    {selectedCoin.name}({selectedCoin.symbol})
                  </CoinName>
                </ModalInfoContainer>
              )}
              <ModalInputContainer>
                <InputContainer>
                  <StyledSearchInput
                    handleCoinClick={(coin) => props.handleCoinClick(coin)}
                    main
                    placeholder={"Search for Coin..."}
                  />
                </InputContainer>
                <InputContainer>
                  <StyledInput
                    onChange={handlePurchasedAmount}
                    placeholder="Purchase Amount"
                  />
                </InputContainer>
                <InputContainer>
                  <StyledInput
                    onChange={handlePurchaseDate}
                    placeholder="Purchase Date"
                  />
                  {hasError && <span>Date cannot be in the future.</span>}
                </InputContainer>
              </ModalInputContainer>
            </ModalContentContainer>
            <ModalButtonContainer>
              <ModalButton
                background={"#rgb(255,255,255)"}
                hover={"rgb(225,225,225)"}
                padding={"1rem 5rem"}
                onClick={() => setIsOpen(false)}
              >
                Close
              </ModalButton>
              <ModalButton onClick={handleAddAsset} padding={"1rem 3rem"}>
                Save and Continue
              </ModalButton>
            </ModalButtonContainer>
          </AddAssetModal>
        </ModalContainer>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  assets: state.portfolio.assets,
  selectedCoin: state.portfolio.selectedCoin,
  purchase_price: state.portfolio.purchase_price,
  purchase_date: state.portfolio.purchase_date,
  activeCurrency: state.supportedCurrencies.activeCurrency,
  currencySymbol: state.supportedCurrencies.currencySymbol,
});
const mapDispatchToProps = {
  handleCoinClick,
  handlePurchasedAmount,
  handlePurchaseDate,
  handleSave,
};
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
