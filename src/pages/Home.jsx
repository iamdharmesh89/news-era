import React from "react";
import Navbar from "../components/Navbar";
import HeadLines from "../components/HeadLines";

const Home = (props) => {
  return (
    <div className="row">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main-container">
        <HeadLines code={props.country_code}/>
      </div>
    </div>
  );
};

export default Home;
