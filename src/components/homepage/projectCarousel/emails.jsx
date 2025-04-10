import React from 'react';
import '../homepage.css';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from "framer-motion";

const motionVariantsEmail = {
    emailHidden: {opacity: 0, x: -40},
    emailVisible: {opacity: 1, x: 0}
};

const Emails = () => {
    
    const [hoverClass, setHoverClass] = React.useState({
        emailFirst: false,
        emailSecond: false,
        emailThird: false,
        emailFourth: false
    });
    function hoverFirst(){
        setHoverClass({
            emailFirst: true,
            emailSecond: false,
            emailThird: false,
            emailFourth: false
        });
    }
    function hoverSecond(){
        setHoverClass({
            emailFirst: false,
            emailSecond: true,
            emailThird: false,
            emailFourth: false
        });
    }
    
    function hoverThird(){
        setHoverClass({
            emailFirst: false,
            emailSecond: false,
            emailThird: true,
            emailFourth: false
        });
    }
    function hoverFourth(){
        setHoverClass({
            emailFirst: false,
            emailSecond: false,
            emailThird: false,
            emailFourth: true
        });
    }
    function hoverReset(){
        setHoverClass({
            emailFirst: false,
            emailSecond: false,
            emailThird: false,
            emailFourth: false
        });
    }
const ref1 = React.useRef(null);
const ref2 = React.useRef(null);
const ref3 = React.useRef(null);
const ref4 = React.useRef(null);
const isInView1 = useInView(ref1, {once: false});
const isInView2 = useInView(ref2, {once: false});
const isInView3 = useInView(ref3, {once: false});
const isInView4 = useInView(ref4, {once: false});
const mainControls1 = useAnimation();
const mainControls2 = useAnimation();
const mainControls3 = useAnimation();
const mainControls4 = useAnimation();

React.useEffect(() => {
    if(isInView1){
        mainControls1.start("emailVisible")  
    }
}, [isInView1])
React.useEffect(() => {
    if(isInView2){
        mainControls2.start("emailVisible")  
    }
}, [isInView2])
React.useEffect(() => {
    if(isInView3){
        mainControls3.start("emailVisible")  
    }
}, [isInView3])
React.useEffect(() => {
    if(isInView4){
        mainControls4.start("emailVisible")  
    }
}, [isInView4])

  return (
    <>
             <motion.li
             variants={motionVariantsEmail}
             initial="emailHidden"
             animate={mainControls1}
             exit="emailHidden"
             transition={{
                 duration: 1, 
                 delay: 0.25
             }}>
                 <div className={`project-list-individual-container`}>
                     <Link to="/summary/emails/1" className='email-project-link' 
                     onMouseEnter={hoverFirst} onMouseLeave={hoverReset} onTouchStart={hoverFirst}>
                         <p  ref={ref1}>School Newsletter</p>
                        <div className='email-proj-img-container'> 
                         <img className="email-preview"
                         src="/homepage-images/sjsu-newsletter-email-preview.png" />    
                         {
                         hoverClass.emailFirst && 
                         <div className='project-desc-text email-desc-text '>
                             <span>
                                 HTML | CSS
                             </span>
                             <span className='desc-text'>
                                 Sample design taken from SJSU
                             </span>
                         </div>
                         }       
                         </div>               
                     </Link>
                      
                 </div>
             </motion.li>
             <motion.li
             variants={motionVariantsEmail}
             initial="emailHidden"
             animate={mainControls2}
             transition={{
                 duration: 1, 
                 delay: 0.25
             }}>
                 <div className={`project-list-individual-container`}>
                     <Link to="/summary/emails/2" className='email-project-link' 
                     onMouseEnter={hoverSecond} onMouseLeave={hoverReset} onTouchStart={hoverSecond}>
                        <p ref={ref2}>Promotional </p>
                        <div className='email-proj-img-container'> 
                         <img className='email-preview'
                         src="/homepage-images/hero-watch-email-preview.png"/>
                          {
                         hoverClass.emailSecond && 
                         <div className='project-desc-text email-desc-text '>
                             <span>
                                 HTML | CSS
                             </span>
                             <span className='desc-text'>
                                 Sample Promotional Product Email
                             </span>
                         </div>
                         }  
                         </div>
                     </Link>   
                  </div>
             </motion.li>
             <motion.li
             variants={motionVariantsEmail}
             initial="emailHidden"
             animate={mainControls3}
             transition={{
                 duration: 1, 
                 delay: 0.25
             }}>
                 <div className={`project-list-individual-container`}>
                     <Link to="/summary/emails/3" className='email-project-link' 
                     onMouseEnter={hoverThird} onMouseLeave={hoverReset} onTouchStart={hoverThird}>
                          <p ref={ref3}>Order Transaction </p>
                        <div className='email-proj-img-container'>    
                          <img className="email-preview"
                          src="/homepage-images/doordash-order-email.png"/>
                           {
                         hoverClass.emailThird && 
                         <div className='project-desc-text email-desc-text'>
                             <span>
                                 HTML | CSS
                             </span>
                             <span className='desc-text'>
                                 I ordered chicken once. I replicated the transactional email I received. 
                             </span>
                             </div>
                         }  
                         </div>
                     </Link>
                 </div>
             </motion.li>
            {/*  <motion.li
             variants={motionVariantsEmail}
             initial="emailHidden"
             animate={mainControls4}
             transition={{
                 duration: 1, 
                 delay: 0.25
             }}>
                 <div className={`project-list-individual-container`}>
                     <Link to="/first-newsletter-sample/" className='email-project-link' 
                     onMouseEnter={hoverFourth} onMouseLeave={hoverReset} onTouchStart={hoverFourth}>
                        <p ref={ref4}>Fashion Newsletter </p>
                        <div className='email-proj-img-container'> 
                            <img className="email-preview"
                            src="/homepage-images/fashion-nova-newsletter-email-preview.png" />   
                            {
                            hoverClass.emailFourth && 
                            <div className='project-desc-text email-desc-text'>
                                <span>
                                    HTML | CSS
                                </span>
                                <span className='desc-text'>
                                    A replicated Fashion Nova email design.
                                </span>
                            </div>
                            }            
                         </div>           
                     </Link>
                 </div>
             </motion.li> */}
             
        </>
  )
}

export default Emails
