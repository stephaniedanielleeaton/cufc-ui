import React from 'react';
import PropTypes from 'prop-types';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BaseInput = ({ placeHolderText, faIcon }) => {
  const icon = iconDefs.find((entry) => entry.ref === faIcon).value;

  return (
    <>
      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-4 h-4 text-outerSpace inline"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <FontAwesomeIcon icon={icon} className="h-full w-full" />
          </svg>
        </span>
        <input
          type="text"
          placeholder={placeHolderText}
          className="w-300 py-3 pl-10 pr-16 bg-inputGray text-base rounded-lg focus:box-shadow focus:ring-0"
        />
      </div>
    </>
  );
};

BaseInput.propTypes = {
  placeHolderText: PropTypes.string,
  faIcon: PropTypes.string,
};

BaseInput.defaultProps = {
  placeHolderText: 'Type Here',
  faIcon: 'faUser',
};

const iconDefs = [
  {
    ref: 'faUser',
    value: faUser,
  },
  {
    ref: 'faEnvelope',
    value: faEnvelope,
  },
];

export default BaseInput;
