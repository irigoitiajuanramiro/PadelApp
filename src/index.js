import React from "react";
import ReactDOM from "react-dom";
// import { ThemeProvider } from "@material-ui/core/styles";
// import theme from "./theme";
import "./index.css";
import 'fontsource-roboto';
import App from "./App";
import {Provider} from 'react-redux'
import store from './redux/index'

ReactDOM.render(
  // <ThemeProvider theme={theme}>
  <Provider store={store}>
  <App />,
  </Provider>,
  //</ThemeProvider>,
  document.getElementById("root")
);
