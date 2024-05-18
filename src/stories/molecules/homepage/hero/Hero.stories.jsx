import React from 'react';
import Hero from './Hero.jsx';

export default {
  title: 'Molecules/homepage/Hero',
  component: Hero,
  tags: ['autodocs'],
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
