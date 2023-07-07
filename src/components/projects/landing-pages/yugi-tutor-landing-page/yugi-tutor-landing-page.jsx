import React from 'react'

const YugiTutorBusiness = ({PageState,isHomePage}) => {
    React.useEffect(() => {
        isHomePage(false);
        },[PageState])

  return (
    <div className='yugi-tutor-landing-page-body'>
        <div className='yugi-tutor-top-banner'>
            <p>Hello Duelist</p>
            <h1>I'm Yugi Mutou</h1>
            <p>
                I'm a master duelist passionate about the greatest TCG. 
                Let's work together to make you a stronger duelist so that you can win a championship!
            </p>
        </div>
        <div>
            <div className='yugi-tutor-left-column'>
                <div className='yugi-tutor-left-column-row'>
                    <img src=''/>
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
                    <img src=''/>
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
                    <img src=''/>
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
                    <img src=''/>
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
                    <img src=''/>
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
            <div className='yugi-tutor-right-column'>
                <div className='yugi-tutor-guide-container'>
                    <h1>
                        Ready to take your dueling to the next level?
                    </h1>
                    <p>
                        Grab my free guide to championship success
                    </p>
                    <div>
                        <a href="#">
                            Get the Guide
                        </a>
                    </div>
                    <img src="" />
                </div>
            </div>
        </div>
        <div className='yugi-tutor-email-signup'>
            <div>
                <div>
                    <h2>
                        Sign up for the ultimate dueling tips
                    </h2>
                    <p>
                        Join over 20,000 other duelists and get access to all my tips and tricks 
                        to accelerate your dueling prowess.
                    </p>
                </div>
                <div>
                    <form>
                        <input placeholder='email'/>
                        <a href='#'>
                            Sign me up!
                        </a>
                    </form>
                </div>
                <div className='social links'>
                    <a href='#'>
                        Facebook
                    </a>
                    <a href='#'>
                        Twitter
                    </a>
                    <a href='#'>
                        linkedin
                    </a>
                    <a href='#'>
                        instagram
                    </a>
                </div>
                <div>
                    <p>
                        Copyright Kayle Jansen.All rights reserved. <a href='#'>Privacy Policy</a> 
                        &nbsp; | &nbsp;
                        Created with <a href='#'>KaibaCorp</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default YugiTutorBusiness
