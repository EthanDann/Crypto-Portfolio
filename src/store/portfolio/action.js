import { parseISO } from "date-fns";
import {
  SELECT_COIN,
  PURCHASE_AMOUNT,
  PURCHASE_DATE,
  SAVE_ASSET,
} from "./index";

export const handleCoinClick = (coin) => (dispatch, getState) => {
  const state = getState();
  const data = state.coins.data.filter((el) => el.name.includes(coin));
  coin = {
    name: coin,
    image: data[0].image,
    symbol: data[0].symbol,
  };
  dispatch({ type: SELECT_COIN, payload: coin });
};
export const handlePurchasedAmount = (amount) => (dispatch, getState) => {
  dispatch({ type: PURCHASE_AMOUNT, payload: amount });
};
export const handlePurchaseDate = (value) => (dispatch, getState) => {
  dispatch({ type: PURCHASE_DATE, payload: value });
};
export const handleSave = () => (dispatch, getState) => {
  const state = getState();
  const data = {
    name: state.portfolio.selectedCoin.name,
    purchase_price: state.portfolio.purchase_price,
    purchase_date: state.portfolio.purchase_date,
  };
  dispatch({
    type: SAVE_ASSET,
    payload: data,
  });
};
