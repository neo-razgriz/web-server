// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Navbar.css'; // We will create this CSS file next

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          {/* Use <Link to=""> instead of <a href=""> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/supplements">Supplements</Link>
        </li>
        {/* When you want to add a new page (e.g., "About"):
          1. Create src/pages/AboutPage.jsx
          2. Add the route in App.jsx (see Step 6)
          3. Add the link here: <li><Link to="/about">About</Link></li>
        */}
      </ul>
    </nav>
  );
}

export default Navbar;