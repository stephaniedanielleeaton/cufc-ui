import React from 'react';
import PropTypes from 'prop-types';
import TopNavBar from '../../molecules/topnavbar/TopNavBar.jsx';

const AdminPage = ({ members }) => {
  return (
    <div className="mx-auto max-w-screen-lg">
      {/* Center the content with max-width screen-lg */}
      <TopNavBar />
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {/* Search Bar */}
          <input type="text" placeholder="Search" className="mr-2 p-2 border border-gray-300 rounded" />
          {/* New Member Icon */}
          <button className="bg-blue-500 text-white p-2 rounded">
            <i className="fas fa-user-plus"></i>
          </button>
        </div>
      </div>

      <div className="w-80">
        <div className="flex flex-wrap mb-2 font-bold">
          <div className="w-full sm:w-1/7">Member</div>
          <div className="w-full sm:w-1/7">Status</div>
          <div className="w-full sm:w-1/7">Plan</div>
          <div className="w-full sm:w-1/7">Type</div>
          <div className="w-full sm:w-1/7">Last Renewal Date</div>
          <div className="w-full sm:w-1/7">Months Paid</div>
          <div className="w-full sm:w-1/7">Valid Until</div>
        </div>

        {members.map((member) => (
          <div key={member.id} className="flex flex-wrap mb-2">
            <div className="w-full sm:w-1/7">{member.name}</div>
            <div className="w-full sm:w-1/7">{member.status}</div>
            <div className="w-full sm:w-1/7">{member.plan}</div>
            <div className="w-full sm:w-1/7">{member.type}</div>
            <div className="w-full sm:w-1/7">{member.lastRenewalDate}</div>
            <div className="w-full sm:w-1/7">{member.monthsPaid}</div>
            <div className="w-full sm:w-1/7">{member.validUntil}</div>
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
      lastRenewalDate: PropTypes.string.isRequired,
      monthsPaid: PropTypes.number.isRequired,
      validUntil: PropTypes.string.isRequired,
    })
  ),
  // ... rest of your propTypes definition
};

AdminPage.defaultProps = {};

export default AdminPage;
