import React from 'react';
import Schedule from './Schedule.jsx';

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
  title: 'Pages/Homepage/Schedule',
  component: Schedule,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    scheduleItems: mockScheduleItems,
    upcomingClosures: mockUpcomingClosures,
    upcomingEvents: mockUpcomingEvents,
  },
};

export const NoEvents = {
  args: {
    scheduleItems: mockScheduleItems,
    upcomingClosures: mockUpcomingClosures,
    upcomingEvents: [],
  },
};

export const NoClosures = {
  args: {
    scheduleItems: mockScheduleItems,
    upcomingClosures: [],
    upcomingEvents: mockUpcomingEvents,
  },
};
