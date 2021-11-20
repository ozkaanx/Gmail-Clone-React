import React from "react";
import "./style.scss";

function Tablemail({ item }) {
  return (
    <>
      <div className="mail" key={item.id}>
        <div className="mail-title">
          <span>{item.title}</span>
        </div>
        <div className="mail-content">
          <p>{item.content} </p>
          <span>{item.description}</span>
        </div>
        <div className="mail-time">
          <span>{item.time}</span>
        </div>
      </div>
    </>
  );
}

export default Tablemail;
