import React from 'react';
import './navbar.css';

const Navbar = ({PageState}) => {

  return (
    <div className="navbar">
        <ul className="navbar-list">
        {PageState ? 
        <>
          <li>
            <a href="/">My Blog</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </>
       : 
          <li>
          <a href="/">Back to portfolio</a>
          </li>
    }
        </ul>
      
    </div>
  )
}

export default Navbar
