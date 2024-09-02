import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <header>
      <nav className="navbar">
      <div className="logo">
          <Link to="/"> {/* This should link to the Home page */}
          <img src="/logo3.png" alt="Natasa K. Logo" className="logo-image" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/about" className="nav-link">About</Link> 
          </li>
          <li>
            <a href="#portfolio" className="nav-link">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
