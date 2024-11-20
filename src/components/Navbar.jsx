import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <header className="header">
      <nav className="nav-container">
      <Link to={"/"}>
        <img src="src/assets/logo-horizontal.png" alt="WatchValut Logo" width="30%" />
      </Link>
      <div className="nav-links">
        <NavLink className="nav-link" to={"/"}>Movies</NavLink>
        <NavLink className="nav-link" to={"/allmovies"}>all movies</NavLink>
        <NavLink className="nav-link" to={"/about"}>About Us</NavLink>
      </div>
      </nav>
    </header>
  );
}

export default Navbar;
