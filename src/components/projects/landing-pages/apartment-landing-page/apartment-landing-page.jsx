import React from 'react';
import Navbar from '../../../navbar/Navbar';
import './apartmentLandingPage.css'

const ApartmentLandingPage = ({PageState,isHomePage}) => {
    React.useEffect(() => {
        isHomePage(false);
        },[PageState])

  return (
    <div className='apartment-landing-page-body'>
        <Navbar />
        <div className='apartment-landing-page-nav-container'>
            <div className='apartment-landing-page-nav'>
                <a href="#">
                    logo here
                </a>
                <nav>
                    <a href="#apartment-landing-page-explore">
                        Explore
                    </a>
                    <a href="#apartment-landing-page-your-space">
                        Your Space
                    </a>
                    <a href="#apartment-landing-page-location">
                        Location
                    </a>
                    <a href="#apartment-landing-page-experience">
                        Experience
                    </a>
                    <a id="apartment-nav-inquire-button" href="#apartment-landing-page-form">
                        Inquire Now
                    </a>
                </nav>
            </div>
        </div>

        <div className='apartment-landing-page-hero-section'>
            <div className='apartment-landing-page-hero-text'>
                <h1>
                    Your Space to Experience
                </h1>
                <div className='four-diamonds-container'>
                    <i className="fa-solid fa-diamond fa-2xs"/>
                    <i className="fa-solid fa-diamond fa-2xs"/>
                    <i className="fa-solid fa-diamond fa-2xs"/>
                    <i className="fa-solid fa-diamond fa-2xs"/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse varius enim in eros elementum tristique. 
                    Duis cursus, mi quis viverra ornare, eros dolor interdum
                    nulla, ut commodo diam libero vitae erat.
                </p>
            </div>
            <div className='apartment-landing-page-hero-image'>
                <img src="/apartment-landing-page-images/day-window-couch-interior.jpg" 
                alt="window couch interior" />
            </div>
        </div>

        <div className='apartment-landing-page-explore' id='apartment-landing-page-explore'>
            <div>
                <h6 style={{
                            color:'white',
                            letterSpacing:1.5,
                            textTransform:'uppercase'
                            }}>
                    Explore
                </h6>
                <p style={{fontSize:'18px'}}>
                    44 Rhys showcases a philosophy of exceptional design that 
                    integrates stylish good looks, spacial harmony and a wealth
                    of practical solutions for everyday living.
                </p>
                <div>
                    <i className="fa-solid fa-diamond fa-2xs" 
                    style={{color:'rgb(225,183,136)'}}/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                    ea commodo consequat.
                </p>
                <p
                 style={{
                        color:'white',
                        letterSpacing:1.5,
                        textTransform:'uppercase'
                        }}>
                        Watch <a><i className="fa-solid fa-play" 
                        style={{
                            border:'1px solid white',
                            padding:'10px 15px',
                            borderRadius:'3px',
                            backgroundColor:'rgb(9,9,10)',
                            color:'rgb(9,9,10)',
                            textShadow:'0 0 4px white'
                            }}/></a> Tour
                </p>
            </div>
        </div>

        <div className='apartment-landing-page-interior-image'>
            <img src="/apartment-landing-page-images/kitchen-counter.jpg" alt="kitchen-counter"/>
        </div>

        <div className='apartment-landing-page-your-space' id='apartment-landing-page-your-space'>
            <div>
                <h6 style={{
                            color:'white',
                            letterSpacing:1.5,
                            textTransform:'uppercase'
                            }}>
                    Your Space
                </h6>
                <p id="apartment-your-space-first-p" style={{fontSize:'18px'}}>
                    With gorgeous interiors the spectacular residences bring together an holistic 
                    design vision with a passion for individuality and carefully considered detail.
                </p>
                <div>
                    <i className="fa-solid fa-diamond fa-2xs"
                        style={{color:'rgb(225,183,136)'}}/>
                </div>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                    doloremque laudantium, totam rem aperiam.
                </p>
            </div>
        </div>

        <div className='apartment-landing-page-highlights'>
            
            <div className='highlights-image'></div>
            <div className='highlights-container'>
                <div className='apartment-highlights-text'>
                    <h4>
                        Apartment Highlights
                    </h4>
                    <div>
                        <i className="fa-solid fa-diamond fa-sm"/>
                    </div>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    </p>
                    <div>
                        <i className="fa-solid fa-diamond fa-2xs"/>
                    </div>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                    </p>
                    <div>
                        <i className="fa-solid fa-diamond fa-2xs"/>
                    </div>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                        doloremque laudantium, totam rem aperiam
                    </p>
                    <div>
                        <i className="fa-solid fa-diamond fa-2xs"/>
                    </div>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut duis aute irure 
                        dolor in reprehenderit in voluptate
                    </p>
                </div>
            
            </div>
        </div>

        <div className='apartment-landing-page-location' id='apartment-landing-page-location'>
            <div>
                <h6 style={{
                            color:'white',
                            letterSpacing:1.5,
                            textTransform:'uppercase'
                            }}>
                    Location
                </h6>
                <p style={{fontSize:'18px'}}>
                    Surrounding some of the most precious landmarks
                </p>
                <div>
                    <i className="fa-solid fa-diamond fa-2xs" 
                    style={{color:'rgb(225,183,136)'}}/>
                </div>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                    architecto beatae
                </p>
            </div>
        </div>

        <div className='apartment-landing-page-experience' id='apartment-landing-page-experience'>
            <div>
                <h6 style={{
                            color:'white',
                            letterSpacing:1.5,
                            textTransform:'uppercase',
                            margin:0
                            }}>
                    Experience
                </h6>
                <p style={{fontSize:'18px'}}>
                    Get acquainted with your surroundings and local ammenities
                </p>
                <div>
                    <i className="fa-solid fa-diamond fa-2xs" 
                    style={{color:'rgb(225,183,136)'}}/>
                </div>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam
                </p>
            </div>
        </div>

        <div className='apartment-landing-page-form' id='apartment-landing-page-form'>
            <div className='apartment-landing-page-heading'>
                <h4>
                    Your space to experience
                </h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
            </div>
            <div className='apartment-landing-page-form-container'>
                <form>
                    <div className='apartment-landing-input-field-container'>
                        <div className='apartment-landing-input-field apartment-landing-input-field-top'>
                            <label htmlFor="name">
                                Full Name
                            </label>
                            <input type="text" name="name"/>
                        </div>
                        <div className='apartment-landing-input-field-bottom'>
                            <div className='apartment-landing-input-field '>
                                <label htmlFor="email">
                                    Email Address
                                </label>
                                <input type="email" name="email"/>
                            </div>
                            <div className='apartment-landing-input-field'>
                                <label htmlFor="phone-number"> 
                                    Phone Number 
                                </label>
                                <input type="tel" name="phone-number"/>
                            </div>
                        </div>
                        <div className='apartment-form-button'>
                            <a href='#' 
                                style={{
                                    border:'1.8px solid black',
                                    padding:'5px 10px',
                                    fontSize:'12px',
                                    color:'black'
                                }}>
                                Inquire Now
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div className='apartment-landing-footer-container'>
            <div className='apartment-landing-footer'>
                <a>
                    Crafted by Marion & Co.
                </a>
                &nbsp;|&nbsp;
                <a>
                    Powered by Webflow
                </a>
                &nbsp;|&nbsp;
                <a>
                    More templates
                </a>
                &nbsp;|&nbsp;
                <a>
                    Image License
                </a>
                &nbsp;|&nbsp;
                <a>
                    Style Guide
                </a>
            </div>

            <div className='apartment-landing-page-social-links'>
                <a>
                    Fb.
                </a>
                <a>
                    Tw.
                </a>
                <a>
                    Ig.
                </a>
            </div>
        </div>

      
    </div>
  )
}

export default ApartmentLandingPage
