import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

const initialState: string = "USD";

const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    toggleCurrency: (state, action: PayloadAction<string>) => action.payload,
  },
});

export const selectCurrency = (state: RootState) => state.currencies;
export const { toggleCurrency } = currenciesSlice.actions;
export default currenciesSlice.reducer;
