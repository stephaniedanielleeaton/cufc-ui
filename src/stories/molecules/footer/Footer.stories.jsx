import React from 'react';
import Footer from './Footer.jsx';

export default {
  title: 'Molecules/Footer',
  component: Footer,
  tags: ['autodocs'],
};
const handleOnNavigationClick = (message) => {
  console.log(message);
};

//const Template = (args) => <TopNavbar {...args} />;

export const Default = () => <Footer instagramLink="https://www.instagram.com/columbusunited_fencing" />;
