import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
        <ul className="navbar-list">
            <li>
                <a href="/">My Blog</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
      
    </div>
  )
}

export default Navbar
