import React from "react";
import { Link } from "react-router-dom";
import videocam from "../icons/videocam.png";
import keyboard from "../icons/keyboard.png";
import "../SidebarMenu/style.scss";

function Meetmenu() {
  return (
    <div className="meet-menu">
        <span>Meet</span>
      <div className="sidebar-menu">
        <div className="menu">
          <div className="menu-icon">
            <img src={videocam} alt="" />
          </div>
          <div className="menu-text">
            <Link className="menu-link" to="/">
              Yeni Toplantı
            </Link>
          </div>
        </div>
        <div className="menu">
          <div className="menu-icon">
            <img src={keyboard} alt="" />
          </div>
          <div className="menu-text">
            <Link className="menu-link" to="/">
              Toplantıya Katıl
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meetmenu;
