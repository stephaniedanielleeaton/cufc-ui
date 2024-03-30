import React from 'react';
import GoogleLogin from './GoogleLogin.jsx';

export default {
  title: 'Molecules/GoogleLogin',
  component: GoogleLogin,
  tags: ['autodocs'],
};
const handleOnNavigationClick = (message) => {
  console.log(message);
};

export const Default = () => <GoogleLogin />;

