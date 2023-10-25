import React from 'react';
import "./index.css";
import Home from "./routes/Home.js"
import Courses from "./routes/Courses.js"
import Join from "./routes/Join.js"
import {Route,Routes} from "react-router-dom";
import About from './routes/About';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Courses" element={<Courses/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Join" element={<Join/>} />
      </Routes>     
    </>
  )
}

export default App
