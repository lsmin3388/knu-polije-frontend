import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="contents">
        <a href="#home" className="logo">
          <h1 className="sitename">APPNAME</h1>
        </a>
        <nav className="navigation">
          <ul>
            <li><a href="/hero" className="active">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <a className="btn-getstarted" href="/start">Get Started</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
