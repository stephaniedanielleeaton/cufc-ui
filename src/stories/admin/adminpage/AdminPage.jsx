import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MemberDetails from '../adminmemberdetails/MemberDetails.jsx';

// Helper Functions
const formatDate = (date) => {
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const year = date.getUTCFullYear();
  return `${month}/${day}/${year}`;
};

const formatSubscriptionDate = (status, date) => {
  if (date !== '') {
    const formattedDate = formatDate(new Date(date));
    return status.toLowerCase() === 'active' ? `Since ${formattedDate}` : `On ${formattedDate}`;
  }
  return '';
};

const formatLastInvoiceDate = (status, date) => {
  if (date !== '') {
    const formattedDate = formatDate(new Date(date));
    if (status.toLowerCase() === 'overdue' || status.toLowerCase() === 'unpaid') {
      const daysOverdue = Math.floor((Date.now() - new Date(date)) / (1000 * 60 * 60 * 24));
      return daysOverdue === 0 ? 'Due today' : `Due ${daysOverdue} days ago`;
    }
    return formattedDate;
  }
  return '';
};

const getStatusColor = (status) => {
  if (status.toLowerCase() === 'paid') return 'text-green-500';
  if (status.toLowerCase() === 'unpaid' || status.toLowerCase() === 'overdue') return 'text-red-500';
  return '';
};

const getRoleClass = (role) => {
  if (role === 'coach' || role === 'admin') return 'text-gray-500';
  return 'text-gray-600';
};

// Member Row Card Component
const MemberRowCard = ({ member, onClick, isSelected }) => {
  const {
    display_first_name,
    display_last_name,
    subscription_status,
    last_invoice_status,
    last_invoice_date,
    subscription_start_date,
    role,
  } = member;

  const lastInvoiceStatusClass = `font-bold text-md ${getStatusColor(last_invoice_status)}`;
  const roleClass = getRoleClass(role);
  const rowClass =
    subscription_status.toLowerCase() === 'inactive' && role !== 'coach' ? 'bg-gray-100 text-gray-500' : '';

  // Apply light blue background and dark blue border if the card is selected
  const selectedClass = isSelected
    ? 'bg-LightNavy border-Navy' // Apply custom light blue and dark blue styles
    : 'bg-white';

  return (
    <div
      className={`grid grid-cols-3 items-center gap-4 p-4 shadow-md rounded-lg cursor-pointer mt-4 border hover:border-hoverWine ${selectedClass} ${rowClass}`}
      onClick={onClick}
    >
      {/* Column 1: Name and Role */}
      <div className="flex flex-col">
        <div className="text-lg font-bold">{`${display_first_name} ${display_last_name}`}</div>
        {role && (role === 'coach' || role === 'admin') && <div className={`text-xs ${roleClass}`}>{role}</div>}
      </div>

      {/* Column 2: Subscription Status */}
      <div className="flex flex-col">
        <div className="font-bold">Subscription Status:</div>
        <div className="text-md">{subscription_status}</div>
        <div className="text-sm">{formatSubscriptionDate(subscription_status, subscription_start_date)}</div>
      </div>

      {/* Column 3: Last Invoice Status */}
      <div className="flex flex-col">
        <div className="font-bold">Last Invoice Status:</div>
        <div className={lastInvoiceStatusClass}>
          {last_invoice_status.toLowerCase() === 'unpaid' ? 'Overdue' : last_invoice_status}
        </div>
        <div className="text-sm">{formatLastInvoiceDate(last_invoice_status, last_invoice_date)}</div>
      </div>
    </div>
  );
};

MemberRowCard.propTypes = {
  member: PropTypes.shape({
    display_first_name: PropTypes.string.isRequired,
    display_last_name: PropTypes.string.isRequired,
    subscription_status: PropTypes.string.isRequired,
    last_invoice_status: PropTypes.string.isRequired,
    last_invoice_date: PropTypes.string,
    subscription_start_date: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

// Main Admin Page Component
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
  }, [members, filterUnpaid, filterInactive, filterCoaches, sortOverdue, filterCheckedIn, searchQuery]);

  const handleRowClick = (id) => {
    setSelectedMemberId(selectedMemberId === id ? null : id);
  };

  const handleUpdateMember = (updatedMember) => {
    onUpdateMember(updatedMember);
    setSelectedMemberId(null); // Close the member details after update
  };

  return (
    <div className="mx-auto font-khula p-4">
      <div className="mb-2 mt-4 flex items-center flex-wrap">
        {/* Updated Search Box */}
        <div className="relative w-full md:w-auto flex-grow mb-4 md:mb-0">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-hoverOuterSpace"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="border border-deepSeaBlue text-hoverOuterSpace text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-none"
            placeholder="Search by Name"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-deepSeaBlue rounded-lg border border-deepSeaBlue"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>

      <div className="flex items-center flex-wrap space-x-4">
        <div className="flex items-center mb-4 ml-4 md:mb-0">
          <input type="checkbox" id="filterUnpaid" checked={filterUnpaid} onChange={handleFilterUnpaidChange} />
          <label htmlFor="filterUnpaid" className="m-2">
            Unpaid
          </label>
        </div>
        <div className="flex items-center mb-4 md:mb-0">
          <input type="checkbox" id="filterInactive" checked={filterInactive} onChange={handleFilterInactiveChange} />
          <label htmlFor="filterInactive" className="m-2">
            Inactive
          </label>
        </div>
        <div className="flex items-center mb-4 md:mb-0">
          <input type="checkbox" id="filterCoaches" checked={filterCoaches} onChange={handleFilterCoachesChange} />
          <label htmlFor="filterCoaches" className="m-2">
            Remove Coaches
          </label>
        </div>
        <div className="flex items-center mb-4 md:mb-0">
          <input
            type="checkbox"
            id="sortOverdue"
            checked={sortOverdue}
            onChange={handleSortOverdueChange}
          />
          <label htmlFor="sortOverdue" className="m-2">
            Sort by Overdue
          </label>
        </div>
        <div className="flex items-center mb-4 md:mb-0">
          <input
            type="checkbox"
            id="filterCheckedIn"
            checked={filterCheckedIn}
            onChange={handleFilterCheckedInChange}
          />
          <label htmlFor="filterCheckedIn" className="m-2">
            Show Checked In Members
          </label>
        </div>
      </div>

      <div className="mb-4">
        <div>Total: {filteredMembers.length}</div>
      </div>

      {/* Member Cards */}
      <div className="grid grid-cols-1 gap-4">
        {filteredMembers.map((member) => (
          <React.Fragment key={member._id}>
            <MemberRowCard
              member={member}
              onClick={() => handleRowClick(member._id)}
              isSelected={selectedMemberId === member._id}
            />
            {/* Show member details when the card is clicked */}
            {selectedMemberId === member._id && (
              <div className="bg-gray-50 border-b p-4">
                <MemberDetails member={member} onUpdate={handleUpdateMember} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

AdminPage.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      checkedIn: PropTypes.bool,
      display_first_name: PropTypes.string.isRequired,
      display_last_name: PropTypes.string.isRequired,
      last_invoice_status: PropTypes.string,
      subscription_status: PropTypes.string,
      role: PropTypes.string,
    })
  ).isRequired,
  onUpdateMember: PropTypes.func.isRequired,
};

export default AdminPage;
