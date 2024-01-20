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
      id: 1,
      name: 'Edith',
      status: 'Active',
      plan: 'Subscription',
      type: 'Full',
      lastRenewalDate: new Date(1702166400000),
      monthsPaid: 3,
      validUntil: new Date(1710032400000),
    },
    {
      id: 1,
      name: 'Toby',
      status: 'Inactive',
      plan: 'Monthly',
      type: 'Saturday',
      lastRenewalDate: new Date(1702166400000),
      monthsPaid: 1,
      validUntil: new Date(1704844800000),
    },
  ],
};
