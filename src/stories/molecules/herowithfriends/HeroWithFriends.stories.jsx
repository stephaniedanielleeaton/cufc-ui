import React from 'react';
import HeroWithFriends from './HeroWithFriends.jsx';

export default {
  title: 'Molecules/HeroWithFriends',
  component: HeroWithFriends,
  tags: ['autodocs'],
};

const Template = (args) => <HeroWithFriends {...args} />;

export const Default = Template.bind({});
