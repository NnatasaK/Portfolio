// components/ProjectModal.jsx
import React from "react";
import "./ProjectModal.css";   

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-body">
          <img
            src={`/${project.image}`}
            alt={project.title}
            className="modal-image"
          />

          <div className="modal-info">
            <h2>{project.title}</h2>
            <p>{project.description || "A cool project I built with love ❤️"}</p>

            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-btn">
                Live Demo
                Live Demo
              </a>
            )}

            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-btn github">
                GitHub
              </a>
            )}

            <div className="modal-tech">
              <strong>Tech:</strong> React, Node.js, Firebase, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;