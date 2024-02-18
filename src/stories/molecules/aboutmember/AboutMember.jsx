import React from 'react';
import PropTypes from 'prop-types';

const formatDate = (date) => {
  if (!date) return '';
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

function calculateValidUntilDate(membershipRenewalDate, months) {
  if (!membershipRenewalDate) return '';

  let year = membershipRenewalDate.getUTCFullYear();
  let month = membershipRenewalDate.getUTCMonth();
  let day = membershipRenewalDate.getUTCDate();

  month += months;
  year += Math.floor(month / 12);
  month %= 12;

  if (month < 0) {
    month += 12;
    year--;
  }

  const daysInNewMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  day = Math.min(day, daysInNewMonth);

  return new Date(Date.UTC(year, month, day));
}

function AboutMember({ member }) {
  if (!member) return null;

  const memberBirthDate = member.personal_info.date_of_birth
    ? formatDate(new Date(member.personal_info.date_of_birth))
    : '';
  const membershipRenewalDate = member.membership_renewed_date
    ? formatDate(new Date(member.membership_renewed_date))
    : '';
  const membershipStartDate = member.membership_start_date ? formatDate(new Date(member.membership_start_date)) : '';

  return (
    <div className="p-4 font-poppins flex-grow bg-white shadow-md rounded-md">
      <div className="mb-4">
        <div className="text-lg font-bold text-wine">Personal Information</div>
        <hr className="my-2 border-gray-300 mb" />
        <div className="flex flex-wrap mt-2">
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Preferred First Name:</div>
            <div className="text-lg font-medium">{member.display_first_name || ''}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Preferred Last Name:</div>
            <div className="text-lg font-medium">{member.display_last_name || ''}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Legal First Name:</div>
            <div className="text-lg font-medium">{member.personal_info.legal_first_name || ''}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Legal Last Name:</div>
            <div className="text-lg font-medium">{member.personal_info.legal_last_name || ''}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Email:</div>
            <div className="text-lg font-medium">{member.personal_info.email || ''}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Date of Birth:</div>
            <div className="text-lg font-medium">{memberBirthDate}</div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="text-lg font-bold text-wine">Address</div>
        <hr className="my-2 border-gray-300" />
        <div className="flex flex-wrap mt-2">
          <div className="w-full py-2">
            <div className="text-lg font-medium">
              {member.personal_info.address.street || ''}
              <br />
              {member.personal_info.address.city || ''}, {member.personal_info.address.state || ''}
              <br />
              {member.personal_info.address.zipcode || ''}
              <br />
              {member.personal_info.address.country || ''}
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
            <div className="text-lg font-medium">{member.subscription_status || ''}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Start Date:</div>
            <div className="text-lg font-medium">{membershipStartDate}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Last Renewal Date:</div>
            <div className="text-lg font-medium">{membershipRenewalDate}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Months Paid:</div>
            <div className="text-lg font-medium">{member.membership_months_paid || ''}</div>
          </div>
          <div className="w-full py-2">
            <div className="text-sm text-outerSpace">Membership Valid Until:</div>
            <div className="text-lg font-medium">{membershipRenewalDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

AboutMember.propTypes = {
  member: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    display_first_name: PropTypes.string,
    display_last_name: PropTypes.string,
    personal_info: PropTypes.shape({
      legal_first_name: PropTypes.string,
      legal_last_name: PropTypes.string,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string,
      date_of_birth: PropTypes.string,
      address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zipcode: PropTypes.string,
        country: PropTypes.string,
      }),
    }),
    subscription_status: PropTypes.string,
    membership_start_date: PropTypes.string,
    membership_renewed_date: PropTypes.string,
    membership_months_paid: PropTypes.number,
    role: PropTypes.string,
  }).isRequired,
};

export default AboutMember;
