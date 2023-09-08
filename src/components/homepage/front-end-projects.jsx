import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';

export const FrontEndProjects = () => {
  return (
    <>
    <h1 className='project-list-heading' id="web-dev-proj-list">Web Dev Projects</h1>
                    <div className="list personal-projects-list">
                        <ul>
                            <li>
                            <div className='project-list-individual-container'>
                                    <Link to="https://ornate-tarsier-3496dc.netlify.app">
                                            <p>Trivia Quiz</p>
                                            <img className="email-preview"
                                                src="/homepage-images/quizzical-preview-img.png"/>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div> 
    </>
  )
}

