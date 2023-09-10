import React from 'react';
import '../homepage/homepage.css';
import { motion } from "framer-motion";

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
    
    function backToTop(){
        useAnimation("hidden")
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

  return (
    <>
      {isVisible && 
        
        <motion.div onClick={backToTop} className='back-to-top'
                variants={{
                    hidden: {opacity: 0, y: -700, x: -2000},
                    visible: {opacity: 1, y: 0, x: 0}
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 5
                }}>
            Back to top
        </motion.div>
            }
    </>
  )
}

