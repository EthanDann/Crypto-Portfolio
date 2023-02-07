import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import coinListSlice from "./coinList/coinListSlicer";
import coinReducer from "./coin";
import chartsReducer from "./charts";
import currenciesSlice from "./currencies/currenciesSlicer";
import supportedCurrenciesSlice from "./supportedCurrencies/supportedCurrenciesSlicer";
import portfolioReducer from "./portfolio";
import themeReducer from "./theme/themeSlicer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const reducers = combineReducers({
  coins: coinListSlice,
  charts: chartsReducer,
  coin: coinReducer,
  supportedCurrencies: supportedCurrenciesSlice,
  currency: currenciesSlice,
  portfolio: portfolioReducer,
  theme: themeReducer,
});
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["coins", "coinList"],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
