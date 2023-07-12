import React from 'react';
import Navbar from "../navbar/Navbar";
import './homepage.css';
import { Link } from 'react-router-dom';

const Homepage = ({PageState,isHomePage}) => {
    React.useEffect(() => {
        isHomePage(true);
        },[PageState])

  return (
    <div className='home-page'>
        <Navbar PageState={PageState}/>
        <div className='intro-section'>
            <h1>
                Welcome to Lawrence's Portfolio
            </h1>
            <h2>
                Front End Developer | HTML Email Developer
            </h2>
        </div>
        <div className='skills-section'>
           <div className='one-column-skills-section'>
             <h2>
                Languages
            </h2>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        Javascript
                    </li>
                </ul>
           </div>
           <div className='one-column-skills-section'>
             <h2>
                Front End Web Development Tools
             </h2>
                <ul>
                    <li>
                        Responsive Web Design
                    </li>
                    <li>
                        Bootstrap
                    </li>
                    <li>
                        Flexbox | CSS Grid | Bootstrap Grid
                    </li>
                    <li>
                        Node.js
                    </li>
                    <li>
                        React JS
                    </li>
                </ul>
           </div>
           <div className='one-column-skills-section'>
             <h2>
             Design Tools
            </h2>
                <ul>
                    <li>
                        Figma
                    </li>
                    <li>
                        Photoshop
                    </li>
                </ul>
           </div>         
        </div>
        <div className='project-list'>
           <h1>Sample Emails</h1>
            <div className="list email-list">
                <ul>
                    <li>
                        <div className='project-list-individual-container'>
                            <Link to="/first-newsletter-sample/">
                                <p>Fashion Nova Newsletter Email</p>
                                <img className="email-preview"
                                src="/homepage-images/fashion-nova-newsletter-email-preview.png" />                        
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className='project-list-individual-container'>
                            <Link to="/first-promotional-sample/">
                                <p>Generic Promotional Email</p>
                                <img className='email-preview'
                                src="/homepage-images/hero-watch-email-preview.png"/>
                            </Link>
                         </div>
                    </li>
                    <li>
                        <div className='project-list-individual-container'>
                            <Link to="/first-transactional-sample/">
                                 <p>Doordash Order Transaction Email</p>
                                 <img className="email-preview"
                                 src="/homepage-images/doordash-order-email.png"/>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
            <h1>Sample Landing Pages</h1>
                <div className="list landing-page-list">
                    <ul>
                        <li>
                            <div className='project-list-individual-container'>
                                <Link to="/sample-yugi-tutor-landingPage/">
                                    <p>Personal Business Landing Page </p>
                                    <img className="email-preview"
                                        src="/homepage-images/yugi-tutor-preview.png"/>
                                </Link>
                            </div>
                        </li>
                        <li>
                           <div className='project-list-individual-container'>
                                <Link to="/sample-apartment-landingPage/">
                                        <p>Apartment Landing Page</p>
                                        <img className="email-preview"
                                            src="/homepage-images/apartment-landing-page-preview.png"/>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Homepage
