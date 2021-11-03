import { AiOutlineProfile } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
const NavLinks = () => {
  return (
    <ul>
      <li>
        <AiOutlineProfile className="profile_icon" />
        <a href="#">Profile</a>
      </li>
      <li>
        <AiOutlineLogout className="logout_icon" />
        <a href="#">Log Out</a>
      </li>
    </ul>
  );
};

export default NavLinks;
