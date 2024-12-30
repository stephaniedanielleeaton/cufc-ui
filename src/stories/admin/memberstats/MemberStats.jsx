import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserCheck, faUserTie, faHistory } from '@fortawesome/free-solid-svg-icons';

const AdminStats = ({ stats }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
        <FontAwesomeIcon icon={faUsers} className="text-gray-400 mr-2" />
        <span className="text-sm font-semibold mr-2">{stats.total}</span>
        <span className="text-sm text-gray-500">Total</span>
      </div>
      <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
        <FontAwesomeIcon icon={faUserCheck} className="text-gray-400 mr-2" />
        <span className="text-sm font-semibold mr-2">{stats.active}</span>
        <span className="text-sm text-gray-500">Subscriptions</span>
      </div>
      <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
        <FontAwesomeIcon icon={faUserTie} className="text-gray-400 mr-2" />
        <span className="text-sm font-semibold mr-2">{stats.coaches}</span>
        <span className="text-sm text-gray-500">Coaches</span>
      </div>
      <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
        <FontAwesomeIcon icon={faUserCheck} className="text-gray-400 mr-2" />
        <span className="text-sm font-semibold mr-2">{stats.checkedIn}</span>
        <span className="text-sm text-gray-500">Checked In</span>
      </div>
      <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
        <FontAwesomeIcon icon={faHistory} className="text-gray-400 mr-2" />
        <span className="text-sm font-semibold mr-2">{stats.recentlyCheckedIn}</span>
        <span className="text-sm text-gray-500">Active Last 2 Months</span>
      </div>
    </div>
  );
};

AdminStats.propTypes = {
  stats: PropTypes.shape({
    total: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    coaches: PropTypes.number.isRequired,
    checkedIn: PropTypes.number.isRequired,
    recentlyCheckedIn: PropTypes.number.isRequired,
  }).isRequired,
};

export default AdminStats;
