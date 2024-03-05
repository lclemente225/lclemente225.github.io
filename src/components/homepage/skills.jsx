import React from 'react';
import './homepage.css';

const Skills = () => {
  return (
    <div className='skills-section'>
        <div className='one-column-skills-section'>
        <h2>
            Languages
        </h2>
            <ul>
                <li>
                    <i className="fa-brands fa-html5" /> HTML
                </li>
                <li>
                    <i className="fa-brands fa-css3-alt"/> CSS
                </li>
                <li>
                    <i className="fa-brands fa-js" /> Javascript
                </li>
            </ul>
        </div>
        <div className='one-column-skills-section'>
        <h2>
            Front End Web Development Tools
        </h2>
            <ul>
                <li>
                    <i className="fa-brands fa-react" /> React JS
                </li>
                <li>
                    <i className="fa-solid fa-mobile-screen-button" /> Responsive Web Design
                </li>
                <li>
                    <i className="fa-brands fa-bootstrap" /> Bootstrap
                </li>
                <li>
                    <i className="fa-solid fa-table-cells-large"/> Flexbox 
                </li>
                <li>
                <i className="fa-solid fa-table-cells"/> CSS Grid | Bootstrap Grid
                </li>
                <li>
                    <i className="fa-brands fa-node-js"/> Node.js
                </li>
            </ul>
        </div>
        <div className='one-column-skills-section'>
        <h2>
        Design Tools
        </h2>
            <ul>
                <li>
                    <i className="fa-brands fa-figma"/> Figma
                </li>
                <li className='testing'>
                    <img src='/homepage-images/Adobe-Photoshop-Symbol.png' alt="adobe photoshop symbol"
                    className='photoshop-icon'/> Photoshop
                </li>
            </ul>
        </div>         
    </div>
  )
}

export default Skills
