import React from 'react';
import AdminPage from './AdminPage';

export default {
  title: 'Templates/AdminPage',
  component: AdminPage,
  tags: ['autodocs'],
};

const Template = (args) => <AdminPage {...args} />;

export const DefaultView = Template.bind({});

DefaultView.args = {
  members: [
    {
      _id: 1,
      display_first_name: 'Edith',
      display_last_name: 'Eaton',
      subscription_status: 'active',
      membership_renewed_date: new Date(1702166400000),
      membership_months_paid: 3,
    },
    {
      _id: 2,
      display_first_name: 'Toby',
      display_last_name: 'Crackel',
      subscription_status: 'active',
      membership_renewed_date: new Date(1702166400000),
      membership_months_paid: 1,
    },
  ],
};
