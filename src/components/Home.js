import React from "react";
import { withRouter } from "react-router-dom";

const Home = (props) => {
  const { history } = props;
  const handleBack = (e) => {
    history.push("/");
  };
  return (
    <div>
      <h2>Logueado</h2>
      <button onClick={handleBack}>Volver </button>
    </div>
  );
};

export default withRouter(Home);
