import React from 'react';
import PageLoader from './PageLoader.jsx';

export default {
  title: 'Components/PageLoader',
  component: PageLoader,
  tags: ['autodocs'],
};
const handleOnNavigationClick = (message) => {
  console.log(message);
};

//const Template = (args) => <TopNavbar {...args} />;

export const Default = () => <PageLoader onNavigationClick={handleOnNavigationClick} />;
