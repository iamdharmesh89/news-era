import React from "react";
import Navbar from "../components/Navbar";
import HeadLines from "../components/HeadLines";

const Trending = (props) => {
  return (
    <div className="row">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main-container">
        <h2>Trending News</h2>
        <HeadLines code={props.country_code}/>
      </div>
    </div>
  );
};

export default Trending;
