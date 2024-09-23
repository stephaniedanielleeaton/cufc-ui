import React from 'react';
import PropTypes from 'prop-types';

const FilterCheckboxes = ({
  filterAlerted,
  filterCoaches,
  sortOverdue,
  filterCheckedIn,
  onFilterAlertedChange,
  onFilterCoachesChange,
  onSortOverdueChange,
  onFilterCheckedInChange,
}) => (
  <div className="flex flex-wrap gap-y-2 items-start mb-4">
    <label className="mr-8 flex items-center">
      <input type="checkbox" checked={filterAlerted} onChange={onFilterAlertedChange} />
      <span className="ml-2">Show Alerted</span>
    </label>
    <label className="mr-8 flex items-center">
      <input type="checkbox" checked={filterCoaches} onChange={onFilterCoachesChange} />
      <span className="ml-2">Remove Coaches</span>
    </label>
    <label className="mr-8 flex items-center">
      <input type="checkbox" checked={sortOverdue} onChange={onSortOverdueChange} />
      <span className="ml-2">Sort by Overdue</span>
    </label>
    <label className="mr-8 flex items-center">
      <input type="checkbox" checked={filterCheckedIn} onChange={onFilterCheckedInChange} />
      <span className="ml-2">Show Checked In</span>
    </label>
  </div>
);

FilterCheckboxes.propTypes = {
  filterInactive: PropTypes.bool.isRequired,
  filterCoaches: PropTypes.bool.isRequired,
  sortOverdue: PropTypes.bool.isRequired,
  filterCheckedIn: PropTypes.bool.isRequired,
  onFilterInactiveChange: PropTypes.func.isRequired,
  onFilterCoachesChange: PropTypes.func.isRequired,
  onSortOverdueChange: PropTypes.func.isRequired,
  onFilterCheckedInChange: PropTypes.func.isRequired,
};

export default FilterCheckboxes;
