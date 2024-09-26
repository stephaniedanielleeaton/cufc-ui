import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MemberRowCard from './MemberRowCard';
import MemberDetails from './adminmemberdetails/MemberDetails.jsx';
import SearchBox from '../SearchBox.jsx';
import FilterCheckboxes from './FilterCheckboxes';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminMembers = ({ members, onUpdateMember, onDeleteMember, onAddMember }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterAlerted, setFilterAlerted] = useState(false);
  const [filterInactive, setFilterInactive] = useState(false);
  const [filterCoaches, setFilterCoaches] = useState(false);
  const [sortOverdue, setSortOverdue] = useState(false);
  const [filterCheckedIn, setFilterCheckedIn] = useState(false);
  const [filteredMembers, setFilteredMembers] = useState(members);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [addMemberMode, setAddMemberMode] = useState(false);

  const memberRefs = useRef({});

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
        filtered = filtered.filter((member) => {
          const isWaiverOnFile = !member.is_waiver_on_file; // true if waiver is false or null
          const isUnpaid = member.last_invoice_status.toLowerCase() === 'unpaid';
          const isNotActive = member.subscription_status.toLowerCase() !== 'active';
          const isNotCoach = member.role !== 'coach'; // exclude coaches
          return isNotCoach && (isUnpaid || isNotActive || isWaiverOnFile);
        });
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
    setAddMemberMode(false);
  };

  const handleAddMemberClick = () => {
    setAddMemberMode(!addMemberMode);
    setSelectedMemberId(null);
  };

  const handleUpdateMember = (updatedMember) => {
    onUpdateMember(updatedMember);
    setSelectedMemberId(null);
    setAddMemberMode(false);
    if (memberRefs.current[updatedMember._id]) {
      memberRefs.current[updatedMember._id].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="mb-2 mt-2 flex items-center justify-between">
        <SearchBox searchQuery={searchQuery} onSearchChange={handleSearchInputChange} />
        <button
          onClick={handleAddMemberClick}
          className={`relative text-center z-10 font-bold px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
            addMemberMode ? 'bg-MediumPink text-white' : 'bg-gray-300 text-gray-600'
          } hover:bg-gray-400 hover:text-white ml-4`}
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add
        </button>
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
        {addMemberMode && (
          <div className="my-4">
            <MemberDetails member={{}} onUpdateMember={onAddMember} />
          </div>
        )}

        {filteredMembers.map((member) => (
          <div key={member._id} ref={(el) => (memberRefs.current[member._id] = el)}>
            <MemberRowCard
              member={member}
              onClick={() => handleRowClick(member._id)}
              isSelected={selectedMemberId === member._id}
            />
            {selectedMemberId === member._id && (
              <div className="my-4">
                <MemberDetails
                  member={member}
                  onUpdateMember={handleUpdateMember}
                  onDeleteMember={onDeleteMember}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

AdminMembers.propTypes = {
  members: PropTypes.array.isRequired,
  onUpdateMember: PropTypes.func.isRequired,
  onDeleteMember: PropTypes.func,
  onAddMember: PropTypes.func.isRequired,
};

export default AdminMembers;
