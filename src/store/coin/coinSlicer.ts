import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialState {
  data: any;
  chart_data: any;
  isLoading: boolean;
  hasError: boolean;
  error: string;
}
const initialState: InitialState = {
  data: [],
  chart_data: [],
  isLoading: false,
  hasError: false,
  error: "",
};
interface Duration {
  length: any;
  id: string | undefined;
  currency: string;
}

export const getCoinData = createAsyncThunk(
  "coins/getCoinData",
  async (id: string) => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    return data;
  }
);
export const getChartData = createAsyncThunk(
  "coins/getChartData",
  async ({ length, id, currency }: Duration) => {
    const todaysDate = new Date().valueOf() / 1000;
    const startDate = todaysDate - length;
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=${currency}&from=${startDate}&to=${todaysDate}`
    );
    return data;
  }
);

const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCoinData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoinData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(getCoinData.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(getChartData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChartData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.chart_data = payload.prices;
      })
      .addCase(getChartData.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default coinSlice.reducer;
