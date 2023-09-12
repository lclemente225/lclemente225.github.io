import React from 'react';
import '../homepage.css';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from "framer-motion";

export const FrontEndProjects = () => {
    const [hoverClass, setHoverClass] = React.useState({
        frontEndFirst: false,
        frontEndSecond: false
    });

    function hoverFirst(){
        setHoverClass({
            frontEndFirst: true,
            frontEndSecond: false
        });
    }
    function hoverSecond(){
        setHoverClass({
            frontEndFirst: false,
            frontEndSecond: true
        });
    }
    function hoverReset(){
        setHoverClass({
            frontEndFirst: false,
            frontEndSecond: false
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
        mainControls1.start("WebProjVisible")
    }
}, [isInView1])
React.useEffect(() => {
    if(isInView2){
        mainControls2.start("WebProjVisible")
    }
}, [isInView2])
  return (
    <>
        <div className="list personal-projects-list">
            <ul>
                <motion.li
                variants={{
                    WebProjHidden: {opacity: 0, x: -100},
                    WebProjVisible: {opacity: 1, x: 0},
                    WebProjEscape: {opacity: 0, x: 100}
                }}
                initial= "WebProjHidden"
                animate={mainControls1}
                exit="WebProjEscape"
                transition={{
                    duration: 1, 
                    delay: 0.25
                }}>
                    <div className='project-list-individual-container'>
                        <Link to="https://ornate-tarsier-3496dc.netlify.app" className='email-project-link' 
                        onMouseEnter={hoverFirst} onMouseLeave={hoverReset} onTouchStart={hoverFirst}>
                                <p ref={ref1} >Trivia Quiz</p>
                                <img className="email-preview"
                                src="/homepage-images/quizzical-preview-img.png"/>
                                {
                            hoverClass.frontEndFirst && 
                            <div className='project-desc-text front-end-desc-text'>
                                <p>
                                    HTML | CSS | ReactJS | REST API
                                </p>
                                <p className='desc-text'>
                                    All the questions are sourced from OpenTrivia DB API
                                </p>
                            </div>
                            }
                        </Link>
                       
                    </div>
                </motion.li>
                <motion.li
                variants={{
                    WebProjHidden: {opacity: 0, x: -100},
                    WebProjVisible: {opacity: 1, x: 0},
                    WebProjEscape: {opacity: 0, x: 100}
                }}
                initial= "WebProjHidden"
                animate={mainControls2}
                hide="WebProjEscape"
                transition={{
                    duration: 1, 
                    delay: 0.25
                }}>
                    <div className='project-list-individual-container'>
                        <Link to="https://lclemente225.github.io/" className='email-project-link' 
                        onMouseEnter={hoverSecond} onMouseLeave={hoverReset} onTouchStart={hoverSecond}>
                                <p ref={ref2} >Personal Portfolio</p>
                                <img className="email-preview"
                                src="/homepage-images/portfolio-9-11-23.png"/>
                                {
                            hoverClass.frontEndSecond && 
                            <div className='project-desc-text front-end-desc-text'>
                                <p>
                                    HTML | CSS | ReactJS 
                                </p>
                                <p className='desc-text'>
                                    You're looking at it. I am very proud of it. 
                                </p>
                            </div>
                            }
                        </Link>
                       
                    </div>
                </motion.li>
            </ul>
        </div> 
    </>
  )
}

