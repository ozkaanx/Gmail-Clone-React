import React from "react";
import Tableicons from "./Tableicons/Tableicons";
import Tablemail from "./Tablemail/Tablemail";
import { primaryData } from "../Maincontent/Primarydata";
import { socialData } from "../Maincontent/Socialdata";

import "./style.scss";
import Hovericons from "./Tablehover/Hovericons";

function Maintable({ activeTab }) {
  return (
    <>
      {(activeTab === "activefirst" ? primaryData : socialData).map((item) => (
        <div className="main-table">
          <div className="table-group">
              <div className="hover-icon">
               <Hovericons/>
              </div>
              <Tableicons />
              <Tablemail item={item} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Maintable;
