const initialState = {
  priceData: [],
  volumeData: [],
  isLoading: false,
  hasError: false,
  error: "",
};
export const GET_CHART_DATA_SUCCESS = "GET_CHART_DATA_SUCCESS";
export const GET_CHART_DATA_LOADING = "GET_CHART_DATA_LOADING";
export const GET_CHART_DATA_ERROR = "GET_CHART_DATA_ERROR";
const chartsReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default chartsReducer;
