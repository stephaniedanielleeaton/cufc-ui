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
  <div className="flex flex-wrap mb-4 space-x-4">
    <label>
      <input
        type="checkbox"
        checked={filterUnpaid}
        onChange={onFilterUnpaidChange}
        className="mr-2"
      />
      Show Unpaid
    </label>
    <label>
      <input
        type="checkbox"
        checked={filterInactive}
        onChange={onFilterInactiveChange}
        className="mr-2"
      />
      Show Inactive
    </label>
    <label>
      <input
        type="checkbox"
        checked={filterCoaches}
        onChange={onFilterCoachesChange}
        className="mr-2"
      />
      Show Coaches
    </label>
    <label>
      <input
        type="checkbox"
        checked={sortOverdue}
        onChange={onSortOverdueChange}
        className="mr-2"
      />
      Sort by Overdue
    </label>
    <label>
      <input
        type="checkbox"
        checked={filterCheckedIn}
        onChange={onFilterCheckedInChange}
        className="mr-2"
      />
      Show Checked In
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
