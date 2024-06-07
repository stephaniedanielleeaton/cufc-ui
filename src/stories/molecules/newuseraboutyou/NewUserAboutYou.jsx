import React, { useState } from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';
import BaseSelect from '../../atoms/select/BaseSelect.jsx';
import SelectBoxGroup from '../selectbox/SelectBoxGroup.jsx';
import { commonCountries, usStateAbbreviations } from '../../../utils/constants.jsx';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    additionalFamilyMembers: [],
  });

  const [emailStatusMessage, setEmailStatusMessage] = useState('');
  const [errors, setErrors] = useState({});

  const options = [
    {
      id: 'nugget',
      header: 'Sign Up For The Beginner Course',
      description: "Sign up to take our beginner's course to learn the basics of historical fencing! Recommended if you have never done HEMA before.",
      price: '$110 for full course',
    },
    {
      id: 'fullMembership',
      header: 'Full Class Access',
      description: 'Access to all regular weekly classes. Social events included. Recommended if you have done HEMA before and would like to join classes.',
      price: '$110/month',
    },
    {
      id: 'socialMembership',
      header: 'Saturday Classes',
      description: 'Access to the classes and coaches for Saturdays only. Social events included. Recommended if you have done HEMA before.',
      price: '$65/month',
    },
    {
      id: 'familyPlan',
      header: 'Family Plan',
      description: 'Sign up for the Family Plan and add additional family members.',
      price: '$110/month for First Family Member, +$65 for each additional member',
    },
    {
      id: 'idk',
      header: 'Help me decide',
      description: 'We will contact you and help you choose the best option',
      price: '',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setEmailStatusMessage('');
  };

  const handleAddFamilyMember = () => {
    setFormData((prevData) => ({
      ...prevData,
      additionalFamilyMembers: [...prevData.additionalFamilyMembers, { firstName: '', lastName: '', dateOfBirth: '' }],
    }));
  };

  const handleRemoveFamilyMember = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      additionalFamilyMembers: prevData.additionalFamilyMembers.filter((_, i) => i !== index),
    }));
  };

  const handleFamilyMemberChange = (index, field, value) => {
    const updatedFamilyMembers = [...formData.additionalFamilyMembers];
    updatedFamilyMembers[index][field] = value;
    setFormData((prevData) => ({
      ...prevData,
      additionalFamilyMembers: updatedFamilyMembers,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== 'displayFirstName' && key !== 'displayLastName' && key !== 'additionalFamilyMembers') {
        valid = false;
        newErrors[key] = 'This field is required';
      }
    });

    formData.additionalFamilyMembers.forEach((member, index) => {
      if (!member.firstName || !member.lastName || !member.dateOfBirth) {
        valid = false;
        newErrors[`familyMember${index}`] = 'First Name, Last Name, and Date of Birth are required for all family members';
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
          <h1 className="font-khula text-sm text-gray-500 pl-10">Date of Birth</h1>
          <BaseTextInput
            faIcon="faCalendar"
            name="dateOfBirth"
            type="date"
            onChange={handleChange}
            placeholder="Date Of Birth"
            value={formData.dateOfBirth}
            error={errors.dateOfBirth}
          />
          <h1 className="font-khula font-bold mb-2 text-center">Contact Info</h1>
          <BaseTextInput
            faIcon="faEnvelope"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            value={formData.email}
            error={errors.email}
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
        </div>
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl text-wine font-khula font-bold mb-2 text-center">Class Options</h1>
          <div className="w-9/12 border-t-2 border-wine my-2 mx-auto"></div>
          <h1 className="font-khula font-bold mb-4 text-center">Select Which Classes You Would Like to Attend</h1>
          <div className="flex justify-center mb-4">
            <SelectBoxGroup
              options={options}
              selectedOption={formData.requestedMembershipType}
              onSelect={(id) => setFormData((prevData) => ({ ...prevData, requestedMembershipType: id }))}
            />
          </div>
          {formData.requestedMembershipType === 'familyPlan' && (
            <div>
              <h1 className="font-khula font-bold mb-4 text-center mt-2">Add Family Members</h1>
              {formData.additionalFamilyMembers.map((member, index) => (
                <div key={index} className="mb-4">
                  <BaseTextInput
                    name={`familyMemberFirstName${index}`}
                    placeholder="First Name"
                    value={member.firstName}
                    onChange={(e) => handleFamilyMemberChange(index, 'firstName', e.target.value)}
                  />
                  <BaseTextInput
                    name={`familyMemberLastName${index}`}
                    placeholder="Last Name"
                    value={member.lastName}
                    onChange={(e) => handleFamilyMemberChange(index, 'lastName', e.target.value)}
                  />
                  <BaseTextInput
                    faIcon="faCalendar"
                    name={`familyMemberDateOfBirth${index}`}
                    type="date"
                    onChange={(e) => handleFamilyMemberChange(index, 'dateOfBirth', e.target.value)}
                    placeholder="Date of Birth"
                    value={member.dateOfBirth}
                    error={errors[`familyMember${index}`]}
                  />
                  <button type="button" onClick={() => handleRemoveFamilyMember(index)}>
                    <FontAwesomeIcon icon={faMinus} className="w-4 h-4 text-outerSpace inline" /> Remove
                  </button>
                </div>
              ))}
              <button type="button" onClick={handleAddFamilyMember}>
                <FontAwesomeIcon icon={faPlus} className="w-4 h-4 text-outerSpace inline" /> Add Family Member
              </button>
            </div>
          )}
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
