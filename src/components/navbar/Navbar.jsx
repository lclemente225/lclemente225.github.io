import React from 'react';
import './navbar.css';

const Navbar = ({PageState}) => {

  return (
    <div className="navbar">
        <ul className="navbar-list">
        {PageState ? 
        <>
          <li>
            <a href="/"
            id="navbar-home-blog" className='navbar-item navbar-item-home'>
              Skills & Projects
            </a>
          </li>
          <li>
            <a href="/about"
            id="navbar-home-about" className='navbar-item navbar-item-home'>
              About
            </a>
          </li>
          <li>
            <a href="https://lawrenceclemente.wordpress.com/list-of-posts/"
            id="navbar-home-blog" className='navbar-item navbar-item-home'>
              My Blog
            </a>
          </li>
        </>
       : 
          <li>
            <a href="/" id="navbar-project-page" className='navbar-item'>
              <i className="fa-solid fa-left-long arrow-icon" />   
              <span> Back to portfolio</span>
            </a>
          </li>
    }
        </ul>
      
    </div>
  )
}

export default Navbar
