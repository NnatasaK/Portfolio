import React from 'react';


const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {/* Frontend Development Skills */}
        <div className="skills-category">
          <h3>Frontend Development</h3>
          <div className="skills-list">
            <span className="skill-item">HTML5</span>
            <span className="skill-item">CSS3/SCSS</span>
            <span className="skill-item">JavaScript</span>
            <span className="skill-item">React</span>
            <span className="skill-item">React Native</span>
          </div>
        </div>

        {/* Backend Development Skills */}
        <div className="skills-category">
          <h3>Backend Development</h3>
          <div className="skills-list">
            <span className="skill-item">Node.js</span>
            <span className="skill-item">RESTful APIs</span>
            <span className="skill-item">MongoDB</span>
            <span className="skill-item">Redis</span>
          </div>
        </div>

        {/* Web Security Skills */}
        <div className="skills-category">
          <h3>Web Security</h3>
          <div className="skills-list">
            <span className="skill-item">TLS</span>
            <span className="skill-item">HTTPS</span>
            <span className="skill-item">OWASP</span>
          </div>
        </div>

        {/* Authentication & Authorization Skills */}
        <div className="skills-category">
          <h3>Authentication & Authorization</h3>
          <div className="skills-list">
            <span className="skill-item">OAuth 2.0</span>
            <span className="skill-item">RBAC</span>
          </div>
        </div>

        {/* Development Methodologies */}
        <div className="skills-category">
          <h3>Development Methodologies</h3>
          <div className="skills-list">
            <span className="skill-item">Agile</span>
            <span className="skill-item">Sprint Planning</span>
          </div>
        </div>

        {/* Version Control & Collaboration */}
        <div className="skills-category">
          <h3>Version Control & Collaboration</h3>
          <div className="skills-list">
            <span className="skill-item">Git</span>
            <span className="skill-item">GitHub</span>
          </div>
        </div>

        {/* Testing Skills */}
        <div className="skills-category">
          <h3>Testing</h3>
          <div className="skills-list">
            <span className="skill-item">Unit Testing</span>
            <span className="skill-item">Integration Testing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
