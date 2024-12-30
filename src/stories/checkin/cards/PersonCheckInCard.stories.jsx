import React from 'react';
import { action } from '@storybook/addon-actions';
import PersonCheckInCard from './PersonCheckInCard.jsx';

export default {
  title: 'CheckIn/Cards/PersonCheckInCard',
  component: PersonCheckInCard,
  tags: ['autodocs'],
};

const Template = (args) => <PersonCheckInCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '12345',
  displayName: 'John Doe',
  onCheckIn: action('checked-in'),
};
