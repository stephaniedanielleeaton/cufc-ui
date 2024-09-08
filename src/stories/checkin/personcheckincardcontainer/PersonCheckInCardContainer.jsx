import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PersonCheckInCard from '../cards/PersonCheckInCard.jsx';

const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const PersonCheckInCardContainer = ({ members, onCheckIn }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCheckedIn, setFilterCheckedIn] = useState(false);
  const [filteredMembers, setFilteredMembers] = useState(members);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterCheckedIn = () => {
    setFilterCheckedIn(!filterCheckedIn);
  };

  useEffect(() => {
    const debouncedFilter = debounce((search) => {
      let filtered = members;

      // Apply "Show Only Checked In Members" filter
      if (filterCheckedIn) {
        filtered = filtered.filter((member) => member.checkedIn === true);
      }

      // Apply search term filter
      filtered = filtered.filter(
        (member) =>
          member.display_first_name.toLowerCase().includes(search.toLowerCase()) ||
          member.display_last_name.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredMembers(filtered);
    }, 300);

    debouncedFilter(searchTerm);

    return () => {
      clearTimeout(debouncedFilter);
    };
  }, [searchTerm, members, filterCheckedIn]);

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
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-deepSeaBlue rounded-lg border border-deepSeaBlue"
          >
            <svg
              className="w-4 h-4"
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
            <span className="sr-only">Search</span>
          </button>
        </span>

        {/* Filter Checkbox - Right aligned with checkbox after the label */}
        <div className="flex items-center">
          <label className="mr-2 text-md" htmlFor="filterCheckedIn">
            Show Only Checked In Members
          </label>
          <input
            type="checkbox"
            id="filterCheckedIn"
            checked={filterCheckedIn}
            onChange={handleFilterCheckedIn}
            className="h-6 w-6 text-deepSeaBlue border-gray-300 focus:ring-deepSeaBlue accent-deepSeaBlue"
          />
        </div>
      </div>

      {/* Displaying Filtered Members */}
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
    })
  ).isRequired,
  onCheckIn: PropTypes.func.isRequired,
};

export default PersonCheckInCardContainer;
