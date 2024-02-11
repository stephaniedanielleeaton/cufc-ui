import React from 'react';
import AdminMember from './AdminMember.jsx';

export default {
  title: 'Molecules/AdminMember',
  component: AdminMember,
  tags: ['autodocs'],
};

const defaultMember = {
  id: 1,
  display_first_name: 'Edith',
  display_last_name: 'Eaton',
  personal_info: {
    legal_first_name: 'Edith',
    legal_last_name: 'Eaton',
    date_of_birth: new Date(1702166400000),
    address: {
      street: '20 Pennsylvania Ave',
      city: 'Delaware',
      state: 'OH',
      zipcode: '43015',
      country: 'USA',
    },
  },
  subscription_status: 'active',
  membership_renewed_date: new Date(1702166400000),
  membership_months_paid: 3,
};

const Template = (args) => <AdminMember {...args} />;

export const Default = Template.bind({});
Default.args = {
  member: defaultMember,
};
