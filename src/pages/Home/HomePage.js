import React from 'react';
import './homePage.css';
import dubaiMainImage from '../../assets/dubaimain.jpg';

const HomePage = () => {
    return (
      <body>
        <img src={dubaiMainImage} alt="Dubai Main" className="hero-image" />
        <div className="overlay">
          <h1>UAE’s leading landscapers</h1>
        </div>

        <section className="section1">
          <h2 className="section-heading">Garden Landscaping</h2>
          <p className="section-text">
            Your garden or outdoor space is an extension of your entire home. A place where you can relax after a long day, entertain friends and family or socialise with loved ones. At Dubai Landscapes, we’ve spent a decade in the UAE, crafting bespoke outdoor living spaces that achieve exactly what our clients desire.
          </p>
        </section>
      </body>
    );
};

export default HomePage;
