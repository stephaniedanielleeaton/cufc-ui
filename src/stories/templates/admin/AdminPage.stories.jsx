import React from 'react';
import AdminPage from './AdminPage.jsx';

export default {
  title: 'Templates/AdminPage',
  component: AdminPage,
  tags: ['autodocs'],
};

const handleOnNavigationClick = (message) => {
  console.log(message);
};

const Template = (args) => <AdminPage {...args} />;

export const DefaultView = Template.bind({});

DefaultView.args = {
  onNavigationClick: handleOnNavigationClick,
  members: [
    {
      _id: 1,
      display_first_name: 'Edith',
      display_last_name: 'Eaton',
      subscription_status: 'Active',
      subscription_start_date: new Date(1702166400000),
      plan: 'Full',
      last_invoice_status: 'Paid',
      last_invoice_date: new Date(1733702400000),
    },
    {
      _id: 2,
      display_first_name: 'Toby',
      display_last_name: 'Crackel',
      subscription_status: 'Active',
      subscription_start_date: new Date(1702166400000),
      plan: 'Saturday',
      last_invoice_status: 'Overdue',
      last_invoice_date: new Date(1702166400000),
    },
    {
      _id: 3,
      display_first_name: 'Edgar',
      display_last_name: 'Eaton',
      subscription_status: 'Cancelled',
      subscription_start_date: new Date(1702166400000),
      plan: 'Full',
      last_invoice_status: 'Cancelled',
      last_invoice_date: new Date(1702166400000),
    },
  ],
};
