import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import ProjectsPage from './pages/Projects';
import PublicationsPage from './pages/Publications';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import MapPage from './pages/Map'
import ImpactPage from './pages/Impact'
import TaxonomyPage from './pages/Taxonomy'
import Error from './pages/Error'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/projects" element={<ProjectsPage/>}/>
        <Route exact path="/publications" element={<PublicationsPage/>}/>
        <Route exact path="/about" element={<AboutPage/>}/>
        <Route exact path="/contact" element={<ContactPage/>}/>
        <Route exact path="/map" element={<MapPage/>}/>
        <Route exact path="/impact" element={<ImpactPage/>}/>
        <Route exact path="/taxonomy" element={<TaxonomyPage/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </Router>
  );
}

export default App;
