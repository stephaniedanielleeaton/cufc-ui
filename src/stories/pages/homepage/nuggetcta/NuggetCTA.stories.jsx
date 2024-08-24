import React from 'react';
import NuggetCTA from './NuggetCTA.jsx';

export default {
  title: 'Pages/Homepage/NuggetCTA',
  component: NuggetCTA,
  tags: ['autodocs'],
};
const handleOnNavigationClick = (message) => {
  console.log(message);
};

export const Default = () => <NuggetCTA onNavigationClick={handleOnNavigationClick} />;
