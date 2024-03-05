import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({PageState}) => {

  return (
    <div className="navbar">
        <ul className="navbar-list">
        {PageState ? 
        <>
          <li>
            <Link to="/"
            id="navbar-home-blog" className='navbar-item navbar-item-home'>
              Skills & Projects
            </Link>
          </li>
          <li>
            <Link to="/about"
            id="navbar-home-about" className='navbar-item navbar-item-home'>
              About
            </Link>
          </li>
          <li>
            <a href="https://lawrenceclemente.wordpress.com/list-of-posts/"
            id="navbar-home-blog" className='navbar-item navbar-item-home'
            target='_blank'>
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
