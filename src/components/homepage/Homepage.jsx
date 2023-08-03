import React, {useRef} from 'react';
import Navbar from "../navbar/Navbar";
import './homepage.css';
import { Link } from 'react-router-dom';

const Homepage = ({PageState,isHomePage}) => {
    React.useEffect(() => {
        isHomePage(true);
        },[PageState]);

    const [hoverClass, setHoverClass] = React.useState('');

    function hoverDetails(){
        setHoverClass("hovering");
    }

    function removeHoverClass(){
        setHoverClass("not-hovering");
    }

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
                        <i className="fa-brands fa-html5" /> HTML
                    </li>
                    <li>
                        <i className="fa-brands fa-css3-alt"/> CSS
                    </li>
                    <li>
                        <i className="fa-brands fa-js" /> Javascript
                    </li>
                </ul>
           </div>
           <div className='one-column-skills-section'>
             <h2>
                Front End Web Development Tools
             </h2>
                <ul>
                    <li>
                        <i className="fa-brands fa-react" /> React JS
                    </li>
                    <li>
                        <i className="fa-solid fa-mobile-screen-button" /> Responsive Web Design
                    </li>
                    <li>
                        <i className="fa-brands fa-bootstrap" /> Bootstrap
                    </li>
                    <li>
                        <i class="fa-solid fa-table-cells-large"/> Flexbox 
                    </li>
                    <li>
                    <i class="fa-solid fa-table-cells"/> CSS Grid | Bootstrap Grid
                    </li>
                    <li>
                        <i className="fa-brands fa-node-js"/> Node.js
                    </li>
                </ul>
           </div>
           <div className='one-column-skills-section'>
             <h2>
             Design Tools
            </h2>
                <ul>
                    <li>
                        <i className="fa-brands fa-figma"/> Figma
                    </li>
                    <li className='testing'>
                        <img src='/homepage-images/Adobe-Photoshop-Symbol.png' alt="adobe photoshop symbol"
                         className='photoshop-icon'/> Photoshop
                    </li>
                </ul>
           </div>         
        </div>
        <div className='project-list'>
           <h1 className='project-list-heading'>Sample Emails</h1>
            <div className="list email-list">
                <ul>
                    <li>
                        <div onMouseEnter={hoverDetails} onMouseLeave={removeHoverClass}
                            className={`project-list-individual-container ${hoverClass}`}>
                            <Link to="/sample-sjsu-newsletter-1/">
                                <p>School Newsletter</p>
                                <img className="email-preview"
                                src="/homepage-images/sjsu-newsletter-email-preview.png" />                        
                            </Link>
                            <div className='project-desc-text'>
                                <p>
                                    HTML
                                </p>
                                <p>
                                    CSS
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div onMouseEnter={hoverDetails} onMouseLeave={removeHoverClass}
                            className={`project-list-individual-container ${hoverClass}`}>
                            <Link to="/first-promotional-sample/">
                                <p>Promotional </p>
                                <img className='email-preview'
                                src="/homepage-images/hero-watch-email-preview.png"/>
                            </Link>
                            <div className='project-desc-text'>
                                <p>
                                    HTML
                                </p>
                                <p>
                                    CSS
                                </p>
                            </div>
                         </div>
                    </li>
                    <li>
                        <div onMouseEnter={hoverDetails} onMouseLeave={removeHoverClass}
                            className={`project-list-individual-container ${hoverClass}`}>
                            <Link to="/first-transactional-sample/">
                                 <p>Order Transaction </p>
                                 <img className="email-preview"
                                 src="/homepage-images/doordash-order-email.png"/>
                            </Link>
                            <div className='project-desc-text'>
                                <p>
                                    HTML
                                </p>
                                <p>
                                    CSS
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div onMouseEnter={hoverDetails} onMouseLeave={removeHoverClass}
                            className={`project-list-individual-container ${hoverClass}`}>
                            <Link to="/first-newsletter-sample/">
                                <p>Fashion Newsletter </p>
                                <img className="email-preview"
                                src="/homepage-images/fashion-nova-newsletter-email-preview.png" />                        
                            </Link>
                            <div className='project-desc-text'>
                                <p>
                                    HTML
                                </p>
                                <p>
                                    CSS
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <h1 className='project-list-heading'>Sample Landing Pages</h1>
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
                <h1 className='project-list-heading'>API Projects</h1>
                <div className="list personal-projects-list">
                    <ul>
                        <li>
                           <div className='project-list-individual-container'>
                                <Link to="https://ornate-tarsier-3496dc.netlify.app">
                                        <p>Trivia Quiz</p>
                                        <img className="email-preview"
                                            src="/homepage-images/quizzical-preview-img.png"/>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
        <div id="homepage-footer">
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
                <Link to="https://www.linkedin.com/in/lawrence-clemente-41904157/" className='linkedin-logo'>
                    <i className="fa-brands fa-linkedin"/>
                    <span>
                        Linkedin
                    </span>
                </Link>
            </div>
            <p className='created-by-react-footer'>
                This portfolio was created with <i className="fa-brands fa-react" /> React + 
                <img src="/homepage-images/vite-logo.png" alt="vite logo" className='vite-logo-footer'/>Vite
            </p>
        </div>
    </div>
  )
}

export default Homepage
