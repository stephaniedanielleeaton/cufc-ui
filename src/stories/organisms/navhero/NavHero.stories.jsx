import React from 'react';
import NavHero from './NavHero.jsx';

export default {
  title: 'Organisms/NavHero',
  component: NavHero,
  tags: ['autodocs'],
};

const Template = (args) => <NavHero {...args} />;

export const Default = Template.bind({});
