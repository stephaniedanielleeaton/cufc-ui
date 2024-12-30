import React from 'react';
import { action } from '@storybook/addon-actions';
import PersonCheckInCardContainer from './PersonCheckInCardContainer.jsx';

export default {
  title: 'CheckIn/Containers/PersonCheckInContainer',
  component: PersonCheckInCardContainer,
  tags: ['autodocs'],
};

const users = [
  { id: '1', displayName: 'John Doe' },
  { id: '2', displayName: 'Jane Smith' },
  { id: '3', displayName: 'Alice Johnson' },
];

const Template = (args) => <PersonCheckInCardContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  users,
  onCheckIn: action('checked-in'),
};
