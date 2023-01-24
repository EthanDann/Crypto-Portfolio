import getSymbolFromCurrency from "currency-symbol-map";

const initialState = {
  data: [],
  activeCurrency: "usd",
  currencySymbol: "$",
};
export const GET_CURRENCIES_SUCCESS = "GET_CURRENCIES_SUCCESS";
export const TOGGLE_CURRENCY = "TOGGLE_CURRENCY";

const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case TOGGLE_CURRENCY:
      return {
        ...state,
        activeCurrency: action.payload.toLowerCase(),
        currencySymbol: getSymbolFromCurrency(action.payload.toUpperCase()),
      };
    default:
      return state;
  }
};

export default currenciesReducer;
