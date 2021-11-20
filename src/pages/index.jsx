import React from "react";
import "./style.scss";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Maincontent from '../components/Main/Maincontent/Maincontent'
function index() {
  return (
    <div className="content">
      <Navbar />
      <div className="main">
        <div className="main-left">
          <Sidebar />
        </div>
        <div className="main-right">
          <Maincontent/>
        </div>
      </div>
    </div>
  );
}

export default index;
