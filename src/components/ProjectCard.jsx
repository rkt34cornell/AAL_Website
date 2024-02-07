import React from 'react';

const ProjectCard = ({ project, onExpand }) => {
  return (
    <div className="project-card" onClick={() => onExpand(project)}>
      <img src={project.image} alt={project.title} className="project-image" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
