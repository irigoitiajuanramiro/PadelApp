import React from "react";
import ReactDOM from "react-dom";
// import { ThemeProvider } from "@material-ui/core/styles";
// import theme from "./theme";
import "./index.css";
import 'fontsource-roboto';
import App from "./App";

ReactDOM.render(
  // <ThemeProvider theme={theme}>
  <App />,
  // </ThemeProvider>,
  document.getElementById("root")
);
