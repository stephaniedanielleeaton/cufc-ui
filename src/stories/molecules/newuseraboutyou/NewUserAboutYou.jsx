import React, { useState } from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';
import BaseSelect from '../../atoms/select/BaseSelect.jsx';

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
          name="streetAddress"
          onChange={handleChange}
          placeholder="Street Address"
          value={formData.streetAddress}
        />
        <BaseTextInput name="city" onChange={handleChange} placeholder="City" value={formData.city} />
        <BaseTextInput name="state" onChange={handleChange} placeholder="state" value={formData.state} />
        <BaseTextInput name="zipcode" onChange={handleChange} placeholder="zipcode" value={formData.zipcode} />
        <BaseSelect
          onChange={() => {}}
          options={[
            'option 1',
            'option 2',
            'option 3'
          ]}
          placeholder="Enter text..."
        />
        <BaseTextInput
          faIcon="faEnvelope"
          name="phoneNumber"
          onChange={handleChange}
          placeholder="Phone Number"
          value={formData.phoneNumber}
        />
      </div>
    </form>
  );
}

export default NewUserAboutYou;
