import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import "./index.css";
import LoginApp from "./components/LoginApp";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <LoginApp />
  </ThemeProvider>,
  document.getElementById("root")
);
