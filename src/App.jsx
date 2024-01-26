import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProjectsPage from "./pages/Projects";
import Publications from "./pages/Publications";
import Team from "./pages/Team";
import Map from "./pages/Map";
import Taxonomy from "./pages/Taxonomy";

// ... other imports

const aalaudio = "https://res.cloudinary.com/dlxh3nrry/video/upload/v1706240962/AALMUSIC_fiyfdy.mp3";

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
        <Route exact path="/team" element={<Team/>} />

        // ... other routes
      </Routes>
      {/* Place any global components like Footer here */}
    </Router>
  );
}

export default App;
