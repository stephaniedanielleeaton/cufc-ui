import React from 'react';
import Schedule from './Schedule';

const mockScheduleItems = [
  {
    discipline: 'Longsword',
    subtitle: 'All skill levels welcome',
    day: 'Monday & Wednesday',
    time: '7:00 PM - 9:00 PM',
  },
  {
    discipline: 'Rapier',
    subtitle: 'Intermediate & Advanced',
    day: 'Tuesday',
    time: '7:00 PM - 9:00 PM',
  },
  {
    discipline: 'Sword & Buckler',
    day: 'Thursday',
    time: '7:00 PM - 9:00 PM',
  },
  {
    discipline: 'Open Floor',
    subtitle: 'Supervised free practice',
    day: 'Saturday',
    time: '2:00 PM - 5:00 PM',
  },
];

const mockUpcomingEvents = [
  {
    date: 'March 15-17, 2024',
    title: 'Spring HEMA Tournament',
    description: 'Annual competition featuring longsword and rapier categories',
  },
  {
    date: 'April 5, 2024',
    title: 'Beginner Workshop',
    description: 'Introduction to HEMA fundamentals and safety',
  },
  {
    date: 'May 20, 2024',
    title: 'Guest Instructor: Master Smith',
    description: 'Special workshop on German longsword techniques',
  },
];

const mockUpcomingClosures = [
  {
    dates: 'December 24-26, 2023',
    reason: 'Christmas Holiday',
  },
  {
    dates: 'December 31, 2023 - January 1, 2024',
    reason: 'New Year Holiday',
  },
  {
    dates: 'January 15, 2024',
    reason: 'Facility Maintenance',
  },
];

const mockHandlers = {
  onDeleteScheduleItem: (item) => {
    console.log('Delete schedule item:', item);
  },
  onDeleteClosure: (closure) => {
    console.log('Delete closure:', closure);
  },
  onDeleteEvent: (event) => {
    console.log('Delete event:', event);
  },
  onAddScheduleItem: (item) => {
    console.log('Add new schedule item:', item);
    alert('New class would be added: ' + item.discipline);
  },
  onAddClosure: (closure) => {
    console.log('Add new closure:', closure);
    alert('New closure would be added for: ' + closure.dates);
  },
  onAddEvent: (event) => {
    console.log('Add new event:', event);
    alert('New event would be added: ' + event.title);
  },
  onEditScheduleItem: (item) => {
    console.log('Edit schedule item:', item);
    alert('Class would be updated: ' + item.discipline);
  },
  onEditClosure: (closure) => {
    console.log('Edit closure:', closure);
    alert('Closure would be updated for: ' + closure.dates);
  },
  onEditEvent: (event) => {
    console.log('Edit event:', event);
    alert('Event would be updated: ' + event.title);
  },
};

export default {
  title: 'Pages/Schedule',
  component: Schedule,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isAdmin: {
      control: 'boolean',
      description: 'Enable admin features like editing and deleting items',
    },
  },
};

// Default view (non-admin)
export const Default = {
  args: {
    scheduleItems: mockScheduleItems,
    upcomingClosures: mockUpcomingClosures,
    upcomingEvents: mockUpcomingEvents,
    isAdmin: false,
  },
};

// Admin view with edit controls
export const AdminView = {
  args: {
    scheduleItems: mockScheduleItems,
    upcomingClosures: mockUpcomingClosures,
    upcomingEvents: mockUpcomingEvents,
    isAdmin: true,
    ...mockHandlers,
  },
};

// Empty states
export const EmptyState = {
  args: {
    scheduleItems: [],
    upcomingClosures: [],
    upcomingEvents: [],
    isAdmin: true,
    ...mockHandlers,
  },
};

// Loading state example (if needed in the future)
export const WithFewItems = {
  args: {
    scheduleItems: mockScheduleItems.slice(0, 2),
    upcomingClosures: mockUpcomingClosures.slice(0, 1),
    upcomingEvents: mockUpcomingEvents.slice(0, 1),
    isAdmin: true,
    ...mockHandlers,
  },
};
