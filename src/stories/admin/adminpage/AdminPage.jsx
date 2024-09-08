import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MemberDetails from '../adminmemberdetails/MemberDetails.jsx';

const formatDate = (date) => {
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const year = date.getUTCFullYear();
  return `${month}/${day}/${year}`;
};

const formatSubscriptionDate = (status, date) => {
  if (date !== '') {
    const formattedDate = formatDate(date);
    return status.toLowerCase() === 'active' ? `Since ${formattedDate}` : `On ${formattedDate}`;
  }
  return '';
};

const formatLastInvoiceDate = (status, date) => {
  if (date !== '') {
    const formattedDate = formatDate(date);
    if (status.toLowerCase() === 'overdue' || status.toLowerCase() === 'unpaid') {
      const daysOverdue = Math.floor((Date.now() - new Date(date)) / (1000 * 60 * 60 * 24));
      if (daysOverdue === 0) {
        return 'Due today';
      } else if (daysOverdue === 1) {
        return 'Due 1 day ago';
      } else {
        return `Due ${daysOverdue} days ago`;
      }
    }
    if (status.toLowerCase() === 'paid') return formattedDate;
    return formattedDate;
  }
  return '';
};

const getStatusColor = (status) => {
  if (status.toLowerCase() === 'paid') return 'text-green-500';
  if (status.toLowerCase() === 'unpaid' || status.toLowerCase() === 'overdue') return 'text-red-500';
  if (status.toLowerCase() === 'cancelled') return 'text-gray-500';
  return '';
};

const getRoleClass = (role) => {
  if (role === 'coach' || role === 'admin') return 'text-gray-500';
  return 'text-gray-600';
};

