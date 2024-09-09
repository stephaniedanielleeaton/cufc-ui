import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

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

MemberRowCard.propTypes = {
  member: PropTypes.shape({
    display_first_name: PropTypes.string.isRequired,
    display_last_name: PropTypes.string.isRequired,
    subscription_status: PropTypes.string.isRequired,
    last_invoice_status: PropTypes.string.isRequired,
    last_invoice_date: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default MemberRowCard;
