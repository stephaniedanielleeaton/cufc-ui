import BaseButton from './BaseButton';

export default {
  title: 'Molecules/BaseButton',
  component: BaseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    color: {
      control: 'select',
      options: ['lavender', 'wine', 'gunmetal', 'outerSpace', 'ashGray'],
    },
    textColor: {
      control: 'select',
      options: ['lavender', 'wine', 'gunmetal', 'outerSpace', 'ashGray', 'white'],
    },
    textSize: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
    text: {
      control: 'text',
    },
    onClick: { action: 'clicked' },
  },
};

export const Primary = {
  args: {
    size: 'md',
    color: 'gunmetal',
    textColor: 'ashGray',
    textSize: 'md',
    text: 'Primary Button',
  },
};
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//     ...Primary.args,
//     color: 'ashGray',
//     text: 'Secondary Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     ...Primary.args,
//     size: 'lg',
//     text: 'Large Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     ...Primary.args,
//     size: 'sm',
//     text: 'Small Button',
// };
