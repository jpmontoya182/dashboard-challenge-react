import React from "react";
import "../styles/card-small.css";

function CardSmall(props) {
  const { icon, pageViews, growth, type } = props;
  return (
    <div className="card-small">
      <div className="card-small-views">{type}</div>
      <div className="card-small-icon">
        <img src={icon} alt="" />
      </div>
      <div className="card-small-number">{pageViews}</div>
      <div
        className={
          growth > 0
            ? "card-small-percentaje"
            : "card-small-percentaje is-danger"
        }
      >
        <span>
          <img
            src={growth > 0 ? "./images/icon-up.png" : "./images/icon-down.png"}
            alt=""
          />
          {Math.abs(growth)}%
        </span>
      </div>
    </div>
  );
}

export default CardSmall;
