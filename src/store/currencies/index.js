const initialState = {
  data: [],
  activeCurrency: "usd",
};
export const GET_CURRENCIES_SUCCESS = "GET_CURRENCIES_SUCCESS";

const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default currenciesReducer;
