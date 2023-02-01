import axios from "axios";
import {
  GET_COINS_SUCCESS,
  GET_COINS_LOADING,
  GET_COINS_ERROR,
  GET_MORE_COINS_SUCCESS,
  SORT_COINS,
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
        dispatch({
          type: GET_COINS_SUCCESS,
          payload: data,
        });
      });
  } catch (err) {
    dispatch({ type: GET_COINS_ERROR, payload: err });
  }
};
export const sortCoins = (field, sortAsc) => (dispatch, getState) => {
  const state = getState();
  sortAsc = !state.coins.sortAsc;
  function sortBy(field, sortAsc) {
    return (a, b) => {
      const asc = (a[field] > b[field]) - (a[field] < b[field]);
      const desc = (b[field] > a[field]) - (b[field] < a[field]);

      return sortAsc ? asc : desc;
    };
  }
  const data = state.coins.data.sort(sortBy(field, sortAsc));
  if (field === "price_change_percentage_1h_in_currency") {
    field = "1h";
  } else if (field === "price_change_percentage_24h_in_currency") {
    field = "24h";
  } else if (field === "price_change_percentage_7d_in_currency") {
    field = "7d";
  }
  dispatch({
    type: SORT_COINS,
    payload: {
      data,
      sortBy: field,
      sortAsc,
    },
  });
};
export const getMoreCoins = () => async (dispatch, getState) => {
  try {
    const state = getState();
    state.coins.pageNum += 1;
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${state.supportedCurrencies.activeCurrency.toLowerCase()}&order=market_cap_desc&per_page=10&page=${
          state.coins.pageNum
        }&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      )
      .then((res) => {
        const sortBy = state.coins.sortBy;
        const sortAsc = state.coins.sortAsc;
        function sort(field, sortAsc) {
          return (a, b) => {
            const asc = (a[field] > b[field]) - (a[field] < b[field]);
            const desc = (b[field] > a[field]) - (b[field] < a[field]);

            return sortAsc ? asc : desc;
          };
        }
        const data = [...state.coins.data, ...res.data];
        const uniqueList = [];
        const filteredCoinList = data.filter((element) => {
          const isDuplicate = uniqueList.includes(element.id);
          if (!isDuplicate) {
            uniqueList.push(element.id);
            return true;
          }
          return false;
        });
        filteredCoinList.sort(sort(sortBy, sortAsc));
        if (filteredCoinList.length > 0) {
          dispatch({
            type: GET_MORE_COINS_SUCCESS,
            payload: filteredCoinList,
          });
        }
      });
  } catch (err) {
    dispatch({ type: GET_COINS_ERROR, payload: err });
  }
};
