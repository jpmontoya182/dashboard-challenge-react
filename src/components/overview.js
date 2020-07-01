import React from "react";
import CardSmall from "./card-small";
import "../styles/overview.css";

const cardSmallList = [
  {
    icon: "./images/facebook.png",
    pageViews: "87",
    growth: 3,
    typeCard: "Profile Views",
  },
  {
    icon: "./images/facebook.png",
    pageViews: "52",
    growth: -2,
    typeCard: "Likes",
  },
  {
    icon: "./images/instagram.png",
    pageViews: "5462",
    growth: 2257,
    typeCard: "Likes",
  },
  {
    icon: "./images/instagram.png",
    pageViews: "52k",
    growth: 1375,
    typeCard: "Profile Views",
  },
  {
    icon: "./images/twitter.png",
    pageViews: "117",
    growth: 303,
    typeCard: "Retweets",
  },
  {
    icon: "./images/twitter.png",
    pageViews: "507",
    growth: 553,
    typeCard: "Likes",
  },
  {
    icon: "./images/youtube.png",
    pageViews: "107",
    growth: -19,
    typeCard: "Likes",
  },
  {
    icon: "./images/youtube.png",
    pageViews: "1407",
    growth: -12,
    typeCard: "Retweets",
  },
];

function Overview() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview Today</h2>
        <div className="grid">
          {cardSmallList.map((cardSmall) => {
            const key = Math.random();
            return (
              <CardSmall
                key={key}
                icon={cardSmall.icon}
                pageViews={cardSmall.pageViews}
                growth={cardSmall.growth}
                type={cardSmall.typeCard}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Overview;
