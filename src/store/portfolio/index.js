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
  selectedCoin: [],
  purchase_price: null,
  purchase_date: "",
  isLoading: false,
  hasError: false,
  error: "",
};
export const SELECT_COIN = "ADD_ASSET";
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
