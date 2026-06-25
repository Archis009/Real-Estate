import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">⌂</span> Sky Heights
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Properties</Link></li>
          <li><Link to="/">Projects</Link></li>
          <li><Link to="/">Agents</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
