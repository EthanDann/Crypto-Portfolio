import { useState } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { useAppSelector, useAppDispatch } from "store/hooks";
import {
  purchaseAmount,
  purchaseDate,
  addAsset,
} from "store/portfolio/portfolioSlicer";
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

interface Props {
  handleOpen: () => void;
  handleCoinData: () => void;
}

const Modal: React.FC<Props> = ({ handleOpen, handleCoinData }) => {
  const [hasDateError, setHasDateError] = useState(false);
  const coins = useAppSelector((state) => state.coins);
  const currency = useAppSelector((state) => state.currency.toLowerCase());
  const currencySymbol = getSymbolFromCurrency(currency);
  const selectedCoin = useAppSelector((state) => state.portfolio.selectedCoin);

  const dispatch = useAppDispatch();
  const handleAddAsset = () => {
    const coin = coins.data.filter((el) => el.name.includes(selectedCoin.name));
    dispatch(
      addAsset({
        name: selectedCoin.name,
        coinId: coin[0].id,
        symbol: selectedCoin.symbol,
        image: selectedCoin.image,
        current_price: coin[0].current_price,
        purchase_price: selectedCoin.purchase_price,
        purchase_date: selectedCoin.purchase_date,
        historic_price: coin[0].current_price,
        price_change_24h: coin[0].price_change_24h,
        max_supply: coin[0].max_supply,
        total_volume: coin[0].total_volume,
        market_cap: coin[0].market_cap,
        circulating_supply: coin[0].circulating_supply,
        purchase_currency: currency,
        purchase_currency_symbol: currencySymbol,
      })
    );
    handleOpen();
    handleCoinData();
  };
  const handlePurchaseDate = (e: { target: { value: string } }) => {
    let date = e.target.value;
    let today = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1;
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
    dispatch(purchaseDate(date));
  };
  return (
    <ModalContainer added={selectedCoin.name}>
      <AddAssetModal>
        <Header modal>Select Coin</Header>
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
              <StyledSearchInput />
            </InputContainer>
            <InputContainer>
              <PriceInput
                onChange={(e) => dispatch(purchaseAmount(e.target.value))}
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
            onClick={() => handleOpen()}
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
          >
            Save and Continue
          </ModalButton>
        </ModalButtonContainer>
      </AddAssetModal>
    </ModalContainer>
  );
};

export default Modal;
