import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';

export const HomepageFooter = () => {
  return (
    <>
      <div className=''>
                <h1>
                    Lawrence Clemente
                </h1>
                <p>
                    San Jose, California
                </p>
                <p>
                    lawrenceclemente3@gmail.com
                </p>
                <Link to="https://www.linkedin.com/in/lawrence-clemente/" className='linkedin-logo'>
                    <i className="fa-brands fa-linkedin"/>
                    <span>
                        Linkedin
                    </span>
                </Link>
                <Link to="https://github.com/lclemente225" className='github-logo'>
                    <i className="fa-brands fa-square-github"/>
                    <span>
                        Github
                    </span>
                </Link>
            </div>
            <p className='created-by-react-footer'>
                This portfolio was created with <i className="fa-brands fa-react" /> React 
            </p>
    </>
  )
}

