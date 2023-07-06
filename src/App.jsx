import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage.jsx";
import FirstNewsletterEmail from './components/projects/emails/newsletter/newsletter-email1.jsx';
import FirstTransactionalEmail from './components/projects/emails/transactional-emails/first-transactional-email.jsx';
import FirstPromotionalEmail from './components/projects/emails/promotional/PromotionalEmail1.jsx';
import LexusLandingPage from './components/projects/landing-pages/lexus-products/lexus-products.jsx';
import './App.css';

function App() {
  const [PageState,isHomePage] = React.useState(true);

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage isHomePage={isHomePage} PageState={PageState} />}/>
          <Route path="/first-newsletter-sample/" element={<FirstNewsletterEmail isHomePage={isHomePage} PageState={PageState}/>}/>
          <Route path="/first-promotional-sample/" element={<FirstPromotionalEmail isHomePage={isHomePage} PageState={PageState}/>}/>
          <Route path="/first-transactional-sample/" element={<FirstTransactionalEmail isHomePage={isHomePage} PageState={PageState}/>}/>
          <Route path="/sample-lexus-landing-page/" element={<LexusLandingPage isHomePage={isHomePage} PageState={PageState}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
