import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AttendanceGraph from '../attendance/AttendanceGraph.jsx';
import MembersSection from './adminmembers/AdminMembers.jsx';


const AdminPage = ({ members, onUpdateMember, onDeleteMember, onAddMember, attendanceAggregate }) => {
  const [activeTab, setActiveTab] = useState('Members');

  return (
    <div className="mx-auto font-khula p-4">
      <div className="relative mb-4 w-full h-12 bg-gray-300 rounded-lg">
        <div
          className={`absolute top-0 bottom-0 left-0 h-full rounded-md bg-MediumPink transition-all duration-300 ${
            activeTab === 'Members' ? 'left-0 w-1/2' : 'left-1/2 w-1/2'
          }`}
        ></div>
        <div className="relative flex justify-between items-center h-full text-gray-800">
          <button
            className={`w-1/2 text-center z-10 font-bold ${activeTab === 'Members' ? 'text-white' : 'text-gray-600'}`}
            onClick={() => setActiveTab('Members')}
          >
            Members
          </button>
          <button
            className={`w-1/2 text-center z-10 font-bold ${
              activeTab === 'Attendance' ? 'text-white' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('Attendance')}
          >
            Attendance
          </button>
        </div>
      </div>

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
