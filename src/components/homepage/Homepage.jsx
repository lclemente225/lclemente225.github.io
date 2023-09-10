import React from 'react';
import Navbar from "../navbar/Navbar";
import Skills from './skills';
import ProjectList from './projectCarousel/projectList';
import { HomepageFooter as Footer } from './footer';
import { ScrollToTop as HomeScrollTopButton } from '../scrollToTop/scrollToTop';
import './homepage.css';
import { motion, useAnimation, useTime } from "framer-motion";


const Homepage = ({PageState,isHomePage}) => {
    const [isSidebarOpen, openSidebar] = React.useState(false);

    React.useEffect(() => {
        isHomePage(true);
        },[PageState]);
    

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
        <div id="homepage-footer">
            <Footer />
        </div>
        <HomeScrollTopButton />
    </div>
  )
}

export default Homepage
