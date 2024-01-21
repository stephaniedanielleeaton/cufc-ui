import React, { useState } from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';

function NewUserAboutYou() {
  const [formData, setFormData] = useState({
    displayFirstName: '',
    displayLastName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
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
        <BaseTextInput onChange={handleChange} placeholder="Preferred First Name" value={formData.displayFirstName} />
        <BaseTextInput onChange={handleChange} placeholder="Preferred Last Name" value={formData.displayFirstName} />
      </div>
    </form>
  );
}

export default NewUserAboutYou;
