import React from 'react';
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/Homepage.jsx";
import FirstNewsletterEmail from './components/projects/emails/newsletter/newsletter-email1.jsx';
import FirstTransactionalEmail from './components/projects/emails/transactional-emails/first-transactional-email.jsx';
import FirstPromotionalEmail from './components/projects/emails/promotional/PromotionalEmail1.jsx';
import KaibaCorpLanding from './components/projects/landing-pages/kaiba-corp-landing-page/kaiba-corp-landing.jsx';
import ApartmentLandingPage from './components/projects/landing-pages/apartment-landing-page/apartment-landing-page.jsx';
import ItServiceLandingPage from './components/projects/landing-pages/it-service-landing-page/it-service-landing-page.jsx';
import YugiTutorBusiness from './components/projects/landing-pages/yugi-tutor-landing-page/yugi-tutor-landing-page.jsx';
import SjsuNewsletter1 from './components/projects/emails/newsletter/sjsu-newsletter-1/sjsu-newsletter-1.jsx';
import About from './components/about/about.jsx';

import './App.css';

function App() {
  const [PageState,isHomePage] = React.useState(true);

  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Homepage isHomePage={isHomePage} PageState={PageState} />}/>
          <Route path="/first-newsletter-sample/" element={<FirstNewsletterEmail isHomePage={isHomePage} PageState={PageState}/>}/>
          <Route path="/first-promotional-sample/" element={<FirstPromotionalEmail isHomePage={isHomePage} PageState={PageState}/>}/>
          <Route path="/first-transactional-sample/" element={<FirstTransactionalEmail isHomePage={isHomePage} PageState={PageState}/>}/>
          <Route path="/sample-kaiba-corp-landingPage/" element={<KaibaCorpLanding isHomePage={isHomePage} PageState={PageState}/>}/>
          <Route path="/sample-yugi-tutor-landingPage/" element={<YugiTutorBusiness isHomePage={isHomePage} PageState={PageState}/>}/>
          <Route path="/sample-apartment-landingPage/" element={<ApartmentLandingPage isHomePage={isHomePage} PageState={PageState}/>}/>
          <Route path="/sample-service-it-landingPage/" element={<ItServiceLandingPage isHomePage={isHomePage} PageState={PageState}/>}/>
          <Route path="/sample-sjsu-newsletter-1/" element={<SjsuNewsletter1 isHomePage={isHomePage} PageState={PageState}/>}/>
          <Route path="/about" element={<About isHomePage={isHomePage} PageState={PageState}/>}></Route>
        </Routes>
    </div>
  )
}

export default App
