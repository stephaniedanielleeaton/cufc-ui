import React from 'react';
import FormSection from './FormSection';

export default {
  title: 'NewMemberSignUp/FormSection',
  component: FormSection,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <FormSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  formType: 'individual',
  formData: {
    displayFirstName: '',
    displayLastName: '',
    legalFirstName: '',
    legalLastName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    state: '',
    zipcode: '',
    country: 'United States',
    isGuardian: false,
    guardianFirstName: '',
    guardianLastName: '',
    requestedMembershipType: 'fullMembership',
    heardAboutUs: '',
    additionalFamilyMembers: [],
  },
  setFormData: () => {},
  errors: {},
  onNext: () => console.log('Next clicked'),
  handleAddFamilyMember: () => console.log('Add family member clicked'),
  handleRemoveFamilyMember: () => console.log('Remove family member clicked'),
  handleFamilyMemberChange: () => console.log('Family member changed'),
  buttonText: 'Continue to Payment',
  buttonDisabled: false,
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  ...Default.args,
  errors: {
    legalFirstName: 'Legal first name is required',
    email: 'Please enter a valid email address',
    phoneNumber: 'Please enter a valid phone number',
  },
};

export const GuardianSignup = Template.bind({});
GuardianSignup.args = {
  ...Default.args,
  formType: 'minor',
  formData: {
    ...Default.args.formData,
    isGuardian: true,
  },
};

export const FamilyPlan = Template.bind({});
FamilyPlan.args = {
  ...Default.args,
  formData: {
    ...Default.args.formData,
    requestedMembershipType: 'familyPlan',
    additionalFamilyMembers: [
      {
        firstName: 'Jane',
        lastName: 'Doe',
        displayFirstName: 'Jane',
        displayLastName: 'Doe',
        dateOfBirth: '2000-01-01',
      },
    ],
  },
};

export const WithEmailStatus = Template.bind({});
WithEmailStatus.args = {
  ...Default.args,
  emailStatusMessage: 'Checking email availability...',
};

export const Submitting = Template.bind({});
Submitting.args = {
  ...Default.args,
  buttonText: 'Processing...',
  buttonDisabled: true,
};
