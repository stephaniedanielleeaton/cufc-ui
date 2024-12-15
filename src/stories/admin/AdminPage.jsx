import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AttendanceGraph from '../attendance/AttendanceGraph.jsx';
import MembersSection from './adminmembers/AdminMembers.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartLine, faUserCheck, faUserTie, faHistory } from '@fortawesome/free-solid-svg-icons';
import { subMonths, isAfter } from 'date-fns';

const AdminPage = ({ members, onUpdateMember, onDeleteMember, onAddMember, attendanceAggregate }) => {
  const [activeTab, setActiveTab] = useState('Members');

  const isWithinLastTwoMonths = (date) => {
    if (!date) return false;
    const twoMonthsAgo = new Date();
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);
    return new Date(date) > twoMonthsAgo;
  };

  const stats = {
    total: members.length,
    active: members.filter(m => m.subscription_status.toLowerCase() === 'active').length,
    coaches: members.filter(m => m.role === 'coach').length,
    checkedIn: members.filter(m => m.checkedIn === true).length,
    recentlyCheckedIn: members.filter(m => isWithinLastTwoMonths(m.lastCheckInDate)).length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Compact Stats */}
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

        {/* Sub Navigation */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
          <nav className="flex" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('Members')}
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
              onClick={() => setActiveTab('Attendance')}
              className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'Attendance'
                  ? 'bg-white text-MediumPink shadow-sm'
                  : 'text-gray-600 hover:text-MediumPink hover:bg-white/50'
              }`}
            >
              <FontAwesomeIcon icon={faChartLine} className="mr-2" />
              Attendance
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
          {activeTab === 'Members' ? (
            <MembersSection
              members={members}
              onUpdateMember={onUpdateMember}
              onDeleteMember={onDeleteMember}
              onAddMember={onAddMember}
            />
          ) : (
            <AttendanceGraph data={attendanceAggregate} />
          )}
        </div>
      </div>
    </div>
  );
};

AdminPage.propTypes = {
  members: PropTypes.array.isRequired,
  onUpdateMember: PropTypes.func.isRequired,
  onDeleteMember: PropTypes.func,
  onAddMember: PropTypes.func.isRequired,
  attendanceAggregate: PropTypes.array.isRequired,
};

export default AdminPage;

<style>
  {`
    .toggle-checkbox:checked {
      right: 0;
      border-color: #1a365d;
    }
    .toggle-checkbox:checked + .toggle-label {
      background-color: #1a365d;
    }
    .toggle-label {
      transition: background-color 0.2s ease-in-out;
    }
  `}
</style>
