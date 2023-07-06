import React from 'react'

const ApartmentLandingPage = ({PageState,isHomePage}) => {
    React.useEffect(() => {
        isHomePage(false);
        },[PageState])

  return (
    <div className='apartment-landing-page-body'>
        <div className='apartment-landing-page-nav-container'>
            <a href="#">
                logo here
            </a>
            <nav>
                <a href="#">
                    Explore
                </a>
                <a href="#">
                    Your Space
                </a>
                <a href="#">
                    Location
                </a>
                <a href="#">
                    Experience
                </a>
                <a href="#">
                    Inquire Now
                </a>
            </nav>
        </div>

        <div className='apartment-landing-hero-section'>
            <div className='apartment-landing-hero-text'>
                <h1>
                    Your Space to Experience
                </h1>
                <div>
                    <i class="fa-solid fa-diamond"/>
                    <i class="fa-solid fa-diamond"/>
                    <i class="fa-solid fa-diamond"/>
                    <i class="fa-solid fa-diamond"/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse varius enim in eros elementum tristique. 
                    Duis cursus, mi quis viverra ornare, eros dolor interdum
                    nulla, ut commodo diam libero vitae erat.
                </p>
            </div>
            <div className='apartment-landing-hero-image'>
                <img src="" />
            </div>
        </div>

        <div className='apartment-landing-page-explore'>
            <div>
                <p>
                    Explore
                </p>
                <p>
                    44 Rhys showcases a philosophy of exceptional design that 
                    integrates stylish good looks, spacial harmony and a wealth
                    of practical solutions for everyday living.
                </p>
                <div>
                    <i class="fa-solid fa-diamond"/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                    ea commodo consequat.
                </p>
                <p>Watch <a>play-icon here</a> Tour</p>
            </div>
        </div>

        <div className='apartment-landing-page-interior-image'>
            <img src="" />
        </div>

        <div className='apartment-landing-page-your-space'>
            <div>
                <p>
                    Your Space
                </p>
                <p>
                    With gorgeous interiors the spectacular residences bring together an holistic 
                    design vision with a passion for individuality and carefully considered detail.
                </p>
                <div>
                    <i class="fa-solid fa-diamond"/>
                </div>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                    doloremque laudantium, totam rem aperiam.
                </p>
            </div>
        </div>

        <div className='apartment-landing-page-interior-image'>
            <div>
                <img src="" />
            </div>
            <div>
                <h4>
                    Apartment Highlights
                </h4>
                <div>
                    big.<i class="fa-solid fa-diamond"/>
                </div>
                <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                </p>
                <div>
                    <i class="fa-solid fa-diamond"/>
                </div>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate
                </p>
                <div>
                    <i class="fa-solid fa-diamond"/>
                </div>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                    doloremque laudantium, totam rem aperiam
                </p>
                <div>
                    <i class="fa-solid fa-diamond"/>
                </div>
                <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut duis aute irure 
                    dolor in reprehenderit in voluptate
                </p>
            </div>
        </div>

        <div className='apartment-landing-page-form'>
            <div>
                <h4>
                    Your space to experience
                </h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
            </div>
            <div className='apartment-landing-form-container'>
                <form>
                    <div className='apartment-landing-input-field-container'>
                        <div className='apartment-landing-input-field'>
                            <label htmlFor="name">
                                Full Name
                            </label>
                            <input type="text" name="name"/>
                        </div>
                        <div className='apartment-landing-input-field'>
                            <div>
                                <label htmlFor="email">
                                    Email Address
                                </label>
                                <input type="email" name="email"/>
                            </div>
                            <div>
                                <label htmlFor="phone-number">
                                    Full Name
                                </label>
                                <input type="tel" name="phone-number"/>
                            </div>
                        </div>
                        <div>
                            <a href='#'>
                                Inquire Now
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div className='apartment-landing-footer'>
            <div>
                <a>
                    Crafted by Marion & Co.
                </a>
                &nbsp;|&nbsp;
                <a>
                    Powered by Webflow
                </a>
                &nbsp;|&nbsp;
                <a>
                    More templates
                </a>
                &nbsp;|&nbsp;
                <a>
                    Image License
                </a>
                &nbsp;|&nbsp;
                <a>
                    Style Guide
                </a>
            </div>

            <div>
                <a>
                    Fb.
                </a>
                <a>
                    Tw.
                </a>
                <a>
                    Ig.
                </a>
            </div>
        </div>

      
    </div>
  )
}

export default ApartmentLandingPage
