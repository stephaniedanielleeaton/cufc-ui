import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons';

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
    if (status.toLowerCase() === 'overdue') {
      const daysOverdue = Math.floor((Date.now() - new Date(date)) / (1000 * 60 * 60 * 24));
      return `By ${daysOverdue} day${daysOverdue !== 1 ? 's' : ''}`;
    }
    if (status.toLowerCase() === 'paid') return formattedDate;
    if (status.toLowerCase() === 'unpaid') return `Due on ${formattedDate}`;
    return formattedDate;
  }
  return '';
};

const getStatusColor = (status) => {
  if (status.toLowerCase() === 'paid') return 'text-green-500';
  if (status.toLowerCase() === 'unpaid') return 'text-red-500';
  if (status.toLowerCase() === 'cancelled') return 'text-gray-500';
  return '';
};

const AdminPage = ({ members, onNavigationClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredMemberId, setHoveredMemberId] = useState(null);

  const filteredMembers = members.filter((member) =>
    `${member.display_first_name} ${member.display_last_name}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (e) => setSearchQuery(e.target.value);

  return (
    <div className="mx-auto font-khula p-4">
      <div className="mb-8 mt-4 flex items-center">
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search by Name"
            className="ml-2 p-2 border rounded pl-10"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <button
          className="ml-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => onNavigationClick('newmember')}
        >
          <FontAwesomeIcon icon={faUserPlus} /> Add Member
        </button>
      </div>

      <div className="mx-auto">
        <div className="grid grid-cols-4 font-bold text-sm border-b mb-4 border-black">
          <div className="min-content flex-nowrap">Name</div>
          <div className="min-content flex-nowrap">Plan</div>
          <div className="min-content flex-nowrap">Subscription Status</div>
          <div className="min-content flex-nowrap">Last Invoice</div>
        </div>

        {filteredMembers.map((member) => {
          const {
            subscription_status,
            subscription_start_date,
            last_invoice_status,
            last_invoice_date,
            _id,
            plan,
            display_first_name,
            display_last_name,
          } = member;
          const subscriptionStartDate = subscription_start_date ? new Date(subscription_start_date) : '';
          const lastInvoiceDate = last_invoice_date ? new Date(last_invoice_date) : '';
          const lastInvoiceStatusClass = `font-bold text-md ${getStatusColor(last_invoice_status)}`;

          return (
            <div
              key={_id}
              className={`grid grid-cols-4 items-center py-2 cursor-pointer border-b ${hoveredMemberId === _id ? 'bg-gray-200' : ''}`}
              onMouseEnter={() => setHoveredMemberId(_id)}
              onMouseLeave={() => setHoveredMemberId(null)}
              onClick={() => onNavigationClick(`admin/member/${_id}`)}
            >
              <div className="min-content flex items-center">{`${display_first_name} ${display_last_name}`}</div>
              <div className="min-content">{plan}</div>
              <div className="min-content">
                <div className="font-bold text-md">{subscription_status}</div>
                <div className="text-sm">{formatSubscriptionDate(subscription_status, subscriptionStartDate)}</div>
              </div>
              <div className="min-content">
                <div className={lastInvoiceStatusClass}>{last_invoice_status}</div>
                <div className="text-sm">{formatLastInvoiceDate(last_invoice_status, lastInvoiceDate)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

AdminPage.propTypes = {
  onNavigationClick: PropTypes.func.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      display_first_name: PropTypes.string.isRequired,
      display_last_name: PropTypes.string.isRequired,
      plan: PropTypes.string.isRequired,
      subscription_status: PropTypes.string,
      subscription_start_date: PropTypes.string,
      last_invoice_status: PropTypes.string,
      last_invoice_date: PropTypes.string,
    })
  ),
};

export default AdminPage;
