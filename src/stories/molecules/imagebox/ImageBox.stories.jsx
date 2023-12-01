import React from 'react';
import ImageBox from './ImageBox';
import BaseButton from '../button/BaseButton';
import Lynx5 from '../../assets/Lynx/Lynx5.png';

export default {
  title: 'Molecules/ImageBox',
  component: ImageBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (args) => <ImageBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  width: '150px',
  height: '150px',
  objectFit: 'cover',
};

export const WithButton = Template.bind({});
WithButton.args = {
  ...Default.args,
  ButtonComponent: <BaseButton text="text" />,
};

export const WithLynx = Template.bind({});
WithLynx.args = {
  ...Default.args,
  width: '300px',
  height: '3000px',
  src: Lynx5,
  ButtonComponent: <BaseButton text="text" />,
};
