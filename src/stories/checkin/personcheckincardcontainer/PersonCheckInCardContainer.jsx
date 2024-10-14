import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PersonCheckInCard from '../cards/PersonCheckInCard.jsx';

const isWithinLastTwoMonths = (lastCheckInDate) => {
  const twoMonthsAgo = new Date();
  twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

  if (!lastCheckInDate) {
    return false;
  }

  const lastCheckIn = new Date(lastCheckInDate);
  return lastCheckIn >= twoMonthsAgo;
};

const PersonCheckInCardContainer = ({ members, onCheckIn }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllMembers, setShowAllMembers] = useState(false);
  const [showCurrentlyCheckedIn, setShowCurrentlyCheckedIn] = useState(false);
  const [filteredMembers, setFilteredMembers] = useState(members);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleShowAllMembersToggle = () => {
    setShowAllMembers(!showAllMembers);
  };

  const handleShowCurrentlyCheckedInToggle = () => {
    setShowCurrentlyCheckedIn(!showCurrentlyCheckedIn);
  };

  useEffect(() => {
    let filtered = members;

    if (!showAllMembers) {
      filtered = filtered.filter((member) => isWithinLastTwoMonths(member.lastCheckInDate));
    }

    if (showCurrentlyCheckedIn) {
      filtered = filtered.filter((member) => member.checkedIn);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (member) =>
          member.display_first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          member.display_last_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredMembers(filtered);
  }, [searchTerm, members, showAllMembers, showCurrentlyCheckedIn]);

  const handleCheckIn = (_id) => {
    onCheckIn(_id);
  };

  return (
    <div className="p-4 bg-white min-h-screen">
      <div className="flex items-center justify-between mb-4">
        <span className="flex items-center flex-grow mr-4">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-hoverOuterSpace"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="border border-deepSeaBlue text-hoverOuterSpace text-sm rounded-lg block w-full ps-10 p-2.5 focus:outline-none"
              placeholder="Enter Name..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </span>
      </div>

      <div className="flex items-center mb-4 space-x-12">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="showAllMembers"
            checked={showAllMembers}
            onChange={handleShowAllMembersToggle}
            className="h-6 w-6 text-deepSeaBlue border-gray-300 focus:ring-deepSeaBlue accent-deepSeaBlue"
          />
          <label className="ml-2 text-md" htmlFor="showAllMembers">
            Show All Fencers
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="showCurrentlyCheckedIn"
            checked={showCurrentlyCheckedIn}
            onChange={handleShowCurrentlyCheckedInToggle}
            className="h-6 w-6 text-deepSeaBlue border-gray-300 focus:ring-deepSeaBlue accent-deepSeaBlue"
          />
          <label className="ml-2 text-md" htmlFor="showCurrentlyCheckedIn">
            Show Only Currently Checked-In
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 w-full mt-4">
        {filteredMembers.map((user) => (
          <PersonCheckInCard
            key={user._id}
            id={user._id}
            displayName={`${user.display_first_name} ${user.display_last_name}`}
            checkedIn={user.checkedIn}
            onCheckIn={handleCheckIn}
          />
        ))}
      </div>
    </div>
  );
};

PersonCheckInCardContainer.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      display_first_name: PropTypes.string.isRequired,
      display_last_name: PropTypes.string.isRequired,
      checkedIn: PropTypes.bool.isRequired,
      lastCheckInDate: PropTypes.string,
    })
  ).isRequired,
  onCheckIn: PropTypes.func.isRequired,
};

export default PersonCheckInCardContainer;
