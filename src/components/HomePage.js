import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const bgImg = new URL("../../public/images/ML.jpg", import.meta.url);
const HomePage = () => {
  return (
      <div>
        <div className="img-container"></div>
        <div className="main-text-box">
          <h1>DIABETES PREDICTION</h1>
          <Stack spacing={2} direction=" row" className="stack-mui">
          <Link to="/know-more">
            <Button class="button-km" variant="contained">
              HomeScreen
            </Button>{" "}
          </Link>
          <Link to="/">
            <Button class="button-km" variant="contained">
              Next Page
            </Button>
          </Link>
        </Stack>
      </div>
    </div>
  );
};

export default HomePage;
