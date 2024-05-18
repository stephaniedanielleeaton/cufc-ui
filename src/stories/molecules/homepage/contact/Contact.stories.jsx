import React from 'react';
import Contact from './Contact.jsx';

export default {
  title: 'Molecules/homepage/Contact',
  component: Contact,
  tags: ['autodocs'],
};
const handleOnNavigationClick = (message) => {
  console.log(message);
};

const devSiteKey = '6Leo7dkpAAAAAMiK3z8TrcpBOA6K4i8QlteBIKEd';

export const Default = () => <Contact onNavigationClick={handleOnNavigationClick} recaptchaSiteKey={devSiteKey} />;
