import React from 'react';
import '../homepage.css';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation} from "framer-motion";
const motionVariantsLanding = {
    landingHidden: {opacity: 0, x: -40},
    landingVisible: {opacity: 1, x: 0},
    landingExit:{opacity: 0, x: 40}
};

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

const ref1 = React.useRef(null);
const ref2 = React.useRef(null);
const isInView1 = useInView(ref1, {once: false});
const isInView2 = useInView(ref2, {once: false});
const mainControls1 = useAnimation();
const mainControls2 = useAnimation();

React.useEffect(() => {
    if(isInView1){
        mainControls1.start("landingVisible")
    }
}, [isInView1])

React.useEffect(() => {
    if(isInView2){
        mainControls2.start("landingVisible")
    }
}, [isInView2])

  return (
    <>
        <motion.li
            key="landing1"
            variants={motionVariantsLanding}
            initial="landingHidden"
            animate={mainControls1}
            exit={{opacity: 0, x: 100}}
            transition={{
                duration: 1, 
                delay: 0.25
            }}>
            <div className='project-list-individual-container' >
                <Link to="/sample-apartment-landingPage/" className='email-project-link' 
                onMouseEnter={hoverFirst} onMouseLeave={hoverReset} onTouchStart={hoverFirst} >
                        <p ref={ref1} >Apartment </p>
                        <div className='proj-img-container'>
                            <img className="email-preview"
                            src="/homepage-images/apartment-landing-page-preview.png"/>
                            {
                            hoverClass.landingFirst && 
                            <div className='project-desc-text landing-desc-text'>
                                <span>
                                    View Live Demo
                                </span>
                                <span>
                                    HTML | CSS | ReactJS
                                </span>
                                <span className='desc-text'>
                                    Luxury Apartment Landing Page
                                </span>
                            </div>
                            }
                        </div>
                </Link>
            </div>
        </motion.li>
        <motion.li
            key="landing2"
            variants={motionVariantsLanding}
            initial="landingHidden"
            animate={mainControls2}
            exit="landingExit"
            transition={{
                duration: 1, 
                delay: 0.25
            }}>
            <div className='project-list-individual-container'>
                <Link to="/sample-yugi-tutor-landingPage/" className='email-project-link' 
                onMouseEnter={hoverSecond} onMouseLeave={hoverReset} onTouchStart={hoverSecond} >
                    <p ref={ref2}>Personal Business</p>
                        <div className='proj-img-container'>
                            <img className="email-preview"
                            src="/homepage-images/yugi-tutor-preview.png"/>
                            {
                            hoverClass.landingSecond && 
                            <div className='project-desc-text landing-desc-text'>
                                <span>
                                    View Live Demo
                                </span>
                                <span>
                                    HTML | CSS | ReactJS
                                </span>
                                <span className='desc-text'>
                                    If Yugi taught dueling. This could be any business.
                                </span>
                            </div>
                            }
                        </div>
                </Link>
            </div>
        </motion.li>
    </>
  )
}

