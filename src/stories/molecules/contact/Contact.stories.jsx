import React from 'react';
import Contact from './Contact.jsx';

export default {
  title: 'Molecules/Contact',
  component: Contact,
  tags: ['autodocs'],
};
const handleOnNavigationClick = (message) => {
  console.log(message);
};

//const Template = (args) => <TopNavbar {...args} />;

export const Default = () => <Contact onNavigationClick={handleOnNavigationClick} />;
