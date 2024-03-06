import React, { useState } from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';
import BaseSelect from '../../atoms/select/BaseSelect.jsx';
import PropTypes from 'prop-types';
import { calculateValidUntilDate, convertUTCDateToYYYYMMDD } from '../../../utils/dateUtils.jsx';

function AdminMembershipOverride({ member, onSubmit, onNavigationClick }) {
  const defaultNewRenewalDate = () => {
    return convertUTCDateToYYYYMMDD(
      calculateValidUntilDate(member.membership_renewed_date, member.membership_months_paid)
    );
  };

  const [overRideData, setOverRideData] = useState({
    override_renewal_date: defaultNewRenewalDate(),
    override_months: '',
    override_reasoning: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target || e;
    setOverRideData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(overRideData);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row font-khula bg-white text-Navy py-10">
        <div className="md:w-1/2  m-4 flex flex-col md:mx-8">
          <span className="font-extrabold text-sm leading-loose mb-2"> ADMIN OVERRIDE </span>
          <span className="text-sm">
            The database only stores the following bits of information: <b>Renewal Date</b> (the day the member is
            invoiced), and the <b>Number of Months</b> paid. If you would like to adjust the <b>Valid Until </b>
            Date for a member, please use the form to set a Renewal Date and Number of Months paid. Please provide details as
            to why this override is being performed.
            <br />
            <br /> Please use the most recent Valid Until Date as the Renewal Date (pre-populated), as it represents the
            day that a member on a subscription would be given an invoice. Exceptions can be made if last check-in date
            is over a month old.
          </span>
        </div>
        <div className="md:w-1/2 flex items-center justify-center md:justify-start">
          <form onSubmit={handleSubmit} className="flex flex-wrap w-full">
            <span className="font-extrabold text-xs leading-loose"> Renewal Date </span>
            <BaseTextInput
              faIcon="none"
              name="override_renewal_date"
              type="date"
              onChange={handleChange}
              value={overRideData.override_renewal_date}
            />
            <BaseSelect
              name="override_months"
              faIcon="none"
              onChange={handleChange}
              options={['1', '2', '3']}
              placeholder="Months Paid"
              value={overRideData.override_months}
            />
            <BaseTextInput
              faIcon="none"
              name="override_reasoning"
              onChange={handleChange}
              value={overRideData.override_reasoning}
              placeholder="Reasoning for Override"
            />
            <div className="w-full flex flex-col justify-center items-center">
              <div className="text-sm">Examples: Cash transaction, gratuity, automation error, etc</div>
              <button
                className="tracking-wider border-2 border-Navy text-sm font-bold my-4 px-4 py-2 rounded-none md:w-auto hover:bg-Navy hover:text-white hover:border-white"
                onClick={handleSubmit}
              >
                UPDATE
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

AdminMembershipOverride.propTypes = {
  member: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    display_first_name: PropTypes.string,
    display_last_name: PropTypes.string,
    personal_info: PropTypes.shape({
      legal_first_name: PropTypes.string,
      legal_last_name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      date_of_birth: PropTypes.instanceOf(Date),
      address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zipcode: PropTypes.string,
        country: PropTypes.string,
      }),
    }),
    subscription_status: PropTypes.string,
    membership_start_date: PropTypes.instanceOf(Date),
    membership_renewed_date: PropTypes.instanceOf(Date),
    membership_months_paid: PropTypes.number,
    role: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onNavigationClick: PropTypes.func,
};

export default AdminMembershipOverride;
