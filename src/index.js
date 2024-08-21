import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FavoritesProvider from "./context/FavoriteContext";
import FetchProvider from "./context/FetchContext";
import SettingsProvider from "./context/SettingsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <SettingsProvider>
    <FetchProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </FetchProvider>
  </SettingsProvider>
  // </React.StrictMode> }
);
