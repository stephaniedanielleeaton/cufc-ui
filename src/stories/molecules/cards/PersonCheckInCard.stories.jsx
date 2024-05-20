import React from 'react';
import { action } from '@storybook/addon-actions';
import PersonCheckInCard from './PersonCheckInCard';

export default {
  title: 'Molecules/Cards/PersonCheckInCard',
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
