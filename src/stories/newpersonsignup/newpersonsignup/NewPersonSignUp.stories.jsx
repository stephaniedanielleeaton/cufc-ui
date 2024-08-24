import React from 'react';
import NewPersonSignUp from './NewPersonSignUp.jsx';

export default {
  title: 'NewPersonSignUp/NewPersonSignUp',
  component: NewPersonSignUp,
  tags: ['autodocs'],
};

const Template = (args) => <NewPersonSignUp {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (formData) => {
    console.log('Form submitted:', formData);
  },
  emailStatusMessage: '',
};
