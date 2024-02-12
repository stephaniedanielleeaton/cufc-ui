import React, { useState } from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';
import BaseSelect from '../../atoms/select/BaseSelect.jsx';
import BaseButton from '../button/BaseButton.jsx';
import PropTypes from 'prop-types';

function AdminMember({ member }) {
  const[memberData, setMemberData] = useState(member)

  const formatDate = (date) => {
    if (!date) return ''; // Handle undefined date gracefully
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    return `${month} ${day}, ${year}`;
  };

  function convertUTCDateToYYYYMMDD(utcDate) {
    if (utcDate === null) {
      return '';
    }
    const date = new Date(utcDate);
    const year = String(date.getUTCFullYear());
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Adding 1 because getUTCMonth() returns 0-based index
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  function calculateValidUntilDate(membershipRenewalDate, months) {
    // Get the year, month, and day of the original date in UTC
    let year = membershipRenewalDate.getUTCFullYear();
    let month = membershipRenewalDate.getUTCMonth();
    let day = membershipRenewalDate.getUTCDate();

    // Calculate the new month and year after adding the specified number of months
    month += +months;
    year += Math.floor(month / 12);
    month %= 12;

    // Handle cases where month becomes negative or greater than 11
    if (month < 0) {
      month += 12;
      year--;
    }

    // Get the number of days in the new month
    const daysInNewMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();

    // Adjust the day if it's greater than the number of days in the new month
    day = Math.min(day, daysInNewMonth);

    // Return the new date in UTC
    return new Date(Date.UTC(year, month, day));
  }

  const handleChange = (name, value) => {
    console.log(name);
    console.log(value);
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
          <BaseTextInput faIcon="none" name="city" onChange={handleChange} placeholder="City" value={memberData.personal_info.address.city} />
          <div className="text-sm text-outerSpace">State:</div>
          <BaseSelect
            faIcon="none"
            name="personal_info.address.state"
            onChange={handleChange}
            options={['option 1', 'option 2', 'option 3']}
            placeholder="State"
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
            name="personal_info.address.street.country"
            onChange={handleChange}
            options={['option 1', 'option 2', 'option 3']}
            placeholder="Country"
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
              <BaseTextInput
                faIcon="none"
                name="membership_renewed_date"
                type="date"
                onChange={handleChange}
                value={convertUTCDateToYYYYMMDD(member.membership_renewed_date)}
              />
            </div>
            <div className="w-full py-2">
              <div className="text-sm text-outerSpace">Months Paid:</div>
              <BaseSelect
                faIcon="none"
                name="membership_months_paid"
                onChange={handleChange}
                options={['1', '2', '3', '4', '5', '6']}
                value={memberData.membership_months_paid}
                placeholder="-"
              />
            </div>
            <div className="w-full py-2">
              <div className="text-sm text-outerSpace">Membership Valid Until:</div>
              <BaseTextInput
                faIcon="none"
                name="membership_valid_until"
                type="date"
                onChange={handleChange}
                value={convertUTCDateToYYYYMMDD(
                  calculateValidUntilDate(member.membership_renewed_date, member.membership_months_paid)
                )}
              />
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
