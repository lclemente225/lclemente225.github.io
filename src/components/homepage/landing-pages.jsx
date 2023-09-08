import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from "framer-motion";

export const LandingPageProjects = () => {

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
     <h1 className='project-list-heading' id="landing-page-list">Sample Landing Pages</h1>
                <div ref={ref} className="list landing-page-list">
                    <motion.ul
                        variants={{
                            landingHidden: {opacity: 0, x: 1000},
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
                    </motion.ul>
                </div>
      
    </>
  )
}

