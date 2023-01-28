const initialState = {
  data: [],
  chart_data: [],
  isLoading: false,
  error: null,
};

export const GET_COIN_DATA = "GET_COIN_DATA";
export const GET_COIN_LOADING = "GET_COIN_LOADING";
export const GET_COIN_ERROR = "GET_COIN_ERROR";
export const GET_CHART_DATA = "GET_CHART_DATA";
export const GET_CHART_LOADING = "GET_CHART_LOADING";
export const GET_CHART_ERROR = "GET_CHART_ERROR";
const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COIN_DATA:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    case GET_COIN_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_CHART_DATA:
      return {
        ...state,
        isLoading: false,
        chart_data: action.payload,
        error: null,
      };
    case GET_CHART_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CHART_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default coinReducer;
