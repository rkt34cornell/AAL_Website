import React from 'react';

const ExpandedCard = ({ project, onClose }) => {
    if (!project) return null;
  
    return (
      <div className="expanded-card-backdrop" onClick={onClose}>
        <div className="expanded-card-content" onClick={e => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>X</button>
          {/* Assuming the image is removed as per your request */}
          <h2 className="expanded-card-title">{project.title}</h2> {/* Apply the CSS class here */}
          <p>{project.fullDescription}</p>
          {/* Add more details as needed */}
        </div>
      </div>
    );
};

export default ExpandedCard;
