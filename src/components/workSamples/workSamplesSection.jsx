import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';

export const WorkSamplesSection = () => {
 /*    const {projectType, id} = useParams();
    const [jsonData, insertJson] = useState(json);
    const idToNum = id && parseInt(id);

    function parseArray(array){
        return array.map((value, index) => {
            return (
            <span> {value} {index < array.length-1 && "|"} </span>
            )
        })
    } */
    
    return(
        <div>
            <h4>Projects I've worked on</h4>
            <div>
                <span>Dunk4Dreams</span>
                <span>DunkZone</span>
                <span>Chef Dom Souza</span>
            </div>
        </div>
    )
}