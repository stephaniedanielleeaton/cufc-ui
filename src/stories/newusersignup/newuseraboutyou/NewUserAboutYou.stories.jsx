import React from 'react';
import NewUserAboutYou from './NewUserAboutYou';

export default {
  title: 'NewUserSignUp/NewUserAboutYou',
  component: NewUserAboutYou,
  tags: ['autodocs'],
};

const Template = (args) => <NewUserAboutYou {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (formData) => {
    console.log('Form submitted:', formData);
  },
  emailStatusMessage: '',
};
