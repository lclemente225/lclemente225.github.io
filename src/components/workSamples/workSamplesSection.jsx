import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import { HomepageFooter } from '../footer';

export const WorkSamplesSection = ({isHomePage, PageState, }) => {
    const {projectType, id} = useParams();
    const [jsonData, insertJson] = useState(json);
    useEffect(() => isHomePage(true), [PageState]);
    const idToNum = id && parseInt(id);

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
        <div>

        </div>
        <div className="homepage-footer" id="foot">
            <HomepageFooter/>
        </div>
        </>
    )
}