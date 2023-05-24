import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav>
      <ul className="nav__list">
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/animals">Våra djur</Link>
        </li>
      </ul>
    </nav>
  );
};
