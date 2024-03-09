// Header.js
import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

import Logo from "../assets/logo/Logo.svg";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <h1>EXTINCTION</h1>
      </div>
      <div className="menu">
        <Link to="/">
          <h3>HOME</h3>
        </Link>
        <Link to="/Chart">
          <h3>CHART</h3>
        </Link>

        <Link to="/about">
          <h3>ABOUT</h3>
        </Link>
      </div>
    </header>
  );
};

export default Header;
