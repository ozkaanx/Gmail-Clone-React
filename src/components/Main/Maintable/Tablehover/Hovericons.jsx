import React from "react";
import archive from "../../../Sidebar/icons/archive.png";
import del from "../../../Sidebar/icons/del.png";
import mail from "../../../Sidebar/icons/mail.png";
import postponed from "../../../Sidebar/icons/postponed.png";
import './style.scss'
function Hovericons() {
  return (
    <div className="hover-icons-group">
      <img src={archive} alt="" />
      <img src={del} alt="" />
      <img src={mail} alt="" />
      <img src={postponed} alt="" />
    </div>
  );
}

export default Hovericons;
