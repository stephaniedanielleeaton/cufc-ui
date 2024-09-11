import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

// Helper Functions
const getStatusIcon = (subscriptionStatus, lastInvoiceStatus, role) => {
  // Do not display any icon for coaches
  if (role === 'coach') {
    return null;
  }

  // Show an exclamation mark if the subscription is inactive or the last invoice is unpaid
  if (subscriptionStatus.toLowerCase() === 'inactive' || lastInvoiceStatus.toLowerCase() === 'unpaid') {
    return <FontAwesomeIcon icon={faExclamationCircle} className="text-red-500" />;
  }

  // Otherwise, return the check circle for paid invoices and active subscriptions
  return <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />;
};

const calculateDaysOverdue = (lastInvoiceDate, status) => {
  if (status.toLowerCase() === 'unpaid') {
    const dueDate = new Date(lastInvoiceDate);
    const currentDate = new Date();
    const timeDiff = currentDate - dueDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff > 0 ? `Over due ${daysDiff} days` : 'Due today';
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

  const getStatusMessage = () => {
    if (role.toLowerCase() === 'coach') {
      return '';
    }
    if (subscription_status.toLowerCase() === 'inactive') {
      return 'No Active Subscription';
    }
    if (last_invoice_status.toLowerCase() === 'unpaid') {
      return daysOverdue;
    }
    return '';
  };

  return (
    <div
      className={`p-4 font-khula shadow-md rounded-lg cursor-pointer mt-4 border hover:border-hoverWine ${selectedClass}`}
      onClick={onClick}
    >
      {/* For small screens: display name, status icon, and status message */}
      <div className="flex justify-between sm:hidden">
        <div className="text-lg font-bold">{`${display_first_name} ${display_last_name}`}</div>
        <div>{getStatusIcon(subscription_status, last_invoice_status, role)}</div>
      </div>
      {getStatusMessage() && (
        <div className="text-sm text-gray-500 sm:hidden">
          {getStatusMessage()}
        </div>
      )}

      {/* For large screens: display full details */}
      <div className="hidden sm:grid sm:grid-cols-12 gap-4 items-center">
        {/* Column 1: Name and Role (takes 5 columns) */}
        <div className="sm:col-span-5 flex flex-col">
          <div className="text-lg font-bold">{`${display_first_name} ${display_last_name}`}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>

        {/* Column 2: Subscription Status (takes 3 columns, hidden for coaches) */}
        {role !== 'coach' && (
          <div className="sm:col-span-3 flex flex-col">
            <div className="font-bold text-sm">Subscription Status:</div>
            <div className="text-md">
              {subscription_status.toLowerCase() === 'inactive' ? (
                'No active subscription'
              ) : (
                subscription_status
              )}
            </div>
          </div>
        )}

        {/* Column 3: Last Invoice Status (takes 3 columns, hidden for coaches) */}
        {role !== 'coach' && (
          <div className="sm:col-span-3 flex flex-col">
            <div className="font-bold text-sm">Last Invoice Status:</div>
            <div className="text-md">
              {last_invoice_status.toLowerCase() === 'unpaid' ? (
                <span>{daysOverdue}</span>
              ) : last_invoice_status.toLowerCase() === 'no_invoices' ? (
                'No Invoices'
              ) : (
                last_invoice_status
              )}
            </div>
          </div>
        )}

        {/* Column 4: Status Icon (takes 1 column, aligned right) */}
        <div className="sm:col-span-1 flex justify-end">
          {getStatusIcon(subscription_status, last_invoice_status, role)}
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
    role: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default MemberRowCard;
