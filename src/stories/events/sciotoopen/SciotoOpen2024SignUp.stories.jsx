import React from 'react';
import SciotoOpen2024SignUp from './SciotoOpen2024SignUp.jsx';

export default {
  title: 'events/sciotoopen/SciotoOpen2024SignUp',
  component: SciotoOpen2024SignUp,
};

const Template = (args) => <SciotoOpen2024SignUp {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (formData) => {
    console.log('Form submitted:', formData);
  },
  slotsFilled: {
    longsword: 10,
    saber: 21,
    mgLongsword: 2,
  },
};
