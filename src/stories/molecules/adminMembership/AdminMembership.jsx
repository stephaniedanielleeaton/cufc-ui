import React, { useState } from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';
import BaseSelect from '../../atoms/select/BaseSelect.jsx';
import BaseButton from '../button/BaseButton.jsx';
import PropTypes from 'prop-types';
import { commonCountries, usStateAbbreviations } from '../../../utils/constants.jsx';
import { calculateValidUntilDate, convertUTCDateToYYYYMMDD, formatDate } from '../../../utils/dateUtils.jsx';

function AdminMembership({ member }) {
  const [memberData, setMemberData] = useState(member);
  const [overRideData, setOverRideData] = useState(
    {override_renewal_date: '', override_months: '', override_reasoning: ''}
  )

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

  const renderTextInput = (name, placeholder) => (
    <BaseTextInput
      name={name}
      faIcon="none"
      onChange={handleChange}
      placeholder={placeholder}
      value={getNestedValue(memberData, name)}
    />
  );

  const renderSelect = (name, options, placeholder) => (
    <BaseSelect
      name={name}
      faIcon="none"
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      value={getNestedValue(memberData, name)}
    />
  );

  const renderPersonalInfoInputs = () => (
    <>
      <div className="text-sm text-outerSpace">Preferred First Name:</div>
      {renderTextInput('display_first_name', 'Preferred First Name')}
      <div className="text-sm text-outerSpace">Preferred Last Name:</div>
      {renderTextInput('display_last_name', 'Preferred Last Name')}
      <div className="text-sm text-outerSpace">Legal First Name:</div>
      {renderTextInput('personal_info.legal_first_name', 'Legal First Name')}
      <div className="text-sm text-outerSpace">Legal Last Name:</div>
      {renderTextInput('personal_info.legal_last_name', 'Legal Last Name')}
      <div className="text-sm text-outerSpace">Date of Birth:</div>
      <BaseTextInput
        faIcon="none"
        name="personal_info.date_of_birth"
        type="date"
        onChange={handleChange}
        value={convertUTCDateToYYYYMMDD(memberData.personal_info.date_of_birth)}
      />
    </>
  );

  const renderAddressInputs = () => (
    <>
      <div className="text-sm text-outerSpace">Street:</div>
      {renderTextInput('personal_info.address.street', 'Street Address')}
      <div className="text-sm text-outerSpace">City:</div>
      {renderTextInput('personal_info.address.city', 'City')}
      <div className="text-sm text-outerSpace">State:</div>
      {renderSelect('personal_info.address.state', usStateAbbreviations, 'State')}
      <div className="text-sm text-outerSpace">Zipcode:</div>
      {renderTextInput('personal_info.address.zipcode', 'Zipcode')}
      <div className="text-sm text-outerSpace">Country:</div>
      {renderSelect('personal_info.address.country', commonCountries, 'Country')}
    </>
  );

  const renderContactInputs = () => (
    <>
      <BaseTextInput
        faIcon="faEnvelope"
        name="personal_info.email"
        onChange={handleChange}
        placeholder="Email"
        value={memberData.personal_info.email}
      />
      <BaseTextInput
        faIcon="faMobilePhone"
        name="personal_info.phone"
        onChange={handleChange}
        placeholder="Phone Number"
        value={memberData.personal_info.phone}
      />
    </>
  );

  const renderMembershipInfo = () => (
    <div className="flex flex-wrap mt-2">
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
    <div>
      <div className="flex justify-center">
        <div className="w-full max-w-screen-lg">
          <img src="src/stories/assets/Lynx/wtaermark.PNG" alt="Your Image" className="mx-auto w-64 h-auto" />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-wrap">
        <div className="p-4 font-poppins flex-grow w-full md:w-1/2">
          <div className="text-lg font-bold text-wine">Personal Information</div>
          <hr className="my-2 border-gray-300 mb" />
          {renderPersonalInfoInputs()}
        </div>
        <div className="p-4 font-poppins flex-grow w-full md:w-1/2">
          <div className="text-lg font-bold text-wine">Address</div>
          <hr className="my-2 border-gray-300 mb" />
          {renderAddressInputs()}
        </div>
        <div className="p-4 font-poppins flex-grow w-full">
          <div className="text-lg font-bold text-wine">Contact Information</div>
          <hr className="my-2 border-gray-300" />
          {renderContactInputs()}
        </div>
        <div className="w-full text-center pl-16 flex justify-around">
          <BaseButton color="wine" onClick={handleSubmit} text="Save" />
          <BaseButton color="wine" onClick={() => {
          }} text="Cancel / Return" />
        </div>
      </form>
      <form onSubmit={handleSubmit} className="flex flex-wrap">
        <div className="p-4 font-poppins flex-grow w-full md:w-1/2">
          <div className="text-lg font-bold text-wine">Membership Information</div>
          <hr className="my-2 border-gray-300" />
          {renderMembershipInfo()}
        </div>
        <div className="p-4 font-poppins flex-grow w-full md:w-1/2">
          <div className="text-lg font-bold text-wine">Override</div>
          <hr className="my-2 border-gray-300" />
          <div className="text-sm"> Membership Valid Until date is an extrapolation of last renewal date + the number of
            months paid. If you would like to adjust a member's valid until date, please use the form below to set a new
            renewed date and provide details as to why this override is being performed.
          </div>
          <BaseTextInput
            faIcon="none"
            name=""
            type="date"
            onChange={handleChange}
          />
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
        </div>
      </form>
    </div>
);
}

AdminMember.propTypes = {
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