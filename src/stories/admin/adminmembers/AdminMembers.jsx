import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MemberRowCard from './MemberRowCard';
import MemberDetails from './adminmemberdetails/MemberDetails.jsx';
import SearchBox from '../SearchBox.jsx';
import FilterCheckboxes from './FilterCheckboxes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

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
          const isWaiverOnFile = !member.is_waiver_on_file;
          const isUnpaid = member.last_invoice_status.toLowerCase() === 'unpaid';
          const isNotActive = member.subscription_status.toLowerCase() !== 'active';
          const isNotCoach = member.role !== 'coach';
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
    <div>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
          <SearchBox 
            searchQuery={searchQuery} 
            onSearchChange={handleSearchInputChange}
            className="pl-10 w-full"
          />
        </div>
        <button
          onClick={handleAddMemberClick}
          className={`inline-flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
            addMemberMode
              ? 'bg-MediumPink text-white'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <FontAwesomeIcon icon={faPlus} className={`mr-2 ${addMemberMode ? 'text-white' : 'text-gray-400'}`} />
          Add Member
        </button>
      </div>

      {/* Filters */}
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

      {/* Add Member Form */}
      {addMemberMode && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Member</h3>
          <MemberDetails member={{}} onUpdateMember={onAddMember} />
        </div>
      )}

      {/* Members List */}
      <div className="space-y-4">
        {filteredMembers.map((member) => (
          <div key={member._id} ref={(el) => (memberRefs.current[member._id] = el)}>
            <MemberRowCard
              member={member}
              onClick={() => handleRowClick(member._id)}
              isSelected={selectedMemberId === member._id}
            />
            {selectedMemberId === member._id && (
              <div className="mt-4">
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
    </div>
  );
};

AdminMembers.propTypes = {
  members: PropTypes.array.isRequired,
  onUpdateMember: PropTypes.func.isRequired,
  onDeleteMember: PropTypes.func,
  onAddMember: PropTypes.func.isRequired,
};

export default AdminMembers;
