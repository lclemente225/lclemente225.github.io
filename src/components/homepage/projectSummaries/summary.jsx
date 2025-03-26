import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import json from'./summaryJSON.json';
import Navbar from '../../navbar/Navbar';

export const ProjectSummary = ({isHomePage, PageState, }) => {
    const {projectType, id} = useParams();
    const [jsonData, insertJson] = useState(json);
    useEffect(() => isHomePage(true), [PageState]);
    const idToNum = id && parseInt(id);
    const summaryInfo = jsonData && jsonData[projectType][idToNum];
    
    return(
        <>
        <Navbar PageState={PageState}/>
            <div className="desc-section">
                <h1>{summaryInfo.title}</h1>
                <span>
                    {summaryInfo.desc}
                </span>
            </div>
        </>
    )
}