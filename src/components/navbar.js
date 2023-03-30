import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-items">
        <Link className="nav-link-name" to="/">
          Derek J
        </Link>
        <NavBarItem
          itemName="About"
          location="/about"
          className={"nav-link-last"}
        />
        <NavBarItem itemName="Extra" location="/extra" className={"nav-link"} />
        <NavBarItem itemName="Home" location="/" className={"nav-link"} />
      </ul>
    </nav>
  );
};

function NavBarItem({ location, itemName, className }) {
  return (
    <li className="nav-item">
      <Link className={className} to={location}>
        {itemName}
      </Link>
    </li>
  );
}

export default NavBar;
