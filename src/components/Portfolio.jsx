import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
/* import ProjectModal from "./ProjectModal"; */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      title: "HistoryHunt",
      description:"History Hunt is a social geocaching game built with React Native (Expo) and Firebase. Users create custom 'Hunts' by placing markers on a map representing real-world checkpoints. Friends and family are invited to join, navigate to each location using GPS, and submit photos as proof of visit. The first player to complete all checkpoints and reach the final meeting point wins. Features real-time location tracking, camera integration, Google Maps, Firebase Auth/Firestore/Storage, push notifications, and live progress updates. Currently finalizing deployment phase – full source on GitHub.",
      image: "HistoryHunt2.jpg",
      link: null,
      video: "HH.mp4"
    },
    {
      title: "Meditation App",
      description: "During my internship, I worked on upgrading and improving a React Native application, updating dependencies, fixing bugs, and adding new features. I adapted the app for both Android and iOS and gained hands-on experience with real mobile development workflows, including building, testing, and preparing releases.The project used TypeScript, React Native, React Navigation, Firebase Authentication, Firestore, and Firebase Storage. I worked with cloud-based, serverless infrastructure, handled track uploads and metadata, and performed manual testing across platforms.", 
      image: "Meditation2.png",
      link: "https://play.google.com/store/apps/details?id=com.worldmeditation&hl=en"
    },
    {
      title: "Movie Platform",
      description: "Developed a Netflix-like web application with React and a custom backend, allowing users to browse, search, and bookmark movies. Implemented carousels for trending and recommended films, category-based browsing, detailed movie views, and persistent user authentication. Included an admin panel for managing movie data, full mobile responsiveness, and integration with a backend API. The project followed Agile practices with Pull Requests, code reviews, and automated frontend testing, ensuring a polished and user-friendly interface.",
      image: "movie.png",
      video: "movie.mp4",
      link: "https://mmovieplatform.netlify.app/"
    },
    {
      title: "X App",
      description: "Developed a web application using React, Node.js, and MongoDB that functions as a social forum for sharing links and short posts with friends, similar to Twitter. Implemented full frontend and backend functionality, including user authentication, posting, and content feeds. The project also included automated testing and a Continuous Integration (CI) pipeline to run regression tests on every commit. Followed Agile methodology with daily standups, sprints, and a live SCRUM board to manage development progress. Key features include sharing posts up to 140 characters, full-stack implementation, automated testing with CI, and Agile project workflow with sprint planning and task tracking.",
      link: "https://twitterx-clone-project.netlify.app",
      image: "Xhome2.png"
    },
    {
      title: "DogBook",
      description: "Developed a web application using React as an admin tool for dog daycare staff. The app allows managing dog profiles, including profile pictures, short descriptions, and friend lists. Built using modern front-end practices while integrating back-end knowledge, applying common architecture patterns like MVC, and leveraging third-party libraries where appropriate.",
      link: "https://dog-book.netlify.app",
      video: "dogbook.mp4",
      image: "dogbookMain.png"
    },
    {
      title: "Drink-Drinks",
      description:"Practice assignemt - responsive cocktail recipe blog built with pure HTML5, CSS3, and vanilla JavaScript only – no frameworks or third-party libraries.Features mobile-first layout, responsive navigation, card-based recipe display, and a working search/filter function.",
      link: "https://drink-drinks.netlify.app/",
      image: "cocktailBlog7.png"
    }
  ];

  return (
    <section id="portfolio" className="portfolio">

      <h2>My Projects</h2>

     <Swiper
  modules={[Navigation, Pagination, Mousewheel, Autoplay]}
  slidesPerView={3}
  spaceBetween={20}
  loop={true}
  grabCursor={true}                    
  centeredSlides={false}
  mousewheel={{ forceToAxis: true }}   
  autoplay={{                          
    delay: 5000,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  navigation                           
  breakpoints={{
    0:    { slidesPerView: 1, spaceBetween: 15 },
    768:  { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 20 },
  }}
  className="portfolio-swiper"
>
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
             <ProjectCard project={project} onView={() => setSelectedProject(project)} />
          </SwiperSlide>
        ))}
      </Swiper>
     {selectedProject && (
  <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
    <div className="modal-window" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setSelectedProject(null)}>✖</button>

      <h2>{selectedProject.title}</h2>
      <p>{selectedProject.description}</p>

      {/* Video */}
      {selectedProject.video && (
        <video
          src={selectedProject.video}
          controls
          autoPlay
          style={{ width: '100%', maxHeight: '200px', borderRadius: '8px', marginBottom: '1rem' }}
        >
          Your browser does not support the video tag.
        </video>
      )}

      {/* Link */}
      {selectedProject.link && (
        <a 
          href={selectedProject.link} 
          target="_blank" 
          rel="noreferrer"
          style={{ display: 'inline-block', marginTop: '10px' }}
        >
          Open Project
        </a>
      )}
    </div>
  </div>
)}

    </section>
  );
};

export default Portfolio;
