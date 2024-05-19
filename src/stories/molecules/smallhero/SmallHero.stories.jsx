import React from 'react';
import SmallHero from './SmallHero.jsx';

export default {
  title: 'Molecules/SmallHero',
  component: SmallHero,
  tags: ['autodocs'],
};

const Template = (args) => <SmallHero pageTitle="Join Us" />;

export const Default = Template.bind({});
