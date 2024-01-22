import React from 'react';
import PropTypes, { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

const iconDefs = [
  { ref: 'faUser', value: faUser },
  { ref: 'faEnvelope', value: faEnvelope },
  { ref: 'faCalendar', value: faCalendar },
];
const BaseSelect = ({ placeholder, onChange, value, options, faIcon }) => {
  const icon = iconDefs.find((entry) => entry.ref === faIcon)?.value;
  return (
    <div className="w-full p-2 text-sm">
      <div className="flex items-center relative">
        <select
          className="w-full border rounded-md pl-10 p-3 focus:outline-none focus:border-periwinkle"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <FontAwesomeIcon icon={icon} className="w-4 h-4 text-outerSpace inline" />
        </div>
      </div>
    </div>
  );
};

export default BaseSelect;

BaseSelect.propTypes = {
  faIcon: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  options: PropTypes.arrayOf(string),
};

BaseSelect.defaultProps = {
  faIcon: 'faUser',
  placeholder: 'Sample Text',
  onChange: '',
  value: '',
  options: ['option 1', 'option 2', 'option 3'],
};
