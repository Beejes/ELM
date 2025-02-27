// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content"> {/* Container for navbar content */}
        <NavLink to="/" className="navbar-brand">ELM</NavLink> {/* Replace with your logo/brand */}
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/progress"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Progression Graph
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/leaderboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About Us
            </NavLink>
          </li>
        </ul>
        <div className="login-signup-container">
          <NavLink to="/login">
            <button className="login-button">Login</button>
          </NavLink>
          <NavLink to="/signup">
            <button className="signup-button" style={{ marginLeft: '10px' }}>Sign Up</button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;