// MemberDetails.stories.js
import React from 'react';
import MemberDetails from './MemberDetails.jsx';

export default {
  title: 'Admin/MemberDetails',
  component: MemberDetails,
};

const Template = (args) => <MemberDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  member: {
    _id: 1,
    display_first_name: 'John',
    display_last_name: 'Doe',
    personal_info: {
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    },
  },
  onUpdate: (updatedMember) => {
    console.log('Updated Member:', updatedMember);
  },
};
