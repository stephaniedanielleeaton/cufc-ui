import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AttendanceGraph from '../attendance/AttendanceGraph.jsx';
import MembersSection from './adminmembers/AdminMembers.jsx';
import AdminStats from './adminstats/AdminStats.jsx';
import AdminNavigation from './adminnavigation/AdminNavigation.jsx';
import EmailSender from '../components/emailsender/EmailSender.jsx';

const AdminPage = ({ 
  members, 
  onUpdateMember, 
  onDeleteMember, 
  onAddMember, 
  attendanceAggregate, 
  onSendEmail,
  additionalEmailLists = []
}) => {
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

  // Prepare recipient lists for email component
  const memberLists = [
    { 
      id: 'all', 
      name: 'All Members', 
      count: members.length,
      emails: members.map(m => m.personal_info.email)
    },
    { 
      id: 'active', 
      name: 'Active Members', 
      count: stats.active,
      emails: members.filter(m => m.subscription_status.toLowerCase() === 'active').map(m => m.personal_info.email)
    },
    { 
      id: 'coaches', 
      name: 'Coaches', 
      count: stats.coaches,
      emails: members.filter(m => m.role === 'coach').map(m => m.personal_info.email)
    }
  ];

  // Combine member lists with additional lists
  const recipientLists = [
    ...additionalEmailLists.map(list => ({
      ...list,
      count: list.emails.length // Ensure count is set based on emails array length
    })),
    ...memberLists
  ];

  console.log('AdminPage - Recipient Lists:', recipientLists.map(list => ({
    id: list.id,
    name: list.name,
    count: list.count,
    emailCount: list.emails.length,
    sampleEmails: list.emails.slice(0, 3)
  })));

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
          ) : activeTab === 'Attendance' ? (
            <AttendanceGraph data={attendanceAggregate} />
          ) : activeTab === 'Email' ? (
            <EmailSender recipientLists={recipientLists} onSend={onSendEmail} />
          ) : null}
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
  onSendEmail: PropTypes.func.isRequired,
  additionalEmailLists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    emails: PropTypes.arrayOf(PropTypes.string).isRequired
  }))
};

export default AdminPage;
