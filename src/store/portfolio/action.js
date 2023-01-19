import axios from "axios";
import {
  GET_COINS_SUCCESS,
  GET_COINS_LOADING,
  GET_COINS_ERROR,
} from "store/coinList/index";

export const getAllCoins = () => async (dispatch, getState) => {
  try {
    const state = getState();
    dispatch({ type: GET_COINS_LOADING });
    console.log(state.supportedCurrencies.activeCurrency);
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${state.supportedCurrencies.activeCurrency}&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h`
      )
      .then(({ data }) => {
        dispatch({ type: GET_COINS_SUCCESS, payload: data });
      });
  } catch (err) {
    dispatch({ type: GET_COINS_ERROR, payload: err });
  }
};
