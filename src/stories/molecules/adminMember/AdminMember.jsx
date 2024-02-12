import React, { useState } from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';
import BaseSelect from '../../atoms/select/BaseSelect.jsx';
import BaseButton from '../button/BaseButton.jsx';
import PropTypes from 'prop-types';
import { commonCountries, usStateAbbreviations } from '../../../utils/constants.jsx';
import { calculateValidUntilDate, convertUTCDateToYYYYMMDD, formatDate } from '../../../utils/dateUtils.jsx';

function AdminMember({ member }) {
  const [memberData, setMemberData] = useState(member);

  const handleChange = (e) => {
    let name, value;
    if (e && e.target) {
      name = e.target.name;
      value = e.target.value;
    } else {
      name = e.name;
      value = e.value;
    }
    // Split the name into an array of keys
    const keys = name.split('.');

    // Handle nested state updates
    if (keys.length === 1) {
      setMemberData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (keys.length === 2) {
      setMemberData((prevData) => ({
        ...prevData,
        [keys[0]]: {
          ...prevData[keys[0]],
          [keys[1]]: value,
        },
      }));
    } else if (keys.length === 3) {
      setMemberData((prevData) => ({
        ...prevData,
        [keys[0]]: {
          ...prevData[keys[0]],
          [keys[1]]: {
            ...prevData[keys[0]][keys[1]],
            [keys[2]]: value,
          },
        },
      }));
    }
    console.log(memberData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(memberData);
  };

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
          <div className="text-sm text-outerSpace">Preferred First Name:</div>
          <BaseTextInput
            name="display_first_name"
            faIcon="none"
            onChange={handleChange}
            placeholder="Preferred First Name"
            value={memberData.display_first_name}
          />
          <div className="text-sm text-outerSpace">Preferred Last Name:</div>
          <BaseTextInput
            name="display_last_name"
            faIcon="none"
            onChange={handleChange}
            placeholder="Preferred Last Name"
            value={memberData.display_last_name}
          />
          <div className="text-sm text-outerSpace">Legal First Name:</div>
          <BaseTextInput
            name="personal_info.legal_first_name"
            faIcon="none"
            onChange={handleChange}
            placeholder="Legal First Name"
            value={memberData.personal_info.legal_first_name}
          />
          <div className="text-sm text-outerSpace">Legal Last Name:</div>
          <BaseTextInput
            name="personal_info.legal_last_name"
            faIcon="none"
            onChange={handleChange}
            placeholder="Legal Last Name"
            value={memberData.personal_info.legal_last_name}
          />
          <div className="text-sm text-outerSpace">Date of Birth:</div>
          <BaseTextInput
            faIcon="none"
            name="personal_info.date_of_birth"
            type="date"
            onChange={handleChange}
            value={convertUTCDateToYYYYMMDD(memberData.personal_info.date_of_birth)}
          />
        </div>
        <div className="p-4 font-poppins flex-grow w-full md:w-1/2">
          <div className="text-lg font-bold text-wine">Address</div>
          <hr className="my-2 border-gray-300 mb" />
          <div className="text-sm text-outerSpace">Street:</div>
          <BaseTextInput
            faIcon="none"
            name="personal_info.address.street"
            onChange={handleChange}
            placeholder="Street Address"
            value={memberData.personal_info.address.street}
          />
          <div className="text-sm text-outerSpace">City:</div>
          <BaseTextInput
            faIcon="none"
            name="personal_info.address.city"
            onChange={handleChange}
            placeholder="City"
            value={memberData.personal_info.address.city}
          />
          <div className="text-sm text-outerSpace">State:</div>
          <BaseSelect
            faIcon="none"
            name="personal_info.address.state"
            onChange={handleChange}
            options={usStateAbbreviations}
            placeholder="Country"
            value={memberData.personal_info.address.state}
          />
          <div className="text-sm text-outerSpace">Zipcode:</div>
          <BaseTextInput
            faIcon="none"
            name="personal_info.address.zipcode"
            onChange={handleChange}
            placeholder="Zipcode"
            value={memberData.personal_info.address.zipcode}
          />
          <div className="text-sm text-outerSpace">Country:</div>
          <BaseSelect
            faIcon="none"
            name="personal_info.address.country"
            onChange={handleChange}
            options={commonCountries}
            placeholder="Country"
            value={memberData.personal_info.address.country}
          />
        </div>
        <div className="p-4 font-poppins flex-grow w-full md:w-1/2">
          <div className="text-lg font-bold text-wine">Contact Information</div>
          <hr className="my-2 border-gray-300" />
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
          <div className="text-lg font-bold text-wine">Membership Information</div>
          <hr className="my-2 border-gray-300" />
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
              <div className="text-lg font-medium">
                {formatDate(
                  memberData.membership_renewed_date,
                )}
              </div>
            </div>
            <div className="w-full py-2">
              <div className="text-sm text-outerSpace">Months Paid:</div>
              <div className="text-lg font-medium">
                {member.membership_months_paid}
              </div>
            </div>
            <div className="w-full py-2">
              <div className="text-sm text-outerSpace">Membership Valid Until:</div>
              <div className="text-lg font-medium">
                {formatDate(
                  calculateValidUntilDate(memberData.membership_renewed_date, memberData.membership_months_paid)
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="w-full text-center p-4">
        <BaseButton color="wine" onClick={() => {}} text="Save + Next" />
      </div>
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
export default AdminMember;
