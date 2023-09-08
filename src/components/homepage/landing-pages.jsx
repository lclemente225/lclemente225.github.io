import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';

export const LandingPageProjects = () => {
  return (
    <>
     <h1 className='project-list-heading' id="landing-page-list">Sample Landing Pages</h1>
                <div className="list landing-page-list">
                    <ul>
                        <li>
                           <div className='project-list-individual-container'>
                                <Link to="/sample-apartment-landingPage/">
                                        <p>Apartment </p>
                                        <img className="email-preview"
                                            src="/homepage-images/apartment-landing-page-preview.png"/>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className='project-list-individual-container'>
                                <Link to="/sample-yugi-tutor-landingPage/">
                                    <p>Personal Business</p>
                                    <img className="email-preview"
                                        src="/homepage-images/yugi-tutor-preview.png"/>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
      
    </>
  )
}

