import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialState {
  supportedCurrencies: string[];
  isLoading: boolean;
  hasError: boolean;
}
const initialState: InitialState = {
  supportedCurrencies: [],
  isLoading: false,
  hasError: false,
};
export const getSupportedCurrencies = createAsyncThunk(
  "supportedCurrencies/getSupportedCurrencies",
  async () => {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
    );
    return data;
  }
);
const supportedCurrenciesSlice = createSlice({
  name: "supportedCurrencies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getSupportedCurrencies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSupportedCurrencies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.supportedCurrencies = payload;
      })
      .addCase(getSupportedCurrencies.rejected, (state, action) => {
        state.isLoading = true;
        state.hasError = true;
      });
  },
});

export default supportedCurrenciesSlice.reducer;
