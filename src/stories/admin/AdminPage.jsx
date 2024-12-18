import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AttendanceGraph from '../attendance/AttendanceGraph.jsx';
import MembersSection from './adminmembers/AdminMembers.jsx';
import AdminStats from './adminstats/AdminStats.jsx';
import AdminNavigation from './adminnavigation/AdminNavigation.jsx';

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
        {/* Navigation */}
        <AdminNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
          {activeTab === 'Members' ? (
            <div>
              <AdminStats stats={stats} />
              <MembersSection
                members={members}
                onUpdateMember={onUpdateMember}
                onDeleteMember={onDeleteMember}
                onAddMember={onAddMember}
              />
            </div>
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
  onAddMember: PropTypes.func,
  attendanceAggregate: PropTypes.array,
};

export default AdminPage;
