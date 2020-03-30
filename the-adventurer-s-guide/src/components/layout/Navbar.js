import React from "react";
import { Link } from "react-router-dom";
// import signedInlinks from "./SingedInLinks";

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Logo
        </Link>
        {/* <SingedInLinks /> */}
      </div>
    </nav>
  );
};

export default NavBar;
