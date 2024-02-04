import React from 'react';
import PropTypes from 'prop-types';

import BaseButton from '../../molecules/button/BaseButton.jsx';
import AboutMember from '../../molecules/aboutmember/AboutMember.jsx';
import TopNavbar from '../../molecules/topnavbar/TopNavBar.jsx';

const UserPage = ({ member }) => {
  return (
    <div className="mx-auto font-poppins">
      <div className="flex flex-col sm:flex-row justify-around mb-4 mt-4">
        <div className="mb-2 sm:mb-0 sm:mr-2">
          <BaseButton text="Edit Profile" color="wine" onClick={() => {
          }} />
        </div>
        <div className="sm:ml-2">
          <BaseButton text="Update Membership" color="wine" onClick={() => {
          }} />
        </div>
      </div>

      <AboutMember member={member}></AboutMember>
    </div>
  );
};

UserPage.propTypes = {
  member: PropTypes.shape({
    _id: PropTypes.string,
    display_first_name: PropTypes.string,
    display_last_name: PropTypes.string,
    personal_info: PropTypes.shape({
      legal_first_name: PropTypes.string.isRequired,
      legal_last_name: PropTypes.string,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string,
      date_of_birth: PropTypes.string.isRequired,
      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
      })
    }),
    subscription_status: PropTypes.string,
    membership_start_date: PropTypes.string.isRequired,
    membership_renewed_date: PropTypes.string.isRequired,
    membership_months_paid: PropTypes.number.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

UserPage.defaultProps = {};

export default UserPage;
