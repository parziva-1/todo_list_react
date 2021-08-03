import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
const KEY = "tasks"

const stickyValue = window.localStorage.getItem(KEY);
const sticky = stickyValue !== null ? JSON.parse(stickyValue) : [];

const store = createStore(reducer, sticky);




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
