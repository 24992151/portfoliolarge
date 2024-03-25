import React from 'react';
import './homePage.css'; // Importing the CSS file for styling
import dubaiMainImage from '../../assets/dubaimain.jpg'; // Importing images
import landscapersImage1 from '../../assets/landscapers1.jpg';
import landscapersImage2 from '../../assets/landscapers2.jpg';

const HomePage = () => {
    return (
      <body>
        {/* Hero Section */}
        <img src={dubaiMainImage} alt="Dubai Main" className="hero-image" />
        <div className="overlay">
          <h1>UAE’s leading landscapers</h1>
        </div>

        {/* Section 1 - Garden Landscaping */}
        <section className="section1">
          <h2 className="section-heading">Garden Landscaping</h2>
          <p className="section-text">
            Your garden or outdoor space is an extension of your entire home. A place where you can relax after a long day, entertain friends and family or socialise with loved ones. At Dubai Landscapes, we’ve spent a decade in the UAE, crafting bespoke outdoor living spaces that achieve exactly what our clients desire.
          </p>
        </section>

        {/* Section 2 */}
        <section className="section2">
          <img src={landscapersImage1} alt="Landscapers1" className="section-image-left" />
          <div className="section-content-right">
            <p className="section-text">
              A British company with more than 30 years in the industry, our UAE offering extends across the country, including Abu Dhabi, Dubai and the surrounding areas. Providing our customers with leading British design and installation services for a whole host of outdoor living elements, we always create customised spaces and bespoke gardens that perfectly match the unique specifications of our clients’ outdoor spaces, and align with your vision.Over the years, we’ve earned a reputation for being the premier landscaping company in the UAE. Not only is this due to the high-quality products and services we offer, but our team is also renowned for the focus on customer care that we provide.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="section3">
          <div className="section-content-left">
            <p className="section-text">
              Striving to bring Britain’s famously high level of customer service to the UAE market, we take the time to get to know you and your requirements before delivering a premium service that meets all of your needs.Not only can we offer the design and installation of a number of soft and hard landscaping elements, but we’ll craft an outdoor living space that looks amazing, while is also functional and practical for your family to use. From outdoor design elements like paving, decking and Easigrass artificial turf to luxurious seating and dedicated barbecue areas, we can do it all.So wherever you’re based in the UAE, contact Dubai-Landscapes today to find out more about our range of landscaping services and bespoke gardens. Message us on WhatsApp and a member of our team will be in touch.
            </p>
          </div>
          <img src={landscapersImage2} alt="Landscapers2" className="section-image-right" />
        </section>
      </body>
    );
};

export default HomePage;
