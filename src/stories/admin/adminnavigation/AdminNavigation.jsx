import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartLine, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const AdminNavigation = ({ activeTab, onTabChange }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
      <nav className="flex" aria-label="Tabs">
        <button
          onClick={() => onTabChange('Members')}
          className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'Members'
              ? 'bg-white text-MediumPink shadow-sm'
              : 'text-gray-600 hover:text-MediumPink hover:bg-white/50'
          }`}
        >
          <FontAwesomeIcon icon={faUsers} className="mr-2" />
          Members
        </button>
        <button
          onClick={() => onTabChange('Attendance')}
          className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'Attendance'
              ? 'bg-white text-MediumPink shadow-sm'
              : 'text-gray-600 hover:text-MediumPink hover:bg-white/50'
          }`}
        >
          <FontAwesomeIcon icon={faChartLine} className="mr-2" />
          Attendance
        </button>
        <button
          onClick={() => onTabChange('Email')}
          className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'Email'
              ? 'bg-white text-MediumPink shadow-sm'
              : 'text-gray-600 hover:text-MediumPink hover:bg-white/50'
          }`}
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Email
        </button>
      </nav>
    </div>
  );
};

AdminNavigation.propTypes = {
  activeTab: PropTypes.oneOf(['Members', 'Attendance', 'Email']).isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default AdminNavigation;
