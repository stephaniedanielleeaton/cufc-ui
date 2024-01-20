import React from 'react';
import PropTypes from 'prop-types';
import TopNavBar from '../../molecules/topnavbar/TopNavBar.jsx';

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
  return (
    <div className="mx-auto font-poppins">
      <TopNavBar />
      <div className="mb-8 mt-4">
        <div className="flex items-center">
          <div className="flex items-center">
            <i className="fas fa-search text-gray-500"></i>
            <input type="text" placeholder="Search" className="ml-2 p-2 border border-gray-300 rounded" />
          </div>
          <button className="bg-blue-500 text-white p-2 rounded ml-4">
            <i className="fas fa-user-plus"></i>
          </button>
        </div>
      </div>

      <div className="w-90 mx-auto">
        <div className="grid grid-cols-7 font-bold border-b mb-4 border-black">
          <div className="min-content">Member</div>
          <div className="min-content">Status</div>
          <div className="min-content">Plan</div>
          <div className="min-content">Type</div>
          <div className="min-content">Last Renewal</div>
          <div className="min-content">Months Paid</div>
          <div className="min-content">Valid Until</div>
        </div>

        {members.map((member) => (
          <div key={member.id} className="grid grid-cols-7 items-center mb-4">
            <div className="min-content">{member.name}</div>
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
