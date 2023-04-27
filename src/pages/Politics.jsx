import React from "react";
import Navbar from "../components/Navbar";
import PoliticNews from "../components/PoliticNews";

const Politics = (props) => {
  return (
    <div className="row">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main-container">
        <h2>Entertainment News</h2>
        <PoliticNews code={props.country_code}/>
      </div>
    </div>
  );
};

export default Politics;
