import React from "react";
import "./header.scss";
import Navbar from "../navbar/Navbar";
import logo from "../../assets/puppy_trusted_logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="puppy trusted logo" className="logo" />
      <Navbar />
    </div>
  );
};

export default Header;
