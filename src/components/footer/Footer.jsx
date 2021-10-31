import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer container">
      <p>&copy;{new Date().getFullYear()} Puppy Trusted</p>
    </div>
  );
};

export default Footer;
