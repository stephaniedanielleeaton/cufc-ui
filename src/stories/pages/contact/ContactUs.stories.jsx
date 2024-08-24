import React from 'react';
import ContactUs from './ContactUs.jsx';

export default {
  title: 'Pages/Contact',
  component: ContactUs,
  tags: ['autodocs'],
};
const handleOnNavigationClick = (message) => {
  console.log(message);
};

export const Default = () => (
  <ContactUs onSubmit={handleOnNavigationClick}
             facebookLink="https://www.facebook.com/groups/1148215575202964"
             instagramLink="https://www.instagram.com/columbusunited_fencing" />
);
