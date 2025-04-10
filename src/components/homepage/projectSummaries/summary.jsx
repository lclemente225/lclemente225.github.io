import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import json from'./summaryJSON.json';
import Navbar from '../../navbar/Navbar';
import "./summary.css"
import { HomepageFooter } from '../footer';

export const ProjectSummary = ({isHomePage, PageState, }) => {
    const {projectType, id} = useParams();
    const [jsonData, insertJson] = useState(json);
    useEffect(() => isHomePage(true), [PageState]);
    const idToNum = id && parseInt(id);
    const summaryInfo = jsonData && jsonData[projectType][idToNum];

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
            <div className="desc-section">
                <h1>{summaryInfo.title}</h1>
                <img src={summaryInfo.imgSrc}></img>
                <p>
                    {summaryInfo.desc}
                </p>
                <Link to={summaryInfo.link} className="project-link">
                View Live Demo
                </Link>
                <div>
                    What Technologies were Used?
                    {parseArray(summaryInfo.tech)}
                </div>
            </div>
            <div className="homepage-footer" id="foot">
                <HomepageFooter/>
            </div>
        </>
    )
}