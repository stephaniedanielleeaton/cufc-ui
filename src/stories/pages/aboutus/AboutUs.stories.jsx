import React from 'react';
import AboutUs from './AboutUs.jsx';

export default {
  title: 'Pages/AboutUs',
  component: AboutUs,
  tags: ['autodocs'],
};
const handleOnNavigationClick = (message) => {
  console.log(message);
};

//const Template = (args) => <TopNavbar {...args} />;

export const Default = () => <AboutUs onNavigationClick={handleOnNavigationClick} />;
