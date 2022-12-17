import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const bgImg = new URL("../../public/images/img-7.jpg", import.meta.url);
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={bgImg} alt="react"></img>
        <div className="navbar-container">
          <h1>Navbar</h1>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
