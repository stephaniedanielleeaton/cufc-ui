import React from 'react';
import TopNavbar from '../../molecules/topnavbar/TopNavBar.jsx';
import NewUserAboutYou from '../../molecules/newuseraboutyou/NewUserAboutYou.jsx';

const SignUpPage = () => {
  return (
    <div>
      <TopNavbar />
      <NewUserAboutYou />
    </div>
  );
};

SignUpPage.defaultProps = {};

export default SignUpPage;
