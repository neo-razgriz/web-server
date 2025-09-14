// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Navbar from './Navbar'; // Import our Navbar

function Layout() {
  return (
    <div>
      <Navbar /> {/* The navbar will show on every page */}
      <main>
        {/* The current page component will be rendered here */}
        <Outlet /> 
      </main>
    </div>
  );
}

export default Layout;