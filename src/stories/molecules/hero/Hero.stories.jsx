import React from 'react';
import Hero from './hero.jsx';

export default {
  title: 'Molecules/Hero',
  component: Hero,
  tags: ['autodocs'],
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
