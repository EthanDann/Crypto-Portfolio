const initialState = {
  data: [],
  assets: [
    {
      name: "Bitcoin",
      purchase_price: 39000,
      price_on_purchase_date: 39000,
      purchase_date: "01/18/2023",
    },
  ],
  isLoading: false,
  hasError: false,
  error: "",
};

const portfolioReducer = (state = initialState, action) => {
  // switch (action.type) {
  //   case GET_COINS_SUCCESS: {
  //     return {
  //       ...state,
  //       isLoading: false,
  //       hasError: false,
  //       error: null,
  //       data: action.payload,
  //     };
  //   }
  //   case GET_COINS_LOADING: {
  //     return {
  //       ...state,
  //       isLoading: true,
  //       hasError: false,
  //       error: null,
  //     };
  //   }
  //   case GET_COINS_ERROR: {
  //     return {
  //       ...state,
  //       isLoading: false,
  //       hasError: true,
  //       error: action.payload,
  //     };
  //   }
  //   default:
  //     return state;
  // }
  return state;
};

export default portfolioReducer;
