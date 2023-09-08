import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from "framer-motion";

const Emails = () => {
    
    const [hoverClass, setHoverClass] = React.useState('');

    function hoverDetails(){
        setHoverClass("hovering");
    }

    function removeHoverClass(){
        setHoverClass("not-hovering");
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
      <h1 className='project-list-heading' id="email-list">Sample Emails</h1>
            <div ref={ref} className="list email-list" >
                <motion.ul
                variants={{
                    emailHidden: {opacity: 0, x: -1000},
                    emailVisible: {opacity: 1, x: 0}
                }}
                initial="emailHidden"
                animate={mainControls}
                transition={{
                    duration: 1, 
                    delay: 0.25
                }}>
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
                </motion.ul>
            </div>
    </>
  )
}

export default Emails
