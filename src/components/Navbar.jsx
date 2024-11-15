import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <header className="header">
      <h1>🎥 DKD Movies</h1> {/*logo here*/}
      <nav className="nav-links">
        <Link to={"/"}>home</Link>
        <Link to={"/allmovies"}>all movies</Link>
        <Link to={"/about"}>about</Link>
      </nav>
    </header>
  );
}

export default Navbar;
