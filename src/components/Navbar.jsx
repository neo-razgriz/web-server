// src/components/Navbar.jsx
import React from 'react';
// 1. Import NavLink instead of Link
import { NavLink } from 'react-router-dom'; 
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          {/* 2. Use NavLink instead of Link */}
          {/* 3. Add this className function. React Router will pass in { isActive: true }
               when this link matches the current URL. */}
          <NavLink 
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/supplements"
            className={({ isActive }) => (isActive ? 'active-link' : undefined)}
          >
            Supplements
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;