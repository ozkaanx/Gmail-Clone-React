import React from "react";

import msg from "../../Sidebar/icons/message.png";
import "./style.scss";
function Messagebox() {
  return (
    <div className="message-box">
      <div className="message-box-icon">
        <img src={msg} alt="" />
      </div>
      <div className="message-box-text">
        <span>Yakın zamanda gerçekleşen bir sohbet yok</span>
        <span className="lnk">Yeni bir tane başlatın</span>
      </div>
      <div className="message-box-bottom">
      </div>
    </div>
  );
}

export default Messagebox;
