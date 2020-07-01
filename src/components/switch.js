import React from "react";
import "../styles/swicth.css";

const Swicth = (props) => {
  const { title } = props;
  return (
    <div className="dark-mode">
      <p>{title}</p>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label className="switch" htmlFor="checkbox">
        {" "}
      </label>
    </div>
  );
};

export default Swicth;
