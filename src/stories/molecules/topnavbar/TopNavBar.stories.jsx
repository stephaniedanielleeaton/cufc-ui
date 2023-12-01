// TopNavbar.stories.js
import React from 'react';
import TopNavbar from './TopNavbar';

export default {
  title: 'Molecules/TopNavbar',
  component: TopNavbar,
  tags: ['autodocs'],
};

const Template = (args) => <TopNavbar {...args} />;

export const Default = Template.bind({});
