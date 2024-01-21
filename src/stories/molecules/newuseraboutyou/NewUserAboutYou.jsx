import React, { useState } from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';

function NewUserAboutYou() {
  const [formData, setFormData] = useState({
    displayFirstName: '',
    displayLastName: '',
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
      <div className="p-4">
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
      </div>
    </form>
  );
}

export default NewUserAboutYou;
