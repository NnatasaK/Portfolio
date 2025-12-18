import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const scrollToContact = (e) => {
    e.preventDefault();
    setOpen(false);
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const scrollToPortfolio = (e) => {
    e.preventDefault();
    setOpen(false);
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("portfolio");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header>
      <nav className="navbar">
        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open ? "show" : ""}`}>
          <li>
            <Link
              to="/"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/portfolio"
              onClick={scrollToPortfolio}
              className="nav-link"
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              to="/#contact"
              onClick={scrollToContact}
              className="nav-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
