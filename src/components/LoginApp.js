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
      <Container>
        <div className="sign">
          <h2>Sign In</h2>
        </div>
        <div className="formulario">
          <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input id="email" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">Email personal.</FormHelperText>
          </FormControl>
        </div>
        <div className="formulario">
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">
              Entre 6 y 12 caracteres.
            </FormHelperText>
          </FormControl>
        </div>
        <div className="button">
          <Button color="secondary" variant="contained">
            Submit
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default LoginApp;
