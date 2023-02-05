import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

const initialState: string = "USD";

const currenciesSlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    toggleCurrency: (state, action: PayloadAction<string>) => action.payload,
  },
});

export const selectCurrency = (state: RootState) => state.currency;
export const { toggleCurrency } = currenciesSlice.actions;
export default currenciesSlice.reducer;
