import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MemberRowCard from './MemberRowCard';
import MemberDetails from './adminmemberdetails/MemberDetails.jsx';
import SearchBox from '../SearchBox.jsx';
import FilterCheckboxes from './FilterCheckboxes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faEnvelope, faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';
import { subMonths, isAfter } from 'date-fns';

const AdminMembers = ({ members, onUpdateMember, onDeleteMember, onAddMember }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterAlerted, setFilterAlerted] = useState(false);
  const [filterInactive, setFilterInactive] = useState(true);
  const [filterCoaches, setFilterCoaches] = useState(false);
  const [sortOverdue, setSortOverdue] = useState(false);
  const [filterCheckedIn, setFilterCheckedIn] = useState(false);
  const [filteredMembers, setFilteredMembers] = useState(members);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [addMemberMode, setAddMemberMode] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedMembers, setSelectedMembers] = useState(new Set());
  const [bulkActionMode, setBulkActionMode] = useState(false);
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  const memberRefs = useRef({});

  const handleSearchInputChange = (e) => setSearchQuery(e.target.value);
  const handleFilterAlertedChange = () => setFilterAlerted(!filterAlerted);
  const handleFilterInactiveChange = () => setFilterInactive(!filterInactive);
  const handleFilterCoachesChange = () => setFilterCoaches(!filterCoaches);
  const handleSortOverdueChange = () => setSortOverdue(!sortOverdue);
  const handleFilterCheckedInChange = () => setFilterCheckedIn(!filterCheckedIn);

  const handleSelectAll = () => {
    if (selectedMembers.size === filteredMembers.length) {
      setSelectedMembers(new Set());
    } else {
      setSelectedMembers(new Set(filteredMembers.map(m => m._id)));
    }
  };

  const handleSelectMember = (id) => {
    const newSelected = new Set(selectedMembers);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedMembers(newSelected);
  };

  const exitBulkMode = () => {
    setBulkActionMode(false);
    setSelectedMembers(new Set());
  };

  const handleCopyEmails = async () => {
    const selectedMembersList = filteredMembers.filter(m => selectedMembers.has(m._id));
    
    const emails = selectedMembersList
      .map(m => {
        const email = m.personal_info?.email;
        return email;
      })
      .filter(email => email && email.trim())
      .join(', ');

    if (!emails) {
      console.error('No valid emails found');
      return;
    }

    try {
      await navigator.clipboard.writeText(emails);
      setShowCopySuccess(true);
      setTimeout(() => {
        setShowCopySuccess(false);
        exitBulkMode();
      }, 2000);
    } catch (err) {
      console.error('Failed to copy emails:', err);
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = emails;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setShowCopySuccess(true);
        setTimeout(() => {
          setShowCopySuccess(false);
          exitBulkMode();
        }, 2000);
      } catch (err) {
        console.error('Fallback copy failed:', err);
      }
      document.body.removeChild(textArea);
    }
  };

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
        const twoMonthsAgo = subMonths(new Date(), 2);
        filtered = filtered.filter((member) => {
          const lastCheckIn = member.lastCheckInDate ? new Date(member.lastCheckInDate) : null;
          return lastCheckIn && isAfter(lastCheckIn, twoMonthsAgo);
        });
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT') return; // Don't handle if user is typing in an input

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < filteredMembers.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : prev);
          break;
        case 'Enter':
          if (selectedIndex >= 0) {
            handleRowClick(filteredMembers[selectedIndex]._id);
          }
          break;
        case 'Escape':
          setSelectedMemberId(null);
          setAddMemberMode(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredMembers, selectedIndex]);

  // Scroll selected member into view
  useEffect(() => {
    if (selectedIndex >= 0 && memberRefs.current[filteredMembers[selectedIndex]._id]) {
      memberRefs.current[filteredMembers[selectedIndex]._id].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [selectedIndex, filteredMembers]);

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
    <div className="container mx-auto max-w-7xl p-4 sm:p-6 md:p-8">
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
      </div>

      {/* Filters */}
      <FilterCheckboxes
        filterAlerted={filterAlerted}
        filterInactive={filterInactive}
        filterCoaches={filterCoaches}
        sortOverdue={sortOverdue}
        filterCheckedIn={filterCheckedIn}
        onFilterAlertedChange={handleFilterAlertedChange}
        onFilterInactiveChange={() => setFilterInactive(!filterInactive)}
        onFilterCoachesChange={handleFilterCoachesChange}
        onSortOverdueChange={handleSortOverdueChange}
        onFilterCheckedInChange={handleFilterCheckedInChange}
      />

      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-500">
          Showing {filteredMembers.length} {filteredMembers.length === 1 ? 'fencer' : 'fencers'}
          {filteredMembers.length !== members.length && ` (of ${members.length} total)`}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setBulkActionMode(!bulkActionMode)}
            className={`inline-flex items-center px-3 py-2 border text-sm leading-4 font-medium rounded-md transition-colors duration-200 ${
              bulkActionMode
                ? 'bg-MediumPink text-white border-transparent'
                : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
            }`}
          >
            <FontAwesomeIcon icon={faCopy} className="mr-2" />
            {bulkActionMode ? 'Cancel Selection' : 'Copy Emails'}
          </button>
          <button
            onClick={handleAddMemberClick}
            className={`inline-flex items-center px-3 py-2 border text-sm leading-4 font-medium rounded-md transition-colors duration-200 ${
              addMemberMode
                ? 'bg-MediumPink text-white border-transparent'
                : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
            }`}
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Member
          </button>
        </div>
      </div>

      {/* Add Member Form */}
      {addMemberMode && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Member</h3>
          <MemberDetails member={{}} onUpdateMember={onAddMember} />
        </div>
      )}

      {/* Members List */}
      <div className="space-y-2 mb-16">
        {bulkActionMode && (
          <div className="flex items-center mb-4 bg-gray-50 p-3 rounded-lg">
            <input
              type="checkbox"
              checked={selectedMembers.size === filteredMembers.length}
              onChange={handleSelectAll}
              className="h-4 w-4 text-Navy focus:ring-Navy border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-500">Select All</span>
          </div>
        )}

        {filteredMembers.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <div className="text-gray-500 mb-2">No fencers found</div>
            {searchQuery && (
              <div className="text-sm text-gray-400">
                Try adjusting your search or filters
              </div>
            )}
            {!searchQuery && filterInactive && (
              <div className="text-sm text-gray-400">
                No fencers have checked in within the last 2 months
              </div>
            )}
            {!searchQuery && filterAlerted && (
              <div className="text-sm text-gray-400">
                No fencers currently need attention
              </div>
            )}
          </div>
        ) : (
          filteredMembers.map((member, index) => (
            <div
              key={member._id}
              ref={(el) => (memberRefs.current[member._id] = el)}
              className={`transition-all duration-200 ${
                index === selectedIndex ? 'ring-2 ring-Navy ring-opacity-50' : ''
              }`}
            >
              <div className="flex items-center gap-2">
                {bulkActionMode && (
                  <input
                    type="checkbox"
                    checked={selectedMembers.has(member._id)}
                    onChange={() => handleSelectMember(member._id)}
                    className="h-4 w-4 text-Navy focus:ring-Navy border-gray-300 rounded"
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
                <div className="flex-1">
                  <MemberRowCard
                    member={member}
                    onClick={() => {
                      handleRowClick(member._id);
                      setSelectedIndex(index);
                    }}
                    isSelected={selectedMemberId === member._id}
                  />
                  {selectedMemberId === member._id && (
                    <MemberDetails
                      member={member}
                      onUpdateMember={handleUpdateMember}
                      onDeleteMember={onDeleteMember}
                    />
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Bulk Action Toolbar */}
      {bulkActionMode && selectedMembers.size > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm text-gray-600">
                  {selectedMembers.size} {selectedMembers.size === 1 ? 'member' : 'members'} selected
                </span>
                {showCopySuccess && (
                  <span className="ml-2 text-sm text-green-600 flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="mr-1" />
                    Emails copied!
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleCopyEmails}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-Navy hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Navy"
                >
                  <FontAwesomeIcon icon={faCopy} className="mr-2" />
                  Copy Emails
                </button>
                <button
                  onClick={exitBulkMode}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Navy"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Descriptions */}
      <div className="mt-8 border-t border-gray-200 pt-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Filter Descriptions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <span className="font-medium text-gray-900">Active Only:</span> Shows fencers who have checked in within the last 2 months
          </div>
          <div>
            <span className="font-medium text-gray-900">Show Alerted:</span> Displays fencers with missing waivers, unpaid invoices, or inactive subscriptions
          </div>
          <div>
            <span className="font-medium text-gray-900">Remove Coaches:</span> Filters out coach accounts from the list
          </div>
          <div>
            <span className="font-medium text-gray-900">Sort by Overdue:</span> Orders fencers by the number of days their invoices are overdue
          </div>
          <div>
            <span className="font-medium text-gray-900">Currently Checked In:</span> Shows only fencers who are checked in for today's practice
          </div>
        </div>
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
