import React from "react";
import LoginApp from "./components/LoginApp";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    
    <Router>
      <Switch>
        <Route path="/login" component={LoginApp} />
        <Route path="/Home" component={Home} />
        <Route path="/" exact component={LoginApp} />
      </Switch>
    </Router>
  );
};

export default App;
