import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";

import App from "./App";
import "./index.css";
import store from "./redux/store.js";

// axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.baseURL = "https://pi-pokemons-production-2abc.up.railway.app/";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
