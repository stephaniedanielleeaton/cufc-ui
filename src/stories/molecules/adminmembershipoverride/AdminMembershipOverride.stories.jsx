import React from 'react';
import AdminMembershipOverride from './AdminMembershipOverride.jsx';

export default {
  title: 'Molecules/AdminMembershipOverride',
  component: AdminMembershipOverride,
  tags: ['autodocs'],
};

const defaultMember = {
  _id: '1',
  display_first_name: 'Edith',
  display_last_name: 'Eaton',
  personal_info: {
    legal_first_name: 'Edith',
    legal_last_name: 'Eaton',
    date_of_birth: new Date(1702166400000),
    address: {
      street: '20 Pennsylvania Ave',
      city: 'Delaware',
      state: 'OH',
      zipcode: '43015',
      country: 'USA',
    },
  },
  subscription_status: 'active',
  membership_start_date: new Date(1702166400000),
  membership_renewed_date: new Date(1702166400000),
  membership_months_paid: '3',
};

const onSubmitDefault = (e) => {
  console.log(e)
}

const Template = (args) => <AdminMembershipOverride {...args} />;

export const Default = Template.bind({});
Default.args = {
  member: defaultMember,
  onSubmit: onSubmitDefault
};
