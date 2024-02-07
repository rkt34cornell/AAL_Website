import React from 'react';

const ExpandedCard = ({ project, onClose }) => {
    if (!project) return null;
  
    return (
      <div className="expanded-card-backdrop" onClick={onClose}>
        <div className="expanded-card-content" onClick={e => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>X</button>
          {/* <img src={project.image} alt={project.title} className="expanded-image" /> Remove or comment out this line */}
          <h2>{project.title}</h2>
          <p>{project.fullDescription}</p>
          {/* Add more details as needed */}
        </div>
      </div>
    );
  };
  

export default ExpandedCard;
