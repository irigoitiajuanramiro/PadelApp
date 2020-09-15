import React from "react";

import {
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";
import "../index.css";
const LoginApp = () => {
  return (
    <div className="container">

      <div className="sign">
        <h2>Sign In</h2>
      </div>

      <FormControl fullWidth>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input id="email" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Email personal.</FormHelperText>
      </FormControl>


      <FormControl fullWidth>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          Entre 6 y 12 caracteres.
            </FormHelperText>
      </FormControl>


      <Button color="secondary" variant="contained">
        Submit
          </Button>
    </div>

  );
};

export default LoginApp;
