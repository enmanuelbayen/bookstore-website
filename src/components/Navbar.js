import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="header">
    <logo>Bookstore CMS</logo>
    <nav>
      <NavLink to="/">Books</NavLink>
      <NavLink to="/Categories">Categories</NavLink>
    </nav>

    <div className="userLogo"><p>userlogo</p></div>
  </header>
);

export default Navbar;
