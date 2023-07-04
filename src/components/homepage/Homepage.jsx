import React from 'react';
import Navbar from "../navbar/Navbar";
import './homepage.css';


const Homepage = () => {
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
        <Navbar/>
        <div className='project-list'>
           <h1>Emails</h1>
            <div>
                <ul>
                    <li>
                        <a href="/first-newsletter-sample">
                            NewsLetter Email
                            </a>
                    </li>
                    <li>
                        <a href="/first-newsletter-sample">
                            Promotional Email
                            </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Homepage
