import "./Navbar.css";
import { Link } from "react-router-dom";
import gdsclogo from "../../assets/stickers/devsforfun-white.png";

export const NavBar = () => {
  return (
    <nav id="nav">
      <img src={gdsclogo} alt="google developer studnet clubs raghu engineering college logo" />
      <div id="nav-btns">
        <Link to="/about" className="gdsc-btn">
          About
        </Link>
      </div>
    </nav>
  );
};
