import React from 'react';
import ClassOptions from './ClassOptions';

export default {
  title: 'Components/NewMemberSignUp/ClassOptions',
  component: ClassOptions,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <ClassOptions {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedOption: '',
  onSelect: (id) => console.log('Selected option:', id),
};

export const WithSelection = Template.bind({});
WithSelection.args = {
  selectedOption: 'fullMembership',
  onSelect: (id) => console.log('Selected option:', id),
};

export const FamilyPlanSelected = Template.bind({});
FamilyPlanSelected.args = {
  selectedOption: 'familyPlan',
  onSelect: (id) => console.log('Selected option:', id),
};
