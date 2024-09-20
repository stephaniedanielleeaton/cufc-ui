import React from 'react';
import NewMemberSignUp from './NewMemberSignUp.jsx';

export default {
  title: 'NewMemberSignUp/NewMemberSignUp',
  component: NewMemberSignUp,
  tags: ['autodocs'],
};

const Template = (args) => <NewMemberSignUp {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (formData) => {
    console.log('Form submitted:', formData);
  },
  emailStatusMessage: '',
};
