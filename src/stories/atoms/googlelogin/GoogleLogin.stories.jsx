import React from 'react';
import GoogleLogin from './GoogleLogin.jsx';

export default {
  title: 'Molecules/GoogleLogin',
  component: GoogleLogin,
  tags: ['autodocs'],
};

//this isn't be used so I'm remarking it out to not cause linter errors
// const handleOnNavigationClick = (message) => {
//   console.log(message);
// };

export const Default = () => <GoogleLogin />;
