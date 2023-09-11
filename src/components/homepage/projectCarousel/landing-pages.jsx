import React from 'react';
import '../homepage.css';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from "framer-motion";

export const LandingPageProjects = () => {
    const [hoverClass, setHoverClass] = React.useState({
        landingFirst: false,
        landingSecond: false
    });

    function hoverFirst(){
        setHoverClass({
            landingFirst: true,
            landingSecond: false
        });
    }
    function hoverSecond(){
        setHoverClass({
            landingFirst: false,
            landingSecond: true
        });
    }
    function hoverReset(){
        setHoverClass({
            landingFirst: false,
            landingSecond: false
        });
    }

const ref = React.useRef(null);
const isInView = useInView(ref, {once: false});
const mainControls = useAnimation();

React.useEffect(() => {
    if(isInView){
        mainControls.start("landingVisible")
    }
}, [isInView])

  return (
    <>
        <div ref={ref} className="list landing-page-list">
            <motion.ul
                variants={{
                    landingHidden: {opacity: 0, x: -100},
                    landingVisible: {opacity: 1, x: 0}
                }}
                initial="landingHidden"
                animate={mainControls}
                transition={{
                    duration: 1, 
                    delay: 0.25
                }}>
                <li>
                   <div className='project-list-individual-container'>
                        <Link to="/sample-apartment-landingPage/" className='email-project-link' 
                        onMouseEnter={hoverFirst} onMouseLeave={hoverReset} onTouchStart={hoverFirst} onTouchEnd={hoverReset}>
                                <p>Apartment </p>
                                <img className="email-preview"
                                    src="/homepage-images/apartment-landing-page-preview.png"/>
                                {
                            hoverClass.landingFirst && 
                            <div className='project-desc-text landing-desc-text'>
                                <p>
                                    HTML | CSS | ReactJS
                                </p>
                                <p>
                                    Luxury Apartment Landing Page
                                </p>
                            </div>
                            }
                        </Link>
                    </div>
                </li>
                <li>
                    <div className='project-list-individual-container'>
                        <Link to="/sample-yugi-tutor-landingPage/" className='email-project-link' 
                        onMouseEnter={hoverSecond} onMouseLeave={hoverReset} onTouchStart={hoverSecond} onTouchEnd={hoverReset}>
                            <p>Personal Business</p>
                            <img className="email-preview"
                                src="/homepage-images/yugi-tutor-preview.png"/>
                                {
                            hoverClass.landingSecond && 
                            <div className='project-desc-text landing-desc-text'>
                                <p>
                                    HTML | CSS | ReactJS
                                </p>
                                <p>
                                    I love Yu-Gi-Oh
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

