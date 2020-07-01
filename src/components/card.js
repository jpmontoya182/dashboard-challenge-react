import React from "react";
import "../styles/card.css";

const Card = (props) => {
  const { username, followers, todayFollowers, icon, mediaSocial } = props;
  const cardClass = `card ${mediaSocial}`;
  return (
    <article className={cardClass}>
      <p className="card-title">
        <img src={icon} alt="" />
        {username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{followers}</span>
        <span className="card-followers-title">Followers</span>
      </p>
      <p className={todayFollowers > 0 ? "card-today" : "card-today is-danger"}>
        <img
          src={
            todayFollowers > 0
              ? "./images/icon-up.png"
              : "./images/icon-down.png"
          }
          alt=""
          width="9px"
        />
        {Math.abs(todayFollowers)} Today
      </p>
    </article>
  );
};

export default Card;
