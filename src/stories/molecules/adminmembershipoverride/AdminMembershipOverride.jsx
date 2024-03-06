import React, { useState } from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';
import BaseSelect from '../../atoms/select/BaseSelect.jsx';
import PropTypes from 'prop-types';

function AdminMembershipOverride({ member }) {
  const [memberData, setMemberData] = useState(member);
  const [overRideData, setOverRideData] = useState({
    override_renewal_date: '',
    override_months: '',
    override_reasoning: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target || e;
    const keys = name.split('.');
    setMemberData((prevData) => {
      let newData = { ...prevData };
      let currentLevel = newData;
      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          currentLevel[key] = value;
        } else {
          currentLevel[key] = { ...currentLevel[key] };
          currentLevel = currentLevel[key];
        }
      });
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(memberData);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row font-khula bg-white text-Navy py-10">
        <div className="md:w-1/2  m-4 flex flex-col md:mx-8">
          <span className="font-extrabold text-sm leading-loose mb-2"> ADMIN OVERRIDE </span>
          <span>
            The database only stores the following bits of information: <b>Renewal Date</b> (the day the member is
            invoiced), and the Number of Months paid. If you would like to adjust the <b>Valid Until </b>
            date for a member, please use the form to to set a Renewal Date, number of months paid, and provide details
            as to why this override is being performed.
            <br />
            <br /> Please use the most recent valid until date as the Renewal Date, as it would would would represent
            the day that a member on a subscription would be given an invoice. Exceptions can be made if last check in
            date is over a month old.
          </span>
        </div>
        <div className="md:w-1/2 flex items-center justify-center md:justify-start">
          <form onSubmit={handleSubmit} className="flex flex-wrap w-full">
            <span className="font-extrabold text-xs leading-loose"> Renewal Date </span>
            <BaseTextInput faIcon="none" name="" type="date" onChange={handleChange} />
            <BaseSelect
              name=""
              faIcon="none"
              onChange={handleChange}
              options={['1', '2', '3']}
              placeholder="Months Paid"
              value={getNestedValue(memberData, name)}
            />
            <BaseTextInput
              faIcon="none"
              name=""
              onChange={handleChange}
              value=""
              placeholder="Reasoning for Override"
            />
            <div className="w-full flex flex-col justify-center items-center">
              <div className="text-sm">Examples: Cash transaction, gratuity, automation error, etc</div>
              <button
                className="tracking-wider border-2 border-Navy text-sm font-bold my-4 px-4 py-2 rounded-none md:w-auto hover:bg-Navy hover:text-white hover:border-white"
                onClick={() => onNavigationClick('contact')}
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
    membership_months_paid: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
};

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== 'undefined' ? acc[key] : ''), obj);
}

export default AdminMembershipOverride;
