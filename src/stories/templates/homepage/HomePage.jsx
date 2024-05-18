import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../../molecules/nav/Nav.jsx';
import Hero from '../../molecules/homepage/hero/Hero.jsx';
import Intro from '../../molecules/homepage/intro/Intro.jsx';
import Schedule from '../../molecules/homepage/schedule/Schedule.jsx';
import Footer from '../../molecules/footer/Footer.jsx';
import Contact from '../../molecules/homepage/contact/Contact.jsx';
import CTA from '../../molecules/homepage/calltoaction/CTA.jsx';
const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Intro />
      <Schedule />
      <Contact recaptchaSiteKey={"123"} onSubmit={()=>{}}/>
      <CTA />
      <Footer />
    </div>
  );
};

HomePage.propTypes = {
  imageOptions: PropTypes.shape({
    src: PropTypes.any, // Adjust according to the expected type
    alt: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    objectFit: PropTypes.string,
    objectPosition: PropTypes.string,
  }),
  buttonTexts: PropTypes.arrayOf(PropTypes.string),
  textContents: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      body: PropTypes.string,
    })
  ),
  contactButtonText: PropTypes.string,
};

HomePage.defaultProps = {};

export default HomePage;
