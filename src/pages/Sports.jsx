import React from "react";
import Navbar from "../components/Navbar";
import HeadLines from "../components/HeadLines";
import PoliticNews from "../components/PoliticNews";
import SportNews from "../components/SportsNews";

const Sports = (props) => {
  return (
    <div className="row">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main-container">
        <h2>Sports News</h2>
        <SportNews code={props.country_code}/>
      </div>
    </div>
  );
};

export default Sports;
