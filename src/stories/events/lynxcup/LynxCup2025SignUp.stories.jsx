import React from 'react';
import LynxCup2025SignUp from './LynxCup2025SignUp.jsx';

export default {
  title: 'events/lynxcup/LynxCup2025SignUp',
  component: LynxCup2025SignUp,
};

const Template = (args) => <LynxCup2025SignUp {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (formData) => {
    console.log('Form submitted:', formData);
  },
  slotsFilled: {
    longswordA: 10,
    longswordB: 15,
    longswordC: 8,
    saber: 21,
    rapier: 12,
    swordBuckler: 6,
    mg: 2,
  },
};