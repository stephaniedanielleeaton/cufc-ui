import BaseButton from './BaseButton.jsx';

export default {
  title: 'Components/BaseButton',
  component: BaseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
    },
    onClick: { action: 'clicked' },
  },
};

export const Primary = {
  args: {
    text: 'SUBMIT',
  },
};
