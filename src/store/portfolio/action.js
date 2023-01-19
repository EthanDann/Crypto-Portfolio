import axios from "axios";
import {
  SELECT_COIN,
  GET_COIN_HISTORY,
  PURCHASE_AMOUNT,
  PURCHASE_DATE,
  SAVE_ASSET,
} from "./index";

export const handleCoinClick = (coin) => (dispatch, getState) => {
  const state = getState();
  const data = state.coins.data.filter((el) => el.name.includes(coin));
  console.log(data);
  coin = {
    name: coin,
    image: data[0].image,
    symbol: data[0].symbol,
  };
  dispatch({ type: SELECT_COIN, payload: coin });
};
export const getCoinHistory = (coin) => (dispatch, getState) => {
  try {
    const state = getState();
    state.portfolio.assets.map(async (coin) => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coin.name.toLowerCase()}/history?date=${
          coin.purchase_date
        }`
      );
      dispatch({
        type: GET_COIN_HISTORY,
        payload: [...state.portfolio.assets, data],
      });
    });
  } catch (err) {}
};
export const handlePurchasedAmount = (amount) => (dispatch, getState) => {
  dispatch({ type: PURCHASE_AMOUNT, payload: amount });
};
export const handlePurchaseDate = (value) => (dispatch, getState) => {
  dispatch({ type: PURCHASE_DATE, payload: value });
};
export const handleSave = () => (dispatch, getState) => {
  const state = getState();
  const coin = state.coins.data.filter((el) =>
    el.name.includes(state.portfolio.selectedCoin.name)
  );
  const data = {
    name: state.portfolio.selectedCoin.name,
    purchase_price: state.portfolio.purchase_price,
    purchase_date: state.portfolio.purchase_date,
    price_on_purchase_date: coin.currenct_price,
  };
  dispatch({
    type: SAVE_ASSET,
    payload: data,
  });
};
