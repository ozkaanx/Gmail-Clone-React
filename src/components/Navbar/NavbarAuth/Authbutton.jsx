import React from "react";
import { Link } from "react-router-dom";
import authlogo from "../../../img/authlogo.png";

function Authbutton() {
  return (
    <div className="auth-btn">
      <Link to="/">
      <div className="btn-img">
        <img src={authlogo} alt=""></img>
      </div>
      </Link>
    </div>
  );
}

export default Authbutton;
