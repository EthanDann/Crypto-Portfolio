import { useState } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { useAppSelector, useAppDispatch } from "store/hooks";
import {
  editAsset,
  deleteAsset,
  confirmDeleteAsset,
  updateAsset,
  updateAmount,
  updateDate,
} from "store/portfolio/portfolioSlicer";
import nFormatter from "utils/nFormatter/";
import {
  DeleteButton,
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
  TrashContainer,
  StyledTrashIcon,
  CoinContent,
  AssetContent,
  ImageContainer,
  Image,
  StyledUpArrow,
  StyledDownArrow,
  EditIconContainer,
  StyledEditIcon,
  Subtitle,
} from "./AssetRow.styled";

const AssetRow = () => {
  const [hasDateError, setHasDateError] = useState(false);
  const assets = useAppSelector((state) => state.portfolio.assets);
  const currency = useAppSelector((state) => state.currency);
  const currencySymbol = getSymbolFromCurrency(currency);
  const dispatch = useAppDispatch();
  const handleUpdateAsset = (name: string) => {
    dispatch(updateAsset(name));
  };
  const handleUpdateAmount = (e: {
    target: {
      value: string;
      name: string;
    };
  }) => {
    dispatch(
      updateAmount({ purchase_price: e.target.value, name: e.target.name })
    );
  };
  const handleUpdateDate = (e: { target: { value: string; name: string } }) => {
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
    if (
      year > yyyy ||
      (day > Number(dd) && month >= Number(mm) && year >= yyyy)
    ) {
      setHasDateError(true);
    } else {
      setHasDateError(false);
    }
    dispatch(updateDate({ purchase_date: date, name: e.target.name }));
  };
  return assets.map((coin) => {
    const {
      image,
      name,
      symbol,
      current_price,
      purchase_price,
      historic_price,
      purchase_date,
      price_change_24h,
      max_supply,
      total_volume,
      market_cap,
      circulating_supply,
      confirm_delete,
      editable,
    } = coin;
    const coin_amount = (
      Number(purchase_price.replace(/[^0-9.-]+/g, "")) / historic_price
    ).toFixed(2);
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
          <RowHeader>
            Market Price:
            {!confirm_delete && (
              <TrashContainer onClick={() => dispatch(deleteAsset(name))}>
                <StyledTrashIcon />
              </TrashContainer>
            )}
            {confirm_delete && (
              <DeleteButton onClick={() => dispatch(confirmDeleteAsset(name))}>
                Delete
              </DeleteButton>
            )}
          </RowHeader>
          <CoinContent>
            <ContentRow>
              <Text>Current Price: </Text>
              <AssetInfo>
                {currencySymbol + nFormatter(current_price, "1,000")}
              </AssetInfo>
              <Text>Price Change 24h: </Text>
              <AssetInfo color={price_change_24h >= 0 ? "#00FC2A" : "#fe1040"}>
                {price_change_24h >= 0 ? (
                  <StyledUpArrow />
                ) : (
                  <StyledDownArrow />
                )}
                {price_change_24h && price_change_24h.toFixed(2) + "%"}
              </AssetInfo>
              <Text>Market Cap vs Volume: </Text>
              <AssetInfo
                color={market_cap / total_volume >= 0 ? "#00FC2A" : "#fe1040"}
              >
                <ProgressRow>
                  {market_cap && (market_cap / total_volume).toFixed(0) + "%"}
                  <ProgressContainer>
                    <Progress percent={market_cap / total_volume} />
                  </ProgressContainer>
                </ProgressRow>
              </AssetInfo>
              <Text>Circ Supply vs Max Supply: </Text>
              <AssetInfo
                color={
                  circulating_supply / max_supply >= 0 ? "#00FC2A" : "#fe1040"
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
          </CoinContent>
          <RowHeader>
            Your Coin:
            {!editable && (
              <>
                <EditIconContainer onClick={() => dispatch(editAsset(name))}>
                  <StyledEditIcon />
                </EditIconContainer>
                <Subtitle>
                  Only able to edit Amount Value and Purchase Date
                </Subtitle>
              </>
            )}
            {editable && (
              <SaveButton
                onClick={() => handleUpdateAsset(name)}
                disabled={hasDateError}
              >
                Save
              </SaveButton>
            )}
          </RowHeader>
          <AssetContent>
            <ContentRow>
              <Text>Coin Amount: </Text>
              <AssetInfo>
                {getSymbolFromCurrency(coin.symbol) + coin_amount}
              </AssetInfo>
              <Text>Amount Value: </Text>
              <AssetInput
                disabled={!editable}
                onChange={handleUpdateAmount}
                name={name}
                prefix={currencySymbol}
                thousandSeparator={true}
                value={
                  !editable
                    ? (Number(coin_amount) * current_price).toFixed(2)
                    : purchase_price
                }
              />
              <Text>Amount Price Change Since Purchase: </Text>
              <AssetInfo
                color={
                  current_price / historic_price >= 0 ? "#00FC2A" : "#fe1040"
                }
              >
                {current_price / historic_price >= 0 ? (
                  <StyledUpArrow />
                ) : (
                  <StyledDownArrow />
                )}

                {(current_price / historic_price).toFixed(2) + "%"}
              </AssetInfo>
              <Text>Purchase Date: </Text>
              <DateAsset
                disabled={!editable}
                onChange={handleUpdateDate}
                name={name}
                value={purchase_date}
              />
            </ContentRow>
          </AssetContent>
        </Column>
      </Row>
    );
  });
};

export default AssetRow;
