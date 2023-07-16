import React from 'react';
import "./itServiceLandingPage.css";
import Navbar from '../../../navbar/Navbar';

const ItServiceLandingPage = ({PageState,isHomePage}) => {
    const [isMenuOpen, toggleOpenMenu] = React.useState(false);

    React.useEffect(() => {
        isHomePage(false);
        },[PageState])

 function openMenu(){
        return toggleOpenMenu((isTrue)=>{
            return isTrue ? !isTrue : true
        })
    }   
 
return (
    <div className='it-landing-page-body'>
      <Navbar />
      <div className={`it-landing-page-nav-container 
            ${isMenuOpen ? 'it-landing-page-menu-open' : 'it-landing-page-not-open'}`}>
            <div className='it-landing-page-nav'>
                <a id="it-landing-top-logo" href="#">
                <i className="fa-solid fa-vihara fa-xl" style={{color:'white'}}/>
                </a>
                <nav>
                    <a href="#it-landing-page-explore">
                        Explore
                    </a>
                    <a href="#it-landing-page-your-space">
                        Your Space
                    </a>
                    <a href="#it-landing-page-location">
                        Location
                    </a>
                    <a href="#it-landing-page-experience">
                        Experience
                    </a>
                    <a id="it-nav-inquire-button" href="#it-landing-page-form">
                        Inquire Now
                    </a>
                </nav>
                <div id="it-landing-hamburger" onClick={openMenu}>
                <i className="fa-solid fa-bars fa-xl" style={{color:'white'}} />
                </div>
            </div>
            <div className='it-landing-dropdown-nav'>
                <nav>
                    <a href="#it-landing-page-explore">
                        Explore
                    </a>
                    <a href="#it-landing-page-your-space">
                        Your Space
                    </a>
                    <a href="#it-landing-page-location">
                        Location
                    </a>
                    <a href="#it-landing-page-experience">
                        Experience
                    </a>
                    <a id="it-nav-inquire-button" href="#it-landing-page-form">
                        Inquire Now
                    </a>
                </nav>   
            </div>
            
        </div>
    </div>
  )
}

export default ItServiceLandingPage
