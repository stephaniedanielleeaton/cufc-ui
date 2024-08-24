import React from 'react';
import BaseSelect from './BaseSelect.jsx';

export default {
  title: 'Components/BaseSelect',
  component: BaseSelect,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    faIcon: {
      control: 'select',
      options: ['faUser', 'faEnvelope', 'faCalendar', 'faStreetView', 'faCity', 'faMapPin', 'faMobilePhone'],
    },
  },
};

const Template = (args) => <BaseSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
  value: '',
};

export const WithValue = Template.bind({});
WithValue.args = {
  placeholder: 'Enter text...',
  value: 'Example Text',
};
