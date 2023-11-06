import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { CitiesProvider } from "./features/map/citiesProvider.jsx";
// import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
      <CitiesProvider>
        <App />
      </CitiesProvider>
  // </React.StrictMode>
);
