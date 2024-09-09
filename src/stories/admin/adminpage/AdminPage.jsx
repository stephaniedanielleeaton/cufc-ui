import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MemberRowCard from './MemberRowCard';
import MemberDetails from '../adminmemberdetails/MemberDetails.jsx';
import SearchBox from './SearchBox';
import FilterCheckboxes from './FilterCheckboxes';

const AdminPage = ({ members, onUpdateMember }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterUnpaid, setFilterUnpaid] = useState(false);
  const [filterInactive, setFilterInactive] = useState(false);
  const [filterCoaches, setFilterCoaches] = useState(false);
  const [sortOverdue, setSortOverdue] = useState(false);
  const [filterCheckedIn, setFilterCheckedIn] = useState(false);
  const [filteredMembers, setFilteredMembers] = useState(members);
  const [selectedMemberId, setSelectedMemberId] = useState(null);

  const handleSearchInputChange = (e) => setSearchQuery(e.target.value);
  const handleFilterUnpaidChange = () => setFilterUnpaid(!filterUnpaid);
  const handleFilterInactiveChange = () => setFilterInactive(!filterInactive);
  const handleFilterCoachesChange = () => setFilterCoaches(!filterCoaches);
  const handleSortOverdueChange = () => setSortOverdue(!sortOverdue);
  const handleFilterCheckedInChange = () => setFilterCheckedIn(!filterCheckedIn);

  useEffect(() => {
    const filterMembers = () => {
      let filtered = members;

      if (filterUnpaid) {
        filtered = filtered.filter((member) => member.last_invoice_status.toLowerCase() === 'unpaid');
      }

      if (filterInactive) {
        filtered = filtered.filter((member) => member.subscription_status.toLowerCase() === 'inactive');
      }

      if (filterCoaches) {
        filtered = filtered.filter((member) => member.role === 'coach');
      }

      if (filterCheckedIn) {
        filtered = filtered.filter((member) => member.checkedIn === true);
      }

      if (searchQuery) {
        filtered = filtered.filter((member) =>
          `${member.display_first_name} ${member.display_last_name}`.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (sortOverdue) {
        filtered = [...filtered].sort((a, b) => {
          const daysOverdueA =
            a.last_invoice_status.toLowerCase() === 'unpaid'
              ? Math.floor((Date.now() - new Date(a.last_invoice_date)) / (1000 * 60 * 60 * 24))
              : 0;
          const daysOverdueB =
            b.last_invoice_status.toLowerCase() === 'unpaid'
              ? Math.floor((Date.now() - new Date(b.last_invoice_date)) / (1000 * 60 * 60 * 24))
              : 0;
          return daysOverdueB - daysOverdueA;
        });
      }

      setFilteredMembers(filtered);
    };

    filterMembers();
  }, [members, filterUnpaid, filterInactive, filterCoaches, sortOverdue, filterCheckedIn, searchQuery]);

  const handleRowClick = (id) => {
    if (selectedMemberId === id) {
      setSelectedMemberId(null);
    } else {
      setSelectedMemberId(id);
    }
    console.log(selectedMemberId);
  };

  const handleUpdateMember = (updatedMember) => {
    onUpdateMember(updatedMember);
    setSelectedMemberId(null);
  };

  return (
    <div className="mx-auto font-khula p-4">
      <div className="mb-2 mt-4 flex items-center flex-wrap">
        <SearchBox searchQuery={searchQuery} onSearchChange={handleSearchInputChange} />
      </div>

      <FilterCheckboxes
        filterUnpaid={filterUnpaid}
        filterInactive={filterInactive}
        filterCoaches={filterCoaches}
        sortOverdue={sortOverdue}
        filterCheckedIn={filterCheckedIn}
        onFilterUnpaidChange={handleFilterUnpaidChange}
        onFilterInactiveChange={handleFilterInactiveChange}
        onFilterCoachesChange={handleFilterCoachesChange}
        onSortOverdueChange={handleSortOverdueChange}
        onFilterCheckedInChange={handleFilterCheckedInChange}
      />

      <div className="grid grid-cols-1 gap-2">
        {filteredMembers.map((member) => (
          <div key={member._id}>
            <MemberRowCard
              member={member}
              onClick={() => handleRowClick(member._id)}
              isSelected={selectedMemberId === member._id}
            />
            {selectedMemberId === member._id && (
              <div className="my-4">
                <MemberDetails member={member} onUpdateMember={handleUpdateMember} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

AdminPage.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      display_first_name: PropTypes.string.isRequired,
      display_last_name: PropTypes.string.isRequired,
      subscription_status: PropTypes.string.isRequired,
      last_invoice_status: PropTypes.string.isRequired,
      last_invoice_date: PropTypes.string.isRequired,
      role: PropTypes.string,
      checkedIn: PropTypes.bool,
    })
  ).isRequired,
  onUpdateMember: PropTypes.func.isRequired,
};

export default AdminPage;
