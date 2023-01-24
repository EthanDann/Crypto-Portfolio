import axios from "axios";
import {
  SELECT_COIN,
  GET_COIN_HISTORY,
  GET_COIN_DATA,
  GET_COIN_ERROR,
  PURCHASE_AMOUNT,
  PURCHASE_DATE,
  SAVE_ASSET,
  UPDATE_ASSET,
  UPDATE_PURCHASE_AMOUNT,
  UPDATE_PURCHASE_DATE,
} from "./index";

export const handleCoinClick = (coin) => (dispatch, getState) => {
  const state = getState();
  const data = state.coins.data.filter((el) => el.name.includes(coin));
  dispatch({
    type: SELECT_COIN,
    payload: {
      name: coin,
      id: data[0].id,
      image: data[0].image,
      symbol: data[0].symbol.toUpperCase(),
    },
  });
};
export const getCoinHistory = () => async (dispatch, getState) => {
  try {
    const state = getState();
    await state.portfolio.assets.map(async (coin) => {
      let date = coin.purchase_date;
      const year = new Date(date).getFullYear();
      const month = new Date(date).getMonth() + 1;
      const day = new Date(date).getDate();
      date = day + "-" + month + "-" + year;
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coin.id}/history?date=${date}`
      );
      const price_on_purchase_date =
        data.market_data.current_price[
          state.supportedCurrencies.activeCurrency
        ];
      dispatch({
        type: GET_COIN_HISTORY,
        payload: {
          id: coin.name,
          price_on_purchase_date,
        },
      });
    });
  } catch (err) {
    dispatch({ type: GET_COIN_ERROR, payload: err });
  }
};
export const getCoinData = () => (dispatch, getState) => {
  try {
    const state = getState();
    const currency = state.supportedCurrencies.activeCurrency;
    state.portfolio.assets.map(async (coin) => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coin.id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      );
      dispatch({
        type: GET_COIN_DATA,
        payload: {
          id: coin.name,
          symbol: data.symbol.toUpperCase(),
          image: data.image.large,
          current_price: data.market_data.current_price[currency],
          price_change_24h:
            data.market_data.price_change_24h_in_currency[currency],
          market_cap: data.market_data.market_cap[currency],
          total_volume: data.market_data.total_volume[currency],
          circulating_supply: data.market_data.circulating_supply,
          max_supply: data.market_data.max_supply
            ? data.market_data.max_supply
            : data.market_data.total_supply,
        },
      });
    });
  } catch (err) {
    dispatch({ type: GET_COIN_ERROR, payload: err });
  }
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
  dispatch({
    type: SAVE_ASSET,
    payload: {
      name: state.portfolio.selectedCoin.name,
      id: state.portfolio.selectedCoin.id,
      purchase_price: state.portfolio.selectedCoin.purchase_price,
      purchase_date: state.portfolio.selectedCoin.purchase_date,
      price_on_purchase_date: coin[0].current_price,
    },
  });
};
export const handleUpdateAmount = (value, name) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_PURCHASE_AMOUNT,
    payload: {
      id: name,
      purchase_price: value,
    },
  });
};
export const handleUpdateDate = (value, name) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_PURCHASE_DATE,
    payload: {
      id: name,
      purchase_date: value,
    },
  });
};
export const handleUpdate = (name) => (dispatch, getState) => {
  const state = getState();
  state.portfolio.assets.map((coin) => {
    if (name === coin.name) {
      return dispatch({
        type: UPDATE_ASSET,
        payload: {
          id: coin,
          purchase_price: coin.purchase_price,
          purchase_date: coin.purchase_date,
        },
      });
    }
    return null;
  });
};
