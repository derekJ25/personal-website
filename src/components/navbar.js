import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        {/* Add to"/" but then have on logo + name  */}
        <Link className="nav-link" to="/">
          Derek J
        </Link>
        <NavBarItem itemName="About" location="/about" />
        <NavBarItem itemName="Extra" location="/extra" />
        <NavBarItem itemName="Home" location="/" />
      </ul>
    </nav>
  );
};

function NavBarItem({ location, itemName }) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={location}>
        {itemName}
      </Link>
    </li>
  );
}

export default NavBar;
