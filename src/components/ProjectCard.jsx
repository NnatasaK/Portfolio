import React from 'react';


const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
      </div>
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
};

export default ProjectCard;
