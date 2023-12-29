import React from 'react';
import About from './About.jsx';

export default {
  title: 'Molecules/About',
  component: About,
  tags: ['autodocs'],
};

const Template = (args) => <About {...args} />;

export const Default = Template.bind({});
