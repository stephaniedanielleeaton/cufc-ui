import React from 'react';
import UserPage from './UserPage';

export default {
  title: 'Templates/UserPage',
  component: UserPage,
  tags: ['autodocs'],
};

const Template = (args) => <UserPage {...args} />;

const defaultMember = {
  displayFirstName: 'Jasmine',
  displayLastName: 'Crackel',
  legalFirstName: 'Jasmine',
  legalLastName: 'Crackel',
  email: 'jasmine.fluff@example.com',
  dateOfBirth: '2023-01-01',
  streetAddress: '123 Main St',
  city: 'Anytown',
  state: 'State',
  zipcode: '12345',
  country: 'Country',
  phoneNumber: '123-456-7890',
  status: 'Active',
  plan: 'Subscription',
  type: 'Full',
  lastRenewalDate: new Date(1702166400000),
  monthsPaid: 3,
  validUntil: new Date(1710032400000),
};
export const Default = Template.bind({});
Default.args = {
  member: defaultMember,
};
