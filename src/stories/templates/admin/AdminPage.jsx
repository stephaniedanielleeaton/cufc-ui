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

const AdminPage = ({ members }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredMemberId, setHoveredMemberId] = useState(null);

  const filteredMembers = members.filter((member) => member.name.toLowerCase().includes(searchQuery.toLowerCase()));

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
            <div className="min-content">Status</div>
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
                {member.name}
                {hoveredMemberId === member.id && (
                  <FontAwesomeIcon icon={faEdit} className="ml-2 text-blue-500" />
                )}
              </div>
              <div className="min-content">{member.status}</div>
              <div className="min-content">{member.plan}</div>
              <div className="min-content">{member.type}</div>
              <div className="min-content">{formatDate(member.lastRenewalDate)}</div>
              <div className="min-content">{member.plan === 'Subscription' ? 'x' : member.monthsPaid}</div>
              <div className={`min-content ${isDateInFuture(member.validUntil) ? 'text-green-500' : 'text-red-500'}`}>
                {formatDate(member.validUntil)}
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
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      plan: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      lastRenewalDate: PropTypes.instanceOf(Date).isRequired,
      monthsPaid: PropTypes.number.isRequired,
      validUntil: PropTypes.instanceOf(Date).isRequired,
    })
  ),
};

AdminPage.defaultProps = {};

export default AdminPage;