const AdminPage = ({ members, onUpdateMember }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredMemberId, setHoveredMemberId] = useState(null);
  const [filterUnpaid, setFilterUnpaid] = useState(false);
  const [filterInactive, setFilterInactive] = useState(false);
  const [filterCoaches, setFilterCoaches] = useState(false);
  const [sortOverdue, setSortOverdue] = useState(false);
  const [filterCheckedIn, setFilterCheckedIn] = useState(false); // New filter for checked-in members
  const [selectedMemberId, setSelectedMemberId] = useState(null);

  const handleSearchInputChange = (e) => setSearchQuery(e.target.value);
  const handleFilterUnpaidChange = () => setFilterUnpaid(!filterUnpaid);
  const handleFilterInactiveChange = () => setFilterInactive(!filterInactive);
  const handleFilterCoachesChange = () => setFilterCoaches(!filterCoaches);
  const handleSortOverdueChange = () => setSortOverdue(!sortOverdue);
  const handleFilterCheckedInChange = () => setFilterCheckedIn(!filterCheckedIn); // Handle checked-in filter

  const filteredMembers = members.filter((member) => {
    const nameMatch = `${member.display_first_name} ${member.display_last_name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const unpaidMatch = !filterUnpaid || member.last_invoice_status.toLowerCase() === 'unpaid';
    const inactiveMatch = !filterInactive || member.subscription_status.toLowerCase() === 'inactive';
    const coachMatch = !filterCoaches || member.role !== 'coach';
    const checkedInMatch = !filterCheckedIn || member.checkedIn === true; // Apply checked-in filter
    return nameMatch && unpaidMatch && inactiveMatch && coachMatch && checkedInMatch;
  });

  const sortedMembers = sortOverdue
    ? [...filteredMembers].sort((a, b) => {
      const daysOverdueA =
        a.last_invoice_status.toLowerCase() === 'unpaid'
          ? Math.floor((Date.now() - new Date(a.last_invoice_date)) / (1000 * 60 * 60 * 24))
          : 0;
      const daysOverdueB =
        b.last_invoice_status.toLowerCase() === 'unpaid'
          ? Math.floor((Date.now() - new Date(b.last_invoice_date)) / (1000 * 60 * 60 * 24))
          : 0;
      return daysOverdueB - daysOverdueA;
    })
    : filteredMembers;

  const handleRowClick = (id) => {
    setSelectedMemberId(selectedMemberId === id ? null : id);
  };

  return (
    <div className="mx-auto font-khula p-4">
      <div className="mb-8 mt-4 flex items-center flex-wrap">
        <div className="flex items-center relative flex-grow mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search by Name"
            className="ml-2 p-2 border rounded pl-10 w-full md:w-auto"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
            <FontAwesomeIcon icon={faSearch} />
          </div>
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
            <input type="checkbox" id="sortOverdue" checked={sortOverdue} onChange={handleSortOverdueChange} />
            <label htmlFor="sortOverdue" className="m-2">
              Sort by Overdue
            </label>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <input type="checkbox" id="filterCheckedIn" checked={filterCheckedIn} onChange={handleFilterCheckedInChange} />
            <label htmlFor="filterCheckedIn" className="m-2">
              Show Checked In Members
            </label>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div>Total: {sortedMembers.length}</div>
      </div>

      <div className="mx-auto">
        <div className="grid grid-cols-3 font-bold text-sm border-b mb-4 border-black">
          <div className="min-content flex-nowrap">Name</div>
          <div className="min-content flex-nowrap">Subscription Status</div>
          <div className="min-content flex-nowrap">Last Invoice</div>
        </div>

        {sortedMembers.map((member) => {
          const {
            subscription_status,
            subscription_start_date,
            last_invoice_status,
            last_invoice_date,
            _id,
            display_first_name,
            display_last_name,
            role,
          } = member;
          const subscriptionStartDate = subscription_start_date ? new Date(subscription_start_date) : '';
          const lastInvoiceDate = last_invoice_date ? new Date(last_invoice_date) : '';
          const lastInvoiceStatusClass = `font-bold text-md ${getStatusColor(last_invoice_status)}`;
          const roleClass = getRoleClass(role);
          const rowClass =
            subscription_status.toLowerCase() === 'inactive' && role !== 'coach' ? 'bg-gray-100 text-gray-500' : '';

          return (
            <React.Fragment key={_id}>
              <div
                className={`grid grid-cols-3 items-center py-2 cursor-pointer border-b ${hoveredMemberId === _id ? 'bg-gray-200' : ''} ${rowClass}`}
                onMouseEnter={() => setHoveredMemberId(_id)}
                onMouseLeave={() => setHoveredMemberId(null)}
                onClick={() => handleRowClick(_id)}
              >
                <div className="min-content flex items-center">
                  <div>
                    {`${display_first_name} ${display_last_name}`}
                    {role && (role === 'coach' || role === 'admin') && (
                      <div className={`text-xs ${roleClass}`}>{role}</div>
                    )}
                  </div>
                </div>
                <div className="min-content">
                  {role !== 'coach' && (
                    <>
                      <div className="font-bold text-md">{subscription_status}</div>
                      <div className="text-sm">
                        {formatSubscriptionDate(subscription_status, subscriptionStartDate)}
                      </div>
                    </>
                  )}
                </div>
                <div className="min-content">
                  {role !== 'coach' && (
                    <>
                      <div className={lastInvoiceStatusClass}>
                        {last_invoice_status.toLowerCase() === 'unpaid' ? 'Overdue' : last_invoice_status}
                      </div>
                      <div className="text-sm">
                        {last_invoice_status.toLowerCase() === 'unpaid'
                          ? formatLastInvoiceDate('overdue', lastInvoiceDate)
                          : formatLastInvoiceDate(last_invoice_status, lastInvoiceDate)}
                      </div>
                    </>
                  )}
                </div>
              </div>
              {selectedMemberId === _id && (
                <div className="bg-gray-50 border-b">
                  <MemberDetails member={member} onUpdate={onUpdateMember} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

AdminPage.propTypes = {
  onUpdateMember: PropTypes.func.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      checkedIn: PropTypes.bool,
      display_first_name: PropTypes.string.isRequired,
      display_last_name: PropTypes.string.isRequired,
      last_invoice_status: PropTypes.string,
      last_invoice_date: PropTypes.string,
      subscription_status: PropTypes.string,
      subscription_start_date: PropTypes.string,
      role: PropTypes.string,
    })
  ).isRequired,
};

export default AdminPage;
