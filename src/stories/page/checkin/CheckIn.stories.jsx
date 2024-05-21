import React from 'react';
import PersonCheckInPage from './CheckIn.jsx';

export default {
  title: 'Pages/PersonCheckInPage',
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
    {
      id: '3',
      displayName: 'Liam Nguyen',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '4',
      displayName: 'Sofia Rodriguez',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '5',
      displayName: 'Aarav Patel',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '6',
      displayName: 'Mia Chen',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '7',
      displayName: 'Lucas Kim',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '8',
      displayName: 'Olivia García',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '9',
      displayName: 'Noah Ali',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '10',
      displayName: 'Emma Müller',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '11',
      displayName: 'Ethan Yamamoto',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '12',
      displayName: 'Sophia Petrova',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '13',
      displayName: 'Mason Kowalski',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '14',
      displayName: 'Isabella Ferrari',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '15',
      displayName: 'James Silva',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '16',
      displayName: 'Ava Bakker',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '17',
      displayName: 'Benjamin Schmidt',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '18',
      displayName: 'Charlotte Lefevre',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '19',
      displayName: 'William Novak',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '20',
      displayName: 'Amelia Ruiz',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '21',
      displayName: 'Elijah Hassan',
      portraitUrl: 'https://via.placeholder.com/150',
    },
    {
      id: '22',
      displayName: 'Chloe Tanaka',
      portraitUrl: 'https://via.placeholder.com/150',
    },
  ],
  onCheckIn: (id) => {
    console.log(`Checked in member with id: ${id}`);
  },
};
