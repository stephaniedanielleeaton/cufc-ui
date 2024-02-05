import React from 'react';
import UserPage from './UserPage';

export default {
  title: 'Templates/UserPage',
  component: UserPage,
  tags: ['autodocs'],
};

const Template = (args) => <UserPage {...args} />;

const defaultMember = {
  id: 1,
  display_first_name: 'Edith',
  display_last_name: 'Eaton',
  personal_info: {
    legal_first_name: 'Edith',
    legal_last_name: 'Eaton',
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
export const Default = Template.bind({});
Default.args = {
  member: defaultMember,
};
