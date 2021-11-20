import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { menuData } from "./Menudata";
import Expand from "../Expand/Expand";
function Sidebarmenu() {
  const [show, setshow] = useState(false);
  return (
    <div className={`sidebar-menu ${show ? "scroll" : ""} `}>
      {menuData.map((data) => (
        <div className={data.className} id={data.activeClass} key={data.id}>
          <div className="menu-icon">
            <img src={data.icon} alt="" />
          </div>
          <div className="menu-text">
            <Link className="menu-link" to="/">
              {data.name}
            </Link>
          </div>
        </div>
      ))}
      <Expand show={show} setshow={setshow} />
    </div>
  );
}

export default Sidebarmenu;
