import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import "../index.css";

const LoginApp = (props) => {
  


  const [user, setUser] = useState({
    nombre: "",
    pass: "",
  });

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  

  const { history } = props;
  const handleSubmit = (e) => {
    if () {
      history.push("/Home");
    } else alert("Su usuario no esta en la base de datos");
  };
  return (
    <div className="container">
      <div className="subcontainer">
        <div className="sign">
          <h2>Sign In</h2>
        </div>

        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            onChange={handleOnChange}
            name="nombre"
            type="text"
            id="email"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Email personal.</FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            onChange={handleOnChange}
            name="pass"
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
