import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage.jsx";
import './App.css';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
