import React from 'react';
import Schedule from './Schedule.jsx';

export default {
  title: 'Molecules/homepage/Schedule',
  component: Schedule,
  tags: ['autodocs'],
};
const handleOnNavigationClick = (message) => {
  console.log(message);
};

//const Template = (args) => <TopNavbar {...args} />;

export const Default = () => <Schedule onNavigationClick={handleOnNavigationClick} />;
