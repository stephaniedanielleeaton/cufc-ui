import React from 'react';
import AdminPage from './AdminPage';
import LeapingLynx from '../../assets/Lynx/LeapingLynx.jpg';

export default {
  title: 'Templates/AdminPage',
  component: AdminPage,
  tags: ['autodocs'],
};

const Template = (args) => <AdminPage {...args} />;

export const DefaultView = Template.bind({});

DefaultView.args = {

  members: [{
    id: 1,
    name: "Edith",
    status: "Active",
    plan: "Subscription",
    type: "full",
    lastRenewalDate: "DEC 10 2023",
    monthsPaid: 3,
    validUntil: "MAR 10, 2023"
  }]
};
