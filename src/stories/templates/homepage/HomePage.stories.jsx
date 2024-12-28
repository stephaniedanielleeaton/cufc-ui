import React from 'react';
import HomePage from './HomePage';
import LeapingLynx from '../../assets/Lynx/LeapingLynx.jpg';

const mockScheduleItems = [
  {
    discipline: 'Saber',
    day: 'Monday',
    time: '7:00pm - 9:00pm',
  },
  {
    discipline: 'Longsword',
    day: 'Wednesday',
    time: '6:30pm - 8:30pm',
  },
  {
    discipline: 'Footwork & Thrusting Weapons',
    day: 'Thursday',
    time: '7:00pm - 9:00pm',
  },
  {
    discipline: 'Longsword Fundamentals',
    day: 'Saturday',
    time: '10:00am - 11:30am',
    subtitle: '(Starting in Early 2025)',
  },
  {
    discipline: 'Open Floor',
    day: 'Saturday',
    time: '11:00am - 1:00pm',
  },
  {
    discipline: 'Marginalized Gender Open Floor Brunch',
    day: 'Sunday',
    time: 'Variable',
    subtitle: '(Check Discord for schedule)',
  },
];

const mockUpcomingClosures = [
  {
    dates: 'Dec 25-26, 2024',
    reason: 'Christmas Holiday',
  },
];

const mockUpcomingEvents = [
  {
    date: 'January 11-12, 2025',
    title: 'Arto Fama Workshop',
    description: 'Open Floor will be cancelled. Email for registration details.',
  },
  {
    date: 'February 14-16, 2025',
    title: 'LynxCup 2025',
    description: 'Open floor and classes will be cancelled for tournament. See event page for registration.',
  },
];

export default {
  title: 'Templates/HomePage',
  component: HomePage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <HomePage {...args} />;

export const Default = Template.bind({});

Default.args = {
  scheduleItems: mockScheduleItems,
  upcomingClosures: mockUpcomingClosures,
  upcomingEvents: mockUpcomingEvents,
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
