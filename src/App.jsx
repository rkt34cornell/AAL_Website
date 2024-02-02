import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProjectsPage from "./pages/Projects";
import Publications from "./pages/Publications";
import Team from "./pages/Team";
import Map from "./pages/Map";
import Taxonomy from "./pages/Taxonomy";
import Impact from "./pages/Impact";
import GroundStationProject from "./pages/GroundStationProject";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

// ... other imports

const aalaudio = "https://res.cloudinary.com/dlxh3nrry/video/upload/v1706843296/aal2_lh7zpz.mp3";

function App() {
  useEffect(() => {
    const audio = new Audio(aalaudio);
    const playAudio = () => {
      if (audio.paused) {
        audio.play();
      }
    };
    document.addEventListener('click', playAudio);
    return () => document.removeEventListener('click', playAudio);
  }, []);

  return (
    <Router>
      {/* Place any global components like Navbar here */}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/projects" element={<ProjectsPage />} />
        <Route exact path="/publications" element={<Publications />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/taxonomy" element={<Taxonomy />} />
        <Route exact path="/impact" element={<Impact />} />
        <Route exact path="/groundstationproject" element={<GroundStationProject />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />


        // ... other routes
      </Routes>
      {/* Place any global components like Footer here */}
    </Router>
  );
}

export default App;
