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

const handleEmailSignup = async (email) => {
  console.log('Email signup:', email);
};

export const Default = () => (
  <AboutNugget 
    onNavigationClick={handleOnNavigationClick} 
    onEmailSignup={handleEmailSignup}
  />
);
