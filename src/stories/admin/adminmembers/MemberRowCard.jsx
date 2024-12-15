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
  return null;
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
  const selectedClass = isSelected 
    ? 'bg-LightNavy border-MediumPink shadow-sm ring-1 ring-MediumPink' 
    : 'bg-white hover:bg-gray-50';

  const getStatusMessage = () => {
    let message = '';
    if (role.toLowerCase() === 'coach') {
      message = 'Coach';
    } else if (subscription_status.toLowerCase() === 'inactive') {
      message = 'Not enrolled in a monthly plan';
    } else if (last_invoice_status.toLowerCase() === 'unpaid') {
      message = daysOverdue;
    }

    if (!is_waiver_on_file) {
      message += message ? ' | No waiver on file' : 'No waiver on file';
    }
    if (notes) {
      message += message ? ' | ' + notes : notes;
    }

    return message;
  };

  // Combine overdue message and notes for display in the Notes column
  const combinedNotes = [daysOverdue, notes].filter(Boolean).join(' | ');

  return (
    <div
      className={`relative group transition-all duration-200 ${selectedClass} border rounded-lg shadow-sm cursor-pointer overflow-hidden mb-2`}
      onClick={onClick}
    >
      {/* Mobile View */}
      <div className="p-4 sm:hidden">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {`${display_first_name} ${display_last_name}`}
            </h3>
            {getStatusMessage() && (
              <div className="mt-1 text-sm text-gray-600">
                {getStatusMessage()}
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            {getStatusIcon(subscription_status, last_invoice_status, role)}
            {getWaiverIcon(is_waiver_on_file)}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:grid sm:grid-cols-12 sm:gap-4 sm:items-center p-4">
        {/* Name and Role */}
        <div className="sm:col-span-3">
          <div className="text-lg font-semibold text-gray-900">
            {`${display_first_name} ${display_last_name}`}
          </div>
          <div className="text-base text-gray-600 mt-0.5">{role}</div>
        </div>

        {/* Subscription Status */}
        <div className="sm:col-span-3">
          <div className={`${role === 'coach' ? 'hidden' : ''}`}>
            <div className="text-base font-medium text-gray-600">Subscription Status</div>
            <div className="text-base text-gray-900">
              {subscription_status.toLowerCase() === 'inactive'
                ? 'Not enrolled in a monthly plan'
                : subscription_status}
            </div>
          </div>
        </div>

        {/* Last Check-In */}
        <div className="sm:col-span-3">
          <div className="text-base font-medium text-gray-600">Last Check-In</div>
          <div className="text-base text-gray-900">{formatCheckInDate(lastCheckInDate)}</div>
        </div>

        {/* Notes */}
        <div className="sm:col-span-2">
          {combinedNotes && (
            <div>
              <div className="text-base font-medium text-gray-600">Notes</div>
              <div className="text-base text-gray-900 truncate">{combinedNotes}</div>
            </div>
          )}
        </div>

        {/* Status Icons */}
        <div className="sm:col-span-1 flex justify-end items-center space-x-2 text-lg">
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
