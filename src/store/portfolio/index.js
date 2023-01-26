const initialState = {
  data: [],
  history: [],
  assets: [],
  selectedCoin: [],
  purchase_price: "",
  purchase_date: "",
  isLoading: false,
  hasError: false,
  error: "",
};
export const SELECT_COIN = "SELECT_COIN";
export const GET_COIN_HISTORY = "GET_COIN_HISTORY";
export const GET_COIN_DATA = "GET_COIN_DATA";
export const GET_COIN_ERROR = "GET_COIN_ERROR";
export const PURCHASE_AMOUNT = "PURCHASE_AMOUNT";
export const PURCHASE_DATE = "PURCHASE_DATE";
export const ADD_ASSET = "ADD_ASSET";
export const EDIT_ASSET = "EDIT_ASSET";
export const UPDATE_ASSET = "UPDATE_ASSET";
export const DELETE_ASSET = "DELETE_ASSET";
export const CONFIRM_DELETE = "CONFIRM_DELETE";
export const UPDATE_PURCHASE_AMOUNT = "UPDATE_PURCHASE_AMOUNT";
export const UPDATE_PURCHASE_DATE = "UPDATE_PURCHASE_DATE";
const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COIN: {
      return {
        ...state,
        selectedCoin: {
          ...state.selectedCoin,
          name: action.payload.name,
          id: action.payload.id,
          image: action.payload.image,
          symbol: action.payload.symbol,
        },
      };
    }
    case GET_COIN_HISTORY: {
      return {
        ...state,
        hasError: false,
        error: null,
        assets: state.assets.map((coin, index) => {
          if (coin.name === action.payload.id) {
            return {
              ...coin,
              price_on_purchase_date: action.payload.price_on_purchase_date,
            };
          }
          return coin;
        }),
      };
    }
    case GET_COIN_DATA: {
      return {
        ...state,
        hasError: false,
        error: null,
        assets: state.assets.map((coin, index) => {
          if (coin.name === action.payload.id) {
            return {
              ...coin,
              uniqueId: action.payload.uniqueId,
              symbol: action.payload.symbol,
              image: action.payload.image,
              current_price: action.payload.current_price,
              price_change_24h: action.payload.price_change_24h,
              market_cap: action.payload.market_cap,
              total_volume: action.payload.total_volume,
              circulating_supply: action.payload.circulating_supply,
              max_supply: action.payload.max_supply,
              confirm_delete: false,
              editable: false,
            };
          }
          return coin;
        }),
      };
    }
    case GET_COIN_ERROR: {
      return {
        ...state,
        hasError: true,
        error: action.payload,
      };
    }
    case PURCHASE_AMOUNT: {
      return {
        ...state,
        selectedCoin: { ...state.selectedCoin, purchase_price: action.payload },
      };
    }
    case PURCHASE_DATE: {
      return {
        ...state,
        selectedCoin: { ...state.selectedCoin, purchase_date: action.payload },
      };
    }
    case ADD_ASSET: {
      return {
        ...state,
        assets: [
          ...state.assets,
          {
            name: action.payload.name,
            id: action.payload.id,
            purchase_price: action.payload.purchase_price,
            purchase_date: action.payload.purchase_date,
            price_on_purchase_date: action.payload.price_on_purchase_date,
          },
        ],
        selectedCoin: [],
      };
    }
    case EDIT_ASSET: {
      return {
        ...state,
        assets: state.assets.map((coin, index) => {
          if (coin.name === action.payload.name) {
            return {
              ...coin,
              editable: action.payload.editable,
            };
          }
          return coin;
        }),
      };
    }
    case UPDATE_ASSET: {
      return {
        ...state,
        assets: state.assets.map((coin, index) => {
          if (coin.name === action.payload.name) {
            return {
              ...coin,
              purchase_price: action.payload.purchase_price,
              purchase_date: action.payload.purchase_date,
              editable: false,
            };
          }
          return coin;
        }),
        selectedCoin: [],
      };
    }
    case UPDATE_PURCHASE_AMOUNT: {
      return {
        ...state,
        assets: state.assets.map((coin, index) => {
          if (coin.name === action.payload.id) {
            return {
              ...coin,
              purchase_price: action.payload.purchase_price,
            };
          }
          return coin;
        }),
      };
    }
    case UPDATE_PURCHASE_DATE: {
      return {
        ...state,
        assets: state.assets.map((coin, index) => {
          if (coin.name === action.payload.id) {
            return {
              ...coin,
              purchase_date: action.payload.purchase_date,
            };
          }
          return coin;
        }),
      };
    }
    case DELETE_ASSET: {
      return {
        ...state,
        assets: state.assets.map((coin, index) => {
          if (coin.name === action.payload.name) {
            return {
              ...coin,
              confirm_delete: action.payload.confirm_delete,
            };
          }
          return coin;
        }),
      };
    }
    case CONFIRM_DELETE: {
      return {
        ...state,
        assets: state.assets.filter(
          (asset) => asset.uniqueId !== action.payload.id
        ),
      };
    }
    default:
      return state;
  }
};

export default portfolioReducer;
