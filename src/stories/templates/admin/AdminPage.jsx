import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { calculateValidUntilDate } from '../../../utils/dateUtils';

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

const AdminPage = ({ members, onNavigationClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredMemberId, setHoveredMemberId] = useState(null);

  const filteredMembers = members.filter((member) => {
    const fullName = `${member.display_first_name} ${member.display_last_name}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="mx-auto font-khula">
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
          <button className="ml-4" onClick={() => onNavigationClick('newmember')}>
            <FontAwesomeIcon icon={faUserPlus} />
          </button>
        </div>

        <div className="mx-auto">
          <div className="grid grid-cols-7 font-bold text-sm border-b mb-4 border-black">
            <div className="min-content flex-nowrap">Member</div>
            <div className="min-content flex-nowrap">Subscription Status</div>
            <div className="min-content flex-nowrap">Type</div>
            <div className="min-content flex-nowrap">Last Renewal</div>
            <div className="min-content flex-nowrap">Months Paid</div>
            <div className="min-content flex-nowrap">Valid Until</div>
          </div>

          {filteredMembers.map((member) => {
            const membershipRenewalDate = new Date(member.membership_renewed_date);
            return (
              <div
                key={member._id}
                className={`grid grid-cols-7 items-center py-2 cursor-pointer border-b ${
                  hoveredMemberId === member._id ? 'bg-gray-200' : ''
                }`}
                onMouseEnter={() => setHoveredMemberId(member._id)}
                onMouseLeave={() => setHoveredMemberId(null)}
                onClick={() => onNavigationClick('admin/member/' + member._id)}
              >
                <div className="min-content flex items-center">
                  {member.display_first_name} {member.display_last_name}
                </div>
                <div className="min-content">{member.subscription_status}</div>
                <div className="min-content">Regular</div>
                <div className="min-content">{formatDate(membershipRenewalDate)}</div>
                <div className="min-content">{member.membership_months_paid}</div>
                <div
                  className={`min-content ${
                    isDateInFuture(calculateValidUntilDate(membershipRenewalDate, member.membership_months_paid))
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {formatDate(calculateValidUntilDate(membershipRenewalDate, member.membership_months_paid))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

AdminPage.propTypes = {
  onNavigationClick: PropTypes.func.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      display_first_name: PropTypes.string.isRequired,
      display_last_name: PropTypes.string.isRequired,
      subscription_status: PropTypes.string,
      membership_renewed_date: PropTypes.string,
      membership_months_paid: PropTypes.number,
    })
  ),
};

AdminPage.defaultProps = {};

export default AdminPage;
