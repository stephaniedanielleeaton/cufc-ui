import React from 'react';
import NuggetCTA from './NuggetCTA.jsx';

export default {
  title: 'Molecules/homepage/NuggetCTA',
  component: CTA,
  tags: ['autodocs'],
};
const handleOnNavigationClick = (message) => {
  console.log(message);
};

//const Template = (args) => <TopNavbar {...args} />;

export const Default = () => <NuggetCTA onNavigationClick={handleOnNavigationClick} />;
