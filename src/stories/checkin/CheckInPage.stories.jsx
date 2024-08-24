import React from 'react';
import PersonCheckInPage from './CheckInPage.jsx';

export default {
  title: 'PersonCheckInPage',
  component: PersonCheckInPage,
  tags: ['autodocs'],
};

const Template = (args) => <PersonCheckInPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  members: [
    {
      personal_info: {
        address: {
          street: '20 Pennsylvania Ave',
          city: 'Delaware',
          state: 'OH',
          zip: '43015',
          country: 'US',
        },
        legal_first_name: 'Edith',
        email: 'edithlongbelly@example.com',
        date_of_birth: '2024-03-04T00:00:00.000Z',
        legal_last_name: 'Eaton',
        phone: '5136330140',
      },
      _id: '65bec187319d763307638a1d',
      square_customer_id: 'BJXWF2N32DTYJ1CXNEXK80V1NC',
      display_first_name: 'Edith',
      display_last_name: 'Long Belly',
      subscription_status: 'DEACTIVATED',
      membership_start_date: '2023-01-01T00:00:00.000Z',
      membership_renewed_date: '2024-04-28T00:00:00.000Z',
      membership_months_paid: 25,
      role: 'member',
      __v: 0,
      checkedIn: true,
    },
    {
      personal_info: {
        address: {
          street: '20 Pennsylvania Ave',
          city: 'Delaware',
          state: 'OH',
          zip: '43015',
          country: 'US',
        },
        legal_first_name: 'Toberlones',
        email: 'tobypotato@example.com',
        legal_last_name: 'Crackel',
        date_of_birth: '2017-04-17T00:00:00.000Z',
        phone: '123456789',
      },
      _id: '65bec21d319d763307638a20',
      square_customer_id: 'BJXWF2N32DTYJ1CXNEXK80V1NC',
      display_first_name: 'Toby',
      display_last_name: 'Roundrump',
      subscription_status: 'ACTIVE',
      membership_start_date: '2023-01-01T00:00:00.000Z',
      membership_renewed_date: '2023-07-05T00:00:00.000Z',
      membership_months_paid: 1,
      role: 'member',
      __v: 0,
      checkedIn: false,
    },
  ],
  onCheckIn: (id) => {
    console.log(`Checked in member with id: ${id}`);
  },
};
