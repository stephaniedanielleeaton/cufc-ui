import React, { useState } from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';
import BaseSelect from '../../atoms/select/BaseSelect.jsx';
import SelectBoxGroup from '../selectbox/SelectBoxGroup.jsx';
import { commonCountries, usStateAbbreviations } from '../../../utils/constants.jsx';

function NewUserAboutYou({ onSubmit }) {
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
    requestedMembershipType: '',
    requestedStartDate: '',
  });

  const [emailStatusMessage, setEmailStatusMessage] = useState('');

  const [errors, setErrors] = useState({});

  const options = [
    { id: 'nugget', header: 'Sign Up For The Beginner Course', description: "Sign up to take our beginner's course to learn the basics of historical fencing! Recommended if you have never done HEMA before.", price: '$110 for full course' },
    { id: 'fullMembership', header: 'Full Class Membership', description: 'Membership to the club, access to all regular weekly classes, coaches, social events, and open gym hours at the club site. Recommended if you have done HEMA before and would like to join classes.', price: '$110/month' },
    { id: 'socialMembership', header: 'Social Membership', description: 'Membership to the club, access to the site and coaches for Saturdays and Social Events only. Recommended if you have done HEMA before.', price: '$65/month' },
    { id: 'idk', header: 'Help me decide', description: 'We will contact you and help you choose the best option', price: '' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setEmailStatusMessage('');
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== 'displayFirstName' && key !== 'displayLastName') {
        valid = false;
        newErrors[key] = 'This field is required';
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await onSubmit({ ...formData });
        setEmailStatusMessage('Email sent! We will reach out to you. :)');
      } catch (error) {
        setEmailStatusMessage('Error sending email');
        console.error('Error sending email:', error);
      }
    }
  };

  return (
      <div className="max-w-screen-lg mx-auto bg-white p-8">
        <form onSubmit={handleSubmit} className="flex flex-wrap">
          <div className="p-4 font-khula flex-grow w-full">
            <h1 className="text-xl text-wine font-khula font-bold mb-2 text-center">About You</h1>
            <div className="w-9/12 border-t-2 border-wine my-2 mx-auto"></div>
            <BaseTextInput
              name="displayFirstName"
              onChange={handleChange}
              placeholder="Preferred First Name"
              value={formData.displayFirstName}
              error={errors.displayFirstName}
            />
            <BaseTextInput
              name="displayLastName"
              onChange={handleChange}
              placeholder="Preferred Last Name"
              value={formData.displayLastName}
              error={errors.displayLastName}
            />
            <BaseTextInput
              name="legalFirstName"
              onChange={handleChange}
              placeholder="Legal First Name"
              value={formData.legalFirstName}
              error={errors.legalFirstName}
            />
            <BaseTextInput
              name="legalLastName"
              onChange={handleChange}
              placeholder="Legal Last Name"
              value={formData.legalLastName}
              error={errors.legalLastName}
            />
            <BaseTextInput
              faIcon="faEnvelope"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              value={formData.email}
              error={errors.email}
            />
            <BaseTextInput
              faIcon="faCalendar"
              name="dateOfBirth"
              type="date"
              onChange={handleChange}
              placeholder="Date Of Birth"
              value={formData.dateOfBirth}
              error={errors.dateOfBirth}
            />
          </div>
          <div className="p-4 font-khula flex-grow w-full">
            <h1 className="font-khula font-bold mb-2 text-center">Address</h1>
            <BaseTextInput
              faIcon="faStreetView"
              name="streetAddress"
              onChange={handleChange}
              placeholder="Street Address"
                value={formData.streetAddress}
                error={errors.streetAddress}
            />
            <BaseTextInput
                faIcon="faCity"
                name="city"
                onChange={handleChange}
                placeholder="City"
                value={formData.city}
                error={errors.city}
            />
            <BaseSelect
                faIcon="faMapPin"
                name="state"
                onChange={handleChange}
                options={usStateAbbreviations}
                placeholder="State"
                value={formData.state}
                error={errors.state}
            />
            <BaseTextInput
                faIcon="faMapPin"
                name="zipcode"
                onChange={handleChange}
                placeholder="Zipcode"
                value={formData.zipcode}
                error={errors.zipcode}
            />
            <BaseSelect
                faIcon="faMapPin"
                name="country"
                onChange={handleChange}
                options={commonCountries}
                placeholder="Country"
                value={formData.country}
                error={errors.country}
            />
            <BaseTextInput
                faIcon="faMobilePhone"
                name="phoneNumber"
                onChange={handleChange}
                placeholder="Phone Number"
                value={formData.phoneNumber}
                error={errors.phoneNumber}
            />
          </div>
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-xl text-wine font-khula font-bold mb-2 text-center">Membership Options</h1>
            <div className="w-9/12 border-t-2 border-wine my-2 mx-auto"></div>
            <h1 className="font-khula font-bold mb-4 text-center">Select Your Membership Type</h1>
            <div className="flex justify-center mb-4">
              <SelectBoxGroup
                  options={options}
                  selectedOption={formData.requestedMembershipType}
                  onSelect={(id) => setFormData((prevData) => ({ ...prevData, requestedMembershipType: id }))}
              />
            </div>
            <h1 className="font-khula font-bold mb-4 text-center mt-2">When would you like to start?</h1>
            <BaseTextInput
                faIcon="faCalendar"
                name="requestedStartDate"
                type="date"
                onChange={handleChange}
                placeholder="Requested Start Date"
                value={formData.requestedStartDate}
                error={errors.requestedStartDate}
            />
          </div>
        </form>
        <div className="w-full text-center p-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-white text-black text-sm font-bold px-4 py-2 hover:bg-black hover:text-white hover:border-white border-2 border-black"
          >
            SUBMIT
          </button>
          <span className="p-4">{emailStatusMessage}</span>
        </div>
      </div>
  );
}

export default NewUserAboutYou;
