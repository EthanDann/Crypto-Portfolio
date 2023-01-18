import { configureStore } from "@reduxjs/toolkit";
import coinListReducer from "./coinList/index";
import currenciesReducer from "./currencies/index";
const reducers = {
  coins: coinListReducer,
  supportedCurrencies: currenciesReducer,
};

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
