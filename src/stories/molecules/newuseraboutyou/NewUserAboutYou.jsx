import React, { useState } from 'react';
import BaseTextInput from '../../atoms/textinput/BaseTextInput.jsx';
import BaseSelect from '../../atoms/select/BaseSelect.jsx';
import SelectBoxGroup from '../selectbox/SelectBoxGroup.jsx';
import {commonCountries, usStateAbbreviations} from "../../../utils/constants.jsx";

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
    requestedMembershipType: '',
    requestedStartDate: '',
  });

  const options = [
    { id: 'nugget', header: 'Sign Up For The Beginner Course', description: "Sign up to take our beginner's course to learn the basics of historical fencing! Recommended if you have never done HEMA before.", price: '$110' },
    { id: 'fullMembership', header: 'Full Class Membership', description: 'Membership to the club, access to all regular weekly classes, coaches, social events, and open gym hours at the club site. Recommended if you have done HEMA before and would like to join classes.', price: '$110/month' },
    { id: 'socialMembership', header: 'Social Membership', description: 'Membership to the club, access to the site and coaches for Saturdays and Social Events only. Recommended if you have done HEMA before.', price: '$60/month' },
    { id: 'idk', header: 'Help me decide', description: 'We will contact you and help you choose the best option', price: '' },
  ];

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
    // onSubmit(formData); // Uncomment this line if you have a function to handle form submission
  };

  return (
      <div>
        <form onSubmit={handleSubmit} className="flex flex-wrap">
          <div className="p-4 font-khula flex-grow w-full md:w-1/2">
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
          <div className="p-4 font-khula flex-grow w-full md:w-1/2">
            <div className="font-bold text-wine">Address</div>
            <BaseTextInput
                faIcon="faStreetView"
                name="streetAddress"
                onChange={handleChange}
                placeholder="Street Address"
                value={formData.streetAddress}
            />
            <BaseTextInput
                faIcon="faCity"
                name="city"
                onChange={handleChange}
                placeholder="City"
                value={formData.city}
            />
            <BaseSelect
                faIcon="faMapPin"
                name="state"
                onChange={handleChange}
                options={usStateAbbreviations}
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
                options={commonCountries}
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
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-xl text-wine font-khula font-bold mb-4 text-center">Membership Options</h1>
            <div className="w-9/12 border-t-2 border-wine my-2 mx-auto"></div>;
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
                placeholder="Date Of Birth"
                value={formData.requestedStartDate}
            />
          </div>
        </form>
        <div className="w-full text-center p-4">
          <button
              type="submit"
              onClick={() => {
                // Handle button click
              }}
              className="bg-white text-black text-sm font-bold px-4 py-2 hover:bg-black hover:text-white hover:border-white border-2 border-black"
          >
            SUBMIT
          </button>
        </div>
      </div>
  );
}

export default NewUserAboutYou;
