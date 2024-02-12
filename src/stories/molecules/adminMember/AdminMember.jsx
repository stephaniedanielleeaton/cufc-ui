import React, { useState } from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';
import BaseSelect from '../../atoms/select/BaseSelect.jsx';
import BaseButton from '../button/BaseButton.jsx';
import PropTypes from 'prop-types';

function AdminMember({ member }) {
  const [formData, setFormData] = useState({
    displayFirstName: member.display_first_name,
    displayLastName: member.display_last_name,
    legalFirstName: member.personal_info.legal_first_name,
    legalLastName: member.personal_info.legal_last_name,
    email: member.personal_info.email,
    dateOfBirth: member.personal_info.date_of_birth,
    streetAddress: member.personal_info.address.street,
    city: member.personal_info.address.city,
    state: member.personal_info.address.state,
    zipcode: member.personal_info.address.zipcode,
    country: member.personal_info.address.country,
    phoneNumber: member.personal_info.phone,
  });

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
    const year = date.getUTCFullYear();
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
    month += months;
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
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
            name="displayFirstName"
            faIcon="none"
            onChange={handleChange}
            placeholder="Preferred First Name"
            value={formData.displayFirstName}
          />
          <div className="text-sm text-outerSpace">Preferred Last Name:</div>
          <BaseTextInput
            name="displayLastName"
            faIcon="none"
            onChange={handleChange}
            placeholder="Preferred Last Name"
            value={formData.displayLastName}
          />
          <div className="text-sm text-outerSpace">Legal First Name:</div>
          <BaseTextInput
            name="legalFirstName"
            faIcon="none"
            onChange={handleChange}
            placeholder="Legal First Name"
            value={formData.legalFirstName}
          />
          <div className="text-sm text-outerSpace">Legal Last Name:</div>
          <BaseTextInput
            name="legalLastName"
            faIcon="none"
            onChange={handleChange}
            placeholder="Legal Last Name"
            value={formData.legalLastName}
          />
          <div className="text-sm text-outerSpace">Date of Birth:</div>
          <BaseTextInput
            faIcon="none"
            name="dateOfBirth"
            type="date"
            onChange={handleChange}
            value={convertUTCDateToYYYYMMDD(member.personal_info.date_of_birth)}
          />
        </div>
        <div className="p-4 font-poppins flex-grow w-full md:w-1/2">
          <div className="text-lg font-bold text-wine">Address</div>
          <hr className="my-2 border-gray-300 mb" />
          <div className="text-sm text-outerSpace">Street:</div>
          <BaseTextInput
            faIcon="none"
            name="streetAddress"
            onChange={handleChange}
            placeholder="Street Address"
            value={formData.streetAddress}
          />
          <div className="text-sm text-outerSpace">City:</div>
          <BaseTextInput faIcon="none" name="city" onChange={handleChange} placeholder="City" value={formData.city} />
          <div className="text-sm text-outerSpace">State:</div>
          <BaseSelect
            faIcon="none"
            name="state"
            onChange={handleChange}
            options={['option 1', 'option 2', 'option 3']}
            placeholder="State"
          />
          <div className="text-sm text-outerSpace">Zipcode:</div>
          <BaseTextInput
            faIcon="none"
            name="zipcode"
            onChange={handleChange}
            placeholder="Zipcode"
            value={formData.zipcode}
          />
          <div className="text-sm text-outerSpace">Country:</div>
          <BaseSelect
            faIcon="none"
            name="country"
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
            name="email"
            onChange={handleChange}
            placeholder="Email"
            value={formData.email}
          />
          <BaseTextInput
            faIcon="faMobilePhone"
            name="phoneNumber"
            onChange={handleChange}
            placeholder="Phone Number"
            value={formData.phoneNumber}
          />
          <div className="text-lg font-bold text-wine">Membership Information</div>
          <hr className="my-2 border-gray-300" />
          <div className="flex flex-wrap mt-2">
            <div className="w-full py-2">
              <div className="text-sm text-outerSpace">Subscription Status:</div>
              <div className="text-lg font-medium">{member.subscription_status || ''}</div>
            </div>
            <div className="w-full py-2">
              <div className="text-sm text-outerSpace">Start Date:</div>
              <div className="text-lg font-medium">{formatDate(member.membership_start_date)}</div>
            </div>
            <div className="w-full py-2">
              <div className="text-sm text-outerSpace">Last Renewal Date:</div>
              <BaseTextInput
                faIcon="none"
                name="dateOfBirth"
                type="date"
                onChange={handleChange}
                value={convertUTCDateToYYYYMMDD(member.membership_renewed_date)}
              />
            </div>
            <div className="w-full py-2">
              <div className="text-sm text-outerSpace">Months Paid:</div>
              <div className="text-lg font-medium">{member.membership_months_paid}</div>
            </div>
            <div className="w-full py-2">
              <div className="text-sm text-outerSpace">Membership Valid Until:</div>
              <BaseTextInput
                faIcon="none"
                name="dateOfBirth"
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
      email: PropTypes.string.isRequired,
      phone: PropTypes.string,
      date_of_birth: PropTypes.string,
      address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zipcode: PropTypes.string,
        country: PropTypes.string,
      }),
    }),
    subscription_status: PropTypes.string,
    membership_start_date: PropTypes.string,
    membership_renewed_date: PropTypes.string,
    membership_months_paid: PropTypes.number,
    role: PropTypes.string,
  }).isRequired,
};
export default AdminMember;
