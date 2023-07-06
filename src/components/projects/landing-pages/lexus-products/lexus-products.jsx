import React from 'react';
import './lexusProducts.css';
import Navbar from '../../../navbar/Navbar';

const LexusLandingPage = ({PageState,isHomePage}) => {
    const [pageState, setPageState] = React.useState()
    React.useEffect(() => {
        isHomePage(false);
        },[PageState])
/*
1. make active state
2. toggle active state over a setInterval time
3. Selected elements will be affected by active state
  >> they will have their classes added and removed

  how about the images?
  Ideas
  1. put them into an array and map over it
     >> everytime the setInterval function is called
     >>count++ goes up until 3 (count < 3)


  Issues
  1. maybe a class can't be removed at a different time?
        >>maybe have different states being triggered at different times for stagger effect

*/
    React.useEffect(() => {
            
          }, []);

  return (
    <div className='lexus-email'>
      <Navbar />
        <header className="page-header">
            <div className="page-header-logo">
                Lexus
            </div>
            <nav className="page-header__nav">
                <a href="#">
                    Vehicle
                </a>
                <a href="#">
                    Shopping
                </a>
                <a href="#">
                    Inventory
                </a>
            </nav>
        </header>
        <div>
            <section className="jumbo-slider">
            <ul className="jumbo-slider__container">
                <li className="jumbo-slider__slide" attr="1">
                <div className="jumbo-slider__slide-bg" 
                style={{backgroundImage: "url('/lexus-landing-page-images/lc500-image.jpg')"}}/>
                <div className="jumbo-slider__info-container">
                        <div className="jumbo-slider__info">
                            <div className="jumbo-slider__slide-number">
                                01
                            </div>
                            <div className="jumbo-slider__title">
                                Premier luxury coupe
                            </div>
                            <div className="jumbo-slider__description">
                                The front-engine, rear-wheel-drive LC Convertible shares the same direct-injected V8 powerplant as the
                                LC 500 Coupe. The engine is rated to produce 471 horsepower at 7,100 rpm and 398 lb.-ft of torque at
                                4,800 rpm. For the LC Convertible, the engine is paired with a Direct-Shift 10-speed automatic
                                transmission.
                            </div>
                        </div>
                </div>
                <div className="jumbo-slider__timeline">
                    <div className="jumbo-slider__line" />
                </div>
                </li>

                <li className="jumbo-slider__slide" attr="2">
                <div className="jumbo-slider__slide-bg" 
                style={{backgroundImage: "url('/lexus-landing-page-images/lx570-image.jpg')"}}/>
                <div className="jumbo-slider__info-container">
                        <div className="jumbo-slider__info">
                            <div className="jumbo-slider__slide-number">
                                02
                            </div>
                            <div className="jumbo-slider__title">
                                Luxury at its Finest
                            </div>
                            <div className="jumbo-slider__description">
                                Powering the LX 570 is a 5.7-liter V8 engine with 383 horsepower and 90-percent of its 403 lb.-ft. of
                                torque available at 3,600 rpm. Equipped with an 8-speed automatic transmission, the LX 570 is capable
                                of towing up to 7,000-lbs.
                            </div>
                        </div>
                </div>
                <div className="jumbo-slider__timeline">
                    <div className="jumbo-slider__line" />
                </div>
                </li>

                <li className="jumbo-slider__slide" attr="3">
                <div className="jumbo-slider__slide-bg" 
                style={{backgroundImage: "url('/lexus-landing-page-images/lfa-image.jpg')"}} />
                <div className="jumbo-slider__info-container">
                        <div className="jumbo-slider__info">
                            <div className="jumbo-slider__slide-number">03</div>
                            <div className="jumbo-slider__title">Performance at its peak</div>
                            <div className="jumbo-slider__description">
                                {/* https://mag.lexus.co.uk/introducing-the-lexus-lfa/ */}
                                Featuring advanced carbon fibre technology, a high-revving 553bhp 4.8-litre naturally aspirated V10
                                engine and rear-mounted six-speed sequential transmission, the mid-front engine LFA combined
                                lightweight construction and ideal chassis balance to deliver exhilarating and usable 200mph
                                performance.
                            </div>
                        </div>
                </div>
                <div className="jumbo-slider__timeline">
                    <div className="jumbo-slider__line" />
                </div>
                </li>
            </ul>
            <div className="jumbo-slider__nav">
                    <a href="#" className="jumbo-slider__link">
                    01 LC500
                    </a>
                    <a href="#" className="jumbo-slider__link">
                    02 LX 570
                    </a>
                    <a href="#" className="jumbo-slider__link">
                    03 LFA
                    </a>
            </div>
            <div className="jumbo-slider__ellipsis">
                    <div className="jumbo-slider__circle"></div>
                    <div className="jumbo-slider__circle"></div>
                    <div className="jumbo-slider__circle"></div>
            </div>
            </section>
        </div>
    </div>
  )
}

export default LexusLandingPage
