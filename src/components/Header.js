// src/components/Header.js
import React from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleGetStartedClick = async () => {
    try {
      const response = await axios.get('/api/v1/member');
      if (response.status === 200) {
        navigate('/hello');
      } else {
        navigate('/login');
      }
    } catch (error) {
      navigate('/login');
    }
  };

  return (
    <header className="header">
      <div className="contents">
        <a href="#home" className="logo">
          <h1 className="sitename">APPNAME</h1>
        </a>
        <nav className="navigation">
          <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <button className="btn-getstarted" onClick={handleGetStartedClick}>Get Started</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
