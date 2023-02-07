import axios from "axios";
import {
  GET_CHART_DATA_SUCCESS,
  GET_CHART_DATA_LOADING,
  GET_CHART_DATA_ERROR,
} from "./index";

export const getChartInfo = () => async (dispatch, getState) => {
  try {
    const state = getState();
    dispatch({ type: GET_CHART_DATA_LOADING });
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${state.currencies}&days=30&interval=daily`
    );
    const priceData = data.prices.map((el) => el[1].toFixed(3));
    const volumeData = data.total_volumes.map((el) => el[1].toFixed(3));
    console.log(priceData, volumeData);
    dispatch({
      type: GET_CHART_DATA_SUCCESS,
      payload: { priceData, volumeData },
    });
  } catch (err) {
    dispatch({ type: GET_CHART_DATA_ERROR, payload: err });
  }
};
