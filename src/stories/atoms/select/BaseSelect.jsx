import React from 'react';
import PropTypes, { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faCity,
  faEnvelope,
  faMapPin,
  faMobilePhone,
  faStreetView,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const iconDefs = [
  { ref: 'faUser', value: faUser },
  { ref: 'faEnvelope', value: faEnvelope },
  { ref: 'faCalendar', value: faCalendar },
  { ref: 'faStreetView', value: faStreetView },
  { ref: 'faCity', value: faCity },
  { ref: 'faMapPin', value: faMapPin },
  { ref: 'faMobilePhone', value: faMobilePhone },
];
const BaseSelect = ({ placeholder, onChange, value, options, faIcon, name }) => {
  const icon = iconDefs.find((entry) => entry.ref === faIcon)?.value;

  return (
    <div className="w-full p-2 text-sm">
      <div className="flex items-center relative">
        <select
          className="w-full h-12 border rounded-md pl-10 focus:outline-none focus:border-periwinkle"
          onChange={onChange}
          value={value}
          name={name}
        >
          <option value="" disabled selected>
            {placeholder}
          </option>
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
  name: PropTypes.string,
};

BaseSelect.defaultProps = {
  faIcon: 'faUser',
  placeholder: 'Sample Text',
  onChange: '',
  value: '',
  options: ['option 1', 'option 2', 'option 3'],
  name: '',
};
