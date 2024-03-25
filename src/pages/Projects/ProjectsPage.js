// ProjectsPage.js
import React from 'react';
import './projectsPage.css'; // Import your CSS file for styling
import ProjectImage1 from '../../assets/projectImage1.jpg'; // Importing images
import ProjectImage2 from '../../assets/projectImage2.jpeg';
import ProjectImage3 from '../../assets/projectImage3.jpg';
import ProjectImage4 from '../../assets/projectImage4.jpg';
import ProjectImage5 from '../../assets/projectImage5.jpg';
import ProjectImage6 from '../../assets/projectImage6.jpeg';

const ProjectsPage = () => {
  // Defining the array of objects
  const images = [
    { src: ProjectImage1 },
    { src: ProjectImage2 },
    { src: ProjectImage3 },
    { src: ProjectImage4 },
    { src: ProjectImage5 },
    { src: ProjectImage6 },
  ];

  return (
    <section>
      <section className="projects-title-bar">
        <h1>Grab a glimpse of our work</h1>
      </section>

      <section className="content">
        <section className="section1-content">
          <h2 className="section-heading">Ours Projects</h2>
          <p>Over the years, the team here at Dubai Landscapes has worked on a whole host of projects throughout the UAE, helping to enhance the outdoor space of numerous clients in the region. While we could tell you about our best work, we thought it would be better to show you instead. On this page, you’ll find our projects gallery where you can browse through some of our recent projects.</p>
        </section>

        <section className="grid-container">
          {images.map((image, index) => (
            <section key={index} className="grid-item">
              <img src={image.src} alt={`Project ${index + 1}`} />
            </section>
          ))}
        </section>
      </section>
    </section>
  );
}

export default ProjectsPage;
