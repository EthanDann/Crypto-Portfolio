import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store, { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Auth0Provider
          domain="dev-aoscstean7yynyro.us.auth0.com"
          clientId="FEucREaz4ErMzjUMUZgSUl8Hpb54tSsz"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Auth0Provider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
