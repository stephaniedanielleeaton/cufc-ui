import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

const iconDefs = [
  { ref: 'faUser', value: faUser },
  { ref: 'faEnvelope', value: faEnvelope },
  { ref: 'faCalendar', value: faCalendar },
];

const BaseTextInput = ({ placeholder, onChange, value, faIcon }) => {
  const icon = iconDefs.find((entry) => entry.ref === faIcon)?.value;
  return (
    <div className="w-full">
      <div className="flex items-center relative">
        <input
          className="w-full border rounded-md pl-8 px-3 py-2 focus:outline-none focus:border-periwinkle"
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <FontAwesomeIcon icon={icon} className="w-4 h-4 text-outerSpace inline" />
        </div>
      </div>
    </div>
  );
};

export default BaseTextInput;

BaseTextInput.propTypes = {
  faIcon: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

BaseTextInput.defaultProps = {
  faIcon: 'faUser',
  placeholder: 'Sample Text',
  onChange: '',
  value: '',
};