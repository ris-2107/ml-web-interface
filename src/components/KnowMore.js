import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./KnowMore.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const bgImg = new URL("../../public/images/img-7.jpg", import.meta.url);
function Navbar() {
  return (
    <div>
      <div className="img-container"></div>
      <div className="text-box-left-upper">
        <h2 className="left-upper-title">Sample Heading</h2>
        <p className="left-upper-main-text">
          This is the main text of the content This is the main text of the
          is the main text of the
          content This is the main text of the content This is the main text of
          the content This is the main text of the content This is the main text
          of the content This is the main text of the content This is the main
          text of the content This is the main text of the content
        </p>
        <Stack spacing={2} direction=" row" className="stack-mui">
          <Link to="/">
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
}

export default Navbar;
