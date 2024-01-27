import React, { useState } from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';
import BaseSelect from '../../atoms/select/BaseSelect.jsx';
import BaseButton from '../button/BaseButton.jsx';

function NewUserAboutYou() {
  const [formData, setFormData] = useState({
    displayFirstName: '',
    displayLastName: '',
    legalFirstName: '',
    legalLastName: '',
    email: '',
    dateOfBirth: '',
    streetAddress: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phoneNumber: '',
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

export default NewUserAboutYou;
