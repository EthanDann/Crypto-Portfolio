import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import coinListReducer from "./coinList";
import coinReducer from "./coin";
import chartsReducer from "./charts";
import currenciesReducer from "./currencies";
import portfolioReducer from "./portfolio";
import themeReducer from "./theme";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const reducers = combineReducers({
  coins: coinListReducer,
  charts: chartsReducer,
  coin: coinReducer,
  supportedCurrencies: currenciesReducer,
  portfolio: portfolioReducer,
  theme: themeReducer,
});
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["pageNum"],
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
