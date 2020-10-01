import React, { useState, useEffect } from "react";
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
import {userLogin} from '../redux/actions/user'
import { connect } from "react-redux";

<<<<<<< HEAD
const LoginApp = (props) => {
  

=======
>>>>>>> 9acc606501516e3cb2952492883763e31260c828

const LoginApp = (props) => {
 // const [showLoginError, setShowLoginError] = useState(false)
  const [us, setUser] = useState({
    nombre: "",
    pass: "",
  });

  const {user, userLogin, history} = props

  useEffect(() => {
    if(user.isLogedIn) {
      history.push('/home')
    }
  }, [user.isLogedIn]);

  const handleOnChange = (e) => {
    setUser({
      ...us,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
   userLogin(us.nombre, us.pass)
  };

  console.log(props)
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
        {user.error && <Typography variant="h6" component="h2" color={'error'}>
          {user.errormessage}
        </Typography>}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
   userLogin:(email,password)=>dispatch(userLogin(email,password))
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginApp));
