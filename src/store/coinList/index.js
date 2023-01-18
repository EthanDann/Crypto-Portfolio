const initialState = {
  data: [],
  coinsPerPage: 10,
  pageNum: 1,
  isLoading: false,
  hasError: false,
  error: "",
};
export const GET_COINS_SUCCESS = "GET_COINS_SUCCESS";
export const GET_COINS_LOADING = "GET_COINS_LOADING";
export const GET_COINS_ERROR = "GET_COINS_ERROR";
export const GET_MORE_COINS_SUCCESS = "GET_MORE_COINS_SUCCESS";
const coinListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS_LOADING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        error: null,
      };
    case GET_COINS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        error: null,
        data: action.payload,
        pageNum: state.pageNum,
      };
    case GET_COINS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };
    case GET_MORE_COINS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        error: null,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};

export default coinListReducer;
