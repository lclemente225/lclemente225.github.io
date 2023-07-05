import React from 'react';
import Navbar from "../navbar/Navbar";
import './homepage.css';


const Homepage = ({PageState,isHomePage}) => {
    isHomePage(true);

    /*
    Have 3 different categories?
    Must be in array to filter out 
    1. promotional emails
    2. newsletter emails
    3. transactional emails
    4. landing page
    5. landing page

    How does it work?
    1. When you click on one of them, then it will render the list?
    2. the listing will have a link to the project component

    //CHANGE STATE??
    if state = "email" then show components that have email in their class??


     */
   

    

  return (
    <div>
        <Navbar PageState={PageState}/>
        <div className='project-list'>
           <h1>Emails</h1>
            <div className="list email-list">
                <ul>
                    <li>
                        <a href="/first-newsletter-sample">
                            NewsLetter Email
                            </a>
                    </li>
                    <li>
                        <a href="/first-promotional-sample">
                            Promotional Email
                            </a>
                    </li>
                    <li>
                        <a href="/first-transactional-sample">
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
