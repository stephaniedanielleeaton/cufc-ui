import React from 'react';
import PropTypes from 'prop-types';
import BaseButton from '../button/BaseButton.jsx';

const formatDate = (date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return `${month} ${day}, ${year}`;
};

function AboutMember({ member }) {
  return (
    <div className="p-4 font-poppins flex-grow bg-white shadow-md rounded-md">
      <div className="mb-4">
        <div className="text-lg font-bold text-wine">Personal Information</div>
        <hr className="my-2 border-gray-300 mb" />
        <div className="flex flex-wrap mt-2">
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Preferred First Name:</div>
            <div className="text-lg font-medium">{member.display_first_name}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Preferred Last Name:</div>
            <div className="text-lg font-medium">{member.display_last_name}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Legal First Name:</div>
            <div className="text-lg font-medium">{member.legal_first_name}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Legal Last Name:</div>
            <div className="text-lg font-medium">{member.legal_last_name}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Email:</div>
            <div className="text-lg font-medium">{member.personal_info.email}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Date of Birth:</div>
            <div className="text-lg font-medium">{member.personal_info.date_of_birth}</div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="text-lg font-bold text-wine">Address</div>
        <hr className="my-2 border-gray-300" />
        <div className="flex flex-wrap mt-2">
          <div className="w-full py-2">
            <div className="text-lg font-medium">
              {member.address.street}<br />
              {member.address.city}, {member.address.state}<br />
              {member.address.zipcode}<br />
              {member.address.country}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-lg font-bold text-wine">Membership Information</div>
        <hr className="my-2 border-gray-300" />
        <div className="flex flex-wrap mt-2">
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Subscription Status:</div>
            <div className="text-lg font-medium">{member.subscription_status}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Start Date:</div>
            <div className="text-lg font-medium">{member.membership_start_date}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Last Renewal Date:</div>
            <div className="text-lg font-medium">{formatDate(member.membership_renewed_date)}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Months Paid:</div>
            <div className="text-lg font-medium">{member.membership_months_paid}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Membership Valid Until:</div>
            <div className="text-lg font-medium">{formatDate(member.validUntil)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

AboutMember.propTypes = {
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

export default AboutMember;
