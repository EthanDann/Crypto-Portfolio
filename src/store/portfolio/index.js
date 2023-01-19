import {
  GET_COINS_SUCCESS,
  GET_COINS_LOADING,
  GET_COINS_ERROR,
} from "store/coinList/index";
const initialState = {
  data: [],
  addedCoins: [],
  isLoading: false,
  hasError: false,
  error: "",
};

const portfolioReducer = async (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        error: null,
        data: action.payload,
      };
    }
    case GET_COINS_LOADING: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
        error: null,
      };
    }
    case GET_COINS_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default portfolioReducer;
