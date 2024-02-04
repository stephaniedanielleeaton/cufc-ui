import React from 'react';
import TopNavbar from './TopNavbar';

export default {
  title: 'Molecules/TopNavBar',
  component: TopNavbar,
  tags: ['autodocs'],
};
const handleOnNavigationClick = (message) => {
  console.log(message);
};

//const Template = (args) => <TopNavbar {...args} />;

export const Default = () => <TopNavbar onNavigationClick={handleOnNavigationClick} />;
