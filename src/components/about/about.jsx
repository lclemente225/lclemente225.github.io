import React from 'react'
import './about.css'
import Navbar from '../navbar/Navbar';
import { HomepageFooter } from '../homepage/footer';
import EmailUploadIcon from './email-upload-icon';
import { Link } from 'react-router-dom';
        

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
                Hi I'm Lawrence! A self-taught software developer based the Silicon Valley. I learned my skills from Scrimba and Bay Valley Tech. 
                In addition to full-stack web development, I have some data analytics work using datasets from Kaggle.
                I'm currently looking for any work, freelance or a full/part-time job.
            </div>
        </section>
            <Link className='about-contact-msg' to='/#email-form'>
                <EmailUploadIcon width={30}/>
                Feel free to email me
            </Link>
        <div className="homepage-footer">
            <HomepageFooter/>
        </div>
    </>
  )
}

export default About
