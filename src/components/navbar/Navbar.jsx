import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default Navbar;
