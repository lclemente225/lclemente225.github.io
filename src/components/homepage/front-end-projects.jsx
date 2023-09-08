import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from "framer-motion";

export const FrontEndProjects = () => {

const ref = React.useRef(null);
const isInView = useInView(ref, {once: false});
const mainControls = useAnimation();

React.useEffect(() => {
    if(isInView){
        mainControls.start("WebProjVisible")
    }
}, [isInView])

  return (
    <>
    <h1 className='project-list-heading' id="web-dev-proj-list">Web Dev Projects</h1>
                    <div ref={ref} className="list personal-projects-list">
                        <motion.ul
                        variants={{
                            WebProjHidden: {opacity: 0, x: -100},
                            WebProjVisible: {opacity: 1, x: 0}
                        }}
                        initial= "WebProjHidden"
                        animate={mainControls}
                        transition={{
                            duration: 1, 
                            delay: 0.25
                        }}>
                            <li>
                            <div className='project-list-individual-container'>
                                    <Link to="https://ornate-tarsier-3496dc.netlify.app">
                                            <p>Trivia Quiz</p>
                                            <img className="email-preview"
                                                src="/homepage-images/quizzical-preview-img.png"/>
                                    </Link>
                                </div>
                            </li>
                        </motion.ul>
                    </div> 
    </>
  )
}

