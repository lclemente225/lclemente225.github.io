import React from 'react';
import './yugiTutorLanding.css';
import Navbar from '../../../navbar/Navbar';

const YugiTutorBusiness = ({PageState,isHomePage}) => {
    React.useEffect(() => {
        isHomePage(false);
        },[PageState])

  return (
    <>
    <Navbar/>
    <div className='yugi-tutor-landing-page-body'>
        <div className='yugi-tutor-top-banner'>
            <div>
                <p>Hello Duelist</p>
                <h1>I'm Yugi Mutou</h1>
                <p>
                    I'm a master duelist passionate about the greatest TCG. 
                    Let's work together to make you a stronger duelist so that you can win a championship!
                </p>
            </div>
        </div>
        <div className='yugi-tutor-info-row'>
            <div className='yugi-tutor-left-column'>
                <div className='yugi-tutor-left-column-container'>
                    <div className='yugi-tutor-left-column-row'>
                        <img src='/yugi-tutor-landing-page-images/arrow-right.png' alt="arrow right.png" 
                            className="yugi-tutor-arrow-right"/>
                        <div className='yugi-tutor-left-column-row-text'>
                            <h4>
                                Free Online Workshop
                            </h4>
                            <p>
                                Build a deck on a budget with my strategic theory.
                            </p>
                        </div>
                    </div>
                    <div className='yugi-tutor-left-column-row'>
                        <img src='/yugi-tutor-landing-page-images/arrow-right.png' alt="arrow right.png" 
                            className="yugi-tutor-arrow-right"/>
                        <div className='yugi-tutor-left-column-row-text'>
                            <h4>
                                Order my book
                            </h4>
                            <p>
                                "Through My Millenium Eyes" will help you make strides towards your dreams!
                            </p>
                        </div>
                    </div>
                    <div className='yugi-tutor-left-column-row'>
                        <img src='/yugi-tutor-landing-page-images/arrow-right.png' alt="arrow right.png" 
                            className="yugi-tutor-arrow-right"/>
                        <div className='yugi-tutor-left-column-row-text'>
                            <h4>
                                Dive into my blog
                            </h4>
                            <p>
                                You'll find articles of my previous duels and gameplans to help you become a
                                strong duelist.
                            </p>
                        </div>
                    </div>
                    <div className='yugi-tutor-left-column-row'>
                        <img src='/yugi-tutor-landing-page-images/arrow-right.png' alt="arrow right.png" 
                            className="yugi-tutor-arrow-right"/>
                        <div className='yugi-tutor-left-column-row-text'>
                            <h4>
                                Listen to my podcast
                            </h4>
                            <p>
                                Learn from the greatest minds in Duel Masters. In "Get Your Game On" podcast,
                                I speak with former rivals and fellow friends.
                            </p>
                        </div>
                    </div>
                    <div className='yugi-tutor-left-column-row'>
                        <img src='/yugi-tutor-landing-page-images/arrow-right.png' alt="arrow right.png" 
                            className="yugi-tutor-arrow-right"/>
                        <div className='yugi-tutor-left-column-row-text'>
                            <h4>
                                Take the quiz
                            </h4>
                            <p>
                                Find out which of the 9 duelist archetypes you are.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='yugi-tutor-right-column'>
                <div className='yugi-tutor-guide-container'>
                    <h1>
                        Ready to take your dueling to the next level?
                    </h1>
                    <p>
                        Grab my free guide to championship success.
                    </p>
                    <div>
                        <a href="#" className='yugi-tutor-get-guide-button'>
                            Get the Guide
                        </a>
                    </div>
                    <img src="/yugi-tutor-landing-page-images/yugi-sitting.jpg" alt="yugi sitting"
                    className='yugi-tutor-sitting-image' />
                </div>
            </div>
        </div>
        <div className='yugi-tutor-email-signup'>
            <div className='yugi-tutor-email-signup-container'>

                <div className='yugi-tutor-email-signup-text'>
                    <h2>
                        Sign up for the ultimate dueling tips
                    </h2>
                    <p>
                        Join over 20,000 other duelists and get access to all my tips and tricks 
                        to accelerate your dueling prowess.
                    </p>
                </div>

                <div className='yugi-tutor-email-signup-form'>
                    <form>
                        <input placeholder='email'/>
                        <a href='#'>
                            Sign me up!
                        </a>
                    </form>
                </div>

                <div className='yugi-tutor-social-links'>
                    <a href='#'>
                        <i style={{color:'white'}} className="fa-brands fa-facebook-f" />
                    </a>
                    <a href='#'>
                        <i style={{color:'white'}} className="fa-brands fa-twitter" />
                    </a>
                    <a href='#'>
                        <i style={{color:'white'}} className="fa-brands fa-linkedin-in" />
                    </a>
                    <a href='#'>
                        <i style={{color:'white'}} className="fa-brands fa-instagram" />
                    </a>
                </div>

                <div className='yugi-tutor-footer'>
                    <p>
                        Copyright Kazuki Takahashi.All rights reserved. <a href='#'>Privacy Policy</a> 
                        &nbsp; | &nbsp;
                        Created with <a href='#'>KaibaCorp</a>
                    </p>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default YugiTutorBusiness
