import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import coinListReducer from "./coinList/index";
import currenciesReducer from "./currencies/index";
import themeReducer from "./theme/index";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const reducers = combineReducers({
  coins: coinListReducer,
  supportedCurrencies: currenciesReducer,
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
