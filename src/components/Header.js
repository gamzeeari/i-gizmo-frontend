import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <NavLink to="/">React Template</NavLink>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className={({isActive}) => isActive ? "active" : ""}>
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;