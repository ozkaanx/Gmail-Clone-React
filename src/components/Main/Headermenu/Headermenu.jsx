import React, { useState } from "react";
import refresh from "../../Sidebar/icons/refresh.png";
import more from "../../Sidebar/icons/more.png";
import chleft from "../../Sidebar/icons/ch_left.png";
import chright from "../../Sidebar/icons/ch_right.png";
import archive from "../../Sidebar/icons/archive.png";
import report from "../../Sidebar/icons/report.png";
import del from "../../Sidebar/icons/del.png";
import drafts from "../../Sidebar/icons/drafts.png";
import watch from "../../Sidebar/icons/watch.png";
import task from "../../Sidebar/icons/task.png";
import drive from "../../Sidebar/icons/drive.png";
import categories from "../../Sidebar/icons/categories.png";
import "./style.scss";

function Headertop() {
  const [active, setActive] = useState(false);

  const activeIcons = () => {
    setActive(!active);
  };
  return (
    <div className="header-top">
      <div className="header-top-left">
        <label>
          <input onClick={activeIcons} type="checkbox"></input>
          <span className="checkbox"></span>
        </label>
        {active ? (
          <>
            <div className="openIcons">
              <img src={archive} alt="" />
              <img src={report} alt="" />
              <img src={del} alt="" />
              <span />
              <img src={drafts} alt="" />
              <img src={watch} alt="" />
              <img src={task} alt="" />
              <span />
              <img src={drive} alt="" />
              <img src={categories} alt="" />
            </div>
          </>
        ) : (
          <>
            <img src={refresh} alt=""></img>
          </>
        )}
        <img src={more} alt=""></img>
      </div>
      <div className="header-top-right">
        <span>2.329 satırdan 1-50 arası</span>
        <div className="arrow-group">
          <img src={chleft} alt=""></img>
          <img src={chright} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Headertop;
