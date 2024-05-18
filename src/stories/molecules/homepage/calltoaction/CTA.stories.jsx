import React from 'react';
import CTA from './CTA.jsx';

export default {
  title: 'Molecules/homepage/CTA',
  component: CTA,
  tags: ['autodocs'],
};
const handleOnNavigationClick = (message) => {
  console.log(message);
};

//const Template = (args) => <TopNavbar {...args} />;

export const Default = () => <CTA onNavigationClick={handleOnNavigationClick} />;
