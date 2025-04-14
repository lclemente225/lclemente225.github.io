import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import './workSamples.css'

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
        <>
        <div className='work-samples-container'>
            <div className='work-samples-list'>
                    <Link to="/work-samples/josephineClemente">Josephine Clemente</Link>
                    <Link to="/work-samples/d4d">Dunk4Dreams</Link>
                    <Link to="/work-samples/dz">DunkZone</Link>
                    <Link to="/work-samples/chefDomSouza">Chef Dom Souza</Link>
            </div>
        </div>
        </>
    )
}