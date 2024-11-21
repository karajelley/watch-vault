import { Link, NavLink } from "react-router-dom";
import logoHorizontal from "../assets/logo-horizontal.png";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link to={"/"}>
          <img src={logoHorizontal} alt="WatchValut Logo" width="30%" />
        </Link>
        <div className="nav-links">
          <NavLink className="nav-link" to={"/"}>
            Movies
          </NavLink>
          <NavLink className="nav-link" to={"/about"}>
            About Us
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
