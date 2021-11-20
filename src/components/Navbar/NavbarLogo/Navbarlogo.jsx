import React, { useEffect } from "react";
import logo from "../../../img/logomail.png";
import { FaBars } from "react-icons/fa";
import './style.scss'
function Navbarlogo() {

  return (
    <div className="navbarlogo">
      <button className="navbar-btn">
        <FaBars />
      </button>
      <img src={logo} alt="" />
    </div>
  );
}

export default Navbarlogo;
