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
import LegacyProjects from "./pages/LegacyProjects"; // Add this line
import Present2024 from "./pages/Present2024"; // Add this line

// ... other imports

const aalaudio = "";

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
    <Router basename={import.meta.env.BASE_URL}>
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
        <Route exact path="/legacy-projects" element={<LegacyProjects />} /> // Add this line
        <Route exact path="/2024-present" element={<Present2024 />} /> // Add this line
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
