import React from 'react';
import './footer.css';
import instagramIcon from '../../assets/instagramicon.png';
import linkedinIcon from '../../assets/linkedinicon.png';
import facebookIcon from '../../assets/facebookicon.png';
import twitterIcon from '../../assets/twittericon.png';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className="social-media">
          <a href="https://www.instagram.com">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://twitter.com">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </section>
        <section className="contact-info">
          <p>Office 102, Manchester, M4 3EQ</p>
          <p>+44 20 7123 4567</p>
        </section>
        <section className="copyright">
          <p>&copy; James Hutchinson 2024</p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
