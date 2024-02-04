import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TopNavBar from '../../molecules/topnavbar/TopNavBar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const formatDate = (date) => {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return `${month} ${day}, ${year}`;
};

const isDateInFuture = (date) => {
  const today = new Date();
  return new Date(date) > today;
};

function calculateValidUntilDate(membershipRenewalDate, months) {
  // Get the year, month, and day of the original date in UTC
  let year = membershipRenewalDate.getUTCFullYear();
  let month = membershipRenewalDate.getUTCMonth();
  let day = membershipRenewalDate.getUTCDate();

  // Calculate the new month and year after adding the specified number of months
  month += months;
  year += Math.floor(month / 12);
  month %= 12;

  // Handle cases where month becomes negative or greater than 11
  if (month < 0) {
    month += 12;
    year--;
  }

  // Get the number of days in the new month
  const daysInNewMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();

  // Adjust the day if it's greater than the number of days in the new month
  day = Math.min(day, daysInNewMonth);

  // Return the new date in UTC
  return new Date(Date.UTC(year, month, day));
}

const AdminPage = ({ members }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredMemberId, setHoveredMemberId] = useState(null);

  const filteredMembers = members.filter((member) => {
    const fullName = `${member.display_first_name} ${member.display_last_name}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="mx-auto font-poppins">
      <TopNavBar />
      <div className="p-4">
        <div className="mb-8 mt-4 flex items-center">
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Search by Name"
              className="ml-2 p-2 border rounded pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
          <button className="ml-4">
            <FontAwesomeIcon icon={faUserPlus} />
            <i className="fas fa-user-plus"></i>
          </button>
        </div>

        <div className="mx-auto">
          <div className="grid grid-cols-7 font-bold border-b mb-4 border-black">
            <div className="min-content">Member</div>
            <div className="min-content">Subscription Status</div>
            <div className="min-content">Plan</div>
            <div className="min-content">Type</div>
            <div className="min-content">Last Renewal</div>
            <div className="min-content">Months Paid</div>
            <div className="min-content">Valid Until</div>
          </div>

          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className={`grid grid-cols-7 items-center mb-4 cursor-pointer ${
                hoveredMemberId === member.id ? 'bg-gray-200' : ''
              }`}
              onMouseEnter={() => setHoveredMemberId(member.id)}
              onMouseLeave={() => setHoveredMemberId(null)}
            >
              <div className="min-content flex items-center">
                {member.display_first_name} {member.display_last_name}
                {hoveredMemberId === member.id && <FontAwesomeIcon icon={faEdit} className="ml-2 text-blue-500" />}
              </div>
              <div className="min-content">{member.subscription_status}</div>
              <div className="min-content">Monthly</div>
              <div className="min-content">Regular</div>
              <div className="min-content">{formatDate(member.membership_renewed_date)}</div>
              <div className="min-content">{member.membership_months_paid}</div>
              <div
                className={`min-content ${
                  isDateInFuture(calculateValidUntilDate(member.membership_renewed_date, member.membership_months_paid))
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {formatDate(calculateValidUntilDate(member.membership_renewed_date, member.membership_months_paid))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

AdminPage.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      display_first_name: PropTypes.string.isRequired,
      display_last_name: PropTypes.string.isRequired,
      subscription_status: PropTypes.string.isRequired,
      membership_renewed_date: PropTypes.instanceOf(Date).isRequired,
      membership_months_paid: PropTypes.number.isRequired,
    })
  ),
};

AdminPage.defaultProps = {};

export default AdminPage;
