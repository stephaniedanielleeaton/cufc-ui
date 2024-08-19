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

export const Default = () => <Contact onSubmit={handleOnNavigationClick} instagramLink="https://www.instagram.com/columbusunited_fencing"/>;
