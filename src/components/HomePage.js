import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
const bgImg = new URL("../../public/images/ML.jpg", import.meta.url);

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <img className="bgImg" src={bgImg} alt="BgImage"></img>
        <Link to="/know-more">
          <button>Click Me</button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
