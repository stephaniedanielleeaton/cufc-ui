import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PersonCheckInCard from '../../../molecules/cards/PersonCheckInCard.jsx';

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
  const [filteredMembers, setFilteredMembers] = useState(members);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const debouncedFilter = debounce((search) => {
      setFilteredMembers(members.filter((member) => member.displayName.toLowerCase().includes(search.toLowerCase())));
      console.log('Filtered Users: ', filteredMembers);
    }, 300); // Adjust the debounce delay as needed

    debouncedFilter(searchTerm);

    return () => {
      clearTimeout(debouncedFilter);
    };
  }, [searchTerm, members]);

  const handleCheckIn = (id) => {
    onCheckIn(id);
  };

  return (
    <div className="p-4 bg-white min-h-screen">
      <span className="flex items-center w-3/4">
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

      <div className="grid grid-cols-1 gap-2 w-3/4">
        {filteredMembers.map((user) => (
          <PersonCheckInCard key={user.id} id={user.id} displayName={user.displayName} onCheckIn={handleCheckIn} />
        ))}
      </div>
    </div>
  );
};

PersonCheckInCardContainer.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCheckIn: PropTypes.func.isRequired,
};
export default PersonCheckInCardContainer;
