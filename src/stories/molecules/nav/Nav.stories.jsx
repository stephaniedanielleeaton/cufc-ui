import React from 'react';
import Nav from './Nav.jsx';

export default {
  title: 'Molecules/Nav',
  component: Nav,
  tags: ['autodocs'],
};
const handleOnNavigationClick = (message) => {
  console.log(message);
};

//const Template = (args) => <TopNavbar {...args} />;

export const Default = () => <Nav onNavigationClick={handleOnNavigationClick} />;