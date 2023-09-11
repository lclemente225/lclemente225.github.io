import React from 'react';
import '../homepage.css';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from "framer-motion";

const Emails = () => {
    
    const [hoverClass, setHoverClass] = React.useState({
        emailFirst: false,
        emailSecond: false,
        emailThird: false,
        emailFourth: false
    });
    function hoverFirst(){
        setHoverClass({
            emailFirst: true,
            emailSecond: false,
            emailThird: false,
            emailFourth: false
        });
    }
    function hoverSecond(){
        setHoverClass({
            emailFirst: false,
            emailSecond: true,
            emailThird: false,
            emailFourth: false
        });
    }
    
    function hoverThird(){
        setHoverClass({
            emailFirst: false,
            emailSecond: false,
            emailThird: true,
            emailFourth: false
        });
    }
    function hoverFourth(){
        setHoverClass({
            emailFirst: false,
            emailSecond: false,
            emailThird: false,
            emailFourth: true
        });
    }
    function hoverReset(){
        setHoverClass({
            emailFirst: false,
            emailSecond: false,
            emailThird: false,
            emailFourth: false
        });
    }
const ref = React.useRef(null);
const isInView = useInView(ref, {once: false});
const mainControls = useAnimation();

React.useEffect(() => {
    if(isInView){
        mainControls.start("emailVisible")  
    }
}, [isInView])

  return (
    <>
        <div ref={ref} className="list email-list" >
            <motion.ul
            variants={{
                emailHidden: {opacity: 0, x: -100},
                emailVisible: {opacity: 1, x: 0}
            }}
            initial="emailHidden"
            animate={mainControls}
            transition={{
                duration: 1, 
                delay: 0.25
            }}>
                <li>
                    <div className={`project-list-individual-container`}>
                        <Link to="/sample-sjsu-newsletter-1/" className='email-project-link' 
                        onMouseEnter={hoverFirst} onMouseLeave={hoverReset} onTouchStart={hoverFirst}>
                            <p>School Newsletter</p>
                            <img className="email-preview"
                            src="/homepage-images/sjsu-newsletter-email-preview.png" />    
                            {
                            hoverClass.emailFirst && 
                            <div className='project-desc-text email-desc-text '>
                                <p>
                                    HTML CSS
                                </p>
                                <p className='desc-text'>
                                    Sample design taken from SJSU
                                </p>
                            </div>
                            }                      
                        </Link>
                         
                    </div>
                </li>
                <li>
                    <div className={`project-list-individual-container`}>
                        <Link to="/first-promotional-sample/" className='email-project-link' 
                        onMouseEnter={hoverSecond} onMouseLeave={hoverReset} onTouchStart={hoverSecond}>
                            <p>Promotional </p>
                            <img className='email-preview'
                            src="/homepage-images/hero-watch-email-preview.png"/>
                             {
                            hoverClass.emailSecond && 
                            <div className='project-desc-text email-desc-text '>
                                <p>
                                    HTML | CSS
                                </p>
                                <p className='desc-text'>
                                    Sample Promotional Product Email
                                </p>
                            </div>
                            }  
                        </Link>   
                     </div>
                </li>
                <li>
                    <div className={`project-list-individual-container`}>
                        <Link to="/first-transactional-sample/" className='email-project-link' 
                        onMouseEnter={hoverThird} onMouseLeave={hoverReset} onTouchStart={hoverThird}>
                             <p>Order Transaction </p>
                             <img className="email-preview"
                             src="/homepage-images/doordash-order-email.png"/>
                              {
                            hoverClass.emailThird && 
                            <div className='project-desc-text email-desc-text'>
                                <p>
                                    HTML | CSS
                                </p>
                                <p className='desc-text'>
                                    I ordered chicken once. I replicated the transactional email I received. 
                                </p>
                            </div>
                            }  
                        </Link>
                    </div>
                </li>
                <li>
                    <div className={`project-list-individual-container`}>
                        <Link to="/first-newsletter-sample/" className='email-project-link' 
                        onMouseEnter={hoverFourth} onMouseLeave={hoverReset} onTouchStart={hoverFourth}>
                            <p>Fashion Newsletter </p>
                            <img className="email-preview"
                            src="/homepage-images/fashion-nova-newsletter-email-preview.png" />   
                             {
                            hoverClass.emailFourth && 
                            <div className='project-desc-text email-desc-text'>
                                <p>
                                    HTML | CSS
                                </p>
                                <p className='desc-text'>
                                    Fashion Nova email design that I copied.
                                </p>
                            </div>
                            }                       
                        </Link>
                    </div>
                </li>
            </motion.ul>
        </div>
    </>
  )
}

export default Emails
