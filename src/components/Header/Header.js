import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <section className="logo-container">
      </section>
      <nav className="nav-container">
        <Link to="/" className="nav-item">Home</Link>
        <span className="space"></span>
        <Link to="/landscaping" className="nav-item">Landscaping</Link>
        <span className="space"></span>
        <Link to="/projects" className="nav-item">Projects</Link>
        <span className="space"></span>
        <Link to="/faqs" className="nav-item">FAQs</Link>
        <span className="space"></span>
        <Link to="/contact" className="nav-item contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
