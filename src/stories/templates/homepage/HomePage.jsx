import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../../reusablecomponents/smallhero/SmallHero.jsx';
import Nav from '../../nav/Nav.jsx';
import NuggetCTA from '../../pages/homepage/nuggetcta/NuggetCTA.jsx';
import Intro from '../../pages/homepage/intro/Intro.jsx';
import Schedule from '../../pages/homepage/schedule/Schedule.jsx';
import ContactUs from '../../pages/contact/ContactUs.jsx';
import CTA from '../../pages/homepage/calltoaction/CTA.jsx';
import Footer from '../../footer/Footer.jsx';

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <NuggetCTA />
      <Intro />
      <Schedule />
      <ContactUs recaptchaSiteKey={'123'} onSubmit={() => {}} />
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
