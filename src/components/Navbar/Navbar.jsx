import React from "react";
import NavbarSearch from "./NavbarSearch/NavbarSearch";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavbarLogo from "./NavbarLogo/Navbarlogo";
import './style.scss'

function Navbar() {
  return (
    <div className="navbar-menu">
      <NavbarLogo />
      <NavbarSearch />
      <NavbarAuth />
    </div>
  );
}

export default Navbar;
