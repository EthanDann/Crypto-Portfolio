import { useState } from "react";
import { connect } from "react-redux";
import {
  handleCoinClick,
  handlePurchasedAmount,
  handlePurchaseDate,
  handleAddAsset,
} from "store/portfolio/action";
import {
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
  CoinName,
  ErrorMessage,
  Image,
  Header,
} from "./Modal.styled";

const Modal = (props) => {
  const [hasDateError, setHasDateError] = useState(false);
  const { selectedCoin, currencySymbol } = props;

  const handleAddAsset = () => {
    props.handleAddAsset();
    props.handleOpen();
    props.handleCoinData();
  };
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
  return (
    <ModalContainer added={selectedCoin.name}>
      <AddAssetModal>
        <Header center modal>
          Select Coin
        </Header>
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
            onClick={() => props.handleOpen()}
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
  );
};

const mapStateToProps = (state) => ({
  selectedCoin: state.portfolio.selectedCoin,
  purchase_price: state.portfolio.purchase_price,
  purchase_date: state.portfolio.purchase_date,
  currencySymbol: state.supportedCurrencies.currencySymbol,
});
const mapDispatchToProps = {
  handleCoinClick,
  handlePurchasedAmount,
  handlePurchaseDate,
  handleAddAsset,
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
