import React, { useState } from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';

function NewUserAboutYou() {
  const [formData, setFormData] = useState({
    displayFirstName: '',
    displayLastName: '',
    legalFirstName: '',
    legalLastName: '',
    email: '',
    dateOfBirth: '',
  });

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
    <form onSubmit={handleSubmit}>
      <div className="p-4 font-poppins">
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
          value={formData.legalLastName}
        />
        <BaseTextInput
          faIcon="faCalendar"
          name="dateOfBirth"
          onChange={handleChange}
          placeholder="Date Of Birth"
          value={formData.legalLastName}
        />
      </div>
    </form>
  );
}

export default NewUserAboutYou;
