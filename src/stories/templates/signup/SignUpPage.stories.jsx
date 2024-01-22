import React from 'react';
import SignUpPage from './SignUpPage.jsx';

export default {
  title: 'Templates/SignUpPage',
  component: SignUpPage,
  tags: ['autodocs'],
};

const Template = (args) => <SignUpPage {...args} />;

export const DefaultView = Template.bind({});

DefaultView.args = {};
