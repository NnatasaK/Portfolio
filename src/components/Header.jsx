import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';


const Header = () => {
  const navigate = useNavigate();
  const scrollToContact = (e) => {
    e.preventDefault();                    
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
      <div className="logo">
         {/*  <Link to="/"> 
          <img src="/logo3.png" alt="Natasa K. Logo" className="logo-image" />
          </Link> */}
        </div>
       <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/portfolio" onClick={scrollToPortfolio} className="nav-link">Portfolio</Link></li>
          <li><Link to="/#contact" onClick={scrollToContact} className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
