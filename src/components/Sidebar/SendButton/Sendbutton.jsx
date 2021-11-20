import React from "react";
import { Link } from "react-router-dom";
import sendimg from "../../../img/create.png";
import "./style.scss";

function Sendbutton() {
  return (
    <div className="send-button">
      <Link to="/">
        <img src={sendimg} alt=""></img>
        <span>Oluştur</span>
      </Link>
    </div>
  );
}

export default Sendbutton;
