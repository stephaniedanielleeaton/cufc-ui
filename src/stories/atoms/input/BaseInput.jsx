import React from 'react';
import PropTypes from 'prop-types';
import { faCalendar, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconDefs = [
  { ref: 'faUser', value: faUser },
  { ref: 'faEnvelope', value: faEnvelope },
  { ref: 'faCalendar', value: faCalendar },
];

const commonStyle = 'min-w-80 py-3 pl-10 pr-16 bg-inputGray text-base rounded-lg focus:box-shadow focus:ring-0';

const BaseInput = ({ placeHolderText, faIcon, isDropDown }) => {
  const icon = iconDefs.find((entry) => entry.ref === faIcon)?.value;
  const inputType = isDropDown ? dropdownBox() : inputBox();

  function inputBox() {
    return <input type="text" placeholder={placeHolderText} className={commonStyle} />;
  }

  function dropdownBox() {
    return (
      <select className={commonStyle}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    );
  }

  return (
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
      {inputType}
    </div>
  );
};

BaseInput.propTypes = {
  placeHolderText: PropTypes.string,
  faIcon: PropTypes.string,
  isDropDown: PropTypes.bool,
};

BaseInput.defaultProps = {
  placeHolderText: 'Type Here',
  faIcon: 'faUser',
  isDropDown: true,
};

export default BaseInput;
