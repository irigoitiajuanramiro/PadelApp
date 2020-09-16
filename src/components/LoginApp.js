import React from "react";
import { withRouter } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import "../index.css";
const LoginApp = (props) => {
  const { history } = props;
  const handleSubmit = (e) => {
    history.push("/Home");
  };
  return (
    <div className="container">
      <div className="subcontainer">
        <div className="sign">
          <h2>Sign In</h2>
        </div>

        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input type="text" id="email" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">Email personal.</FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            type="password"
            id="password"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Entre 6 y 12 caracteres.
          </FormHelperText>
        </FormControl>
        <button className="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default withRouter(LoginApp);
