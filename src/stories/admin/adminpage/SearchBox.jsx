import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ searchQuery, onSearchChange }) => (
  <div className="relative w-full md:w-auto flex-grow mb-4 md:mb-0">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
      className="border border-deepSeaBlue text-hoverOuterSpace text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-none"
      placeholder="Search by Name"
      value={searchQuery}
      onChange={onSearchChange}
    />
  </div>
);

SearchBox.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBox;
