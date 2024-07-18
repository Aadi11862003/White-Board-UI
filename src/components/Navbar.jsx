import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4 shadow-custom-top-bottom font-bold-roboto-condensed">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-gray-800 text-2xl font-bold">
            MySite
          </Link>
        </div>
        <div className="flex space-x-8">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/struct">Demo</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/service">Service</NavLink>
          {/* Add more NavLink components for additional options */}
          <NavLink to="/courses">Login</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-gray-800 hover:text-gray-600 transition duration-300"
    >
      <div className="bg-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300">
        {children}
      </div>
    </Link>
  );
};

export default Navbar;

