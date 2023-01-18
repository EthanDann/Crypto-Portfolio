import axios from "axios";
import { GET_COINS_SUCCESS, GET_COINS_LOADING, GET_COINS_ERROR } from "./index";

export const getAllCoins = () => async (dispatch, getState) => {
  try {
    const state = getState();
    dispatch({ type: GET_COINS_LOADING });
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      )
      .then(({ data }) => {
        dispatch({ type: GET_COINS_SUCCESS, payload: data });
      });
  } catch (err) {
    dispatch({ type: GET_COINS_ERROR, payload: err });
  }
};
