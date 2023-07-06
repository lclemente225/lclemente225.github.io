import React from 'react';
import Navbar from "../navbar/Navbar";
import './homepage.css';


const Homepage = ({PageState,isHomePage}) => {
    React.useEffect(() => {
        isHomePage(true);
        },[PageState])

  return (
    <div>
        <Navbar PageState={PageState}/>
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
                            <a href="/sample-kaiba-corp-landingPage/">
                                Tournament Sign up 
                            </a>
                        </li>
                        <li>
                            <a href="/sample-apartment-landingPage/">
                                Apartment Landing Page
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Homepage
