import React from 'react';

import './contactPage.css'; // Import your CSS file for styling
import emailIcon from '../../assets/email.png';
import whatsappIcon from '../../assets/whatsapp.webp';
import phoneIcon from '../../assets/phone.webp';

const ContactPage = () => {
  return (
    <body>
      {/* Hero */}
      <section className="contact-title-bar">
        <h1>Get in touch today</h1>
      </section>

       {/* Main Content */}
       <section className="content">
        <section className="section1-content">
          <h2 className="section-heading">Contact Us</h2>
          <p>If you need any more information on the range of services Dubai Landscapes offers, or want to hire our team to carry out work on your property in the UAE, we’re always here to help. We place customer service at the forefront of everything we do and strive to bring British service to the UAE market. To find out more information about how we can enhance your outdoor living experience, drop us a message on WhatsApp or give us a call. Alternatively, you can complete the online form and a member of our team will get in touch with you.</p>
        </section>
      </section>

      {/* Content 2 - Contact Info */}
      <section className="content">
        <section className="contact-info">
          <img src={phoneIcon} alt="Call Icon" />
          <p>+44 20 7123 4567</p>
          <img src={emailIcon} alt="Email Icon" />
          <p>dubailandscapes@example.com</p>
          <img src={whatsappIcon} alt="WhatsApp Icon" />
          <p>+44 20 7123 4567</p>
        </section>

        {/* Content 3 - Contact Form */}
        <section className="contact-form">
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </section>
    </body>
  );
}

export default ContactPage;
