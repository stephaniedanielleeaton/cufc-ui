import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

const iconDefs = [
  { ref: 'faUser', value: faUser },
  { ref: 'faEnvelope', value: faEnvelope },
  { ref: 'faCalendar', value: faCalendar },
];

const BaseTextInput = ({ placeholder, onChange, value, faIcon, name }) => {
  const icon = iconDefs.find((entry) => entry.ref === faIcon)?.value;

  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="w-full p-2">
      <div className="flex items-center relative">
        <input
          className="w-full border rounded-md pl-8 px-3 py-2 focus:outline-none focus:border-periwinkle"
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          name={name} // Pass the name prop to the input
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
  name: PropTypes.string, // Add name prop type
};

BaseTextInput.defaultProps = {
  faIcon: 'faUser',
  placeholder: 'Sample Text',
  onChange: () => {}, // Provide a default function for onChange
  value: '',
  name: '', // Provide a default value for name
};
