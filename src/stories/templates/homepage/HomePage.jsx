import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../../molecules/nav/Nav.jsx';
import Hero from '../../molecules/hero/Hero.jsx';
import Intro from '../../molecules/intro/Intro.jsx';
import Schedule from '../../molecules/schedule/Schedule.jsx';
import Footer from '../../molecules/footer/Footer.jsx';
const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Intro />
      <Schedule />
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
