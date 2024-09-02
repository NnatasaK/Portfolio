import React from 'react';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const projects = [
    {
      title: "HistoryHunt",
      description: "Social geocaching game in React Native. *note: Deployment in process (code available in GitHub)",
      /* link: "https://history-hunt.netlify.app",  */
      image: "HistoryHunt2.jpg",
      
    },
    {
      title: "X App",
      description: "A social media clone app developed as part of a collaborative project.",
      link: "https://twitterx-clone-project.netlify.app",  
      image: "Xhome2.png"
    },
    {
      title: "DogBook",
      description: "A React-based social network application for dog lovers.",
      link: "https://dog-book.netlify.app",
      image: "dogbookMain.png"
    },
    {
      title: "Drink-Drinks",
      description: "A cocktail blog showcasing various drink recipes.",
      link: "https://drink-drinks.netlify.app",
      image: "cocktailBlog7.png"
    }
  ];


  return (
    <section id="portfolio" className="portfolio">
      <h2>My Projects</h2>
      <div className="portfolio-cards">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
