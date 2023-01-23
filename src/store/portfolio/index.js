const initialState = {
  data: [],
  history: [],
  assets: [
    {
      name: "Bitcoin",
      purchase_price: "39000",
      price_on_purchase_date: "",
      purchase_date: "18-01-2020",
    },
  ],
  selectedCoin: [],
  purchase_price: "",
  purchase_date: "",
  isLoading: false,
  hasError: false,
  error: "",
};
export const SELECT_COIN = "ADD_ASSET";
export const GET_COIN_HISTORY = "GET_COIN_HISTORY";
export const PURCHASE_AMOUNT = "PURCHASE_AMOUNT";
export const PURCHASE_DATE = "PURCHASE_DATE";
export const SAVE_ASSET = "SAVE_ASSET";
const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COIN: {
      return {
        ...state,
        selectedCoin: action.payload,
      };
    }
    case GET_COIN_HISTORY: {
      return state.assets.map((coin, index) => {
        if (coin.name === action.payload.id) {
          return {
            ...coin,
            price_on_purchase_date: action.payload.price_on_purchase_date,
          };
        }
        return coin;
      });
    }
    case PURCHASE_AMOUNT: {
      return {
        ...state,
        purchase_price: action.payload,
      };
    }
    case PURCHASE_DATE: {
      return {
        ...state,
        purchase_date: action.payload,
      };
    }
    case SAVE_ASSET: {
      return {
        ...state,
        assets: [...state.assets, action.payload],
      };
    }
    default:
      return state;
  }
};

export default portfolioReducer;
