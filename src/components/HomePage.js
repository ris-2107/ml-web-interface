import React from "react";
import "./HomePage.css";
const bgImg = new URL("../../public/images/ML.jpg", import.meta.url);

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <img className="bgImg" src={bgImg} alt="BgImage"></img>
      </div>
    </>
  );
};

export default HomePage;
