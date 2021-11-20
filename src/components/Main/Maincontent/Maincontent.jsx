import React, { useState, useEffect } from "react";
import Headertabs from "../Headertabs/Headertabs";
import Headermenu from "../Headermenu/Headermenu";
import Maintable from "../Maintable/Maintable";
import "./style.scss";

function Maincontent() {
  const [activeTab, setActiveTab] = useState("activefirst");
  return (
    <>
      <Headermenu />
      <div className="main-content">
        <Headertabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Maintable activeTab={activeTab} />
      </div>
    </>
  );
}

export default Maincontent;
