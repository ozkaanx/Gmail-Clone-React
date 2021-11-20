import React from "react";
import "./style.scss";
import authlogo from "../../../img/authlogo.png";

function Hangouts() {
  return (
    <div className="hangouts-menu">
      <span>Hangouts</span>
      <div className="hangouts-menu-group">
        <div className="hg-icons">
          <img src={authlogo} alt=""></img>
        </div>
        <div className="hg-name">
          <span>Ozkan</span>
        </div>
        <div className="hg-plus">
          <svg width="18px" height="18px" viewBox="0 0 48 48">
            <path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Hangouts;
