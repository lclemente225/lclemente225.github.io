import React from 'react';
import Emails from './emails';
import {LandingPageProjects as LandingPages} from './landing-pages';
import { FrontEndProjects as FrontEnd } from './front-end-projects';
import './projectCarousel.css';
import { AnimatePresence } from "framer-motion";

const ProjectList = () => {
    const [stateValues, selectValue] = React.useState({
        email: true,
        landingPage: false,
        webProj: false
       });

function selectEmail(){
  selectValue(() => {
  return {
  email: true,
  landingPage: false,
  webProj: false
  }})
}                                

function selectLanding(){

 selectValue(() => {
  return {
  email: false,
  landingPage: true,
  webProj: false
  }})

}     

function selectWeb(){
  selectValue(() => {
  return {
  email: false,
  landingPage: false,
  webProj: true
  }})
}     
  return (
    <div className='project-carousel-container'>
      <div className='project-carousel-selections'>
          <div onClick={selectEmail} 
              className={`project-selection ${stateValues.email ? "selected" : ""}`}>
                Emails
            </div>
            <div onClick={selectLanding} 
                className={`project-selection ${stateValues.landingPage ? "selected" : ""}`}>
                  Landing Pages
            </div>
            <div onClick={selectWeb} 
                className={`project-selection ${stateValues.webProj ? "selected" : ""}`}>
                  Web App Projects
          </div>
       </div>
       <AnimatePresence>
      { stateValues.email && <Emails /> }
      { stateValues.landingPage && <LandingPages /> }
      { stateValues.webProj && <FrontEnd /> }
      </AnimatePresence>
      
    </div>
  )
}

export default ProjectList
