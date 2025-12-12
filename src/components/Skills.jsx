import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">

        {/* Frontend Development */}
        <div className="skills-category">
          <h3>Frontend Development</h3>
          <div className="skills-list">
            <span className="skill-item">HTML5</span>
            <span className="skill-item">CSS3 / SCSS</span>
            <span className="skill-item">JavaScript (ES6+)</span>
            <span className="skill-item">TypeScript</span>
            <span className="skill-item">React</span>
            <span className="skill-item">React Native</span>
            <span className="skill-item">Responsive Web Design</span>
            <span className="skill-item">UI/UX Fundamentals</span>
          </div>
        </div>

        {/* Web Security */}
        <div className="skills-category">
          <h3>Web Security</h3>
          <div className="skills-list">
            <span className="skill-item">OWASP Top 10</span>
            <span className="skill-item">Secure Coding Practices</span>
            <span className="skill-item">HTTPS / TLS</span>
            
      
             <span className="skill-item">OAuth 2.0</span>
            <span className="skill-item">RBAC</span>
            <span className="skill-item">Authentication</span>
            <span className="skill-item">Authorization</span>
          </div>
        </div>

        {/* Backend & Full-Stack */}
        <div className="skills-category">
          <h3>Backend & Full-Stack</h3>
          <div className="skills-list">
            <span className="skill-item">Node.js</span>
            <span className="skill-item">RESTful APIs</span>
            <span className="skill-item">Firebase</span>
            <span className="skill-item">MongoDB</span>
            <span className="skill-item">SQL / NoSQL</span>
            <span className="skill-item">Redis</span>
          </div>
        </div>

        {/* Development Processes */}
        <div className="skills-category">
          <h3>Development Processes & Quality</h3>
          <div className="skills-list">
            <span className="skill-item">Agile</span>
            <span className="skill-item">Scrum</span>
            <span className="skill-item">Sprint Planning</span>
            <span className="skill-item">TDD</span>
            <span className="skill-item">Software Testing</span>
          </div>
        </div>

        {/* Tools */}
        <div className="skills-category">
          <h3>Tools & Workflow</h3>
          <div className="skills-list">
            <span className="skill-item">Git</span>
            <span className="skill-item">GitHub</span>
            <span className="skill-item">CI/CD</span>
            <span className="skill-item">VS Code</span>
            <span className="skill-item">Postman</span>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills-category">
          <h3>Professional Skills</h3>
          <div className="skills-list">
            <span className="skill-item">Creativity</span>
            <span className="skill-item">Communication</span>
            <span className="skill-item">Problem-Solving</span>
            <span className="skill-item">Adaptability</span>
            <span className="skill-item">Attention to Detail</span>
            <span className="skill-item">Determination</span>
            
          
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
