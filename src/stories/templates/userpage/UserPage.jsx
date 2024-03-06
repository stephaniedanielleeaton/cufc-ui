import React from 'react';
import PropTypes from 'prop-types';

import AdminMembership from '../../molecules/adminMembership/AdminMembership.jsx';
import AdminMember from '../../molecules/adminMember/AdminMember.jsx';

const UserPage = ({ member }) => {
  return (
    <div>
      <AdminMember member={member}></AdminMember>
      <AdminMembership member={member}></AdminMembership>
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
