import React from 'react';
import Classes from './Classes.jsx';

export default {
  title: 'Molecules/Classes',
  component: Classes,
  tags: ['autodocs'],
};
const handleOnNavigationClick = (message) => {
  console.log(message);
};

//const Template = (args) => <TopNavbar {...args} />;

export const Default = () => <Classes onNavigationClick={handleOnNavigationClick} />;
