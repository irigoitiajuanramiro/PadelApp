import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from "@material-ui/core";
import "../index.css";
import Typography from '@material-ui/core/Typography';
const harcodedValues = {
  user: 'ramiro@gmail.com',
  password: '12341234'
}


const LoginApp = (props) => {
  const [showLoginError, setShowLoginError] = useState(false)
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
    console.log(user, harcodedValues)
    if (user.nombre === harcodedValues.user && user.pass === harcodedValues.password) history.push("/Home")
    else setShowLoginError(true)
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
            type="email"
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
        <Button style={{marginTop: '1em'}} variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
        {showLoginError && <Typography variant="h6" component="h2" color={'error'}>
          Wrong user or password
        </Typography>}
      </div>
    </div>
  );
};

export default withRouter(LoginApp);
