import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          ASCE<span>GYM</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/membership" className="nav-link">Membership</Link>
          <Link to="/schedule" className="nav-link">Schedule</Link>
          <Link to="/trainers" className="nav-link">Trainers</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;