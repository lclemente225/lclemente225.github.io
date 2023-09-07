import React, {useRef} from 'react';
import Navbar from "../navbar/Navbar";
import Skills from './skills';
import Emails from './emails';
import {LandingPageProjects as LandingPages} from './landing-pages';
import { FrontEndProjects as FrontEnd } from './front-end-projects';
import { HomepageFooter as Footer } from './footer';
import './homepage.css';
import { motion } from "framer-motion";


const Homepage = ({PageState,isHomePage}) => {
    React.useEffect(() => {
        isHomePage(true);
        },[PageState]);


    const backToTop = () => window.scrollTo({ top: 0 })
  return (
    <div className='home-page'>
        <Navbar PageState={PageState}/>
        <motion.div className='nav-side-bar'
                variants={{
                    hidden: {opacity: 0, x: -1000},
                    visible: {opacity: 1, x: 0}
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 2, 
                    delay: 0.25
                }}>
            <h3>
                Project List
            </h3>
            <a href="#email-list">
                Emails
            </a>
            <a href="#landing-page-list">
                Landing Pages
            </a>
            <a href="#web-dev-proj-list">
                Front End Dev 
            </a>
        </motion.div>
        <div className='intro-section'
                >
            <motion.h1
                variants={{
                    hidden: {opacity: 0, x: -1000},
                    visible: {opacity: 1, x: 0}
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 1, 
                    delay: 0.25
                }}
                >
                Welcome to Lawrence's Portfolio
            </motion.h1>
            <motion.h2
                variants={{
                    hidden: {opacity: 0, x: -1000},
                    visible: {opacity: 1, x: 0}
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 1, 
                    delay: 0.50
                }}>
                Front End Web Developer | HTML Email Developer
            </motion.h2>
        </div>
        <Skills/>
        <div className='project-list'>
            <Emails />
            <LandingPages />
            <FrontEnd />
        </div>
        <div id="homepage-footer">
            <Footer />
        <motion.div onClick={() => backToTop} className='back-to-top'
                variants={{
                    hidden: {opacity: 0, y: -1000},
                    visible: {opacity: 1, y: 0}
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 2, 
                    delay: 0.25
                }}>
            Back to top
        </motion.div>
        </div>
    </div>
  )
}

export default Homepage
