import React from 'react';
import AboutNugget from './AboutNugget.jsx';

export default {
  title: 'Pages/AboutNugget',
  component: AboutNugget,
  tags: ['autodocs'],
};

const handleOnNavigationClick = (message) => {
  console.log(message);
};

const handleEmailSignup = async (email) => {
  console.log('Email signup:', email);
};

const defaultUpcomingDates = [
  {
    startDate: "January 9th, 2025",
    schedule: "Thursday evenings",
    meetingTime: "Meeting every Thursday at 7:00pm to 8:30pm for four weeks",
    courseTitle: "Introduction to HEMA through Rapier"
  },
  {
    startDate: "February 22nd, 2025",
    schedule: "Saturday mornings",
    meetingTime: "Meeting every Saturday at 10:00am to 11:30am for four weeks",
    courseTitle: "Introduction to HEMA through Longsword"
  }
];

const alternateUpcomingDates = [
  {
    startDate: "March 15th, 2025",
    schedule: "Friday evenings",
    meetingTime: "Meeting every Friday at 6:00pm to 7:30pm for four weeks",
    courseTitle: "Introduction to HEMA through Sabre"
  }
];

export const Default = () => (
  <AboutNugget 
    onNavigationClick={handleOnNavigationClick} 
    onEmailSignup={handleEmailSignup}
    upcomingDates={defaultUpcomingDates}
  />
);

export const SingleUpcomingDate = () => (
  <AboutNugget 
    onNavigationClick={handleOnNavigationClick} 
    onEmailSignup={handleEmailSignup}
    upcomingDates={alternateUpcomingDates}
  />
);

export const NoUpcomingDates = () => (
  <AboutNugget 
    onNavigationClick={handleOnNavigationClick} 
    onEmailSignup={handleEmailSignup}
    upcomingDates={[]}
  />
);
