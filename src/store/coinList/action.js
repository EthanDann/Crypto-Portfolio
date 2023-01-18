import axios from "axios";
import {
  GET_COINS_SUCCESS,
  GET_COINS_LOADING,
  GET_COINS_ERROR,
  GET_MORE_COINS_SUCCESS,
} from "./index";

export const getAllCoins = () => async (dispatch, getState) => {
  try {
    const state = getState();
    dispatch({ type: GET_COINS_LOADING });
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${state.supportedCurrencies.activeCurrency}&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      )
      .then(({ data }) => {
        dispatch({ type: GET_COINS_SUCCESS, payload: data });
      });
  } catch (err) {
    dispatch({ type: GET_COINS_ERROR, payload: err });
  }
};
export const getMoreCoins = () => async (dispatch, getState) => {
  try {
    const state = getState();
    state.coins.pageNum += 1;
    console.log(state.supportedCurrencies.activeCurrency);
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${state.supportedCurrencies.activeCurrency.toLowerCase()}&order=market_cap_desc&per_page=10&page=${
          state.coins.pageNum
        }&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      )
      .then((res) => {
        const data = [...state.coins.data, ...res.data];
        dispatch({
          type: GET_MORE_COINS_SUCCESS,
          payload: data,
        });
      });
  } catch (err) {
    dispatch({ type: GET_COINS_ERROR, payload: err });
  }
};
