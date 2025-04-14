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
    
    return(
        <>
        <Navbar PageState={PageState}/>
            work sampels
            <div>
                Title
            </div>
            <div>
                gif/image
            </div>
            <div>
                talk about what you worked on
            </div>
            <div>
                Technologies Used:
            </div>
        <div className="homepage-footer" id="foot">
            <HomepageFooter/>
        </div>
        </>
    )
}