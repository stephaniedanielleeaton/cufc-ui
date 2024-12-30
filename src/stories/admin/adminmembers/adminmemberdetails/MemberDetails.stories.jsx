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
    _id: '1',
    square_customer_id: '123',
    display_first_name: 'John',
    display_last_name: 'Doe',
    personal_info: {
      legal_first_name: 'John',
      legal_last_name: 'Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      date_of_birth: '1990-01-01',
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
        country: 'USA'
      }
    },
    role: 'student',
    guardian_first_name: '',
    guardian_last_name: '',
    is_waiver_on_file: false,
    notes: ''
  },
  onUpdateMember: (updatedMember) => {
    console.log('Updated Member:', updatedMember);
  },
  onDeleteMember: (memberId) => {
    console.log('Delete Member:', memberId);
  }
};
