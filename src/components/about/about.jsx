import React from 'react'
import './about.css'
import Navbar from '../navbar/Navbar';
        

const About = ({isHomePage, PageState}) => {
    React.useEffect(() => {
    isHomePage(true);
    },[PageState])

  return (
    <>
        <Navbar PageState={PageState} />
        
      
    </>
  )
}

export default About
