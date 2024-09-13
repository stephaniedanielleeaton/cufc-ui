import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MemberRowCard from './MemberRowCard';
import MemberDetails from '../adminmemberdetails/MemberDetails.jsx';
import SearchBox from './SearchBox';
import FilterCheckboxes from './FilterCheckboxes';

const AdminPage = ({ members, onUpdateMember, onDeleteMember }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterAlerted, setFilterAlerted] = useState(false);
  const [filterInactive, setFilterInactive] = useState(false);
  const [filterCoaches, setFilterCoaches] = useState(false);
  const [sortOverdue, setSortOverdue] = useState(false);
  const [filterCheckedIn, setFilterCheckedIn] = useState(false);
  const [filteredMembers, setFilteredMembers] = useState(members);
  const [selectedMemberId, setSelectedMemberId] = useState(null);

  const memberRefs = useRef({}); // To store the ref for each member card

  const handleSearchInputChange = (e) => setSearchQuery(e.target.value);
  const handleFilterAlertedChange = () => setFilterAlerted(!filterAlerted);
  const handleFilterInactiveChange = () => setFilterInactive(!filterInactive);
  const handleFilterCoachesChange = () => setFilterCoaches(!filterCoaches);
  const handleSortOverdueChange = () => setSortOverdue(!sortOverdue);
  const handleFilterCheckedInChange = () => setFilterCheckedIn(!filterCheckedIn);

  useEffect(() => {
    const filterMembers = () => {
      let filtered = members;

      if (filterAlerted) {
        filtered = filtered.filter(
          (member) =>
            member.last_invoice_status.toLowerCase() === 'unpaid' ||
            member.subscription_status.toLowerCase() !== 'active' ||
            !member.is_waiver_on_file
        );
      }

      if (filterInactive) {
        filtered = filtered.filter((member) => member.subscription_status.toLowerCase() !== 'inactive');
      }

      if (filterCoaches) {
        filtered = filtered.filter((member) => member.role !== 'coach');
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
  }, [members, filterAlerted, filterInactive, filterCoaches, sortOverdue, filterCheckedIn, searchQuery]);

  const handleRowClick = (id) => {
    if (selectedMemberId === id) {
      setSelectedMemberId(null);
    } else {
      setSelectedMemberId(id);
    }
  };

  const handleUpdateMember = (updatedMember) => {
    onUpdateMember(updatedMember);
    setSelectedMemberId(null);
    if (memberRefs.current[updatedMember._id]) {
      memberRefs.current[updatedMember._id].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-auto font-khula p-4">
      <div className="mb-2 mt-4 flex items-center flex-wrap">
        <SearchBox searchQuery={searchQuery} onSearchChange={handleSearchInputChange} />
      </div>

      <FilterCheckboxes
        filterAlerted={filterAlerted}
        filterInactive={filterInactive}
        filterCoaches={filterCoaches}
        sortOverdue={sortOverdue}
        filterCheckedIn={filterCheckedIn}
        onFilterAlertedChange={handleFilterAlertedChange}
        onFilterInactiveChange={handleFilterInactiveChange}
        onFilterCoachesChange={handleFilterCoachesChange}
        onSortOverdueChange={handleSortOverdueChange}
        onFilterCheckedInChange={handleFilterCheckedInChange}
      />

      <div className="grid grid-cols-1 gap-2">
        {filteredMembers.map((member) => (
          <div
            key={member._id}
            ref={(el) => (memberRefs.current[member._id] = el)} // Attach the ref to each member card
          >
            <MemberRowCard
              member={member}
              onClick={() => handleRowClick(member._id)}
              isSelected={selectedMemberId === member._id}
            />
            {selectedMemberId === member._id && (
              <div className="my-4">
                <MemberDetails member={member} onUpdateMember={handleUpdateMember} onDeleteMember={onDeleteMember} />
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
      _id: PropTypes.string.isRequired,
      display_first_name: PropTypes.string,
      display_last_name: PropTypes.string,
      subscription_status: PropTypes.string,
      last_invoice_status: PropTypes.string,
      last_invoice_date: PropTypes.string,
      role: PropTypes.string,
      checkedIn: PropTypes.bool,
      lastCheckInDate: PropTypes.string,
    })
  ).isRequired,
  onUpdateMember: PropTypes.func.isRequired,
};

export default AdminPage;
