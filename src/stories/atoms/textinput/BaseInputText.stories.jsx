import React from 'react';
import BaseTextInput from './BaseTextInput.jsx';

export default {
  title: 'Atoms/BaseTextInput',
  component: BaseTextInput,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

const Template = (args) => <BaseTextInput {...args} />;

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
