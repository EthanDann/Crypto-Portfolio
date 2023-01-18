import axios from "axios";
import { GET_CURRENCIES_SUCCESS } from "./index";

export const getSupportedCurrencies = () => async (dispatch, getState) => {
  try {
    await axios
      .get(
        `https://api.coingecko.com/api/v3/simple/supported_vs_currencies
`
      )
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: GET_CURRENCIES_SUCCESS, payload: data });
      });
  } catch (err) {}
};
