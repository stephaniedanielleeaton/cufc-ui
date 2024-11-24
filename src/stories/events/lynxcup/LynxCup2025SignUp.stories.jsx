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
    longsword: 10,
    saber: 21,
    mg: 2,
  },
};
