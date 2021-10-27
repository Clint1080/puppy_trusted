import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <AiOutlineMenu
      className="hamburger"
      size="40px"
      color="#333333"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <AiOutlineCloseCircle
      className="hamburger"
      size="40px"
      color="#333333"
      onClick={() => setOpen(!open)}
    />
  );
  return (
    <nav className="mobile_navigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
