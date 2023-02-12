import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialState {
  history: Asset[];
  assets: Asset[];
  selectedCoin: SelectedCoin;
  isLoading: boolean;
  hasError: boolean;
  error: string;
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
  current_price: number;
  purchase_date: string;
  purchase_price: string;
  historic_price: string;
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
  purchase_price?: string;
  purchase_date?: string;
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
    const requests = state.assets.map(async (coin: Asset) => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coin.coinId}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      );
      return data;
    });
    const results = await Promise.all(requests);
    return results;
  }
);

export const getCoinHistory = createAsyncThunk(
  "portfolio/getCoinHistory",
  async (asset: Asset, { getState }) => {
    const state: any = getState();
    let { coinId, purchase_price, purchase_date } = asset;
    const year = new Date(purchase_date).getFullYear();
    const month = new Date(purchase_date).getMonth() + 1;
    const day = new Date(purchase_date).getDate();
    purchase_date = day + "-" + month + "-" + year;
    const requests = state.assets.map(async (coin: Asset) => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/history?date=${purchase_date}`
      );
      const historic_price = data?.market_data.current_price.usd;
      const { image, name, symbol, id } = data;
      const assetData = {
        name,
        symbol,
        coinId: id,
        image: image.large,
        purchase_date,
        purchase_price,
        historic_price,
      };
      return assetData;
    });
    const results = await Promise.all(requests);
    return results;
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
      state.assets.map((coin, index) => {
        if (coin.name === action.payload) {
          return {
            ...coin,
            purchase_price: coin.purchase_price,
            purchase_date: coin.purchase_date,
            editable: false,
          };
        }
        return coin;
      });
      state.selectedCoin = {
        name: "",
        id: "",
        image: "",
        symbol: "",
        purchase_price: "",
        purchase_date: "",
      };
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
        state.assets = payload;
      })
      .addCase(getCoinData.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(getCoinHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoinHistory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.history = payload;
      })
      .addCase(getCoinHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});
export const {
  selectCoin,
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
