import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PersonCheckInCardContainer from './personcheckincardcontainer/PersonCheckInCardContainer.jsx';

const PersonCheckInPage = ({ members, onCheckIn }) => {
  const [filterCheckedIn, setFilterCheckedIn] = useState(false);
  const handleCheckIn = (_id) => {
    onCheckIn(_id);
  };

  const handleFilterCheckedIn = () => setFilterCheckedIn(!filterCheckedIn);

  const filteredMembers = filterCheckedIn
    ? members.filter((member) => member.checkedIn === true)
    : members;

  return (
    <div className="flex flex-row justify-center w-full">
      <div className="w-full lg:w-3/4">
        <div className="flex items-center justify-between mt-2">
          <h1 className="text-2xl font-bold pl-4 text-deepSeaBlue">Fencer Check-In</h1>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="filterCheckedIn"
              checked={filterCheckedIn}
              onChange={handleFilterCheckedIn}
              className="h-6 w-6 text-deepSeaBlue border-gray-300 focus:ring-deepSeaBlue accent-deepSeaBlue"
            />
            <label className="ml-2 text-md">
              Show Only Checked In Members
            </label>
          </div>
        </div>
        <PersonCheckInCardContainer members={filteredMembers} onCheckIn={handleCheckIn} />
      </div>
    </div>
  );
};

PersonCheckInPage.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      display_first_name: PropTypes.string.isRequired,
      display_last_name: PropTypes.string.isRequired,
      portraitUrl: PropTypes.string,
    })
  ).isRequired,
  onCheckIn: PropTypes.func.isRequired,
};

export default PersonCheckInPage;
