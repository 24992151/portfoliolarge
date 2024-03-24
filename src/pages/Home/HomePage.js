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
      </body>
    );
};

export default HomePage;
