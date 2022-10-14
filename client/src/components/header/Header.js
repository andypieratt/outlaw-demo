import React, { useState, useEffect } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="nav-container">
          <button className="nav-button">
            <MenuIcon />
          </button>
        </div>
        <div className="title-container">
          <h2 className="title">OUTLAW</h2>
        </div>
      </div>
    </>
  );
};

export default Header;
