import React from 'react';
import Nav from './Nav.jsx';

export default {
  title: 'Nav',
  component: Nav,
  tags: ['autodocs'],
};
const handleOnNavigationClick = (message) => {
  console.log(message);
};

const handleAuth = () => {
  console.log('auth');
};

//const Template = (args) => <TopNavbar {...args} />;

export const Default = () => (
  <Nav
    onNavigationClick={handleOnNavigationClick}
    userLoggedIn={true}
    userProfilePic="https://lh3.googleusercontent.com/a/ACg8ocKt5NY9R_088JSyRO0nS4lNsTuux7_KJI-FCo0_PrQyjfo=s96-c"
    handleAuth={handleAuth}
    isAuthenticated={true}
    isAdmin={false}
  />
);
