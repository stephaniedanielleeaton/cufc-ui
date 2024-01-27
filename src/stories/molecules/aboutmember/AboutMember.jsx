import React from 'react';
import PropTypes from 'prop-types';

function AboutMember({ member }) {
  return (
    <div className="p-4 font-poppins flex-grow w-full md:w-1/2">
      <div className="py-2">
        <div className="font-bold text-wine">About You</div>
        <div>
          <b>Preferred First Name : </b>
          {member.displayFirstName}
        </div>
        <div>
          <b>Preferred Last Name : </b>
          {member.displayLastName}
        </div>
        <div>
          <b>Legal First Name : </b>
          {member.legalFirstName}
        </div>
        <div>
          <b>Legal Last Name : </b>
          {member.legalLastName}
        </div>
        <div>
          <b>Email : </b>
          {member.email}
        </div>
        <div>
          <b>Date of Birth : </b>
          {member.dateOfBirth}
        </div>
      </div>
      <div className="py-2">
        <div className="font-bold text-wine">Address</div>
        <div>{member.streetAddress}</div>
        <div>{member.city}</div>
        <div>{member.state}</div>
        <div>{member.zipcode}</div>
        <div>{member.country}</div>
      </div>
      <div className="py-2">
      <div className="font-bold text-wine">Membership Information</div>
        <div>
          <b>Plan : </b>
          {member.plan}
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
    dateOfBirth: PropTypes.instanceOf(Date).isRequired,
    streetAddress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
    // Membership Info
    status: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    lastRenewalDate: PropTypes.instanceOf(Date).isRequired,
    monthsPaid: PropTypes.number.isRequired,
    validUntil: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default AboutMember;
