import React from 'react';
import FAQ from './FAQ';

export default {
  title: 'Components/FAQ',
  component: FAQ,
};

const Template = (args) => <FAQ {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      question: 'What is your return policy?',
      answer: 'You can return any item within 30 days of purchase.',
    },
    {
      question: 'Do you offer technical support?',
      answer: 'Yes, we offer 24/7 technical support via email.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping usually takes 5-7 business days.',
    },
  ],
};
