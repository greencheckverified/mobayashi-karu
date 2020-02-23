// fx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import * as serviceWorker from "./serviceWorker";

// app
import configureStore from "./store/configureStore";
import View from "./views";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <View />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
