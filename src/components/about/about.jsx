import React from 'react'
import './about.css'
import Navbar from '../navbar/Navbar';
import { HomepageFooter } from '../homepage/footer';
import EmailUpload from '../../../public/about-images/email-upload';
        

const About = ({isHomePage, PageState}) => {
    React.useEffect(() => {
    isHomePage(true);
    },[PageState])

  return (
    <>
        <Navbar PageState={PageState} />
        <section className='about-container'>
            <img src="/about-images/Linkedin Pic2.png" alt="Lawrence self portrait" className='linkedin-self-portrait'/>
            <div className='about-desc'>
                Hi I'm Lawrence! A self-taught software developer that learned from online courses and Bay Valley Tech.
            </div>
        </section>
            <a className='about-contact-msg' href='/?#email-form'>
                <EmailUpload width={30}/>
                Feel free to email me
            </a>
        <div className="homepage-footer">
            <HomepageFooter/>
        </div>
    </>
  )
}

export default About
