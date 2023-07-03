import React from 'react';
import Navbar from "../navbar/Navbar"

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



     */
   

    function Categories(){
        let categoriesArray = ["emails", "landing page"];
      return categoriesArray.map((x) => {
            return (
                <div>
                    {x}
                </div>
            )
        })
    }

  return (
    <div>
        <Navbar/>
        <div>
           <Categories/>
        </div>
    </div>
  )
}

export default Homepage
