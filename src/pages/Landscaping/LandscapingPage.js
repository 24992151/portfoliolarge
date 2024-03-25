import React from 'react';
import './landscapingPage.css'; // Import your CSS file for styling
import Gazebo from '../../assets/gazeboimage.jpg'; // Importing images
import Pergola from '../../assets/pergolaimage.jpg';
import Decking from '../../assets/deckingimage.jpg';
import Paving from '../../assets/pavingimage.jpg';
import Water from '../../assets/waterimage.jpg';
import Bbq from '../../assets/bbqimage.jpg';

const LandscapingPage = () => {
  // Defining the array of objects for grid
  const images = [
    { src: Gazebo, overlay: 'Gazebos' },
    { src: Pergola, overlay: 'Pergolas' },
    { src: Decking, overlay: 'Decking' },
    { src: Paving, overlay: 'Paving' },
    { src: Water, overlay: 'Water Features' },
    { src: Bbq, overlay: 'Barbecue Areas' },
  ];

  return (
    // Hero Bar
    <section>
      <section className="landscaping-title-bar">
        <h1>For your personal oasis in the UAE</h1>
      </section>

      {/* Section 1 Content */}
      <section className="content">
        <section className="section1-content">
          <p>
            Dubai Landscapes is one of the most experienced and reliable garden landscaping companies in the UAE. Experts in both soft and hard landscaping, we’re able to do it all, from providing perfect paving to enhancing gardens with flowers and plants that are able to withstand the UAE’s unique climate. Our team is full of local experts who have extensive knowledge of the type of plants that will work best for your outdoor space. Our range of landscaping services includes:
          </p>
        </section>

        {/* Grid Content */}
        <section className="grid-container">
          {images.map((image, index) => (
            <section key={index} className="grid-item">
              <img src={image.src} alt={image.overlay} />
              <div className="overlay">{image.overlay}</div>
            </section>
          ))}
        </section>

        {/* Section 2 Content */}
        <section className="section2-content">
          {/* <p>And Much More!</p> */}
          <p>And Much More! Our team can transform every garden or outdoor space, taking on board the unique requirements of our customers. We never take a ‘one size fits all’ approach, instead tailoring our services specifically to the needs of our clients.</p>
          <p>A British-owned company, whose entire team is English managed, we always use products that have been manufactured using the highest quality materials. This includes award-winning artificial turf from Easigrass, a product that is 100% British designed as well as child and pet safe. Operating across the entirety of Dubai and Abu Dhabi, whatever landscaping services you require, Dubai Landscapes is here to help. Contact us by Whatsapp, on the phone or by filling out our online form, and a member of our team will be able to help</p>
        </section>
      </section>
    </section>
  );
}

export default LandscapingPage;
