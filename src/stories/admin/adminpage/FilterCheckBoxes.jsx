import React from 'react';
import PropTypes from 'prop-types';

const FilterCheckboxes = ({
  filterUnpaid,
  filterInactive,
  filterCoaches,
  sortOverdue,
  filterCheckedIn,
  onFilterUnpaidChange,
  onFilterInactiveChange,
  onFilterCoachesChange,
  onSortOverdueChange,
  onFilterCheckedInChange,
}) => (
  <div className="flex flex-wrap gap-y-2 items-start mb-4">
    <label className="mr-8 flex items-center">
      <input type="checkbox" checked={filterUnpaid} onChange={onFilterUnpaidChange} />
      <span className="ml-2">Show Alerted</span>
    </label>
    {/*<label className="mr-8 flex items-center">*/}
    {/*  <input type="checkbox" checked={filterInactive} onChange={onFilterInactiveChange} />*/}
    {/*  <span className="ml-2">Remove Inactive</span>*/}
    {/*</label>*/}
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
  filterUnpaid: PropTypes.bool.isRequired,
  filterInactive: PropTypes.bool.isRequired,
  filterCoaches: PropTypes.bool.isRequired,
  sortOverdue: PropTypes.bool.isRequired,
  filterCheckedIn: PropTypes.bool.isRequired,
  onFilterUnpaidChange: PropTypes.func.isRequired,
  onFilterInactiveChange: PropTypes.func.isRequired,
  onFilterCoachesChange: PropTypes.func.isRequired,
  onSortOverdueChange: PropTypes.func.isRequired,
  onFilterCheckedInChange: PropTypes.func.isRequired,
};

export default FilterCheckboxes;
