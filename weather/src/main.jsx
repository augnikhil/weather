import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import WeatherState from "./contexts/weatherContext";

ReactDOM.createRoot( document.getElementById("root")).render(
  <React.StrictMode>
    <WeatherState>
      <App />
    </WeatherState>
  </React.StrictMode>
);
