import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../../pages/homepage/hero/Hero.jsx';
import Nav from '../../nav/Nav.jsx';
import NuggetCTA from '../../pages/homepage/nuggetcta/NuggetCTA.jsx';
import Intro from '../../pages/homepage/intro/Intro.jsx';
import Schedule from '../../pages/homepage/schedule/Schedule.jsx';
import ContactUs from '../../pages/contact/ContactUs.jsx';
import CTA from '../../pages/homepage/calltoaction/CTA.jsx';
import Footer from '../../footer/Footer.jsx';
import UpcomingStartDates from '../../pages/aboutnugget/components/UpcomingStartDates.jsx';

const HomePage = ({ onNavigationClick }) => {
  return (
    <div>
      <Nav onNavigationClick={onNavigationClick} />
      <Hero />
      <NuggetCTA onNavigationClick={onNavigationClick} />
      <Intro onNavigationClick={onNavigationClick} />
      <Schedule />
      <UpcomingStartDates onNavigationClick={onNavigationClick} />
      <ContactUs recaptchaSiteKey={'123'} onSubmit={() => {}} />
      <CTA />
      <Footer />
    </div>
  );
};

HomePage.propTypes = {
  onNavigationClick: PropTypes.func
};

export default HomePage;
