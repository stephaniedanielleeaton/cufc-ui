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
import NotificationSignup from '../../components/notificationsignup/NotificationSignup.jsx';

const HomePage = ({ 
  onNavigationClick,
  scheduleItems,
  upcomingClosures,
  upcomingEvents,
}) => {
  return (
    <div>
      <Nav onNavigationClick={onNavigationClick} />
      <Hero />
      <NuggetCTA onNavigationClick={onNavigationClick} />
      <Intro onNavigationClick={onNavigationClick} />
      <Schedule 
        scheduleItems={scheduleItems}
        upcomingClosures={upcomingClosures}
        upcomingEvents={upcomingEvents}
      />
      <UpcomingStartDates onNavigationClick={onNavigationClick} />
      <NotificationSignup variant="cta" onSubmit={() => {}} />
      <ContactUs recaptchaSiteKey={'123'} onSubmit={() => {}} />
      <CTA />
      <Footer />
    </div>
  );
};

HomePage.propTypes = {
  onNavigationClick: PropTypes.func,
  scheduleItems: PropTypes.arrayOf(
    PropTypes.shape({
      discipline: PropTypes.string.isRequired,
      day: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
    })
  ).isRequired,
  upcomingClosures: PropTypes.arrayOf(
    PropTypes.shape({
      dates: PropTypes.string.isRequired,
      reason: PropTypes.string.isRequired,
    })
  ).isRequired,
  upcomingEvents: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HomePage;
