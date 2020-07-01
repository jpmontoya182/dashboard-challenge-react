import React from "react";
import "../styles/header.css";
import Switch from "./switch";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <h1>Social Media Dashboard</h1>
            <p className="header-total">Total followers: 23,004</p>
          </div>

          <Switch title={"Dark Mode"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
