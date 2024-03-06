import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { calculateValidUntilDate, formatDate } from '../../../utils/dateUtils.jsx';

function AdminMembership({ member }) {
  const [memberData, setMemberData] = useState(member);

  return (
    <>
      <div className="flex flex-col md:flex-row font-khula bg-DeepRed text-white py-10">
        <div className="md:w-1/4 flex-col m-4 flex items-center justify-center">
          <span className="font-extrabold text-2xl text-center">Membership Info</span>
        </div>
        <div className="md:w-1/4 flex-col m-4 flex items-center justify-center">
          <span className="font-extrabold text-xs mb-1 whitespace-nowrap">MEMBER SINCE</span>
          <span className="text-center">{formatDate(member.membership_start_date) || ''}</span>
        </div>
        <div className="md:w-1/4 flex-col m-4 flex items-center justify-center">
          <span className="font-extrabold text-xs mb-1 whitespace-nowrap">LAST RENEWAL</span>
          <span className="text-center">{formatDate(member.membership_renewed_date)}</span>
        </div>
        <div className="md:w-1/4 flex-col m-4 flex items-center justify-center">
          <span className="font-extrabold text-xs mb-1 whitespace-nowrap">VALID UNTIL</span>
          <span className="text-center">
            {formatDate(calculateValidUntilDate(memberData.membership_renewed_date, memberData.membership_months_paid))}
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row font-khula bg-white text-Navy py-10">
        <div className="md:w-2/3  m-4 flex justify-center">
          <span
            className={`font-extrabold text-2xl text-center ${
              memberData.subscription_status === 'active' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            Membership Status: {memberData.subscription_status === 'active' ? 'Active' : 'Inactive'}
          </span>
        </div>
        <div className="md:w-1/3 flex items-center justify-center md:justify-start mx-12">
          <button
            className="tracking-wider border-2 border-Navy text-sm font-bold my-4 px-4 py-2 rounded-none md:w-auto hover:bg-Navy hover:text-white hover:border-white"
            onClick={() => onNavigationClick('contact')}
          >
            UPDATE
          </button>
        </div>
      </div>
    </>
  );
}

AdminMembership.propTypes = {
  member: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    display_first_name: PropTypes.string,
    display_last_name: PropTypes.string,
    personal_info: PropTypes.shape({
      legal_first_name: PropTypes.string,
      legal_last_name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      date_of_birth: PropTypes.instanceOf(Date),
      address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zipcode: PropTypes.string,
        country: PropTypes.string,
      }),
    }),
    subscription_status: PropTypes.string,
    membership_start_date: PropTypes.instanceOf(Date),
    membership_renewed_date: PropTypes.instanceOf(Date),
    membership_months_paid: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
};

export default AdminMembership;
