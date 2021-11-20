import React from "react";
import "./style.scss";
import Sendbutton from "./SendButton/Sendbutton";
import Sidebarmenu from "./SidebarMenu/Sidebarmenu";
import Meetmenu from "./Meet/Meetmenu";
import Hangouts from "./Hangouts/Hangouts";
import Messagebox from "./Messagebox/Messagebox";

function Sidebar() {
  return (
    <div className="sidebar">
      <Sendbutton />
      <Sidebarmenu />
      <Meetmenu />
      <Hangouts />
      <Messagebox />
    </div>
  );
}

export default Sidebar;
