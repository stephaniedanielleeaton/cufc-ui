import React, { useState } from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';
import BaseSelect from '../../atoms/select/BaseSelect.jsx';
import BaseButton from '../button/BaseButton.jsx';
import PropTypes from 'prop-types';
import { commonCountries, usStateAbbreviations } from '../../../utils/constants.jsx';
import { calculateValidUntilDate, convertUTCDateToYYYYMMDD, formatDate } from '../../../utils/dateUtils.jsx';

function AdminMembership({ member }) {
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

  const renderMembershipInfo = () => (
  <div className="flex flex-wrap mt-2 font-khula">
    <div className="w-full py-2">
      <div className="text-sm text-outerSpace">Subscription Status:</div>
      <div className="text-lg font-medium">{memberData.subscription_status || ''}</div>
    </div>
    <div className="w-full py-2">
      <div className="text-sm text-outerSpace">Start Date:</div>
      <div className="text-lg font-medium">{formatDate(member.membership_start_date)}</div>
    </div>
    <div className="w-full py-2">
      <div className="text-sm text-outerSpace">Last Renewal Date:</div>
      <div className="text-lg font-medium">{formatDate(memberData.membership_renewed_date)}</div>
    </div>
    <div className="w-full py-2">
        <div className="text-sm text-outerSpace">Months Paid:</div>
        <div className="text-lg font-medium">{member.membership_months_paid}</div>
      </div>
      <div className="w-full py-2">
        <div className="text-sm text-outerSpace">Membership Valid Until:</div>
        <div className="text-lg font-medium">
          {formatDate(calculateValidUntilDate(memberData.membership_renewed_date, memberData.membership_months_paid))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-col md:flex-row font-khula bg-DeepRed text-white py-12">
        <div className="md:w-1/5  md:mb-0 mx-12 flex items-center justify-center"> {/* Updated this line */}
          <span className="font-bold text-2xl">Membership Info</span>
        </div>
        <div className="md:w-1/5 md:mr-4 md:mb-0 mx-4 flex items-center justify-center"> {/* Updated this line */}
          <span >Membership Info</span>
        </div>
        <div className="md:w-1/5 md:mr-4 md:mb-0 mx-4 flex items-center justify-center"> {/* Updated this line */}
          <span>Membership Info</span>
        </div>
        <div className="md:w-1/5 md:mr-4 md:mb-0 mx-4 flex items-center justify-center"> {/* Updated this line */}
          <span >Membership Info</span>
        </div>
        <div className="md:w-1/5 flex items-center justify-center md:justify-start mx-12">
          <button
            className="tracking-wider border-2 border-white text-sm font-bold my-4 px-4 py-2 rounded-none md:w-auto hover:bg-white hover:text-black hover:border-black"
            onClick={() => onNavigationClick('contact')}
          >
            UPDATE
          </button>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="flex flex-wrap">
          <div className="p-4 font-khula flex-grow w-full md:w-1/2">
            <div className="text-lg font-bold text-wine">Membership Information</div>
            <hr className="my-2 border-gray-300" />
            {renderMembershipInfo()}
          </div>
          <div className="p-4 font-khula flex-grow w-full md:w-1/2">
            <div className="text-lg font-bold text-wine">Override</div>
            <hr className="my-2 border-gray-300" />
            <div className="text-sm">
              {' '}
              Membership Valid Until date is an extrapolation of last renewal date + the number of months paid. If you
              would like to adjust a member's valid until date, please use the form below to set a new renewed date and
              provide details as to why this override is being performed.
            </div>
            <BaseTextInput faIcon="none" name="" type="date" onChange={handleChange} />
            <BaseSelect
              name=""
              faIcon="none"
              onChange={handleChange}
              options={['1', '2']}
              placeholder="Months"
              value={getNestedValue(memberData, name)}
            />
            <BaseTextInput faIcon="none" name="" onChange={handleChange} value=""
                           placeholder="Reasoning for Override" />
            <div className="text-sm">Examples: Cash transaction, gratuity, automation error, etc</div>
          </div>
        </form>
      </div>
    </>
  );
}

AdminMembership.propTypes = {
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

export default AdminMembership;
