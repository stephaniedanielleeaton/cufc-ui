import BaseText from './BaseText.jsx';

export default {
  title: 'Components/BaseText',
  component: BaseText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['lavender', 'wine', 'gunmetal', 'outerSpace', 'ashGray'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
  },
};

export const GunmetalMedium = {
  args: {
    color: 'gunmetal',
    size: 'md',
    content: 'Sample text',
  },
};

export const LavenderLarge = {
  args: {
    color: 'lavender',
    size: 'lg',
    content: 'Sample text',
  },
};

export const WineExtraLarge = {
  args: {
    color: 'wine',
    size: 'xl',
    content: 'Sample text',
  },
};

// Add more variations as needed
