import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import MemberDetails from '../adminmemberdetails/MemberDetails.jsx';

// Helper Functions
const formatDate = (date) => {
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const year = date.getUTCFullYear();
  return `${month}/${day}/${year}`;
};

const getStatusIcon = (status) => {
  return status.toLowerCase() === 'paid'
    ? <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
    : <FontAwesomeIcon icon={faExclamationCircle} className="text-red-500" />;
};

const calculateDaysOverdue = (lastInvoiceDate, status) => {
  if (status.toLowerCase() === 'unpaid') {
    const dueDate = new Date(lastInvoiceDate);
    const currentDate = new Date();
    const timeDiff = currentDate - dueDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff > 0 ? `${daysDiff} days overdue` : 'Due today';
  }
  return '';
};

// Member Row Card Component
const MemberRowCard = ({ member, onClick, isSelected }) => {
  const {
    display_first_name,
    display_last_name,
    subscription_status,
    last_invoice_status,
    last_invoice_date,
    role,
  } = member;

  const daysOverdue = calculateDaysOverdue(last_invoice_date, last_invoice_status);

  const selectedClass = isSelected ? 'bg-LightNavy border-Navy' : 'bg-white';

  return (
    <div
      className={`p-4 shadow-md rounded-lg cursor-pointer mt-4 border hover:border-hoverWine ${selectedClass}`}
      onClick={onClick}
    >
      {/* For small screens: display only the name and status icon */}
      <div className="flex justify-between sm:hidden">
        <div className="text-lg font-bold">{`${display_first_name} ${display_last_name}`}</div>
        <div>{getStatusIcon(last_invoice_status)}</div>
      </div>

      {/* For large screens: display full details */}
      <div className="hidden sm:grid sm:grid-cols-3 gap-4">
        {/* Column 1: Name and Role */}
        <div className="flex flex-col">
          <div className="text-lg font-bold">{`${display_first_name} ${display_last_name}`}</div>
          {/* Display the role under the name in smaller, grey text */}
          <div className="text-sm text-gray-500">{role}</div>
        </div>

        {/* Column 2: Subscription Status */}
        <div className="flex flex-col">
          <div className="font-bold">Subscription Status:</div>
          <div className="text-md">{subscription_status}</div>
        </div>

        {/* Column 3: Last Invoice Status */}
        <div className="flex flex-col">
          <div className="font-bold">Last Invoice Status:</div>
          <div className="text-md">
            {last_invoice_status.toLowerCase() === 'unpaid' ? (
              <span className="text-red-600">{daysOverdue}</span>
            ) : last_invoice_status.toLowerCase() === 'no_invoices' ? (
              'No Invoices'
            ) : (
              last_invoice_status
            )}
          </div>
        </div>
      </div>
    </div>
  );
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

      {/* Filter Checkboxes */}
      <div className="flex flex-wrap mb-4 space-x-4">
        <label>
          <input
            type="checkbox"
            checked={filterUnpaid}
            onChange={handleFilterUnpaidChange}
            className="mr-2"
          />
          Show Unpaid
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterInactive}
            onChange={handleFilterInactiveChange}
            className="mr-2"
          />
          Show Inactive
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterCoaches}
            onChange={handleFilterCoachesChange}
            className="mr-2"
          />
          Show Coaches
        </label>
        <label>
          <input
            type="checkbox"
            checked={sortOverdue}
            onChange={handleSortOverdueChange}
            className="mr-2"
          />
          Sort by Overdue
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterCheckedIn}
            onChange={handleFilterCheckedInChange}
            className="mr-2"
          />
          Show Checked In
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredMembers.map((member) => (
          <React.Fragment key={member.id}>
            <MemberRowCard
              member={member}
              onClick={() => handleRowClick(member.id)}
              isSelected={selectedMemberId === member.id}
            />
            {selectedMemberId === member.id && (
              <div className="my-4">
                <MemberDetails member={member} onUpdateMember={handleUpdateMember} />
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
