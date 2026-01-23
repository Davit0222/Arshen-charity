import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar({ isOpen, toggleMenu }) {
  return (
    <nav className={`header-navbar ${isOpen ? "open" : ""}`}>
      <Link to="/" onClick={toggleMenu}>
        Home
      </Link>
      <Link to="/about" onClick={toggleMenu}>
        About
      </Link>
      <Link to="/blog" onClick={toggleMenu}>
        Blog
      </Link>
      <Link to="/team" onClick={toggleMenu}>
        Team
      </Link>
    </nav>
  );
}

export default Navbar;
