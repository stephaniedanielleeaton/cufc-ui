import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const getStatusIcon = (subscriptionStatus, lastInvoiceStatus, role) => {
  if (role === 'coach') {
    return null;
  }
  if (subscriptionStatus.toLowerCase() === 'inactive' || lastInvoiceStatus.toLowerCase() === 'unpaid') {
    return <FontAwesomeIcon icon={faExclamationCircle} className="text-red-500" />;
  }
  return <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />;
};

const getWaiverIcon = (is_waiver_on_file) => {
  if (!is_waiver_on_file) {
    return <FontAwesomeIcon icon={faFileAlt} className="text-red-500" title="No waiver on file" />;
  }
  return null; // Don't show anything if waiver is on file
};

const calculateDaysOverdue = (lastInvoiceDate, status) => {
  if (status.toLowerCase() === 'unpaid') {
    const dueDate = new Date(lastInvoiceDate);
    const currentDate = new Date();
    const timeDiff = currentDate - dueDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff > 0 ? `Overdue ${daysDiff} days` : 'Due today';
  }
  return '';
};

// Helper function to format the date to "Month Day, Year"
const formatCheckInDate = (dateString) => {
  if (!dateString) return 'Never';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const MemberRowCard = ({ member, onClick, isSelected }) => {
  const {
    display_first_name,
    display_last_name,
    subscription_status,
    last_invoice_status,
    last_invoice_date,
    role,
    lastCheckInDate,
    is_waiver_on_file,
    notes,
  } = member;

  const daysOverdue = calculateDaysOverdue(last_invoice_date, last_invoice_status);

  const selectedClass = isSelected ? 'bg-LightNavy border-Navy' : 'bg-white';

  const getStatusMessage = () => {
    let message = '';
    if (role.toLowerCase() === 'coach') {
      message = 'coach';
    } else if (subscription_status.toLowerCase() === 'inactive') {
      message = 'Not enrolled in a monthly plan';
    } else if (last_invoice_status.toLowerCase() === 'unpaid') {
      message = daysOverdue;
    }

    if (!is_waiver_on_file) {
      message += message ? ' | No waiver on file' : 'No waiver on file';
    }

    return message;
  };

  // Combine overdue message and notes for display in the Notes column
  const combinedNotes = [daysOverdue, notes].filter(Boolean).join(' | ');

  return (
    <div
      className={`p-4 font-khula shadow-md rounded-lg cursor-pointer mt-4 border hover:border-hoverWine ${selectedClass}`}
      onClick={onClick}
    >
      {/* For small screens: display name, status icon, and status message */}
      <div className="flex justify-between sm:hidden">
        <div className="text-lg font-bold">{`${display_first_name} ${display_last_name}`}</div>
        <div className="flex items-center space-x-2">
          {getStatusIcon(subscription_status, last_invoice_status, role)}
          {getWaiverIcon(is_waiver_on_file)}
        </div>
      </div>
      {getStatusMessage() && <div className="text-sm text-gray-500 sm:hidden">{getStatusMessage()}</div>}

      {/* For large screens: display full details */}
      <div className="hidden sm:grid sm:grid-cols-12 gap-4 items-center">
        {/* Column 1: Name and Role (takes 3 columns) */}
        <div className="sm:col-span-3 flex flex-col">
          <div className="text-lg font-bold">{`${display_first_name} ${display_last_name}`}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>

        {/* Column 2: Subscription Status  */}
        <div className="sm:col-span-3 flex flex-col">
          <div className={`${role === 'coach' ? 'hidden' : ''}`}>
            <div className="font-bold text-sm">Subscription Status:</div>
            <div className="text-md">
              {subscription_status.toLowerCase() === 'inactive'
                ? 'Not enrolled in a monthly plan'
                : subscription_status}
            </div>
          </div>
        </div>

        {/* Column 3: Last Check-In */}
        <div className="sm:col-span-3 flex flex-col">
          <div className="font-bold text-sm">Last Check-In:</div>
          <div className="text-md">{formatCheckInDate(lastCheckInDate)}</div>
        </div>

        {/* Column 4: Notes  */}

        <div className="sm:col-span-2 flex flex-col">
          {combinedNotes && (
            <div>
              <div className="font-bold text-sm">Notes:</div>
              <div className="text-md">{combinedNotes}</div>
            </div>
          )}
        </div>

        {/* Column 5: Status and Waiver Icons (takes 1 column, aligned right) */}
        <div className="sm:col-span-1 flex justify-end space-x-2">
          {/* Show waiver icon only if waiver is not on file */}
          {role === 'coach'
            ? getWaiverIcon(is_waiver_on_file)
            : getStatusIcon(subscription_status, last_invoice_status, role)}
          {role !== 'coach' && getWaiverIcon(is_waiver_on_file)}
        </div>
      </div>
    </div>
  );
};

MemberRowCard.propTypes = {
  member: PropTypes.shape({
    display_first_name: PropTypes.string.isRequired,
    display_last_name: PropTypes.string.isRequired,
    subscription_status: PropTypes.string,
    last_invoice_status: PropTypes.string,
    last_invoice_date: PropTypes.string,
    role: PropTypes.string,
    lastCheckInDate: PropTypes.string,
    is_waiver_on_file: PropTypes.bool,
    notes: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default MemberRowCard;
