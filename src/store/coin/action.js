import axios from "axios";
import {
  GET_COIN_DATA,
  GET_CHART_DATA,
  GET_COIN_LOADING,
  GET_CHART_LOADING,
  GET_COIN_ERROR,
  GET_CHART_ERROR,
} from "./index";

export const getCoinData = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_COIN_LOADING,
      payload: true,
    });
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    dispatch({
      type: GET_COIN_DATA,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_COIN_ERROR,
      payload: err,
    });
  }
};
export const getChartData = (duration, id) => async (dispatch, getState) => {
  const state = getState();
  const todaysDate = new Date() / 1000;
  const startDate = todaysDate - duration;
  try {
    dispatch({ type: GET_CHART_LOADING, payload: true });
    const currency = state.currency;
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=${currency}&from=${startDate}&to=${todaysDate}
`
    );
    dispatch({ type: GET_CHART_DATA, payload: data.prices });
  } catch (err) {
    dispatch({ type: GET_CHART_ERROR, payload: err });
  }
};
