import React, { useState } from "react";
import starblack from "../../../Sidebar/icons/starblack.png";
import staryellow from "../../../Sidebar/icons/staryellow.png";
import label from "../../../Sidebar/icons/label.png";

import "./style.scss";

function Tableicons() {
  const [click, setClick] = useState(true);

  function starClick() {
    setClick(!click);
  }

  return (
    <div className="table-icons">
      <div className="icons-chechox">
        <label className="checbox">
          <input type="checkbox"></input>
          <span className="checkbox"></span>
        </label>
      </div>
      <div className="icons-star" onClick={starClick}>
        {click ? (
          <img className="blackstar" src={starblack} alt="" />
        ) : (
          <img className="yellowstar" src={staryellow} alt="" />
        )}
      </div>
      <div className="icon-label">
        <img src={label} alt="" />
      </div>
    </div>
  );
}

export default Tableicons;
