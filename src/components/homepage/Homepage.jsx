import React from 'react';
import Navbar from "../navbar/Navbar";
import Skills from './skills';
import ProjectList from './projectCarousel/projectList';
import { HomepageFooter as Footer } from './footer';
import './homepage.css';
import { motion } from "framer-motion";
import { contactMe as ContactMe } from './contactMe';


const Homepage = ({PageState,isHomePage}) => {

    React.useEffect(() => {
        isHomePage(true);
        },[PageState]);

    React.useEffect(() => {
        // Get the URL fragment
        const fragment = window.location.hash.substring(1);
        if (fragment) {
            // Scroll to the section with the matching ID
            const section = document.getElementById(fragment);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
      

  return (
    <div className='home-page'>
        <Navbar PageState={PageState}/>
        <div className='intro-section'>
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
            <h1>Projects</h1>
            <ProjectList />
        </div>
        <div className='github-links-wrapper'>
            <div className='github-links-container'>
                <h2>
                    Github Links
                </h2>
                <ul>
                    <li>
                        <a href="https://github.com/lclemente225/yugioh-price-checker-project"
                        target='_blank'>
                            Yugioh Card Price Checker
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/lclemente225/quizzical"
                        target='_blank'>
                            Lawrence's Riddle me Diddle
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/lclemente225/pdf-app"
                        target='_blank'>
                            PDF Signer
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/lclemente225/lclemente225.github.io"
                        target='_blank'>
                            This portfolio
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/lclemente225/sample-doordash-email">
                            Doordash Replica Email
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/lclemente225/sample-newsletter-fashion-nova">
                            Watch Product Replica Email
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <ContactMe />
        <div className="homepage-footer" id="foot">
            <Footer />
        </div>
    </div>
  )
}

export default Homepage
