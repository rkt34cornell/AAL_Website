import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ExpandedCard from './ExpandedCard';
import projectsData from '../constants/projectsData.json'; // Ensure this path is correct

const ProjectsPanel = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleExpand = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-panel">
      <h1>We define the next generation of aerospace research.</h1>
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} onExpand={handleExpand} />
        ))}
      </div>
      {selectedProject && <ExpandedCard project={selectedProject} onClose={handleClose} />}
    </div>
  );
};

export default ProjectsPanel;
