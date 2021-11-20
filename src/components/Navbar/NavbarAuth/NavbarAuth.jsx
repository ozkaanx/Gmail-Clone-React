import React from "react";
import Helpbutton from "./Helpbutton";
import Settingsbutton from "./Settingsbutton";
import Appbutton from "./Appbutton";
import Authbutton from "./Authbutton";
import './style.scss'

function NavbarAuth() {
  return (
    <div className="navbar-auth">
      <Helpbutton />
      <Settingsbutton />
      <Appbutton /> 
      <Authbutton/>
    </div>
  );
}

export default NavbarAuth;
