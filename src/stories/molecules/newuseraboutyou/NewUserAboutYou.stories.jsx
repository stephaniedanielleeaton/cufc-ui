import React from 'react';
import NewUserAboutYou from './NewUserAboutYou.jsx';

export default {
  title: 'Molecules/NewUserAboutYou',
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
