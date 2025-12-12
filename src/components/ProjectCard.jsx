import React from 'react';


const ProjectCard = ({ project, onView }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
      </div>
      <div className="project-details">
        <h3>{project.title}</h3>
        {/* <p>{project.description}</p> */}
         <button className="view-btn" onClick={onView}>
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
