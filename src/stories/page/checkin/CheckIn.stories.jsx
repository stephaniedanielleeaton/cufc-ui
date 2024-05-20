import React from 'react';
import PersonCheckInPage from '../components/PersonCheckInPage';

export default {
  title: 'Components/PersonCheckInPage',
  component: PersonCheckInPage,
  tags: ['autodocs'],
};

const Template = (args) => <PersonCheckInPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  members: [
    {
      id: '1',
      displayName: 'John Doe',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      displayName: 'Jane Smith',
      portraitUrl: 'https://via.placeholder.com/150',
    },
  ],
  onCheckIn: (id) => {
    console.log(`Checked in member with id: ${id}`);
  },
};
