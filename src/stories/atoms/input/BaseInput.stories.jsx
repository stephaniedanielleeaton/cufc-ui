import BaseInput from './BaseInput';

export default {
  title: 'Atoms/BaseInput',
  component: BaseInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    faIcon: {
      control: 'select',
      options: ['faUser', 'faEnvelope', 'faCalendar'],
    },
  },
};

export const defaultInput = {
  args: {},
};

// Add more variations as needed
