import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialState {
  data: any[];
  coinsPerPage: number;
  pageNum: number;
  sortBy: string;
  sortAsc: boolean;
  hasMore: boolean;
  isLoading: boolean;
  hasError: boolean;
}
const initialState: InitialState = {
  data: [],
  coinsPerPage: 10,
  pageNum: 1,
  sortBy: "id",
  sortAsc: true,
  hasMore: false,
  isLoading: false,
  hasError: false,
};
interface CoinList {
  currency: string;
  pageNum: number;
}

export const getAllCoins = createAsyncThunk(
  "coins/getAllCoins",
  async ({ currency, pageNum }: CoinList) => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${pageNum}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    return data;
  }
);
const sorted = (field: string, sortAsc: boolean) => {
  return (a: Record<string, any>, b: Record<string, any>) => {
    const asc = a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
    const desc = b[field] > a[field] ? 1 : b[field] < a[field] ? -1 : 0;

    return sortAsc ? asc : desc;
  };
};

const coinListSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.pageNum += 1;
    },
    sortCoins: (
      state,
      action: PayloadAction<{ field: string; sortAsc: boolean }>
    ) => {
      if (!action.payload) {
        return state;
      }
      const { field, sortAsc } = action.payload;
      const data = [...state.data];
      const uniqueData = Array.from(new Set(data.map((item) => item.id))).map(
        (id) => data.find((item) => item.id === id)
      );

      const sortedData: any[] = uniqueData.sort(sorted(field, sortAsc));
      const newSortAsc = sortAsc ? false : true;
      const sortBy =
        field === "price_change_percentage_1h_in_currency"
          ? "1h"
          : field === "price_change_percentage_24h_in_currency"
          ? "24h"
          : field === "price_change_percentage_7d_in_currency"
          ? "7d"
          : field;
      return {
        ...state,
        data: sortedData,
        sortBy,
        sortAsc: newSortAsc,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllCoins.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCoins.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = [...state.data, ...payload];
        state.hasMore = payload.length > 0;
      })
      .addCase(getAllCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const { incrementPage, sortCoins } = coinListSlice.actions;

export default coinListSlice.reducer;
