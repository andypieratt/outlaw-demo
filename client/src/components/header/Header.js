import React, { useState, useEffect } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <div className="header-container">
      <MenuIcon />
      <h3>Outlaw</h3>
    </div>
  );
};

export default Header;
