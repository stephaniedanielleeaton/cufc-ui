import React, { useState } from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';
import BaseSelect from '../../atoms/select/BaseSelect.jsx';
import BaseButton from '../button/BaseButton.jsx';
import PropTypes from 'prop-types';

function UpdateUser({ member }) {
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

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-wrap">
        <div className="p-4 font-poppins flex-grow w-full md:w-1/2">
          <div className="font-bold text-wine">About You</div>
          <BaseTextInput
            name="displayFirstName"
            onChange={handleChange}
            placeholder="Preferred First Name"
            value={formData.displayFirstName}
          />
          <BaseTextInput
            name="displayLastName"
            onChange={handleChange}
            placeholder="Preferred Last Name"
            value={formData.displayLastName}
          />
          <BaseTextInput
            name="legalFirstName"
            onChange={handleChange}
            placeholder="Legal First Name"
            value={formData.legalFirstName}
          />
          <BaseTextInput
            name="legalLastName"
            onChange={handleChange}
            placeholder="Legal Last Name"
            value={formData.legalLastName}
          />
          <BaseTextInput
            faIcon="faEnvelope"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            value={formData.email}
          />
          <BaseTextInput
            faIcon="faCalendar"
            name="dateOfBirth"
            type="date"
            onChange={handleChange}
            placeholder="Date Of Birth"
            value={formData.dateOfBirth}
          />
        </div>
        <div className="p-4 font-poppins flex-grow w-full md:w-1/2">
          <div className="font-bold text-wine">Address</div>
          <BaseTextInput
            faIcon="faStreetView"
            name="streetAddress"
            onChange={handleChange}
            placeholder="Street Address"
            value={formData.streetAddress}
          />
          <BaseTextInput faIcon="faCity" name="city" onChange={handleChange} placeholder="City" value={formData.city} />
          <BaseSelect
            faIcon="faMapPin"
            name="state"
            onChange={handleChange}
            options={['option 1', 'option 2', 'option 3']}
            placeholder="State"
          />
          <BaseTextInput
            faIcon="faMapPin"
            name="zipcode"
            onChange={handleChange}
            placeholder="Zipcode"
            value={formData.zipcode}
          />
          <BaseSelect
            faIcon="faMapPin"
            name="country"
            onChange={handleChange}
            options={['option 1', 'option 2', 'option 3']}
            placeholder="Country"
          />
          <BaseTextInput
            faIcon="faMobilePhone"
            name="phoneNumber"
            onChange={handleChange}
            placeholder="Phone Number"
            value={formData.phoneNumber}
          />
        </div>
      </form>
      <div className="w-full text-center p-4">
        <BaseButton color="wine" onClick={() => {}} text="Save + Next" />
      </div>
    </div>
  );
}

UpdateUser.propTypes = {
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
export default UpdateUser;
