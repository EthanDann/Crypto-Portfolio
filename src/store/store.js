import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import coinListReducer from "./coinList";
import chartsReducer from "./charts";
import currenciesReducer from "./currencies";
import themeReducer from "./theme";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const reducers = combineReducers({
  coins: coinListReducer,
  charts: chartsReducer,
  supportedCurrencies: currenciesReducer,
  theme: themeReducer,
});
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["pageNum", "charts", "coins"],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
export const persistor = persistStore(store);
