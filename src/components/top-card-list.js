import React from "react";
import Card from "./card";
import "../styles/top-card-list.css";

const cardListData = [
  {
    username: "@jpmontoya182",
    followers: "1987",
    todayFollowers: 12,
    icon: "./images/facebook.png",
    mediaSocial: "facebook",
  },
  {
    username: "@jpmontoya182",
    followers: "2900",
    todayFollowers: 100,
    icon: "./images/instagram.png",
    mediaSocial: "instagram",
  },
  {
    username: "@jpmontoya182",
    followers: "12K",
    todayFollowers: 85,
    icon: "./images/twitter.png",
    mediaSocial: "twitter",
  },
  {
    username: "@jpmontoya182",
    followers: "5M",
    todayFollowers: -33,
    icon: "./images/youtube.png",
    mediaSocial: "youtube",
  },
];

const TopCardList = () => {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map(
            ({ username, followers, todayFollowers, icon, mediaSocial }) => {
              const key = Math.random();
              return (
                <Card
                  key={key}
                  username={username}
                  followers={followers}
                  todayFollowers={todayFollowers}
                  icon={icon}
                  mediaSocial={mediaSocial}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default TopCardList;

//https://www.youtube.com/watch?v=-K4zonaIrV8&t=213s 1.07.54
