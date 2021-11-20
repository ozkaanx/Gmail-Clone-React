import React from "react";
import inbox from "../../Sidebar/icons/inbox.png";
import people from "../../Sidebar/icons/people.png";
import "./style.scss";

function Headertabs({ activeTab, setActiveTab }) {
  return (
    <div className="content-tabs">
      <div
        className="tabs-group"
        onClick={() => setActiveTab("activefirst")}
        className={
          (activeTab === "activefirst" && "tabs-group first") || "tabs-group"
        }
      >
        <div className="tabs-group-icon">
          <img src={inbox} alt="" />
        </div>
        <div className="tabs-group-text">
          <span> Birincil</span>
        </div>
      </div>
      <div
        className="tabs-group"
        onClick={() => setActiveTab("activelast")}
        className={
          (activeTab === "activelast" && "tabs-group last") || "tabs-group"
        }
      >
        <div className="tabs-group-icon">
          <img src={people} alt="" />
        </div>
        <div className="tabs-group-text">
          <span> Sosyal</span>
        </div>
      </div>
    </div>
  );
}

export default Headertabs;
