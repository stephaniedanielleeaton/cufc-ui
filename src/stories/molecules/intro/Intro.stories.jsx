import React from 'react';
import Intro from './Intro.jsx';

export default {
  title: 'Molecules/Intro',
  component: Intro,
  tags: ['autodocs'],
};
const handleOnNavigationClick = (message) => {
  console.log(message);
};

//const Template = (args) => <TopNavbar {...args} />;

export const Default = () => <Intro onNavigationClick={handleOnNavigationClick} />;
