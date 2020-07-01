import React from "react";
import "./globals.css";
import Header from "./components/header";
import TopCardList from "./components/top-card-list";
import Overview from "./components/overview";

function App() {
  return (
    <>
      <Header />
      <TopCardList />
      <Overview />
    </>
  );
}

export default App;
