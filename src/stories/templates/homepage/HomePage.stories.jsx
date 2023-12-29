import React from 'react';
import HomePage from './HomePage';
import LeapingLynx from '../../assets/Lynx/LeapingLynx.jpg';

export default {
  title: 'Templates/HomePage',
  component: HomePage,
  tags: ['autodocs'],
};

const Template = (args) => <HomePage {...args} />;

export const DefaultView = Template.bind({});

DefaultView.args = {
  imageOptions: {
    src: LeapingLynx,
    alt: 'Description of the image',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  buttonTexts: ['Get Started', 'Members', 'Schedule'],
  textContents: [
    {
      header: 'About',
      body: 'Welcome to our esteemed HEMA fencing club in the art of historical European martial arts. Dive into an immersive experience with classes available three nights a week, culminating in exhilarating open sparring sessions every Saturday. Embrace the challenge and finesse of HEMA, where tradition meets passion in a vibrant, supportive community.',
    },
    {
      header: 'Location',
      body: '123 anywhere street, Anytown, USA',
    },
    {
      header: 'Hours',
      body: 'Monday x-y \n Tuesday x-y \n Wednesday x-y \n Thursday x-y \n Friday x-y \n Saturday x-y\n Sunday x-y',
    },
  ],
  contactButtonText: 'Contact Us',
};
