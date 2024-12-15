import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExclamationTriangle,
  faUserTie,
  faClock,
  faCheckCircle,
  faUserClock,
} from '@fortawesome/free-solid-svg-icons';

const FilterCheckbox = ({ checked, onChange, icon, label, className = '' }) => (
  <label className={`inline-flex items-center px-4 py-2 rounded-lg border transition-all duration-200 cursor-pointer ${
    checked 
      ? 'bg-MediumPink bg-opacity-10 border-MediumPink text-gray-900' 
      : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
  } ${className}`}>
    <input 
      type="checkbox" 
      checked={checked} 
      onChange={onChange}
      className="hidden" 
    />
    <FontAwesomeIcon icon={icon} className={`mr-2 ${checked ? 'text-gray-900' : 'text-gray-400'}`} />
    <span className="text-sm font-medium">{label}</span>
  </label>
);

const FilterCheckboxes = ({
  filterAlerted,
  filterCoaches,
  sortOverdue,
  filterCheckedIn,
  filterInactive,
  onFilterAlertedChange,
  onFilterCoachesChange,
  onSortOverdueChange,
  onFilterCheckedInChange,
  onFilterInactiveChange,
}) => (
  <div className="bg-gray-50 rounded-lg p-4 mb-6">
    <div className="text-sm font-medium text-gray-500 mb-3">Filters</div>
    <div className="flex flex-wrap gap-2">
      <FilterCheckbox
        checked={filterInactive}
        onChange={onFilterInactiveChange}
        icon={faUserClock}
        label="Active Only"
      />
      <FilterCheckbox
        checked={filterAlerted}
        onChange={onFilterAlertedChange}
        icon={faExclamationTriangle}
        label="Show Alerted"
      />
      <FilterCheckbox
        checked={filterCoaches}
        onChange={onFilterCoachesChange}
        icon={faUserTie}
        label="Remove Coaches"
      />
      <FilterCheckbox
        checked={sortOverdue}
        onChange={onSortOverdueChange}
        icon={faClock}
        label="Sort by Overdue"
      />
      <FilterCheckbox
        checked={filterCheckedIn}
        onChange={onFilterCheckedInChange}
        icon={faCheckCircle}
        label="Show Checked In"
      />
    </div>
  </div>
);

FilterCheckboxes.propTypes = {
  filterAlerted: PropTypes.bool.isRequired,
  filterCoaches: PropTypes.bool.isRequired,
  sortOverdue: PropTypes.bool.isRequired,
  filterCheckedIn: PropTypes.bool.isRequired,
  filterInactive: PropTypes.bool.isRequired,
  onFilterAlertedChange: PropTypes.func.isRequired,
  onFilterCoachesChange: PropTypes.func.isRequired,
  onSortOverdueChange: PropTypes.func.isRequired,
  onFilterCheckedInChange: PropTypes.func.isRequired,
  onFilterInactiveChange: PropTypes.func.isRequired,
};

export default FilterCheckboxes;
