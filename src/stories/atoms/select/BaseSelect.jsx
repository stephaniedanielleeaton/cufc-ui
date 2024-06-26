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
  { ref: 'none', value: 'none' },
];

const BaseSelect = ({ placeholder, onChange, value, options, faIcon, name, error }) => {
  const icon = iconDefs.find((entry) => entry.ref === faIcon)?.value;

  return (
      <div className="w-full mb-2 text-sm">
        <div className="flex items-center relative">
          <select
              className={`w-full border rounded-md pl-10 h-12 p-3 focus:outline-none ${error ? 'border-red-500' : 'focus:border-periwinkle'}`}
              onChange={onChange}
              value={value}
              name={name}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
            ))}
          </select>
          {faIcon !== 'none' ? (
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FontAwesomeIcon icon={icon} className="w-4 h-4 text-outerSpace inline" />
              </div>
          ) : null}
        </div>
        <div className="h-4">
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
      </div>
  );
};

BaseSelect.propTypes = {
  faIcon: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  options: PropTypes.arrayOf(string),
  name: PropTypes.string,
  error: PropTypes.string,
};

BaseSelect.defaultProps = {
  faIcon: 'faUser',
  placeholder: 'Sample Text',
  onChange: () => {},
  value: '',
  options: ['option 1', 'option 2', 'option 3'],
  name: '',
  error: '',
};

export default BaseSelect;
