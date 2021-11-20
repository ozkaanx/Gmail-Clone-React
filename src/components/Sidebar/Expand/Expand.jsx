import React from "react";
import { Link } from "react-router-dom";
import expand from "../icons/expand.png";
import expand_les from "../icons/expand_les.png";
import { expandMenu } from "../SidebarMenu/Menudata";

function Expand({ show, setshow }) {
  const click = () => {
    setshow(!show);
  };
  return (
    <>
      <div className="expand" onClick={click}>
        <div className="menu">
          <div className="menu-icon">
            <img src={show ? expand_les : expand} alt="" />
          </div>
          <div className="menu-text">
            <Link className="menu-link" to="/">
              {show ? "Daha az" : "Diğer"}
            </Link>
          </div>
        </div>
      </div>
      <div>
        {show ? (
          <>
            {expandMenu.map((ex) => (
              <div className="menu" key={ex.id}>
                <div className="menu-icon">
                  <img src={ex.icon} alt="" />
                </div>
                <div className="menu-text">
                  <Link className="menu-link" to="/">
                    {ex.name}
                  </Link>
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default Expand;
