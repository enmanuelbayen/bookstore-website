import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => (
  <header className="header flex">
    <div className="nav-container flex">
      <logo className="logo">Bookstore CMS</logo>
      <nav className="nav flex">
        <NavLink to="/" className="booksnav">Books</NavLink>
        <NavLink to="/Categories" className="categoNav">Categories</NavLink>
      </nav>
    </div>

    <p><FaUserCircle className="userLogo" /></p>
  </header>
);

export default Navbar;
