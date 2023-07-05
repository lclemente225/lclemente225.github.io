import React from 'react';
import Navbar from "../navbar/Navbar";
import './homepage.css';


const Homepage = ({PageState,isHomePage}) => {
    React.useEffect(() => {
        isHomePage(true);
        },[PageState])

  return (
    <div>
        <Navbar PageState={PageState}/>
        <div className='project-list'>
           <h1>Emails</h1>
            <div className="list email-list">
                <ul>
                    <li>
                        <a href="/first-newsletter-sample/">
                            Newsletter Email
                        </a>
                    </li>
                    <li>
                        <a href="/first-promotional-sample/">
                            Promotional Email
                        </a>
                    </li>
                    <li>
                        <a href="/first-transactional-sample/">
                            Transactional Email
                        </a>
                    </li>
                </ul>
            </div>
            <h1>Landing Pages</h1>
                <div className="list landing-page-list">
                    <ul>
                        <li>
                            <a href="#">
                                First Landing Page
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Second Landing Page
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Homepage
