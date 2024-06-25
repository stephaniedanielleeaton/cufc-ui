// SwordQuench2024SignUp.stories.jsx

import React from 'react';
import SwordQuench2024SignUp from './SwordQuench2024SignUp';

export default {
  title: 'events/swordquench/SwordQuench2024SignUp',
  component: SwordQuench2024SignUp,
};

const Template = (args) => <SwordQuench2024SignUp {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (formData) => {
    console.log('Form submitted:', formData);
  },
  slotsFilled: {
    longsword: 10,
    swordAndBuckler: 21,
    teams: 2,
  },
};
