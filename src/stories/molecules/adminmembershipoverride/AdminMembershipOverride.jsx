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
        <div className="md:w-1/2  m-4 flex flex-col justify-center">
          <span className="font-extrabold text-sm leading-loose mb-2"> ADMIN OVERRIDE </span>
          <span>
            {' '}
            Membership Valid Until date is an extrapolation of last renewal date + the number of months paid. If you
            would like to adjust a member's valid until date, please use the form below to set a new renewed date and
            provide details as to why this override is being performed.
          </span>
        </div>
        <div className="md:w-1/2 flex items-center justify-center md:justify-start mx-12">
          <form onSubmit={handleSubmit} className="flex flex-wrap">
            <BaseTextInput faIcon="none" name="" type="date" onChange={handleChange} />
            <BaseSelect
              name=""
              faIcon="none"
              onChange={handleChange}
              options={['1', '2']}
              placeholder="Months"
              value={getNestedValue(memberData, name)}
            />
            <BaseTextInput
              faIcon="none"
              name=""
              onChange={handleChange}
              value=""
              placeholder="Reasoning for Override"
            />
            <div className="text-sm">Examples: Cash transaction, gratuity, automation error, etc</div>
            <button
              className="tracking-wider border-2 border-Navy text-sm font-bold my-4 px-4 py-2 rounded-none md:w-auto hover:bg-Navy hover:text-white hover:border-white"
              onClick={() => onNavigationClick('contact')}
            >
              UPDATE
            </button>
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
