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
            <div className="text-lg font-medium">{member.displayFirstName}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Preferred Last Name:</div>
            <div className="text-lg font-medium">{member.displayLastName}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Legal First Name:</div>
            <div className="text-lg font-medium">{member.legalFirstName}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Legal Last Name:</div>
            <div className="text-lg font-medium">{member.legalLastName}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Email:</div>
            <div className="text-lg font-medium">{member.email}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Date of Birth:</div>
            <div className="text-lg font-medium">{member.dateOfBirth}</div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="text-lg font-bold text-wine">Address</div>
        <hr className="my-2 border-gray-300" />
        <div className="flex flex-wrap mt-2">
          <div className="w-full py-2">
            <div className="text-lg font-medium">
              {member.streetAddress}<br />
              {member.city}, {member.state}<br />
              {member.zipcode}<br />
              {member.country}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-lg font-bold text-wine">Membership Information</div>
        <hr className="my-2 border-gray-300" />
        <div className="flex flex-wrap mt-2">
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Plan:</div>
            <div className="text-lg font-medium">{member.plan}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Type:</div>
            <div className="text-lg font-medium">{member.type}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Last Renewal Date:</div>
            <div className="text-lg font-medium">{formatDate(member.lastRenewalDate)}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Months Paid:</div>
            <div className="text-lg font-medium">{member.monthsPaid}</div>
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

export default AboutMember;
