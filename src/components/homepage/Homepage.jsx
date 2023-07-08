import React from 'react';
import Navbar from "../navbar/Navbar";
import './homepage.css';


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
           <h1>Emails</h1>
            <div className="list email-list">
                <ul>
                    <li>
                        <a href="/first-newsletter-sample/">
                            <div className='project-list-individual-container'>
                                <p>Fashion Nova Newsletter Email</p>
                                <img className="email-preview"
                                src="/homepage-images/fashion-nova-newsletter-email-preview.png" />
                           </div>
                        </a>
                        
                    </li>
                    <li>
                        <a href="/first-promotional-sample/">
                            <div className='project-list-individual-container'>
                                <p>Sample Promotional Email</p>
                                <img className='email-preview'
                                src="/homepage-images/hero-watch-email-preview.png"/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/first-transactional-sample/">
                            <div className='project-list-individual-container'>
                                 <p>Doordash Order Transaction Email</p>
                                 <img className="email-preview"
                                 src="/homepage-images/doordash-order-email.png"/>
                           </div>
                        </a>
                    </li>
                </ul>
            </div>
            <h1>Landing Pages</h1>
                <div className="list landing-page-list">
                    <ul>
                        <li>
                        <a href="/sample-yugi-tutor-landingPage/">
                                <div className='project-list-individual-container'>
                                    <p>Life Coach Landing Page </p>
                                    <img className="email-preview"
                                        src="/homepage-images/yugi-tutor-preview.png"/>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/sample-apartment-landingPage/">
                                <div className='project-list-individual-container'>
                                    <p>Apartment Landing Page</p>
                                    <img className="email-preview"
                                        src="/homepage-images/apartment-landing-page-preview.png"/>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Homepage
