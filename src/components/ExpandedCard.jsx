import React from 'react';

const ExpandedCard = ({ project, onClose }) => {
  if (!project) return null; // Don't render if no project is selected

  return (
    <div className="expanded-card-backdrop" onClick={onClose}>
      <div className="expanded-card-content" onClick={e => e.stopPropagation()}> {/* Prevent clicks from closing the modal */}
        <button className="close-button" onClick={onClose}>X</button>
        <img src={project.image} alt={project.title} className="expanded-image" />
        <h2>{project.title}</h2>
        <p>{project.fullDescription}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default ExpandedCard;
