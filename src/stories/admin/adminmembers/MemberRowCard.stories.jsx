import React from 'react';
import { action } from '@storybook/addon-actions';
import MemberRowCard from './MemberRowCard.jsx';

export default {
  title: 'Admin/MemberRowCard',
  component: MemberRowCard,
  tags: ['autodocs'],
};

const Template = (args) => <MemberRowCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  member: {
    display_first_name: 'John',
    display_last_name: 'Doe',
    subscription_status: 'active',
    last_invoice_status: 'paid',
    last_invoice_date: '2024-12-14',
    role: 'member',
    lastCheckInDate: '2024-12-14',
    is_waiver_on_file: true,
    notes: '',
  },
  onClick: action('clicked'),
  isSelected: false,
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  isSelected: true,
};

export const WithNotes = Template.bind({});
WithNotes.args = {
  ...Default.args,
  member: {
    ...Default.args.member,
    notes: 'Some important notes about this member',
  },
};

export const Coach = Template.bind({});
Coach.args = {
  ...Default.args,
  member: {
    ...Default.args.member,
    role: 'coach',
  },
};
