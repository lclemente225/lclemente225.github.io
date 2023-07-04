import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage.jsx";
import FirstNewsletterEmail from './components/projects/emails/newsletter/newsletter-email1.jsx';
import './App.css';

function App() {
  const [PageState,isHomePage] = React.useState(true);

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage isHomePage={isHomePage} PageState={PageState} />}/>
          <Route path="/first-newsletter-sample" element={<FirstNewsletterEmail isHomePage={isHomePage}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
