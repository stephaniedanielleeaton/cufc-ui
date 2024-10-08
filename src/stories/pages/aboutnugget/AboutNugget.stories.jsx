import React from 'react';
import AboutNugget from './AboutNugget.jsx';

export default {
  title: 'Pages/AboutNugget',
  component: AboutNugget,
  tags: ['autodocs'],
};
const handleOnNavigationClick = (message) => {
  console.log(message);
};

export const Default = () => <AboutNugget onNavigationClick={handleOnNavigationClick} />;
