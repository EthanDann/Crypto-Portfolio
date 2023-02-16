import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialState {
  history: Asset[];
  assets: Asset[];
  selectedCoin: SelectedCoin;
  isLoading: boolean;
  hasError: boolean;
  error?: string;
}

const initialState: InitialState = {
  history: [],
  assets: [],
  selectedCoin: {
    name: "",
    id: "",
    image: "",
    symbol: "",
    purchase_price: "",
    purchase_date: "",
  },
  isLoading: false,
  hasError: false,
  error: "",
};

interface Asset {
  name: string;
  coinId: string;
  symbol: string;
  image: string;
  purchase_currency?: string;
  purchase_currency_symbol?: string;
  current_price: number;
  purchase_date: string;
  purchase_price: string;
  historic_price: number;
  price_change_24h: number;
  max_supply: number;
  total_volume: number;
  market_cap: number;
  circulating_supply: number;
  editable?: boolean;
  confirm_delete?: boolean;
}
interface SelectedCoin {
  name: string;
  id: string;
  image: string;
  symbol: string;
  purchase_price: string;
  purchase_date: string;
}
interface AssetAmount {
  name: string;
  purchase_price: string;
}
interface AssetDate {
  name: string;
  purchase_date: string;
}

export const getCoinData = createAsyncThunk(
  "portfolio/getCoinData",
  async (arg, { getState }) => {
    const state: any = getState();
    const requests = await state.portfolio.assets.map(async (coin: Asset) => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coin.coinId}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      );
      return data;
    });
    const results = await Promise.all(requests);
    return results[0];
  }
);

export const getCoinHistory = createAsyncThunk(
  "portfolio/getCoinHistory",
  async (arg, { getState }) => {
    const state: any = getState();

    const requests = await state.portfolio.assets.map(async (coin: Asset) => {
      let { coinId, purchase_date } = coin;
      const year = new Date(purchase_date).getFullYear();
      const month = new Date(purchase_date).getMonth() + 1;
      const day = new Date(purchase_date).getDate();
      purchase_date = day + "-" + month + "-" + year;
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/history?date=${purchase_date}`
      );
      const historic_price = data?.market_data.current_price.usd;
      const { id } = data;
      const assetData = {
        id,
        historic_price,
      };
      return assetData;
    });
    const results = await Promise.all(requests);
    return results[0];
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    selectCoin: (state, action: PayloadAction<SelectedCoin>) => {
      state.selectedCoin.name = action.payload.name;
      state.selectedCoin.id = action.payload.id;
      state.selectedCoin.image = action.payload.image;
      state.selectedCoin.symbol = action.payload.symbol;
    },
    addAsset: (state, action: PayloadAction<Asset>) => {
      const asset_exists = state.assets.find(
        (asset) => asset.name === action.payload.name
      );
      if (!asset_exists) {
        state.assets.push(action.payload);
      } else {
        state.assets = state.assets.map((asset) => {
          if (asset.name === action.payload.name) {
            return {
              ...asset,
              purchase_price:
                action.payload.purchase_price + asset.purchase_price,
              purchase_date: action.payload.purchase_date,
            };
          }
          return asset;
        });
      }
      state.selectedCoin = {
        name: "",
        id: "",
        image: "",
        symbol: "",
        purchase_price: "",
        purchase_date: "",
      };
    },
    editAsset: (state, action: PayloadAction<string>) => {
      state.assets.map((coin) => {
        if (action.payload === coin.name) {
          return (coin.editable = true);
        }
        return coin;
      });
    },
    deleteAsset: (state, action: PayloadAction<string>) => {
      state.assets.map((coin) => {
        if (action.payload === coin.name) {
          return (coin.confirm_delete = true);
        }
        return coin;
      });
    },
    confirmDeleteAsset: (state, action: PayloadAction<string>) => {
      const assets = state.assets.filter(
        (asset) => asset.name !== action.payload
      );
      state.assets = assets;
    },
    purchaseAmount: (state, action: PayloadAction<string>) => {
      state.selectedCoin.purchase_price = action.payload;
    },
    purchaseDate: (state, action: PayloadAction<string>) => {
      state.selectedCoin.purchase_date = action.payload;
    },
    updateAsset: (state, action: PayloadAction<string>) => {
      const assets = state.assets.map((coin, index) => {
        if (coin.name === action.payload) {
          console.log(coin.purchase_price);
          console.log(coin.editable);
          return {
            ...coin,
            purchase_price: coin.purchase_price,
            purchase_date: coin.purchase_date,
            editable: false,
          };
        }
        return coin;
      });
      state.assets = assets;
    },
    updateAmount: (state, action: PayloadAction<AssetAmount>) => {
      const updatedAmount: Asset[] = state.assets.map((coin, index) => {
        if (coin.name === action.payload.name) {
          return {
            ...coin,
            purchase_price: action.payload.purchase_price,
          };
        }
        return coin;
      });
      state.assets = updatedAmount;
    },
    updateDate: (state, action: PayloadAction<AssetDate>) => {
      const updatedDate: Asset[] = state.assets.map((coin, index) => {
        if (coin.name === action.payload.name) {
          return {
            ...coin,
            purchase_date: action.payload.purchase_date,
          };
        }
        return coin;
      });
      state.assets = updatedDate;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCoinData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoinData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.assets = state.assets.map((coin, index) => {
          if (coin.name === payload.id) {
            return {
              ...coin,
              coinId: payload.coinId,
              symbol: payload.symbol,
              image: payload.image,
              current_price: payload.current_price,
              price_change_24h: payload.price_change_24h,
              market_cap: payload.market_cap,
              total_volume: payload.total_volume,
              circulating_supply: payload.circulating_supply,
              max_supply: payload.max_supply,
              confirm_delete: false,
              editable: false,
            };
          }
          return coin;
        });
      })
      .addCase(getCoinData.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
        state.error = action.error.message;
      })
      .addCase(getCoinHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoinHistory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.assets = state.assets.map((coin, index) => {
          if (coin.name.toLowerCase() === payload.id) {
            return {
              ...coin,
              historic_price: payload.historic_price,
            };
          }
          return coin;
        });
      })
      .addCase(getCoinHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
        state.error = action.error.message;
      });
  },
});
export const {
  selectCoin,
  addAsset,
  editAsset,
  deleteAsset,
  confirmDeleteAsset,
  purchaseAmount,
  purchaseDate,
  updateAsset,
  updateAmount,
  updateDate,
} = portfolioSlice.actions;
export default portfolioSlice.reducer;
