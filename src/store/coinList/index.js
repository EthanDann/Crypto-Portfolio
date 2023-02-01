const initialState = {
  data: [],
  priceData: [],
  volumeData: [],
  coinsPerPage: 10,
  pageNum: 1,
  sortBy: "id",
  sortAsc: true,
  isLoading: false,
  hasError: false,
  error: "",
};
export const GET_COINS_SUCCESS = "GET_COINS_SUCCESS";
export const GET_COINS_LOADING = "GET_COINS_LOADING";
export const GET_COINS_ERROR = "GET_COINS_ERROR";
export const GET_MORE_COINS_SUCCESS = "GET_MORE_COINS_SUCCESS";
export const GET_CHART_DATA_SUCCESS = "GET_CHART_DATA_SUCCESS";
export const GET_CHART_DATA_LOADING = "GET_CHART_DATA_LOADING";
export const GET_CHART_DATA_ERROR = "GET_CHART_DATA_ERROR";
export const SORT_COINS = "SORT_COINS";
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
    case GET_CHART_DATA_LOADING: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
        error: null,
      };
    }
    case GET_CHART_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        error: null,
        priceData: action.payload.priceData,
        volumeData: action.payload.volumeData,
      };
    }
    case GET_CHART_DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };
    }
    case SORT_COINS: {
      return {
        ...state,
        data: action.payload.data,
        sortBy: action.payload.sortBy,
        sortAsc: action.payload.sortAsc,
      };
    }
    default:
      return state;
  }
};

export default coinListReducer;
