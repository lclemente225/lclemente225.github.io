import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import json from './workSamples.json';
import "./workSamples.css";
import { HomepageFooter } from '../homepage/footer';

export const WorkSamples = ({isHomePage, PageState}) => {
    const {projectName} = useParams();
    const [jsonData, insertJson] = useState(json);
    useEffect(() => isHomePage(true), [PageState]);
    const projectInfo = jsonData && jsonData[projectName];

    function parseArray(array){
        return array.map((value, index) => {
            return (
            <span> {value} {index < array.length-1 && "|"} </span>
            )
        })
    }
    const descArray = projectInfo.workedOn;
    const techUsed = parseArray(projectInfo.tech);

    return(
        <>
        <Navbar PageState={PageState}/>
            <h2>
                {projectInfo.title}
            </h2>
            <div>
           {/*  <iframe 
            style="border: 1px solid rgba(0, 0, 0, 0.1);" 
            width="800" height="450" 
            src="https://embed.figma.com/board/CTXakEZwaD8e0vNPvwQZln/Dom-Souza-Website?node-id=0-1&embed-host=share" 
            allowfullscreen
            loading='lazy'>
                
            </iframe>
            <iframe 
            style="border: 1px solid rgba(0, 0, 0, 0.1);" 
            width="800" height="450" 
            src="https://embed.figma.com/design/427IOTMny7epO1yIRe2EfP/Dom-Souza-Site-Styles?node-id=0-1&embed-host=share" 
            allowfullscreen
            loading='lazy'>

            </iframe> */}
            </div>
            <div>
                {descArray[0]}
            </div>
            <div>
                Technologies Used: {techUsed}
            </div>
        <div className="homepage-footer" id="foot">
            <HomepageFooter/>
        </div>
        </>
    )
}