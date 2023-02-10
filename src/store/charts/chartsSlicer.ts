import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ChartData {
  priceData: number[];
  volumeData: number[];
  isLoading: boolean;
  hasError: boolean;
  error: string;
}
const initialState: ChartData = {
  priceData: [],
  volumeData: [],
  isLoading: false,
  hasError: false,
  error: "",
};
interface Charts {
  currency: string;
}

export const getChartInfo = createAsyncThunk(
  "charts/getChartInfo",
  async ({ currency }: Charts) => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=30&interval=daily`
    );
    const prices: number[] = data.prices.map((el: number[]) =>
      el[1].toFixed(3)
    );
    const volumes: number[] = data.total_volumes.map((el: number[]) =>
      el[1].toFixed(3)
    );
    return { prices, volumes };
  }
);

const chartsSlice = createSlice({
  name: "charts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getChartInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChartInfo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.priceData = payload.prices;
        state.volumeData = payload.volumes;
      })
      .addCase(getChartInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default chartsSlice.reducer;
