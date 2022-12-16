import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import ProjectsPage from './pages/Projects';
import Error from './pages/Error'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/projects" element={<ProjectsPage/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </Router>
  );
}

export default App;
