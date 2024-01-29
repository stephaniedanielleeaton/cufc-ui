import React from 'react';
import PropTypes from 'prop-types';

import BaseButton from '../../molecules/button/BaseButton.jsx';
import AboutMember from '../../molecules/aboutmember/AboutMember.jsx';
import TopNavbar from '../../molecules/topnavbar/TopNavBar.jsx';

const UserPage = ({ member }) => {
  return (
    <div className="mx-auto font-poppins">
      <TopNavbar />
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
    displayFirstName: PropTypes.string,
    displayLastName: PropTypes.string,
    legalFirstName: PropTypes.string.isRequired,
    legalLastName: PropTypes.string,
    email: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    streetAddress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    // Membership Info
    plan: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    lastRenewalDate: PropTypes.string.isRequired,
    monthsPaid: PropTypes.number.isRequired,
    validUntil: PropTypes.string.isRequired,
  }).isRequired,
};

UserPage.defaultProps = {};

export default UserPage;
