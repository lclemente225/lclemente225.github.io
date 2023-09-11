import React from 'react';
import '../homepage/homepage.css';
import { motion, useAnimation } from "framer-motion";

export const ScrollToTop = () => {
    
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {

        function toggleVisibility (){
            if (window.pageYOffset > 500) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
        }

        window.addEventListener("scroll", toggleVisibility);
        
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [window.pageYOffset])
    
    let hidingButton = useAnimation("hidden").start

    function backToTop(){
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

  return (
    <>
      {isVisible && 
        
        <motion.div onClick={backToTop} className='apartment-back-to-top'
                variants={{
                    hidden: {opacity: 0, y: -700},
                    visible: {opacity: 1, y: 0}
                }}
                initial="hidden"
                animate="visible"
                hide="hidden"
                transition={{
                    duration: 2
                }}>
            <i className='fa-solid fa-arrow-up'/>
        </motion.div>
            }
    </>
  )
}

