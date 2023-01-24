import { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getCoinHistory,
  getCoinData,
  handleCoinClick,
  handlePurchasedAmount,
  handlePurchaseDate,
  handleSave,
  handleUpdate,
  handleUpdateAmount,
  handleUpdateDate,
} from "store/portfolio/action";
import nFormatter from "utils/nFormatter/";
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
  PriceInput,
  SaveButton,
  Row,
  RowHeader,
  ProgressRow,
  ProgressContainer,
  Progress,
  ContentRow,
  Column,
  CoinName,
  CoinInfoContainer,
  OuterContainer,
  InnerContainer,
  Text,
  AssetInfo,
  AssetInput,
  DateAsset,
  ErrorMessage,
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
  StyledUpArrow,
  StyledDownArrow,
  EditIconContainer,
  StyledEditIcon,
  Subtitle,
  FillerDiv,
  ArrowContainer,
  Circle,
  Arrow,
  Pulse,
} from "./Portfolio.styled";

const Portfolio = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDateError, setHasDateError] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const { assets, selectedCoin, currencySymbol, getCoinData, getCoinHistory } =
    props;
  const handleCoinData = () => {
    getCoinHistory();
    getCoinData();
  };
  const handleEdit = () => {
    setIsEditable(true);
  };
  const handleUpdateAmount = (e) => {
    props.handleUpdateAmount(e.target.value, e.target.name);
  };
  const handleUpdateDate = (e) => {
    let date = e.target.value;
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (year > yyyy || (day > dd && month >= mm && year >= yyyy)) {
      setHasDateError(true);
    } else {
      setHasDateError(false);
    }
    props.handleUpdateDate(date, e.target.name);
  };
  const handleUpdate = (e) => {
    setIsEditable(false);
    props.handleUpdate(e.target.value, e.target.name);
    handleCoinData();
  };
  const handleOpen = () => setIsOpen(!isOpen);
  const handlePurchasedAmount = (e) => {
    props.handlePurchasedAmount(e.target.value);
  };
  const handlePurchaseDate = (e) => {
    let date = e.target.value;
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    if (year > yyyy || (day > dd && month >= mm && year >= yyyy)) {
      setHasDateError(true);
    } else setHasDateError(false);
    props.handlePurchaseDate(date);
  };
  const handleAddAsset = () => {
    props.handleSave();
    setIsOpen(false);
    handleCoinData();
  };
  useEffect(() => {
    handleCoinData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container isOpen={isOpen}>
        <ButtonContainer>
          <Button onClick={() => handleOpen()}>Add Asset</Button>
        </ButtonContainer>
        {assets && <Header>Your Statistics</Header> &&
          !props.hasError &&
          assets.map((coin) => {
            const {
              image,
              name,
              symbol,
              current_price,
              purchase_price,
              price_on_purchase_date,
              purchase_date,
              price_change_24h,
              max_supply,
              total_volume,
              market_cap,
              circulating_supply,
            } = coin;
            return (
              <Row key={name}>
                <CoinInfoContainer>
                  <OuterContainer>
                    <InnerContainer>
                      <ImageContainer>
                        <Image src={image} alt={name} />
                      </ImageContainer>
                      <CoinName>
                        {name}({symbol})
                      </CoinName>
                    </InnerContainer>
                  </OuterContainer>
                </CoinInfoContainer>
                <Column>
                  <RowHeader>Market Price:</RowHeader>
                  <AllTimeContent>
                    <ContentRow>
                      <Text>Current Price: </Text>
                      <AssetInfo>
                        {currencySymbol + nFormatter(current_price, "1,000")}
                      </AssetInfo>
                      <Text>Price Change 24h: </Text>
                      <AssetInfo
                        color={price_change_24h >= 0 ? "#00FC2A" : "#fe1040"}
                      >
                        {price_change_24h >= 0 ? (
                          <StyledUpArrow />
                        ) : (
                          <StyledDownArrow />
                        )}
                        {price_change_24h && price_change_24h.toFixed(2) + "%"}
                      </AssetInfo>
                      <Text>Market Cap vs Volume: </Text>
                      <AssetInfo
                        color={
                          market_cap / total_volume >= 0 ? "#00FC2A" : "#fe1040"
                        }
                      >
                        <ProgressRow>
                          {market_cap &&
                            (market_cap / total_volume).toFixed(0) + "%"}
                          <ProgressContainer>
                            <Progress percent={market_cap / total_volume} />
                          </ProgressContainer>
                        </ProgressRow>
                      </AssetInfo>
                      <Text>Circ Supply vs Max Supply: </Text>
                      <AssetInfo
                        color={
                          circulating_supply / max_supply >= 0
                            ? "#00FC2A"
                            : "#fe1040"
                        }
                      >
                        {circulating_supply / max_supply >= 0 ? (
                          <StyledUpArrow />
                        ) : (
                          <StyledDownArrow />
                        )}
                        {circulating_supply &&
                          (circulating_supply / max_supply).toFixed(2) + "%"}
                      </AssetInfo>
                    </ContentRow>
                  </AllTimeContent>
                  <RowHeader>
                    Your Coin:
                    {!isEditable && (
                      <>
                        <EditIconContainer>
                          <StyledEditIcon onClick={handleEdit} />
                        </EditIconContainer>
                        <Subtitle>
                          Only able to edit Amount Value and Purchase Date
                        </Subtitle>
                      </>
                    )}
                    {isEditable && (
                      <SaveButton
                        onClick={handleUpdate}
                        value={name}
                        disabled={hasDateError}
                      >
                        Save
                      </SaveButton>
                    )}
                  </RowHeader>
                  <AllTimeContent>
                    <ContentRow>
                      <Text>Coin Amount: </Text>
                      <AssetInfo>
                        {(
                          Number(purchase_price.replace(/[^0-9.-]+/g, "")) /
                          price_on_purchase_date
                        ).toFixed(2)}
                      </AssetInfo>
                      <Text>Amount Value: </Text>
                      <AssetInput
                        disabled={!isEditable}
                        onChange={handleUpdateAmount}
                        name={name}
                        prefix={currencySymbol}
                        thousandSeparator={true}
                        value={purchase_price}
                      />
                      <Text>Amount Price Change Since Purchase: </Text>
                      <AssetInfo
                        color={
                          current_price / Number(price_on_purchase_date) >= 0
                            ? "#00FC2A"
                            : "#fe1040"
                        }
                      >
                        {current_price / Number(price_on_purchase_date) >= 0 ? (
                          <StyledUpArrow />
                        ) : (
                          <StyledDownArrow />
                        )}

                        {(
                          current_price / Number(price_on_purchase_date)
                        ).toFixed(2) + "%"}
                      </AssetInfo>
                      <Text>Purchase Date: </Text>
                      <DateAsset
                        disabled={!isEditable}
                        onChange={handleUpdateDate}
                        name={name}
                        value={purchase_date}
                      />
                    </ContentRow>
                  </AllTimeContent>
                </Column>
              </Row>
            );
          })}
        {props.hasError && <Row>{props.error}</Row>}
      </Container>
      {assets.length === 0 && (
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
        <ModalContainer>
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
                  <PriceInput
                    onChange={handlePurchasedAmount}
                    placeholder="Purchase Amount"
                    prefix={currencySymbol}
                    thousandSeparator={true}
                  />
                </InputContainer>
                <InputContainer>
                  <StyledInput
                    onChange={handlePurchaseDate}
                    placeholder="Purchase Date"
                  />
                  {hasDateError && (
                    <ErrorMessage>Date cannot be in the future.</ErrorMessage>
                  )}
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
              <ModalButton
                onClick={handleAddAsset}
                disabled={
                  hasDateError ||
                  selectedCoin.name == null ||
                  selectedCoin.purchase_price == null ||
                  selectedCoin.purchase_date == null
                }
                padding={"1rem 3rem"}
              >
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
  hasError: state.portfolio.hasError,
  error: state.portfolio.error,
});
const mapDispatchToProps = {
  getCoinHistory,
  getCoinData,
  handleCoinClick,
  handlePurchasedAmount,
  handlePurchaseDate,
  handleSave,
  handleUpdateAmount,
  handleUpdateDate,
  handleUpdate,
};
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
