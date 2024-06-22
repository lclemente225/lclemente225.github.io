import React from 'react';
import Emails from './emails';
import {LandingPageProjects as LandingPages} from './landing-pages';
import { FrontEndProjects as FrontEnd } from './front-end-projects';
import './projectCarousel.css';
import '../homepage.css';
import { AnimatePresence } from "framer-motion";

const ProjectList = () => {

  //look at instance methods in moz dev docs
const [stateValues, selectValue] = React.useState("webProj");

  return (
    <div className='project-carousel-container'>
      <div className='project-carousel-selections'>
            <div onClick={(e) => selectValue(e.target.getAttribute("name"))} 
                className={`project-selection ${ stateValues === "webProj" ? "selected" : ""}`}
                name="webProj">
                  Web App Projects
          </div>
          <div onClick={(e) => selectValue(e.target.getAttribute("name"))} 
              className={`project-selection ${stateValues === "email" ? "selected" : ""}`}
              name="email">
                Emails
            </div>
            <div onClick={(e) => selectValue(e.target.getAttribute("name"))} 
                className={`project-selection ${stateValues === "landingPage" ? "selected" : ""}`}
                name="landingPage">
                  Landing Pages
            </div>
       </div>
       
        <div className="list">
          <ul>
          <AnimatePresence
          mode="wait">   
              { stateValues === "email" && <Emails /> }
              { stateValues === "landingPage" && <LandingPages /> }
              { stateValues === "webProj" && <FrontEnd /> }
          </AnimatePresence>
          { stateValues === "email" && 
          <span className='email-note'>
            *Note: I replicated these designs to show my HTML and CSS skills in Email Development
          </span>
          }
          </ul>
        </div>
      
    </div>
  )
}

export default ProjectList
