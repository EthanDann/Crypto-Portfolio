import { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  handleEdit,
  handleUpdate,
  handleDelete,
  handleConfirmDelete,
  handleUpdateAmount,
  handleUpdateDate,
} from "store/portfolio/action";
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

const AssetRow = (props) => {
  const [hasDateError, setHasDateError] = useState(false);
  const { currencySymbol, assets } = props;

  const handleUpdate = (name) => {
    props.handleUpdate(name);
    props.handleCoinData();
  };
  const handleConfirmDelete = (id) => {
    props.handleConfirmDelete(id);
  };
  const handleDelete = (name) => {
    props.handleDelete(name);
  };
  const handleEdit = (name) => {
    props.handleEdit(name);
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

  return assets.map((coin) => {
    const {
      image,
      name,
      uniqueId,
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
      purchase_currency_symbol,
      confirm_delete,
      editable,
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
          <RowHeader>
            Market Price:
            {!confirm_delete && (
              <TrashContainer onClick={() => handleDelete(name)}>
                <StyledTrashIcon />
              </TrashContainer>
            )}
            {confirm_delete && (
              <DeleteButton onClick={() => handleConfirmDelete(uniqueId)}>
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
                <EditIconContainer onClick={() => handleEdit(name)}>
                  <StyledEditIcon />
                </EditIconContainer>
                <Subtitle>
                  Only able to edit Amount Value and Purchase Date
                </Subtitle>
              </>
            )}
            {editable && (
              <SaveButton
                onClick={() => handleUpdate(name)}
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
                {(
                  Number(purchase_price.replace(/[^0-9.-]+/g, "")) /
                  price_on_purchase_date
                ).toFixed(2)}
              </AssetInfo>
              <Text>Amount Value: </Text>
              <AssetInput
                disabled={!editable}
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

                {(current_price / Number(price_on_purchase_date)).toFixed(2) +
                  "%"}
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
const mapStateToProps = (state) => ({
  assets: state.portfolio.assets,
  purchase_price: state.portfolio.purchase_price,
  purchase_date: state.portfolio.purchase_date,
  activeCurrency: state.supportedCurrencies.activeCurrency,
  currencySymbol: state.supportedCurrencies.currencySymbol,
});
const mapDispatchToProps = {
  handleUpdateAmount,
  handleUpdateDate,
  handleEdit,
  handleUpdate,
  handleDelete,
  handleConfirmDelete,
};
export default connect(mapStateToProps, mapDispatchToProps)(AssetRow);
